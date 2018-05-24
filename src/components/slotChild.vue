<template>
  <div class="wrap">
    <slot name="text1">slot child 1</slot>
    <slot name="text2">slot child 2</slot>
    <slot name="text3">slot child 3</slot>
    <!--<slot name="CPU">这插你的CPU</slot>
    <slot name="GPU">这插你的显卡</slot>
    <slot name="Memory">这插你的内存</slot>
    <slot name="Hard-drive">这插你的硬盘</slot>-->
    <!--<button>slot-child:button</button>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {},
    components: {},
    computed: {},
    methods: {}
  };

</script>
<style lang='scss' scoped>
.wrap div {
  color: #00f;
}

</style>
