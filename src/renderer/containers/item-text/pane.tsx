import * as assert from 'assert'
import * as React from 'react'
import Editor from 'react-ace'
import { Box, Checkbox, Flex, Input, Select } from 'rebass'

import { getAcePluginNames, requireAllAcePlugins } from '../../utils'
import { connector, Props } from '../connector'

requireAllAcePlugins()
const { mode } = getAcePluginNames()

interface OwnProps {
  uuid: string
}
class ItemText extends React.Component<Props & OwnProps> {
  public render() {
    const { itemText, uuid, act, topics } = this.props
    const item = itemText.items.find(v => v.uuid === uuid)
    assert(item)
    const topicIds = topics.topics.map(topic => {
      const checked = item.topicIds.includes(topic.uuid)
      return (
        <span key={topic.uuid}>
          <Checkbox checked={checked} onChange={() => act.itemText.changeTopicsIds(uuid, topic.uuid)} />
          {topic.label}
        </span>
      )
    })
    const modes = mode.map(lang => <option key={lang}>{lang}</option>)

    return (
      <Flex direction="column" style={{ height: '100%' }}>
        <Box>
          {topicIds}
          <Input value={item.label} onChange={ev => act.itemText.editLabel(uuid, ev.target.value)} />
          <div>
            <span>lang: </span>
            <Select onChange={v => act.itemText.editLang(uuid, v)} value={item.lang}>
              {modes}
            </Select>
          </div>
        </Box>
        <Box flex={1}>
          <Editor
            mode={item.lang}
            theme="textmate"
            width="100%"
            height="100%"
            onChange={v => act.itemText.editText(uuid, v)}
            value={item.text}
            focus={true}
            wrapEnabled={true}
            editorProps={{
              $blockScrolling: Infinity
            }}
          />
        </Box>
      </Flex>
    )
  }
}

export default connector(ItemText)
