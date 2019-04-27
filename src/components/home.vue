<template>
    <div class="main">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='(item,i) in lunboList' :key='i'>
                <img :src='item.src' url='item.url' alt=''>
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to='/home/newList'>
                    <img src="../assets/image/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../assets/image/menu2.png" alt="">
                    <div class="mui-media-body">9.9包邮</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../assets/image/menu3.png" alt="">
                    <div class="mui-media-body">高额券</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../assets/image/menu4.png" alt="">
                    <div class="mui-media-body">淘宝</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../assets/image/menu5.png" alt="">
                    <div class="mui-media-body">天猫</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../assets/image/menu6.png" alt="">
                    <div class="mui-media-body">拼多多</div>
                </router-link>
            </li>
        </ul> 
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            // 轮播图数组
            lunboList: [],
            value: '请输入要搜索内容'
        }
    },
    created(){
       this.getData();
    },
    methods: {
        // 获取轮播图数据
        async getData(){
            const res  = await this.$http.get(`/api/getlunbo`);
            // console.log(res.body);
            if(res.body.status === 200){
                this.lunboList = res.body.message;
            }else{
                Toast('获取数据失败');
            }
        }
    }
}
</script>

<style>
.main {
    height: 100%;
    padding-top: 40px;
}
.mint-swipe {
    height: 200px;
}
.mui-table-view.mui-grid-view.mui-grid-9 {
    background: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell  {
    border: 0 none;
}
.mui-table-view img {
    width: 100px;
}

</style>
