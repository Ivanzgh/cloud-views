import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 中间件，使用VueX作为Vue的一个参数
Vue.use(Vuex);

const store = new Vuex.Store({
  state : {
    userinfo : {
      username : '',
      avatar : '',
      email : '',
      desc : '',
      nickname : ''
    },
    bookinfo : {
      book_id : '',
      author : '',
      img : '',
      type : '',
      desc : '',
      index : ''
    },
    swiperinfo : {
      book: '',
      title : '',
      img : '',
      index : ''
    },
    category : {
      title : '',
      icon : '',
      index : ''
    }
  },
  mutations : {
    CHANGE_USERINFO(state,userinfo) {
      state.userinfo = userinfo
    },
    CHANGE_BOOKINFO(state,bookinfo) {
      state.bookinfo = bookinfo
    },
    CHANGE_SWIPERINFO(state,swiperinfo){
      state.swiperinfo = swiperinfo
    },
    CHANGE_CATEGORYINFO(state,categoryinfo) {
      state.categoryinfo = categoryinfo
    }
  },
  actions : {},
  plugins : [createPersistedState({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: (key, value) =>
        sessionStorage.setItem(key, value),
      removeItem: key => sessionStorage.removeItem(key),
    },
  })],
});

export default store
