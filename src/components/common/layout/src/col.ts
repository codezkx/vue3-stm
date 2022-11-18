import { defineComponent, computed, h, inject } from 'vue'

const ElCol = defineComponent({
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, { slots }) {
    const { gutter } = inject('ElRow', { gutter: { value: 0 } })
    const classList = computed(() => {
      const ret: string[] = []
      /*
      * as const 也是类型断言的一种
      * 推断出的最窄或最特定的类型
      *  使用： 函数调用时传入用reset参数时 可推断出参数的准确的参数
      */
      const pos = ['span', 'offset', 'pull', 'push'] as const
      pos.forEach(prop => {
        const size = props[prop]
        if (typeof size === 'number') {
          if (prop === 'span') {
            ret.push(`el-col-${props[prop]}`)
          }
        }
      })
      return ret
    })
    const style = computed(() => {      
      if (gutter.value) {
        return {
          paddingLeft: gutter.value / 2 + 'px',
          paddingRight: gutter.value / 2 + 'px',
        }
      }
      return {}
    })

    return () =>
      h(
        props.tag,
        {
          class: ['el-col', classList.value],
          style: style.value,

        },
        slots.default?.(),
      )
  },
})

export default ElCol
