import * as React from 'react'
import { Badge, Button } from 'rebass'

import { getAcePluginNames, requireAllAcePlugins } from '../../utils'
import { connector, Props } from '../connector'

const itemsRender: React.StatelessComponent<Props> = props => {
  const { orderType, isAsc } = props.itemText.sortRule
  const items = props.itemText.items
    .filter(item => {
      const { nameFilter, topicFilter } = props.itemText.filterRule
      if (nameFilter !== '' && !item.label.includes(nameFilter)) {
        return false
      }

      if (topicFilter !== '') {
        const result = item.topicIds.find(topicId => {
          const { label } = props.topics.topics.find(topic => topic.uuid === topicId)
          if (label.includes(topicFilter)) {
            return true
          }
        })
        if (!result) {
          return false
        }
      }
      return true
    })
    .sort((a, b) => {
      if (a[orderType] < b[orderType]) {
        return isAsc ? 1 : -1
      } else if (a[orderType] > b[orderType]) {
        return isAsc ? -1 : 1
      } else {
        return 0
      }
    })
    .map(item => {
      return (
        <div key={item.uuid} onClick={() => props.act.itemText.start(item.uuid)}>
          <span>{item.label}</span>
          <Badge>{item.lang}</Badge>
        </div>
      )
    })

  const options = ['createdAt', 'updatedAt', 'label'].map(key => {
    return (
      <option value={key} key={key}>
        {key}
      </option>
    )
  })

  return (
    <div>
      <div>
        <span>name filter:</span>
        <input
          type="text"
          value={props.itemText.filterRule.nameFilter}
          onChange={ev => props.act.itemText.editNameFilter(ev.target.value)}
        />
      </div>
      <div>
        <span>topic filter:</span>
        <input
          type="text"
          value={props.itemText.filterRule.topicFilter}
          onChange={ev => props.act.itemText.editTopicFilter(ev.target.value)}
        />
      </div>
      <div>
        <select value={orderType} onChange={ev => props.act.itemText.setSortType(ev.target.value)}>
          {options}
        </select>
        <span onClick={() => props.act.itemText.setSortIsAsc(!isAsc)}>{isAsc ? '△' : '▽'}</span>
      </div>
      <Button onClick={() => props.act.itemText.start()}>NEW</Button>
      {items}
    </div>
  )
}

export default connector(itemsRender)
