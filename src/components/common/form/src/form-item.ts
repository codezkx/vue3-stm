import { ExtractPropTypes } from 'vue'

import { buildProps, definePropType, Arrayable } from '@/utils'

export type FormItemProp = Arrayable<string>

export const formItemProps = buildProps({
  label: String,
  prop: {
    type: definePropType<FormItemProp>([String, Array]),
  }
} as const)
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
