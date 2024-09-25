import { ValueObject } from '@/modules/shared/domain/value-object/ValueObject'

export abstract class NumberValueObject extends ValueObject<number> {
  isBiggerThan (other: NumberValueObject): boolean {
    return this.value > other.value
  }
}
