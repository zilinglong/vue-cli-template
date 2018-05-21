<template>
  <div>
    <p class="plugin-title">{{title}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
    };
  },
  props: ['title'],
  mounted() {},
  components: {},
  computed: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.plugin-title {
  font-size: 16px;
  color: #0f0!important;
}
</style>
