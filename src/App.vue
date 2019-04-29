<template>
  <div id="app">
    <!-- 顶部固定导航栏 -->
    <mt-header fixed title="小桃微集"></mt-header>
    <!-- 中间部分 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部tab栏 -->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-itembar" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-itembar" to='/class'>
            <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
            <span class="mui-tab-label">分类</span>
        </router-link>
        <router-link class="mui-tab-itembar" to='/chat'>
            <span class="mui-icon mui-icon mui-icon-chat"></span>
            <span class="mui-tab-label">桃粉圈</span>
        </router-link>
        <router-link class="mui-tab-itembar" to='/cart'>
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-itembar" to='/contact'>
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">我的</span>
        </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  #app {
    overflow-x: hidden;
  }
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active, .v-leave-active {
    transition: all 0.3s;
  }
 .mui-bar-tab .mui-tab-itembar.mui-active {
      color: #007aff;
  }
  .mui-bar-tab .mui-tab-itembar {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-itembar .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-itembar .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
