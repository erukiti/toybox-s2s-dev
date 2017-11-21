import { connect } from 'react-redux'

import WorkingComponent from './component'
import { State } from '../reducers'
import { dispatcher, ActionType } from '../actions'

const mapStateToProps = (state: State) => {
  console.log(state)
  return state
}

const mapDispatchToProps = reduxDispatch => ({ reduxDispatch })

// export type WorkingProps = State & ActionType

const mergeProps = (stateProps, { reduxDispatch }, ownProps) => {
  const dispatch = dispatcher(reduxDispatch)
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
    }
  }

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WorkingComponent)
