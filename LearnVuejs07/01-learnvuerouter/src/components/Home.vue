<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容, 哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: '你好啊',
        path: '/home/news'
      }
    },
    created() {
      console.log('home created');
    },
    destroyed() {
      console.log('home destroyed');
    },
    // 这两个函数, 只有该组件被保持了状态使用了keep-alive时, 才是有效的
    activated() {
      //保持状态第一步：用keep-alive 包围<router-view/>
      //保持状态第二步：
      //当前组件处于活跃状态的时候，会触发activated函数
      this.$router.push(this.path);
      console.log('activated');
    },
    deactivated() {
      //当前组件不活跃的时候，会触发deactivated函数
      console.log('deactivated');
    },
    beforeRouteLeave (to, from, next) {
      //保持状态第三步：
      console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>
