<template>
  <div class="wrap">
    {{msg}}
    <p>count value: {{count}}</p>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      return {
        msg: 'hello index.vue'
      };
    },
    mounted() {
      // this.getData();
      this.axiosGetData();
    },
    // 计算属性，获取store中相关属性
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    methods: {
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


</style>
