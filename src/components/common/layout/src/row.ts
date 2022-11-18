import { defineComponent, computed, provide, h } from 'vue'

const ElRow = defineComponent({
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },  // 栅格间隔
    justify: {
      type: String,
      default: 'start',
    }, // flex 布局下的水平排列方式
    align: {
      type: String,
      default: 'top',
    }, // flex 布局下的垂直排列方式
    tag: {
      type: String,
      default: 'div'
    } // 自定义元素标签
  },
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter)
    // 暴露给子组件参数
    provide('ElRow', {
      gutter,
    })
    const style = computed(() => {
      const ret = {
        marginLeft: '',
        marginRight: '',
      }
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight = ret.marginRight
      }
      return ret
    })
    return () =>
      h(
        props.tag,
        {
          class: [
            'el-row',
            props.justify !== 'start' ? `is-justify-${props.justify}`: '',
            props.align !== 'top' ? `is-align-${props.align}`: '',
          ],
          style: style.value
        },
        slots.default?.(),
      )
  }
})

export default ElRow