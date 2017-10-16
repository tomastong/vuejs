<template>
    <div class="second-view">
        <apply-ans :level="answer"></apply-ans>
        <apply-btn :level="answer" @childSay = "dealChild" :isApp="isApp"></apply-btn>    
    </div>
</template>

<script>
    import NativeAPI from 'native-api'
    import BackBar from '../components/BackBar'
    import ApplyAns from '../components/ApplyAns'
    import ApplyBtn from '../components/ApplyBtn'
    export default{
        name: 'second-view',
        components: { BackBar, ApplyAns, ApplyBtn },
        data(){
            return {
                answer: 'level6',
                isApp: true,
                platform: 'dev'
            }
        },
        methods: {
            dealChild: function(data){
                switch(data.ename){
                    case 'level1':
                    case 'level2':
                    case 'level3':
                    case 'level4':
                    case 'level5':
                        this.answer = 'ans1';
                        break;
                    case 'level6':    
                    case 'level7':    
                        this.answer = 'ans2';
                        break;
                    case 'level8':    
                        this.answer = 'ans3';
                        break;

                    case 'ans1':
                    case 'ans2':
                    case 'ans3':
                        if(this.isApp){
                            window.location.href="https://app2-jrtest.guazi.com/loan_v2/login?platform=wap&jr_from=ceyice_car";
                        }else{
                            window.location.href = 'https://m-jrtest.guazi.com/loan_v2/login?platform=wap&jr_from=ceyice_car';
                        }
                        break;
                    default:
                        console.log('执行错误...second-view')
                        break;
                }
            }
        },
        created: function(){
            this.answer = this.$route.params.level;
            this.isApp = this.$route.params.isApp;

            if(location.host.indexOf('jrtest'))
                this.platform = 'dev';
            else
                this.platform = 'prod';
        }
    }
</script>

<style scoped lang="less">
    

</style>