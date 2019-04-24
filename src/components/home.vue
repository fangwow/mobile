<template>
    <div class="main">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='(item,i) in lunboList' :key='i'>
                <img :src='item.src' url='item.url' alt=''>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            // 轮播图数组
            lunboList: []
        }
    },
    created(){
       this.getData();
    },
    methods: {
        // 获取轮播图数据
        async getData(){
            const res  = await this.$http.get(`/api/getlunbo`);
            console.log(res.body);
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
img {
    width: 100%;
    height: 100%;
}
</style>
