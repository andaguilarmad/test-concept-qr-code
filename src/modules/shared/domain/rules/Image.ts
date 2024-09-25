import { defineRule } from 'vee-validate'
import { ImageValidation } from '@/modules/shared/domain/utils/ImageValidation'

defineRule('imageUrl', (value: string) => {
  return ImageValidation.isImageUrl(value)
})
