import { App } from "vue";
import 'element-plus/theme-chalk/base.css'

import {
    ElAside,
    ElAvatar,
    ElButton,
    ElCheckbox,
    ElContainer,
    ElDatePicker,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElForm,
    ElFormItem,
    ElHeader,
    ElInput,
    ElLink,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElOption,
    ElRadio,
    ElRow,
    ElCol,
    ElSelect,
    ElSubmenu,
    ElTabPane,
    ElTabs
} from 'element-plus'

const components = [
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElRadio,
    ElTabs,
    ElTabPane,
    ElCheckbox,
    ElLink,
    ElContainer,
    ElHeader,
    ElMain,
    ElAside,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubmenu,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElAvatar,
    ElCol,
    ElRow,
    ElSelect,
    ElOption,
    ElDatePicker
] as const

export default function (app: App): void {
    for (const component of components) {
        app.component(component.name, component)
    }
}

