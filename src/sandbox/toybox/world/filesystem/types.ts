export type FsEvent = 'edit' | 'create' | 'update' | 'remove'
export type FsEventListener = (filepath: string) => void

export type Content = string | Buffer

export type ErrorCode = 'NOT_DIRECTORY' | 'NOT_FOUND' | 'ALREADY_DIRECTORY_EXISTS'
export interface FsError {
  code: ErrorCode
  message: string
}

export interface ReadResult {
  error?: FsError
  content?: Content
  files?: string[]
}

export interface WriteResult {
  error?: FsError
}

export interface RemoveResult {
  error?: FsError
}
