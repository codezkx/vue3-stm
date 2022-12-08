import { ExtractPropTypes } from 'vue'
import { buildProps, definePropType } from '@/utils'
import type { CSSProperties } from 'vue'

export type BorderStyle = CSSStyleDeclaration['borderStyle']

export const dividerProps = buildProps({
  direction: {
    type: String,
    value: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  contentPosition: {
    type: String,
    value: ['left', 'center', 'right'],
    default: 'center',
  },
  borderStyle: {
    type: definePropType<BorderStyle>(String),
    default: 'solid',
  }
} as const)

export type Props = ExtractPropTypes<typeof dividerProps>
