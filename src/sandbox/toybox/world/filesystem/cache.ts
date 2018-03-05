import * as assert from 'assert'

import { Content, FsError, ReadResult, RemoveResult, WriteResult } from './index'

type Entry = Content | Directory

// for unit testing
export interface Directory {
  [props: string]: Entry
}

const isDirectory = (entry: Entry) => typeof entry === 'object' && !(entry instanceof Buffer)

const intoDirectory = (
  dir: Directory,
  filename: string,
  isMkdir?: boolean
): { dir?: Entry; basename?: string; error?: FsError } => {
  assert(filename !== '')
  assert(typeof dir === 'object')
  const paths = filename.split('/')
  assert(paths.length >= 1)

  let entry: Entry = dir

  while (paths.length > 1) {
    const node = paths.shift()
    if (node in (entry as Directory)) {
      if (!isDirectory(entry[node])) {
        return { error: { code: 'NOT_DIRECTORY', message: `${node} is not directory.` } }
      }
    } else {
      if (!isMkdir) {
        return { error: { code: 'NOT_FOUND', message: `${node} is not found.` } }
      }
      entry[node] = {}
    }
    entry = entry[node]
  }

  return { dir: entry, basename: paths[0] }
}

export const read = (dir: Directory, filename: string): ReadResult => {
  const { dir: targetDir, basename, error } = intoDirectory(dir, filename)
  if (error) {
    return { error }
  }

  if (!(basename in dir)) {
    return { error: { code: 'NOT_FOUND', message: `${filename} is not found.` } }
  }
  if (isDirectory(dir[basename])) {
    return { files: Object.keys(dir[basename]) }
  } else {
    return { content: dir[basename] as any }
  }
}

export const write = (dir: Directory, filename: string, content: Content): WriteResult => {
  const { dir: targetDir, basename, error } = intoDirectory(dir, filename, true)
  if (error) {
    return { error }
  }
  if (basename in dir && isDirectory(dir[basename])) {
    return { error: { code: 'ALREADY_DIRECTORY_EXISTS', message: `${filename} is directory.` } }
  }

  targetDir[basename] = content
  return {}
}

export const remove = (dir: Directory, filename: string): RemoveResult => {
  const { dir: targetDir, basename, error } = intoDirectory(dir, filename)
  if (error) {
    return { error }
  }
  if (!(basename in dir)) {
    return { error: { code: 'NOT_FOUND', message: `${filename} is not found.` } }
  }
  delete dir[basename]
  return {}
}

export class Cache {
  private _root: Directory
  constructor() {
    this._root = {}
  }

  public read(filename: string) {
    return read(this._root, filename)
  }

  public write(filename: string, content: Content) {
    return write(this._root, filename, content)
  }

  public remove(filename: string) {
    return remove(this._root, filename)
  }
}
