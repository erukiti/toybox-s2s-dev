import * as childProcess from 'child_process'
import * as fs from 'fs'
import { Configuration, Linter } from 'tslint'
const prettier = require('prettier')

export const writeSourceSync = (filename, content) => {
  const prettierOpts = {
    ...prettier.resolveConfig.sync(process.cwd()),
    parser: 'typescript'
  }
  const code = prettier.format(content, prettierOpts)
  const linter = new Linter({ fix: true })
  const conf = Configuration.findConfiguration('tslint.json', filename).results
  linter.lint(filename, code, conf)
  const { fixes } = linter.getResult()
  if (fixes.length > 0) {
    fs.writeFileSync(filename, fixes[fixes.length - 1].getRawLines())
  } else {
    fs.writeFileSync(filename, code)
  }
}
export const createFileSync = (filename, content) => {
  if (fs.existsSync(filename)) {
    console.log(`already exists: ${filename}`)
    return
  }
  writeSourceSync(filename, content)
}

export const toUpperCamelCase = s =>
  s.substr(0, 1).toUpperCase() +
  s
    .substr(1)
    .replace(/[-_]([a-zA-Z])/g, matched => matched.toUpperCase())
    .replace(/[-_]/g, '')

export const toLowerCamelCase = s =>
  s.substr(0, 1).toLowerCase() +
  s
    .substr(1)
    .replace(/[-_]([a-zA-Z])/g, matched => matched.toUpperCase())
    .replace(/[-_]/g, '')

export const toUpperSnakeCase = s =>
  s
    .replace(/[A-Z]/g, matched => `_${matched}`)
    .toUpperCase()
    .replace('-', '_')

export const readNpmVersion = name => {
  let output = ''
  try {
    output = childProcess.execSync('npm list --depth=0').toString()
  } catch (e) {
    output = e.output.toString()
  }
  const ind = output.indexOf(`${name}@`)
  if (ind !== -1) {
    return output.substr(ind + name.length + 1).split('\n')[0]
  } else {
    return null
  }
}
