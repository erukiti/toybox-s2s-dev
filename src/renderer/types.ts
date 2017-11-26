export type Task = {
  desc: string,
  memo: string,
  uuid: string,
  topicIds: string[],
  createAt?: Date,
  modifiedAt?: Date,
}

export type Topic = {
  label: string,
  uuid: string,
  text?: string,
  createdAt?: Date,
  modifiedyAt?: Date,
}

export type AppMode = 'topic' | 'task' | null
