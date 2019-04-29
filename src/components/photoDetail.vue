<template>
    <div class="main">
        <h3>{{photoInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{photoInfo.add_time | dataFormat}}</span>
            <span>点击: {{photoInfo.click}}</span>
        </p>
        <hr>
        <div class="content" v-html='photoInfo.content'>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            photoInfo: []
        }
    },
    cerated(){
        this.getPhotoInfo();
    },
    methods: {
        async getPhotoInfo(){
            const res = await this.$http.get(`api/getimageInfo/${this.$route.params.id}`);
            this.photoInfo = res.data.data;
        }
    }
}
</script>

<style>

</style>
