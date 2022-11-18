// -readonly 表示出去只读   WritableArray返回的Writable是只读的所以要用-readonly
export type Writable<T> = { -readonly [P in keyof T]: T[P]}
export type WritableArray<T> = T extends readonly any[] ? Writable<T> : T

/**
 * never是任何类型的子类型，也可以赋值给任何类型。但是其他类型不能赋值给never类型
 * 下面类型判断是T是否继承never类型
 * **/
export type IfNever<T, Y = true, N = false> = [T] extends [never] ? Y : N

/**
 * @description
 *如何T为never则返回N   unknown除了never,函数 都是其他的子类型  unknown 只能分配给 any 类型和 unknown 类型本身。
 *
 *@example
 * IfUnknown<number, nerver, number>  获取number  [unknown] extends [T] T为unknown时返回Y
 * **/
export type IfUnknown<T, Y, N> = [unknown] extends [T] ? Y : N

export type UnknownToNever<T> = IfUnknown<T, never, T>

export {}
