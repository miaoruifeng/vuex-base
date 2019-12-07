<template>
  <div>
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    <button @click="handleBtn1">+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleBtn1() {
      this.$store.commit('add')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
