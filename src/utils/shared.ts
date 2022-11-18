const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwn = (
  val: object,
  key: string | symbol,
): key is keyof typeof val => hasOwnProperty.call(val, key)

export const realArray = (values: unknown[]): boolean => {
  if (!isArray(values)) {
    return false
  }
  return values.length > 0
}

/**
 * @description
 *
 * @example
 *  toNumber('1n') => 1
 *  toNumber('n1') => 'n1'
 * **/
export const toNumber = (val: any): any => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};

export const isArray = Array.isArray

export const isMap = (val: unknown): val is Map<any, any> =>
  toTypeString(val) === '[object Map]'

export const isSet = (val: unknown): val is Set<any> =>
  toTypeString(val) === '[object Set]'

export const isDete = (val: unknown): val is Date =>
  toTypeString(val) === '[object Date]'

export const isFunction = (val: unknown): val is Function =>
  toTypeString(val) === 'function'

export const isString = (val: unknown): val is string =>
  typeof val === 'string'

export const isBoolean = (val: unknown): val is boolean =>
  typeof val === 'boolean'

export const isSymbol = (val: unknown): val is symbol =>
  typeof val === 'symbol'

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

const objectToString = Object.prototype.toString
export const toTypeString = (val: unknown): string =>
  objectToString.call(val)
