import * as assert from 'assert'
import * as React from 'react'
import Editor from 'react-ace'
import { Box, Flex, Input, Select } from 'rebass'

import { getAcePluginNames, requireAllAcePlugins } from '../../utils'
import { connector, Props } from '../connector'

requireAllAcePlugins()
const { mode } = getAcePluginNames()

interface OwnProps {
  uuid: string
}
class ItemText extends React.Component<Props & OwnProps> {
  public render() {
    const { itemText, uuid, act } = this.props
    const item = itemText.items.find(v => v.uuid === uuid)
    assert(item)
    const modes = mode.map(lang => {
      if (lang === item.lang) {
        return (
          <option key={lang} selected>
            {lang}
          </option>
        )
      } else {
        return <option key={lang}>{lang}</option>
      }
    })

    return (
      <Flex direction="column" style={{ height: '100%' }}>
        <Box>
          <Input value={item.label} onChange={ev => act.itemText.editLabel(uuid, ev.target.value)} />
          <Select onChange={v => act.itemText.editLang(uuid, v)}>{modes}</Select>
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
