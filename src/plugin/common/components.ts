import { App } from 'vue'
import { Col } from '@/components/common/layout'
import { Row } from '@/components/common/layout'

const componentList = [
    Col,
    Row,
]
import { SFCWithInstall } from '@/utils/types'
const componentPlugins = componentList.map(item => {
    const _component: SFCWithInstall<typeof item> = item as SFCWithInstall<typeof item>
    _component.install = (app: App) => {
        app.component(_component.name, _component)
    }
    return _component
})
export default componentPlugins
