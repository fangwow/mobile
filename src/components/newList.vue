<template>
    <div class="main">
        <ul class="mui-table-view">
            <!-- <li class="mui-table-view-cell mui-media" v-for='(item,i) in newsList' :key='i'>  
                <router-link :to="'/home/newlist/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{item.add_time}}</span>
                            <span>点击次数: {{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li> -->
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newlist/1">
                    <img class="mui-media-object mui-pull-left" src="../assets/image/shuijiao.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>发表时间: 2019.09.09</span>
                            <span>点击次数: 4次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="">
                    <img class="mui-media-object mui-pull-left" src="../assets/image/muwu.jpg">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>
                            <span>发表时间: 2019.09.09</span>
                            <span>点击次数: 65535次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="">
                    <img class="mui-media-object mui-pull-left" src="../assets/image/shuijiao.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>发表时间: 2019.09.09</span>
                            <span>点击次数: 4次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="">
                    <img class="mui-media-object mui-pull-left" src="../assets/image/muwu.jpg">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>
                            <span>发表时间: 2019.09.09</span>
                            <span>点击次数: 65535次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="">
                    <img class="mui-media-object mui-pull-left" src="../assets/image/shuijiao.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>发表时间: 2019.09.09</span>
                            <span>点击次数: 4次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="">
                    <img class="mui-media-object mui-pull-left" src="../assets/image/muwu.jpg">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>
                            <span>发表时间: 2019.09.09</span>
                            <span>点击次数: 65535次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="">
                    <img class="mui-media-object mui-pull-left" src="../assets/image/shuijiao.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>发表时间: 2019.09.09</span>
                            <span>点击次数: 4次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="">
                    <img class="mui-media-object mui-pull-left" src="../assets/image/muwu.jpg">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>
                            <span>发表时间: 2019.09.09</span>
                            <span>点击次数: 65535次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            
	    </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList: []
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        async getData(){
            const res = await this.$http.get(`/api/getnewslist`);
            console.log(res);
            this.newsList = res.data;
        }
    }
}
</script>

<style>
.main {
    padding-top: 40px;
}
.mui-ellipsis {
    display: flex;
    justify-content: space-between;
}
</style>
