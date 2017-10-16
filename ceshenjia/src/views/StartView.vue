<template>
    <div class="start-view">
        <img src="../assets/start.png" alt="">
        <router-link class="action btn" :to="{ name: 'FirstView', params: { isApp: isApp }}" 
        @click.native="count()"></router-link>
    </div>
</template>

<script>
    import { bus } from '../bus/bus'

    import request from 'superagent'
    import jsonp from 'superagent-jsonp'
    export default{
        name: 'start-view',
        data(){
            return {
                isApp: false
            }
        },
        methods: {
            count: function(){
                // 发送track数据
                tracker2.send({
                    tracking_type: 'click',
                    pagetype: 'act_ceshengjia',
                    eventid: '04731577'
                })
            }
        },
        created: function(){
            var that = this;
            bus.$on('isHaveBar',  function(data){
                that.isApp = true;
            });

            // 发送track数据
            tracker1.send({
                pagetype: 'act_ceshengjia',
                tracking_type: 'pageload'
            })

        }
    }
</script>

<style scoped lang="less">
    .start-view{
        position: relative;
        width: 10rem;
        height: 15.973333rem;
        img{
            width: 100%;
            height: 100%;
        }
         .action{
            position: absolute;
            left: 2.346667rem;
            bottom:1.88rem;
            width: 5.32rem;
            height: 1.92rem;
        }
    }
</style>