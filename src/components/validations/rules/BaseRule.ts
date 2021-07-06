export class BaseRule {
  private message: string
  private trigger: string

  constructor (message: string, trigger: string) {
    this.message = message
    this.trigger = trigger
  }
}
