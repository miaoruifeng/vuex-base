<template>
  <div>
    <child-add></child-add>
    <p>-----------------------------</p>
    <child-sub></child-sub>
  </div>
</template>

<script>
import Add from './components/Add'
import Sub from './components/Sub'

export default {
  components: {
    'child-add': Add,
    'child-sub': Sub
  }
}
</script>

<style lang="less" scoped>
</style>
