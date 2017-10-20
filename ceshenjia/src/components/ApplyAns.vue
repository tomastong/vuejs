<template>
    <div class="apply-ans">
        <div class="bg level1" v-if="level === 'level1'"></div>
        <div class="bg level2" v-else-if="level === 'level2'"></div>
        <div class="bg level3" v-else-if="level === 'level3'"></div>
        <div class="bg level4" v-else-if="level === 'level4'"></div>
        <div class="bg level5" v-else-if="level === 'level5'"></div>
        <div class="bg level6" v-else-if="level === 'level6'"></div>
        <div class="bg level7" v-else-if="level === 'level7'"></div>
        <div class="bg level8" v-else-if="level === 'level8'"></div>
        <div class="bg ans1" v-else-if="level === 'ans1'"></div>
        <div class="bg ans2" v-else-if="level === 'ans2'"></div>
        <div class="bg ans3" v-else></div>
    </div>
</template>

<script>
    export default{
        name: 'apply-ans',
        props: {
            level: {
                type: String,
                default: ''
            }
        },
        methods: {
            track: function(){
                switch(this.level){
                    case 'level1':
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_mid',
                            tracking_type: 'pageload',
                            cartype: '0w',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });
                        break;
                    case 'level2':
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_mid',
                            tracking_type: 'pageload',
                            cartype: '5w-2',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });
                        break;
                    case 'level3':
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_mid',
                            tracking_type: 'pageload',
                            cartype: '5w-1',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });
                        break;
                    case 'level4':
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_mid',
                            tracking_type: 'pageload',
                            cartype: '15w',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });
                        break;
                    case 'level5':
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_mid',
                            tracking_type: 'pageload',
                            cartype: '20w',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });
                        break;
                    case 'level6':
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_mid',
                            tracking_type: 'pageload',
                            cartype: '30w',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });   
                        break; 
                    case 'level7':    
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_mid',
                            tracking_type: 'pageload',
                            cartype: '50w',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });
                        break;
                    case 'level8':    
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_mid',
                            tracking_type: 'pageload',
                            cartype: 'nw',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });
                        break;

                    case 'ans1':
                        
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_done_3',
                            tracking_type: 'pageload',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });

                        break;
                    case 'ans2':
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_done_2',
                            tracking_type: 'pageload',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });
                        break;
                    case 'ans3':
                        // 发送track数据
                        tracker1.send({
                            pagetype: 'act_ceshengjia_done_1',
                            tracking_type: 'pageload',
                            jr_from: guazi.ceshenjia.urlToObj.jr_from
                        });
                        break;
                    default:
                        console.log('执行错误...apply-ans')
                        break;
                }
            }
        },
        created: function(){
            this.track();
        },
        updated: function(){
            this.track();
        }
    }
</script>

<style scoped lang="less">
    .apply-ans{
        .bg{
            width: 10rem;
            height: 15.96rem;
        }
        .level1{
            background: url(../assets/level1.png) no-repeat;
            background-size: 100% 100%;
        }
        .level2{
            background: url(../assets/level2.png) no-repeat;
            background-size: 100% 100%;
        }
        .level3{
            background: url(../assets/level3.png) no-repeat;
            background-size: 100% 100%;
        }
        .level4{
            background: url(../assets/level4.png) no-repeat;
            background-size: 100% 100%;
        }
        .level5{
            background: url(../assets/level5.png) no-repeat;
            background-size: 100% 100%;
        }
        .level6{
            background: url(../assets/level6.png) no-repeat;
            background-size: 100% 100%;
        }
        .level7{
            background: url(../assets/level7.png) no-repeat;
            background-size: 100% 100%;
        }
        .level8{
            background: url(../assets/level8.png) no-repeat;
            background-size: 100% 100%;
        }

        .ans1{
            background: url(../assets/ans1.png) no-repeat;
            background-size: 100% 100%;
        }
        .ans2{
            background: url(../assets/ans2.png) no-repeat;
            background-size: 100% 100%;
        }
        .ans3{
            background: url(../assets/ans3.png) no-repeat;
            background-size: 100% 100%;
        }
    }
</style>