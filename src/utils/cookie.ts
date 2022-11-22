import type { CookieObjOption } from './types';

/*
  cookieObj: 设置cookie键值对
  expireDate： 过期时间
  @discription
    设置cookie
*/
export const setCookie = (cookieObj: CookieObjOption, expireDate: number) => {
    if (JSON.stringify(cookieObj) === '{}') {
      return console.warn('对象不能为空');
    }
    for (const key  in cookieObj) {
      if (Object.hasOwn(cookieObj, key)) {
        const date = new Date();
        date.setDate(date.getDate() + expireDate);
        document.cookie = `${key}=${cookieObj[key]}; expires=${date.toUTCString()}`;
      };
    };
};

/*
  key: 设置cookie的key值
  @discription
    获取设置的设置cookie value值
    key: stieng -> 获取单个cookie值
    key: Araay -> 获取cookie 设置的对象  返回的map 映射对象
*/
export const getCookie = (key: string | Array<string | number>): any => {
  let isArr = false;
  if (Array.isArray(key)) {
    isArr = true;
  };
  const cookieStr = document.cookie;
  if (cookieStr) {
    const cookieList = cookieStr.split(';');
    const twoDimension = cookieList.map(item => {
      const items = item.trim().split('=');
      return items;
    })
    const cookieObj = Object.fromEntries(twoDimension);
    let cookieV: unknown;
    let cookieMap: Map<string, any> = new Map();
    for (const k in cookieObj) {
      if (Object.hasOwn(cookieObj, k) && k === key && !isArr) {
        cookieV = cookieObj[k];
      };
      if (isArr) {
        if (key.includes(k)) {
          cookieMap.set(k, cookieObj[k]);
        };
      };
    };
    return isArr ? cookieMap : cookieV;
  }
}

export const clearCookie = (...arg: Array<string>) => {
  const json: { [key: string]: null } = {};
  for (const k in arg) {
    if (Object.hasOwn(arg, k)) {
      json[arg[k]] = null
    }
  }
  console.log(arg, 'arg')
  setCookie(json, -1)
}
