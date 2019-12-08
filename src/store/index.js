import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 不要在 Mutations 中执行异步操作
  // 只有在 Mutations 中定义的函数 才有权利修改 state 中的数据
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  // 只能在 Actions 中执行异步操作
  actions: {
    addAsync(context) {
      // 在 Actions 中不能直接修改 state 中的数据
      // 必须通过 context.commit() 去触发某个 Mutations
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  getters: {
    showNum: state => {
      return '当前最新的数量是：【' + state.count + '】'
    }
  },
  modules: {}
})
