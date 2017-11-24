const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

// FIXME save/load に統合する

export const saveTopics = (basedir: string, topics: any[]) => {
  mkdirp.sync(basedir)
  const filepath = path.join(basedir, 'topics.json')
  fs.writeFileSync(filepath, JSON.stringify(topics))
}

export const loadTopics = (basedir: string) => {
  mkdirp.sync(basedir)
  const filepath = path.join(basedir, 'topics.json')
  try {
    return JSON.parse(fs.readFileSync(filepath).toString('utf-8'))
  } catch (e) {
    console.log(e)
    return []
  }
}

export const saveDoneTasks = (basedir: string, tasks: any[]) => {
  mkdirp.sync(basedir)
  const filepath = path.join(basedir, 'tasks.json')
  fs.writeFileSync(filepath, JSON.stringify(tasks))
}

export const loadDoneTasks = (basedir: string) => {
  mkdirp.sync(basedir)
  const filepath = path.join(basedir, 'tasks.json')
  try {
    return JSON.parse(fs.readFileSync(filepath).toString('utf-8'))
  } catch (e) {
    console.log(e)
    return []
  }
}

