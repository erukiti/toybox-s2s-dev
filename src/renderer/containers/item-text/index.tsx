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
class ItemTextComponent extends React.Component<Props & OwnProps> {
  public render() {
    const { itemText, uuid, act } = this.props
    const item = itemText[uuid]
    return (
      <Flex direction="column" style={{ height: '100%' }}>
        <Box>
          <Input value={item.label} onChange={v => act.itemText.editLabel(uuid, v)} />
          <Select onChange={v => act.itemText.editLang(uuid, v)}>{mode.map(lang => <option>lang</option>)}</Select>
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
          />
        </Box>
      </Flex>
    )
  }
}

export default connector(ItemTextComponent)
