import * as fs from 'fs'
import * as path from 'path'

import template from '@babel/template'
import babelTraverse from '@babel/traverse'
import * as types from '@babel/types'
const babel = require('@babel/core')
const { transform: babelTransform, File } = babel
import { BabylonOptions, parse } from 'babylon'
const prettier = require('prettier')
import babelGenerate from '@babel/generator'
import { Configuration, Linter } from 'tslint'

export const createMetaTools = (opts, inputFilename) => {
  const linter = new Linter({ fix: true })
  const generate = ast => {
    const { code } = babelGenerate(ast)
    const prettierOpts = {
      ...prettier.resolveConfig.sync(process.cwd()),
      parser: 'typescript'
    }
    const code2 = prettier.format(code, prettierOpts)
    const conf = Configuration.findConfiguration('tslint.json', inputFilename).results
    linter.lint(inputFilename, code2, conf)
    const { fixes } = linter.getResult()
    if (fixes.length > 0) {
      return fixes[fixes.length - 1].getRawLines()
    } else {
      return code2
    }
  }

  const babylonPlugins = opts.babylonPlugins || []
  if (babylonPlugins.length === 0 && inputFilename.substr(-3) === '.ts') {
    babylonPlugins.push('typescript')
  }

  const babylonOpts: BabylonOptions = {
    plugins: babylonPlugins,
    sourceType: 'module'
  }

  const getNode = filename => {
    return parse(fs.readFileSync(filename).toString(), babylonOpts)
  }

  const traverseSource = (code, visitor, state = {}) => {
    const ast = parse(code, babylonOpts)
    const file = new File({}, { code, ast })
    babelTraverse(file.ast, visitor, file.scope, state)
    return state
  }

  const traverseFile = (filename, visitor, state = {}) => {
    const code = fs.readFileSync(filename).toString()
    return traverseSource(code, visitor, state)
  }

  const getNodePath = filename => {
    let result
    const programVisitor = {
      Program: {
        exit: nodePath => {
          result = nodePath
        }
      }
    }

    traverseFile(filename, programVisitor)
    return result
  }

  const meta = {
    generate,
    getNode,
    getNodePath,
    getTemplate: filename => {
      return fs.readFileSync(path.join(process.cwd(), 'templates', filename))
    },
    opts,
    template: s => template(s, babylonOpts),
    traverseFile,
    traverseSource,
    types
  }

  return meta
}
