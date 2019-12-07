<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <button @click="handleBtn1">-1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    handleBtn1() {
      this.$store.commit('sub')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
