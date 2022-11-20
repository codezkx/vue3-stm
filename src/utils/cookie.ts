import type { CookieObjOption } from './types'
/*
  cookieObj: 设置cookie键值对
  expireDate： 过期时间
  @discription
    设置cookie
*/

const setCookie = (cookieObj: CookieObjOption, expireDate: number) => {
    if (JSON.stringify(cookieObj) === '{}') {
      return console.warn('对象不能为空');
    }
    for (const key  in cookieObj) {
      if (Object.hasOwn(cookieObj, key)) {
        const date = new Date();
        date.setDate(date.getDate() + expireDate);
        document.cookie = `${key}=${cookieObj[key]}; expires=${date.toUTCString()}`
      }
    }
};

const getCookie = () => {

}
