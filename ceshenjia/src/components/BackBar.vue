<template>
    <div class="back-bar" v-show="!isApp"><!-- style="border-bottom: none;" -->
        <div class="placeholder"></div>
        <div class="arrow"></div>
        <p>测测你的额度</p>
    </div>
</template>

<script>
    import { bus } from '../bus/bus'
    export default{
        name: 'back-bar',
        data(){
            return {
                isApp: true
            }
        },
        methods: {
            checkApp () {
                var loanConfig = window.loanConfig || {};
                this.isApp = false;
                if(loanConfig.isApp){
                    this.isApp = true;
                }
                if(/app/.test(location.host)){
                    this.isApp = true;
                }
                if(/guazi/.test(navigator.userAgent)){
                    this.isApp = true;
                }
            }
        },
        created: function(){
            // this.checkApp();  
        },
        mounted: function(){
            if(this.isApp){
              bus.$emit('isHaveBar',''); 
            }
        }
    }
</script>

<style scoped lang="less">
    .back-bar{
        position: relative;
        width: 10rem;
        // display: -webkit-flex; /* Safari */
        // display: -moz-flex;
        // display: -o-flex;
        // display: flex;
        // flex-direction: row;
        // align-items: center;
        // justify-content:center;
        height: 1.173333rem;
        background-color: #fff;
        .placeholder{
          width: 0;
          height: 100%;
          visibility: hidden;
          display: inline-block;
          vertical-align: middle;
        }
        .arrow{
            position: absolute;
            display: inline-block;
            vertical-align: middle;
            margin-top: 0.35rem;
            left: 0;
            margin-left: 0.346667rem;
            width: 0.26666665rem;
            height:0.48rem;
            background: url(../assets/arrow.png) no-repeat;
            background-size: 100% 100%;
        }
        p{
            display: inline-block;
            vertical-align: middle;
            font-size: .48rem;
            line-height: 1.173333rem;
            color: #3F4359;
            align-self: center;
            text-align: center; 
        }
    }  
    

</style>