<template>
  <div class="divcss5">
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.state.info}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  }
</script>

<style scoped>
  .divcss5 {
    width:70%;
    height:auto;
    border:1px solid #F00
  }
</style>
