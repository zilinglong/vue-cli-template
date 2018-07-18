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
    <section>
      <div>移动端1px border的使用</div>
      <p class="text">正常边框：</p>
      <div class="box normal-border"></div>
      <p class="text">单边框:</p>
      <div class="box border-1px-one"></div>
      <p class="text">四条边框:</p>
      <div class="box border-1px-four"></div>
    </section>
    <section>
      <div>移动端项目@2x图和@3x图使用</div>
      <div class="icon"></div>
    </section>
    <section>
      <div>loading插件使用</div>
      <div class="loading">
        <vueLoading type="bars" color="#33c3ff" :size="{ width: '50px', height: '50px' }"></vueLoading>
      </div>
    </section>
  </div>
</template>
<script>
  import slotChild from './slotChild';
  import vueLoading from 'vue-loading-template';
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
      this.axiosGetData();
    },
    components: {
      slotChild,
      vueLoading
    },
    // 计算属性，获取store中相关属性
    // computed: {
    //   count() {
    //     return this.$store.state.count;
    //   }
    // },
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
      // vue-resource
      getData() {
        this.$http.get(`https://cnodejs.org/api/v1/topics`).then((res) => {
          // this.loadingShow = false;
          let data = res.body;
          console.log(data);
        });
      },
      // axios
      axiosGetData() {
        var url = 'https://cnodejs.org/api/v1/topics';
        this.$axios.get(url).then(response => {
          console.log(response);
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

  .box {
    width: 80%;
    height: 20px;
    margin: 20px auto;
  }

  .normal-border {
    border: 1px solid #000;
  }

  .border-1px-one {
    @include border-1px-one(#000);
  }

  .border-1px-four {
    @include border-1px-four(#000);
  }

  .icon {
    width: 30px;
    height: 30px;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
    @include bg-image('../assets/images/icon-shanchu');
  }

</style>
