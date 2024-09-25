import { EmailValidations } from '@/modules/shared/domain/utils/EmailValidations'

export class Email {
  constructor (readonly value: string) {
    this.ensureIsValidEmail(value)
  }

  private ensureIsValidEmail (value: string): void {
    if (!EmailValidations.isValid(value)) {
      throw new Error(`Invalid email: ${value}`)
    }
  }
}
