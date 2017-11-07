<template>
  <div class="wrap">
    {{msg}}
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
    },
    methods: {
      getData() {
        this.$http.get(`/cp_enrollment_dynamic/get_cp_keywords`).then((res) => {
          this.loadingShow = false;
          let data = res.body;
          console.log(data);
        });
      }
    }
  };
</script>
<style lang="scss">

</style>

