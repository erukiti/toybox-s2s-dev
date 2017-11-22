import { connect } from 'react-redux'

import WorkingComponent from './component'
import { State } from '../reducers'
import { dispatcher, ActionType } from '../actions'

import { store } from '..'
import { loadDoneTasks, saveDoneTasks} from '../../handling'

const mapStateToProps = (state: State) => {
  return state
}

const mapDispatchToProps = reduxDispatch => ({ reduxDispatch })

// export type WorkingProps = State & ActionType

let isFirst = true

const mergeProps = (stateProps, { reduxDispatch }, ownProps) => {
  const dispatch = dispatcher(reduxDispatch)

  if (isFirst) {
    dispatch.working.loadDoneTasks(loadDoneTasks('_'))
    isFirst = false
  }

  const props = {
    ...stateProps,
    ...ownProps,
    editDesc: (desc: string) => dispatch.working.editDesc(desc),
    editMemo: (memo: string) => dispatch.working.editMemo(memo),
    changeTopicId: (topicId: string) => dispatch.working.changeTopicId(topicId),
    done: () => {
      if (props.topicId == null) {
        dispatch.working.changeTopicId(props.topicList.topics[0].uuid)
      }
      dispatch.working.done()
      const state: State = <any>store.getState()
      saveDoneTasks('_', state.working.doneTasks)
    }
  }

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WorkingComponent)
