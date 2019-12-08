<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <button @click="sub">-1</button>
    <button @click="handleBtn2">-N</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNAsync(3)">-N Async</button>
    <h3>{{showNum}}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    // 触发 Mutations 的第二种方法
    // 将需要的 Mutations 函数，映射到当前组件的 methods 方法中
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    // handleBtn1() {
    //   this.sub()
    // },
    handleBtn2() {
      this.subN(2)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
