<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!--设置tag之后，指定<router-link>渲染成什么组件, 比如上面的代码会被渲染成一个<li>元素, 而不是<a>-->
    <!--设置replace之后，就不能前进和回退页面-->
    <!--设置active-class：修改vue按钮被选中所加class的名称-->
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!--<router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace>关于</router-link>-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      // 通过代码的方式修改路由:通过vue-router进行修改
      //vue-router给所有的组件都添加了一个$router属性
      // push => pushState
      // this.$router.push('/home')  //相当于pushState
      this.$router.replace('/home')  //相当于replaceState，不可以返回和前进
      console.log('homeClick');
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('aboutClick');
    }
  }
}
</script>

<style>
  /*.router-link-active {*/
    /*color: #f00;*/
  /*}*/

  .active {
    color: #f00;
  }
</style>
