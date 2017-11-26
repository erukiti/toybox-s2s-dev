import { ActionType } from '../actions'
import { Story } from '../types'

const uuidv4 = require('uuid-v4')

export type StoriesState = {
  stories: Story[]
}
const initialState: StoriesState = {
  stories: []
}

const add = (_state: StoriesState): StoriesState => {
  const story: Story = {
    desc: '',
    memo: '',
    topicIds: [],
    urls: [],
    directory: '',
    apps: [],
    tabs: [],
    uuid: uuidv4(),
    createAt: new Date(),
    modifiedAt: new Date()
  }
  const stories: Story[] = [..._state.stories, story]
  return {
    ..._state,
    stories
  }
}

const load = (_state: StoriesState, stories: any[]): StoriesState => {
  return {
    ..._state,
    stories
  }
}

const updateDesc = (_state: StoriesState, uuid: string, desc: string): StoriesState => {
  const stories = _state.stories.map(story => {
    if (story.uuid !== uuid) {
      return story
    } else {
      return {
        ...story,
        desc
      }
    }
  })

  return {
    ..._state,
    stories
  }
}

const updateMemo = (_state: StoriesState, uuid: string, memo: string): StoriesState => {
  const stories = _state.stories.map(story => {
    if (story.uuid !== uuid) {
      return story
    } else {
      return {
        ...story,
        memo
      }
    }
  })

  return {
    ..._state,
    stories
  }
}

const changeTopicId = (_state: StoriesState, uuid: string, topicId: string): StoriesState => {
  let topicIds

  const stories = _state.stories.map(story => {
    if (story.uuid !== uuid) {
      return story
    } else {
      let topicIds

      if (story.topicIds.includes(topicId)) {
        topicIds = story.topicIds.filter(id => id !== topicId)
      } else {
        topicIds = [...story.topicIds, topicId]
      }

      return {
        ...story,
        topicIds
      }
    }
  })

  return {
    ..._state,
    stories
  }
}

export default function StoriesReducer(state: StoriesState = initialState, action: ActionType): StoriesState {
  switch (action.type) {
    case 'STORIES_ADD':
      return add(state)

    case 'STORIES_LOAD':
      return load(state, action.payload.stories)

    case 'STORIES_UPDATE_DESC':
      return updateDesc(state, action.payload.uuid, action.payload.desc)

    case 'STORIES_UPDATE_MEMO':
      return updateMemo(state, action.payload.uuid, action.payload.memo)

    case 'STORIES_CHANGE_TOPIC_ID':
      return changeTopicId(state, action.payload.uuid, action.payload.topicId)

    default:
      return state
  }
}
