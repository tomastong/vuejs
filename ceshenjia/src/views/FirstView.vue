<template>
    <div class="first-view">
        <!-- <back-bar></back-bar> -->
        <nav-title :ttype="message"></nav-title>
        <base-info :ttype="message" @childSay = "dealChild"></base-info>
    </div>
</template>

<script>

    import request from 'superagent'
    import jsonp from 'superagent-jsonp'
    import NativeAPI from 'native-api'
    import BackBar from '../components/BackBar'
    import NavTitle from '../components/NavTitle'
    import BaseInfo from '../components/BaseInfo'

    export default{
        name: 'first-view',
        components: { BackBar, NavTitle, BaseInfo },
        data(){
            return {
                message: 'sex',
                items: [
                    'sex', 'work', 'salary', 'addr', 'credit'
                ],
                person: {
                    sex: '',
                    job: '',
                    income: '',
                    live: '',
                    credit: ''
                },
                reslevel : ''
            }
        },
        methods: {

            dealChild: function(data){
                var that = this;
                if(!!data['sex'])  that.person.sex = data['sex'];
                if(!!data['type'])
                switch(data['type']){
                    case 'work':
                        that.person.job = data['classes'];
                        break;
                    case 'salary':
                        that.person.income = data['classes'];
                        break;
                    case 'addr':
                        that.person.live = data['classes'];
                        break;
                    case 'credit':
                        that.person.credit = data['classes'];
                        break;
                    default: 
                        console.log('执行错误...first-view');
                }


                if(data['nextpage']!=5){
                    setTimeout(function(){
                        // 这里this指针发生变化了
                        that.message = that.items[data['nextpage']];
                    },500);
                    
                }else{
                    if(window.localStorage && !localStorage.getItem('CESHENJIA_PERSON')){ 
                        request
                           .post('/check_quota/calculateActiveResult')
                           .send(that.person)
                           .end(function(err, res){
                                if(!err) {  
                                var result = JSON.parse(res.text); 


                                if (result.status && result.data.activeResult!= -1){   
                                    localStorage.setItem('CESHENJIA_PERSON', result.data.activeResult);
                                    localStorage.setItem('CESHENJIA_SCORE', result.data.score);
                                    localStorage.setItem('CESHENJIA_SEX', that.person.sex);
                                    that.reslevel = result.data.activeResult;
                                    

                                    // 如果有登录，服务器直接保存成绩
                                    that.getUser(function(user){
                                        if(user != null){
                                            request
                                               .post('/check_quota/saveRecord')
                                               .send(user)
                                               .end(function(err, res){

                                                    if (!err && JSON.parse(res.text).status) 
                                                    localStorage.setItem('CESHENJIA_SENDMSG', 'true');
                                               });
                                        }
                                    });

                                    // 这里展示结果页面
                                    setTimeout(function(){
                                        // 这里的result的结果页，是计算得来的，明天修改
                                        that.$router.push({name:'SecondView', params:{'level': that.reslevel, 'isApp':that.$route.params.isApp}});
                                    }, 500);
                                }
                                }
                           });
                    }
                }
                
            },
            // 这里将app或者wap中的用户信息和成绩一起返回
            // 登录了就是返回值userinfo，没登录返回值为null
            // 这段代码可获取用户信息（app或者wap），或者检查app或wap是否登录
            getUser: function(callback){
                var userinfo = {}, that = this;
                if(this.$route.params.isApp){
                    NativeAPI.invoke('getUserInfo', null, (data)=>{
                        if(data.error)  userinfo = null;
                        else{
                            userinfo.sex = that.person.sex;
                            userinfo.token = data.token;
                            userinfo.score = localStorage.getItem('CESHENJIA_SCORE');
                        }
                    })
                    callback(userinfo); // 这里必须callback执行
                }else{
                    request
                       .post('/check_quota/isLogin')
                       .end(function(err, res){
                            if(err) userinfo = null;
                            if(res.ok) {
                                var result = JSON.parse(res.text); 
                                if(!result.status) userinfo = null;
                                else{
                                    userinfo.sex = that.person.sex;
                                    userinfo.phone = result.data.phone;
                                    userinfo.userId = result.data.userId;
                                    userinfo.score = localStorage.getItem('CESHENJIA_SCORE');
                                }
                            }
                            callback(userinfo); // 这里必须callback执行
                       }); 
                    
                }
            }
        }
    }
</script>

<style scoped lang="less">
    
</style>