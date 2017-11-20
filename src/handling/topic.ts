
export class Topic {
  private _label: string = ''
  private _text: string = ''

  constructor(label: string) {
    this._label = label
  }

  updateLabel(label: string) {
    this._label = label
  }

  updateText(text: string) {
    this._text = text
  }
}
