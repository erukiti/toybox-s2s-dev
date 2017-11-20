import * as fs from 'fs'

export const createFileSync = (filename, content) => {
  if (fs.existsSync(filename)) {
    return
  }
  fs.writeFileSync(filename, content)
}

export const toUpperCamelCase = s =>
  s.substr(0, 1).toUpperCase() +
  s.substr(1).replace(/[-_]([a-zA-Z])/g, matched => matched.toUpperCase()).replace(/[-_]/g, '')

export const toLowerCamelCase = s =>
  s.substr(0, 1).toLowerCase() +
  s.substr(1).replace(/[-_]([a-zA-Z])/g, matched => matched.toUpperCase()).replace(/[-_]/g, '')

export const toUpperSnakeCase = s =>
  s.replace(/[A-Z]/g, matched => `_${matched}`).toUpperCase().replace('-', '_')
