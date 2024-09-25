import { defineRule } from 'vee-validate'

defineRule('required', (value: unknown) => !!value)
