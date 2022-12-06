import { ExtractPropTypes } from 'vue'
import { buildProps } from '@/utils'


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
} as const)

export type Props = ExtractPropTypes<typeof dividerProps>
