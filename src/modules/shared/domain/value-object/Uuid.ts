import { InvalidArgumentError } from '@/modules/shared/domain/value-object/InvalidArgumentError'
import { ValueObject } from '@/modules/shared/domain/value-object/ValueObject'

export class Uuid extends ValueObject<string> {
  constructor (value: string) {
    super(value)
    this.ensureIsValidUuid(value)
  }

  static random (): Uuid {
    return new Uuid(crypto.randomUUID())
  }

  private ensureIsValidUuid (id: string): void {
    const regex = /^[a-z,0-9,-]{36,36}$/
    if (!regex.test(id)) {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${id}>`
      )
    }
  }
}
