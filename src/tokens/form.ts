import { InjectionKey, SetupContext } from 'vue'

import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError,
} from 'async-validator'

import {
  Arrayable
} from '@/utils'

export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string> // 触发的方法字符串 如 change 事件
}

export type FormValidationResult = Promise<boolean>

export type FomrRules = Partial<Record<string, Arrayable<FormItemRule>>>

export type FormContext =  {
  emit: SetupContext
}

export interface FormItemContext extends FormItemProps {
  // $el: HTMLDivElement | undefined
}

export const formContextKey: InjectionKey<FormItemContext> = Symbol('formContextKey')
