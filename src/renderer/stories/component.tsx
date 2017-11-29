import * as React from 'react'
import { Button, Small } from 'rebass'
import { StoriesProps } from './index'

export default class StoriesComponent extends React.Component<StoriesProps> {
  public render() {
    const stories = this.props.stories.stories.map((story, i) => {
      const labels = story.topicIds
        .map(id => {
          const topic = this.props.topicList.topics.find(topic2 => id === topic2.uuid)
          if (topic) {
            return topic.label
          } else {
            return `unknown topic: ${topic.uuid}`
          }
        })
        .join(', ')

      return (
        <div key={i}>
          <span>{story.desc}</span>: <Small>{labels}</Small>
          <button onClick={() => this.props.refStory(story.uuid)}>ref</button>
        </div>
      )
    })

    return (
      <div>
        <Button onClick={() => this.props.add()} children="ADD" />
        {stories}
      </div>
    )
  }
}
