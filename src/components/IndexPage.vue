<template>
  <div class="wrap">
    {{msg}}
    <p class="demo1">***********************************</p>
    <p class="demo1">*************vuex demo1************</p>
    <p class="demo1">***********************************</p>
    <p>count value: {{count}}</p>
    <div class="btn-group">
      <button @click="increment">count+1</button>
      <button @click="decrement">count-1</button>
    </div>
    <div>
      <router-link to="/IndexPage">跳转到组件indexPage</router-link>
      <router-link to="/HelloWorld">跳转到组件HelloWorld</router-link>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    name: 'index',
    data() {
      return {
        msg: 'hello index.vue'
      };
    },
    mounted() {
      // this.getData();
      // this.axiosGetData();
    },
    // 计算属性，获取store中相关属性
    // computed: {
    //   count() {
    //     return this.$store.state.count;
    //   }
    // },
    computed: mapGetters(['count']),
    methods: {
      // increment() {
      //   this.$store.dispatch('increment');
      // },
      // decrement() {
      //   this.$store.dispatch('decrement');
      // },
      ...mapActions(['increment', 'decrement']),
      getData() {
        this.$http.get(`https://cnodejs.org/api/v1/topics`).then((res) => {
          // this.loadingShow = false;
          let data = res.body;
          console.log(data);
        });
      },
      axiosGetData() {
        var url = 'https://cnodejs.org/api/v1/topics';
        this.$axios.get(url).then(response => {
          let data = response.data;
          console.log(data);
        });
      }
    }
  };
</script>
<style lang="scss">
  .demo2 {
    margin-top: 20px;
  }

</style>
