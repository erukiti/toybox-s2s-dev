import * as fs from 'fs'
import { Subject } from 'rxjs'
const path = require('path')
const mkdirp = require('mkdirp')
const uuidv4 = require('uuid-v4')

import { Board, Item, Storable, Topic } from '../types'
import { Repository } from './storable'

interface Repositories {
  topic: Repository<Topic>
  board: Repository<Board>
  item: Repository<Item>
}

export const repositories: Repositories = {
  topic: null,
  board: null,
  item: null
}

// FIXME infrastructure layer

const initRepoSync = (basedir, name) => {
  const subject = new Subject<any[]>()
  const snapshotted = new Set()

  try {
    const filePath = path.join(basedir, `${name}.json`)
    repositories[name].load(JSON.parse(fs.readFileSync(filePath).toString('utf-8')))
  } catch (e) {
    // console.log(e)
    repositories[name].load([])
  }

  fs.readdirSync(path.join(basedir, 'snapshot')).forEach(hash => {
    snapshotted.add(hash)
  })

  repositories[name].on('update', allData => {
    const filePath = path.join(basedir, `${name}.json`)
    fs.writeFileSync(filePath, JSON.stringify(allData), { encoding: 'utf-8' })
    subject.next(allData)
  })

  subject.debounceTime(1000 * 60 * 5).subscribe({
    next: allData => {
      allData.forEach(data => {
        if (!snapshotted.has(data.rev)) {
          const filePath = path.join(basedir, 'snapshot', `${name}-${data.rev}.json`)
          fs.writeFileSync(filePath, JSON.stringify(data), { encoding: 'utf-8' })
        }
      })
    }
  })
}

export const initializeRepositries = opt => {
  const basedir = '_'
  mkdirp.sync(basedir)
  mkdirp.sync(path.join(basedir, 'snapshot'))
  repositories.topic = new Repository<Topic>()
  repositories.board = new Repository<Board>()
  repositories.item = new Repository<Item>()
  initRepoSync(basedir, 'topic')
  initRepoSync(basedir, 'board')
  initRepoSync(basedir, 'item')
}
