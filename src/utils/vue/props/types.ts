
import { ExtractPropTypes, PropType } from 'vue'
import type { IfNever, UnknownToNever, WritableArray } from './util'

import type { epPropKey } from './runtime'

/**
 * 获取T的联合类型， T不能只为类型空间，还要是变量声明空间。如class Token{}
 * @description
 * keyof 索引类型查询操作符，对于任何类型 T，keyof T 的结果为 T 上已知的“公共属性名”的联合。
 * @example
 *class Token{
 *  private secret: string | undefined
 *  public accessExp: number = 60 * 60
 *  public refreshExp: number = 60 * 60 * 24 * 30 * 3
 * }
 * type token = keyof Token  获取 type token = "accessExp" | "refreshExp" 属性
 * type token = [keyof Token] 获取 type token = number | string 类型
 *
 * **/
type Value<T> = T[keyof T]

/**
 * Extract the type of a single prop
 *
 * 提取单个 prop 的参数类型
 *
 * @example
 * ExtractPropType<{ type: StringConstructor }> => string | undefined
 * ExtractPropType<{ type: StringConstructor, required: true }> => string
 * ExtractPropType<{ type: BooleanConstructor }> => boolean
 */
 export type ExtractPropType<T extends object> = Value<
 ExtractPropTypes<{
   key: T
 }>
>

//
export type ResolvePropType<T> = IfNever<
  T,
  never,
  ExtractPropType<{
    type: WritableArray<T>,
    required: true,
  }>
>

/**
 * Merge Type, Value, Validator types
 * 合并 Type、Value、Validator 的类型
 *
 * @example
 * EpPropMergeType<StringConstructor, '1', 1> =>  1 | "1" // ignores StringConstructor
 * EpPropMergeType<StringConstructor, never, number> =>  string | number
 */
export type EpPropMergeType<Type, Value, Validator> =
| IfNever<UnknownToNever<Value>, ResolvePropType<Type>, never>
| UnknownToNever<Value>
| UnknownToNever<Validator>

/**
 * Native prop types, e.g: `BooleanConstructor`, `StringConstructor`, `null`, `undefined`, etc.
 *
 * 原生 prop `类型，BooleanConstructor`、`StringConstructor`、`null`、`undefined` 等
 */
export type NativePropType =
  | ((...args: any) => any)
  | { new (...args: any): any }
  | undefined
  | null
/**
 * @description
 * props一些内置的数据没有设置的时候这返回默认值
 * **/
export type IfNativePropType<T, Y, N> = [T] extends [NativePropType] ? Y : N


/**
 * input prop `buildProp` or `buildProps` (constraints)
 *
 * prop 输入参数（约束）
 *
 * @example
 * EpPropInput<StringConstructor, 'a', never, never, true>
 * ⬇️
 * {
    type?: StringConstructor | undefined;
    required?: true | undefined;
    values?: readonly "a"[] | undefined;
    validator?: ((val: any) => boolean) | ((val: any) => val is never) | undefined;
    default?: undefined;
  }
 */
export type EpPropInput<
  Type,
  Value,
  Validator,
  Default extends EpPropMergeType<Type, Value, Validator>,
  Required extends boolean
> = {
  type?: Type,
  required?: Required,
  values?: readonly Value[],
  validator?: ((val: any) => val is Validator) | ((val: any) => boolean)
  default?: EpPropInputDefault<Required, Default>
}

/**
 * output prop `buildProp` or `buildProps`.
 *
 * prop 输出参数。
 *
 * @example
 * EpProp<'a', 'b', true>
 * ⬇️
 * {
    readonly type: PropType<"a">;
    readonly required: true;
    readonly validator: ((val: unknown) => boolean) | undefined;
    readonly default: "b";
    __epPropKey: true;
  }
 */
export type EpProp<Type, Default, Required> = {
  readonly type: PropType<Type>
  readonly required: [Required] extends [true] ? true : false
  readonly validator: ((val: unknown) => boolean) | undefined
  [epPropKey]: true
} & IfNever<Default, unknown, {readonly default: Default}>

/**
 * Determine if it is `EpProp`
 */
export type IfEpProp<T, Y, N> = T extends { [epPropKey]: true } ? Y : N

/**
 * @description
 * Prop的required属性为ture这该属性的类型是never 否则返回本身或则函数
 * **/
export type EpPropInputDefault<
  Required extends boolean,
  Default
> = Required extends true
  ? never
  : Default extends Record<string, unknown> | Array<any>
  ? () => Default
  : (() => Default) | Default

/**
 * Converting input to output.
 *
 * 将输入转换为输出
 */
 export type EpPropConvert<Input> = Input extends EpPropInput<
 infer Type,
 infer Value,
 infer Validator,
 any,
 infer Required
>
 ? EpPropFinalized<Type, Value, Validator, Input['default'], Required>
 : never

/**
 * Finalized conversion output
 *
 * 最终转换 EpProp
 */
export type EpPropFinalized<Type, Value, Validator, Default, Required> = EpProp<
  EpPropMergeType<Type, Value, Validator>,
  UnknownToNever<Default>,
  Required
>
