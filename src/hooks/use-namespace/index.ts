import { computed } from 'vue';
export const defaultNamespace = 'vou';
const statePrefix = 'is-';

const _bem = (
  namespace: string,
  block: string,
  blockSuffix?: string,
  element?: string,
  modifier?: string,
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
};

export const useNamespace = (block: string) => {
  const namespace = computed(() => defaultNamespace);
  const b = (blockSuffix = '') =>
    _bem(namespace.value, block, blockSuffix);
  const e = (element?: string) =>
    element
      ? _bem(namespace.value, block, '', element, '')
      : '';
  const m = (modifier?: string) =>
    modifier
      ? _bem(namespace.value, block, '', '', modifier)
      : '';
  const be = (blockSuffix ='', element = '') =>
    blockSuffix && element
     ? _bem(namespace.value, block, blockSuffix, element, '')
     : '';
  const em = (blockSuffix = '', modifier = '') =>
    blockSuffix && modifier
    ? _bem(namespace.value, blockSuffix, '', '', modifier)
    : '';
  const bm = (blockSuffix: string, modiffier: string) =>
    blockSuffix && modiffier
      ? _bem(namespace.value, block, blockSuffix, '', modiffier)
      : '';
  const bem = (blockSuffix: string, element: string, modiffier: string) =>
    blockSuffix && element && modiffier
      ? _bem(namespace.value, block, blockSuffix, element, modiffier)
      : '';
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true
    return name && state ? `${statePrefix}${name}` : ''
  }
  const cssVar = (object: Record<string, string>) => {
    const style: Record<string, string> = {}
    for (const key in object) {
      if (Object.hasOwn(object, key) && object[key]) {
        style[`--${namespace.value}-${block}-${key}`] = object[key]
      }
    }
    return style
  }
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // css
    cssVar,
  }
};
export type UsenamespaceReturn = ReturnType<typeof useNamespace>
