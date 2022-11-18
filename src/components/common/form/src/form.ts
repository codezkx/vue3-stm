import { ExtractPropTypes } from 'vue'

import {
  buildProps,
  definePropType,
  isArray,
  isString,
  isBoolean,
} from '@/utils'

import {
  FomrRules
} from '@/tokens'

export const formProps = buildProps({
  model: Object,
  rules: {
    type: definePropType<FomrRules>(Object),
  },
} as const)

// 把props传入的参数的类型推导出来
export type FormProps = ExtractPropTypes<typeof formProps>

export const formEmit = {
  validate: (prop: any, isValid: boolean, message: string) => {
    (isArray(prop) || isString(prop))
    && isBoolean(isValid)
    && isString(message)
  }
}
