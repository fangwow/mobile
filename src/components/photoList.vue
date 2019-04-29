<template>
    <div class="main">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                    <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
                        科技
                    </a>
                </div>
            </div>
		</div>
    </div>
</template>

<script>
import '@/assets/dist/js/mui.min.js'
export default {
    data(){
        return {
            cate: []
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        this.getAllCategory();
    },
    methods: {
        // 获取分类数据
        async getAllCategory(){
            const res = await this.$http.get(`api/getimgcategory`);
            // console.log(res);
            // 需要动态向数组中添加全部类
            res.data.data.unshift({
                title: '全部',
                id: 0
            });
            this.cate = res.data.data;
        }
    }
}
</script>

<style scoped>
.main {
    padding-top: 40px;
}
</style>
