export type Rev = string

export interface Storable {
  uuid: string
  rev: Rev
  label: string
  createdAt: number
  updatedAt: number

  [props: string]: any
}

export interface Topic extends Storable {
  [props: string]: any
}

export interface Board extends Storable {
  topicIds: string[]
  itemIds: string[]
}

export interface Item extends Storable {
  topicIds: string[]

  [props: string]: any
}

export type AppMode = 'topic' | 'story' | 'sandbox' | null
