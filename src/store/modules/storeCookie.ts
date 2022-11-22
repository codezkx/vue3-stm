import { defineStore } from 'pinia'

interface MultipleCookieState {
  userName: string,
  password: string,
  rememberm: boolean,
}

export const useMultipleCookieStore = defineStore({
  id: 'app-multiple-cookie',
  state: ():MultipleCookieState => ({
    userName: '',
    password: '',
    rememberm: false
  }),
  getters: {

  },
  actions: {
    
  }
})
