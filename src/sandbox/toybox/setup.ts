import * as fs from 'fs'
import * as mkdirp from 'mkdirp'
import * as os from 'os'
import * as path from 'path'

export class Setup {
  private sourceDir: string
  private dir: string
  private architypes: string[]
  constructor(dir, opts: any = {}) {
    mkdirp.sync(dir)
    this.dir = dir
    this.sourceDir = opts.sourceDir || path.join(os.homedir(), '.waterslide')
    this._install(opts.architypes || [])
  }

  private _install(archetypes: string[]) {
    archetypes.forEach(archetype => {
      const archeDir = path.join(this.sourceDir, archetype)
      this._directoryCopy(archeDir, this.dir)
    })
  }

  private _directoryCopy(archeDir, destDir) {
    fs.readdirSync(archeDir).forEach(filename => {
      const stat = fs.statSync(filename)
      const src = path.join(archeDir, filename)
      const dest = path.join(destDir, filename)
      if (stat.isDirectory()) {
        this._directoryCopy(src, dest)
      } else {
        console.log(`copy: ${src} -> ${dest}`)
        fs.copyFileSync(src, dest)
      }
    })
  }
}
