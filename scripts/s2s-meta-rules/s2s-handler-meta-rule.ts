const path = require('path')
import { createMetaTools } from './create-meta-tools'

const metaRuleHandler = (code, { eventPath, plugin: opts, filename: inputFilename }) => {
  // FIXME: cache

  const metaTools = createMetaTools(opts, inputFilename)

  const sourceTypes = {
    '.ts': () => code,
    BabelNodePath: () => metaTools.getNodePath(inputFilename),
    undefined: () => null
  }

  // FIXME 多段プラグインの仕組み
  // FIXME cache への反映

  const outputTypes = ['BabelNodePath', 'BabelNode', '.ts']

  let pluginCreator
  if (typeof opts.plugin !== 'string') {
    pluginCreator = opts.plugin
  } else {
    // FIXME: 相対パスじゃない場合の処理も追加する
    pluginCreator = require(path.join(process.cwd(), opts.plugin))
    if ('default' in pluginCreator) {
      pluginCreator = pluginCreator.default
    }
  }
  const plugin = pluginCreator(metaTools, opts.pluginOpts)

  const inputType = plugin.inputTypes.find(type => type in sourceTypes)
  const outputType = outputTypes.find(type => plugin.outputTypes.indexOf(type) !== -1)

  const output = plugin.func(sourceTypes[inputType](), inputFilename, inputType, outputType)
  // const output = plugin.func(sourceTypes[inputType](), path.resolve(inputFilename), inputType, outputType)

  switch (outputType) {
    case '.ts': {
      return output
    }

    case 'BabelNode': {
      return metaTools.generate(output)
    }

    case 'BabelNodePath': {
      return metaTools.generate(output.node)
    }
  }
  throw new Error(`unknown outputType ${outputType}`)
}

export default metaRuleHandler
