import { defineRule } from 'vee-validate'
import { EmailValidations } from '@/modules/shared/domain/utils/EmailValidations'

defineRule('email', (value: string) => {
  return EmailValidations.isValid(value)
})
