<template>
    <div class="comment">
        <h1>发表评论</h1>
        <hr>
        <mt-field placeholder="what i can speak sha lei" type="textarea" rows="4" v-model="introduction"></mt-field>
        <mt-button type="primary" size='large' @click='add()'>发表评论</mt-button>
        <div>
            <p class='first'>
                <span>第1楼</span>
                <span>用户: xxx</span>
                <span>发表时间: 2017.05.06</span>
            </p>
            <p class="two">
                sdajakl;fjsda;lf
            </p>
        </div>
        <div>
            <p class='first'>
                <span>第1楼</span>
                <span>用户: xxx</span>
                <span>发表时间: 2017.05.06</span>
            </p>
            <p class="two">
                sdajakl;fjsda;lf
            </p>
        </div>
        <div>
            <p class='first'>
                <span>第1楼</span>
                <span>用户: xxx</span>
                <span>发表时间: 2017.05.06</span>
            </p>
            <p class="two">
                sdajakl;fjsda;lf
            </p>
        </div>
        <mt-button type="primary" size='large' plain>加载更多</mt-button>
    </div>
</template>

<script>
// 引入Toast组件
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            commontList: [],
            introduction: ''
        }
    },
    created(){
        this.getData();
    },
    methods: {
        async getData(){
            // axios发送异步请求获取数据
            const res = await this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex);
            if (result.body.status === 0) {
                // this.comments = result.body.message;
                // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
                this.comments = this.comments.concat(result.body.message);
            } else {
                Toast("获取评论失败！");
            }
        },
        async add(){
            console.log(this.introduction.trim().length);
            if(this.introduction.trim().length === 0){
                return Toast('评论内容不能为空');
            }
            const res = this.$http.post(`api/postcommont/this.$route.params.id`,{
                content: this.introduction.trim()
            });
            if(res.data.status == 200){
                var currentComment = {
                    user_name: '匿名用户',
                    add_time: Date.new(),
                    conent: this.introduction.trim()
                };
                this.commontList.unshift(currentComment);
            }

        }
    }
}
</script>

<style scoped> 
.comment {
    margin-top: 30px;
}
button {
    margin: 10px 0;
}
.first {
    background: #ccc;
    display: flex;
}
.first span {
    flex: 1;
}
p {
    line-height: 40px;
}
</style>
