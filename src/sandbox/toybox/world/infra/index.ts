import { Content, ReadResult, RemoveResult, WriteResult } from '../filesystem'

export interface FsInfra {
  read: (filename: string) => Promise<ReadResult>
  write: (filename: string, content: Content) => Promise<WriteResult>
  remove: (filename: string) => Promise<RemoveResult>
}

export interface RunnerInfra {
  init(sandbox?: any)
  runCode(sourceCode: string)
  // runFile(filename: string)
}
