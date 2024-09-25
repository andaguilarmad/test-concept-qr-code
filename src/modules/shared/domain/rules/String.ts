import { defineRule } from 'vee-validate'
import i18n from '@/plugins/i18n'
import { StringValidations } from '@/modules/shared/domain/utils/StringValidations'

defineRule('maxCharacters', (value: string, [min]: number[], { field }) => {
  return (
    StringValidations.lengthIsLessThanMaxCharacters(value, min) ||
    i18n.global.t('Validations.maxCharacters', {
      field: i18n.global.t(`Fields.${field}`),
      min
    })
  )
})
