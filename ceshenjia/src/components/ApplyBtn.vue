<template>
    <div class="apply-btn">
        <v-touch tag="div" class="applybtn" v-bind:class="{ bottom: isApp }" @tap="deal">
            <p class="level1" v-if="level == 'level1'">立刻买奥迪</p>
            <p class="level2" v-else-if="level == 'level2'">不服，我就要开奔驰</p>
            <p class="level3" v-else-if="level == 'level3'">不服，我就要开车</p>
            <p class="level4" v-else-if="level == 'level4'">不服，我就要宝马</p>
            <p class="level5" v-else-if="level == 'level5'">不服，我就要开奔驰</p>
            <p class="level6" v-else-if="level == 'level6'">立刻开奔驰</p>
            <p class="level7" v-else-if="level == 'level7'">立刻开宝马</p>
            <p class="level8" v-else-if="level == 'level8'">体验下时髦消费方式</p>

            <p class="ans1" v-else-if="level == 'ans1'">立即申请</p>
            <p class="ans2" v-else-if="level == 'ans2'">立即申请</p>
            <p class="ans3" v-else>10秒知结果，立刻申请</p>
        </v-touch>
    </div>
</template>

<script>
    export default{
        name: 'apply-btn',
        props: {
            level:{
                type: String,
                default: ''
            },
            isApp: {
                type: Boolean,
                default: true  
            }
        },
        methods: {
            deal: function(e){
                var e = e || window.Event;
                this.$emit('childSay', {'ename': e.target.className})
            }
        },
        created: function(){
            switch(this.level){
                case 'level1':
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_mid',
                        tracking_type: 'click',
                        eventid: '04913618'
                    });
                    break;
                case 'level2':
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_mid',
                        tracking_type: 'click',
                        eventid: '4798757'
                    });
                    break;
                case 'level3':
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_mid',
                        tracking_type: 'click',
                        eventid: '4941018'
                    });
                    break;
                case 'level4':
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_mid',
                        tracking_type: 'click',
                        eventid: '4188996'
                    });
                    break;
                case 'level5':
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_mid',
                        tracking_type: 'click',
                        eventid: '4124271'
                    });
                    break;
                case 'level6':
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_mid',
                        tracking_type: 'click',
                        eventid: '4148820'
                    });   
                    break; 
                case 'level7':    
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_mid',
                        tracking_type: 'click',
                        eventid: '4883069'
                    });
                    break;
                case 'level8':    
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_mid',
                        tracking_type: 'click',
                        eventid: '4688945'
                    });
                    break;

                case 'ans1':
                    
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_done_3',
                        tracking_type: 'click',
                        eventid: '4619099'
                    });

                    break;
                case 'ans2':
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_done_2',
                        tracking_type: 'click',
                        eventid: '4549259'
                    });
                    break;
                case 'ans3':
                    // 发送track数据
                    tracker2.send({
                        pagetype: 'act_ceshengjia_done_1',
                        tracking_type: 'click',
                        eventid: '4442486'
                    });
                    break;
                default:
                    console.log('执行错误...apply-btn')
                    break;
            }
        }    
    }
</script>

<style scoped lang="less">
    .applybtn{
        position: absolute;
        left: 2.346667rem;
        bottom:1.88rem;
        width: 5.226667rem;
        height: 1.866667rem;
        background: url(../assets/applybtn.png) no-repeat;
        background-size: 100% 100%;
        p{
            color: #fff;
            font-size: 0.44rem;
            font-weight: 700;
            padding: .4rem 0 .7rem 0;

        }
    }
    .bottom{
        bottom:1rem !important; 
    }
</style>