<template>
  <div>
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    <button @click="handleBtn1">+1</button>
    <button @click="handleBtn2">+N</button>
    <button @click="handleBtn3">+1 Async</button>
    <button @click="handleBtn4">+N Async</button>
    <h3>{{$store.getters.showNum}}</h3>
  </div>
</template>

<script>
export default {
  methods: {
    // 触发 Mutations 的第一种方法
    // 通过 commit 方法
    handleBtn1() {
      this.$store.commit('add')
    },
    handleBtn2() {
      this.$store.commit('addN', 3)
    },
    // 异步的让自增1
    handleBtn3() {
      this.$store.dispatch('addAsync')
    },
    handleBtn4() {
      this.$store.dispatch('addNAsync', 10)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
