<template>
    <div class="comment">
        <h1>发表评论</h1>
        <hr>
        <mt-field placeholder="what i can speak sha lei" type="textarea" rows="4" v-modal="introduction"></mt-field>
        <mt-button type="primary" size='large'>发表评论</mt-button>
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
    </div>
</template>

<script>
export default {
    data(){
        return {
            introduction: ''
        }
    },
    created(){
        this.getData();
    },
    methods: {
        getData(){
            // axios发送异步请求获取数据
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
