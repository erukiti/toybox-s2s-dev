export interface Story {
  desc: string
  memo: string
  uuid: string
  urls: string[]
  directory: string
  apps: string[]
  tabs: string[]
  topicIds: string[]
  createAt?: Date
  modifiedAt?: Date
}

export interface Topic {
  label: string
  uuid: string
  text?: string
  createdAt?: Date
  modifiedyAt?: Date
}

export type AppMode = 'topic' | 'story' | 'sandbox' | null
