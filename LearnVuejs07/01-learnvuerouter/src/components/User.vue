<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息, 嘿嘿嘿</p>
    <h2>{{userId}}</h2>
    <!--$route:当前活跃的路由对象-->
    <h2>{{$route.params.id}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        //this.$router是我们注册的vue-router对象
        //this.$route:指的是当前活跃的路由对象，那什么是路由对象呢？即在创建路由实例时，传入的routes参数
        /*const routes = [{
          path: '/user/:id',
          component: User,
          meta: {
            title: '用户'
          },
        },]*/
        return this.$route.params.id
      }
    },
    created() {
      console.log('User created');
    },
    destroyed() {
      console.log('User destroyed');
    },
    methods: {
      btnClick() {
        // 所有的组件都继承自Vue类的原型
        console.log(this.$router);
        console.log(this.$route);

        //这里打印的是“coderwhy”，因为在main.js中给Vue原型定义了一个name属性：Vue.prototype.name = "coderwhy"
        //而所有的组件都继承自Vue类的原型，也就拥有了name属性，这个name属性覆盖了组件本身的name属性，因此打印“codeerwhy"
        console.log(this.name);
      }
    }
  }
</script>

<style scoped>

</style>
