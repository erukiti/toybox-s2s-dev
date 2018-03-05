import { Filesystem } from './filesystem'
export abstract class World {
  private _fs: Filesystem

  public abstract async setup()
  public abstract async runCode(sourceCode: string)
}
