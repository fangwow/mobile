<template>
  <div id="app">
    <!-- 顶部固定导航栏 -->
    <mt-header fixed title="小桃微集"></mt-header>
    <!-- 中间部分 -->
    <router-view></router-view>
    <!-- 底部tab栏 -->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to='/class'>
            <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
            <span class="mui-tab-label">分类</span>
        </router-link>
        <router-link class="mui-tab-item" to='/chat'>
            <span class="mui-icon mui-icon mui-icon-chat"></span>
            <span class="mui-tab-label">桃粉圈</span>
        </router-link>
        <router-link class="mui-tab-item" to='/cart'>
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to='/contact'>
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

<style>

</style>
