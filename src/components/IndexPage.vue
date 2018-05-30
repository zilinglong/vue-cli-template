<template>
  <div class="wrap">
    {{msg}}
    <p class="demo1">***********************************</p>
    <p class="demo1">*************vuex demo1************</p>
    <p class="demo1">***********************************</p>
    <p>count value: {{count}}</p>
    <div class="btn-group">
      <button @click="increment(5)">count+5</button>
      <button @click="decrement(2)">count-2</button>
    </div>
    <div>
      <router-link to="/IndexPage">跳转到组件indexPage</router-link>
      <router-link to="/HelloWorld">跳转到组件HelloWorld</router-link>
    </div>
    <section>
      <p class="global-components">
        全局组件：indexpage文件展示
      </p>
      <global-components :value="msg"></global-components>
    </section>
    <section>
      <div>
        (IndexPage)插件使用展示：
      </div>
      <TopBar :title="pluginText"></TopBar>
    </section>
    <section>
      <div>slot使用</div>
      <slotChild>
        <span slot="text1" @click="slotClick">1234</span>
        <span slot="text4">5678</span>
        <!--<span slot="text3">9012</span>-->
        <!--<div slot="CPU">intel core i7</div>
        <div slot="GPU">GTX980Ti</div>
        <div slot="Memory">Kingston 32G</div>
        <div slot="Hard-drive">Samsung SSD 1T</div>-->
      </slotChild>
    </section>
    <section>
      <div>全局过滤器filter使用</div>
      <p>{{50|addMoneyUnit}}</p>
      <p>{{20|formatMoney(10) }}</p>
    </section>
    <section>
      <div>vuex使用:loginState</div>
      <p>{{loginState}}</p>
      <div class="chang-vuex-value">
        <button @click="changeLoginState">改变loginState的值</button>
      </div>
    </section>
    <section>
      <div>iconfont:使用文字代替图标</div>
      <div class="iconfont icon-icon"></div>
      <div class="iconfont icon-brush_fill"></div>
      <div class="iconfont icon-fanhui"></div>
    </section>
  </div>
</template>
<script>
  import slotChild from './slotChild';
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    name: 'index',
    data() {
      return {
        msg: 'hello index.vue',
        pluginText: '插件应用'
      };
    },
    mounted() {
      // this.getData();
      // this.axiosGetData();
    },
    components: {
      slotChild
    },
    // 计算属性，获取store中相关属性
    // computed: {
    //   count() {
    //     return this.$store.state.count;
    //   }
    // },
    // computed: mapGetters(['count']),
    computed: {
      ...mapGetters(['count', 'loginState'])
    },
    methods: {
      // increment() {
      //   this.$store.dispatch('increment', {amount: 5});
      // },
      // decrement() {
      //   this.$store.dispatch('decrement');
      // },
      ...mapActions(['increment', 'decrement', 'changeLoginState']),
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
      },
      slotClick() {
        console.log('parent slot is clicked');
      }
    }
  };

</script>
<style lang="scss" scoped>
  .demo2 {
    margin-top: 20px;
  }

  .iconfont {
    font-size: 20px; // 定义小icon的大小
    color: #f00; // 定义小icon的颜色
  }

</style>
