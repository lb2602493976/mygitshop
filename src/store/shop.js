import Vue from 'vue'
import user from './modules/user'
import Vuex from 'vuex'
import { getUserInfo } from "@/api/shop/info"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user:null,
  },
  getters:{
    userInfo:state => state.user,
  },
  mutations: {
    SET_USERINFO(state,val){
      state.user = val
    },
    // 退出
    doLogout(state){
      // this.$router.push('/')
      state.user=null
      
    },
  },
  actions: {
    GetUserInfo({ commit }){
      return getUserInfo().then(res=>{
        commit('SET_USERINFO',res.data.data)
      })
    },
  },
  modules: {
    // user,
  }
})

export default store

