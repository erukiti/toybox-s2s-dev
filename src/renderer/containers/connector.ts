import { connect } from 'react-redux'
import { Dispatch as ReduxDispatch } from 'redux'

import { Actions, ActionType } from './actions'
import { State } from './reducers'

export type Props = State & { act: Actions }

export const connector = <T>(component) => {
  const mapStateToProps = (state: State) => {
    return state
  }

  interface DispatchProps {
    dispatch: ReduxDispatch<ActionType>
  }

  const mapDispatchToProps = (dispatch: ReduxDispatch<ActionType>) => ({ dispatch })

  const actions = new Actions()

  let isFirst = true

  const mergeProps = (stateProps: State, { dispatch }: DispatchProps, ownProps): Props | T => {
    actions.setDispatch(dispatch)
    if (isFirst) {
      Object.keys(actions).map(key => {
        actions[key]._first()
      })
      isFirst = false
    }

    const props = {
      ...stateProps,
      ...ownProps,
      act: {}
    }

    Object.keys(actions).forEach(dir => {
      let proto = actions[dir]
      props.act[dir] = {}
      while ((proto = Object.getPrototypeOf(proto))) {
        if (proto.constructor.name === 'Object') {
          break
        }
        Object.getOwnPropertyNames(proto)
          .filter(key => key !== 'constructor' && key.substr(0, 1) !== '_')
          .forEach(key => {
            props.act[dir][key] = actions[dir][key].bind(actions[dir])
          })
      }
    })

    return props
  }

  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)
}
