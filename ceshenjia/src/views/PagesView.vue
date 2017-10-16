<template>
    <div class="pages-view">
        <back-bar></back-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import request from 'superagent'
    import jsonp from 'superagent-jsonp'

    import NativeAPI from 'native-api'
    import BackBar from '../components/BackBar'
    import { bus } from '../bus/bus'

    export default{
        name: 'pages-view',
        data(){
            return {
                isApp: false,  
                reslevel: ''  // 历史结果页面
            }
        },
        components : {BackBar},
        methods: {
            // 判断是否登录，返回用户phone和id
            isLogin: function(callback){
                var userinfo = {};
                if(this.isApp){
                    NativeAPI.invoke('getUserInfo', null, (data)=>{
                        if(data.error)  userinfo = null;
                        userinfo.userId = data.user_id;
                        userinfo.phone = data.phone;
                        callback(userinfo);
                    })
                    
                }else{
                    request.post('/check_quota/isLogin')
                       .end(function(err, res){
                            if(err) userinfo = null;
                            if(res.ok) {
                                var result = JSON.parse(res.text); 
                                if(!result.status) userinfo = null;
                                else{
                                    userinfo.phone = result.data.phone;
                                    userinfo.userId = result.data.userId;  
                                }
                            }
                            callback(userinfo);
                       }); 
                }
            },
            // 是true，否false玩过游戏
            isPlayGame: function(callback){
                var that = this, flag = false;
                this.isLogin(function(user){
                    if(user == null)  flag = false;
                    request
                       .post('/check_quota/getNewRecord')
                       .send(user)
                       .end(function(err, res){
                            // 请求成功，而且activeResult字段存在
                            if(err) flag = false;
                            var result = JSON.parse(res.text); 
                            if (result.status && result.data.activeResult){   
                                that.reslevel = result.data.activeResult;
                                flag = true;
                            }
                            flag = false;
                            callback(flag);
                            
                       });
                })
                


            },
            deployBusiness:function(){
                var that = this;
                this.isPlayGame(function(flag){
                    if(flag)   // 玩过游戏
                        that.$router.push({name:'SecondView', params:{'level': that.reslevel, 'isApp':that.isApp}});
                    else       // 第一次玩游戏
                        if(window.localStorage && localStorage.getItem('CESHENJIA_PERSON')){
                            that.reslevel = localStorage.getItem('CESHENJIA_PERSON');
                            that.$router.push({name:'SecondView', params:{'level': that.reslevel, 'isApp':that.isApp}});
                        }
                })


            }
        },
        created: function(){
            var that = this;
            bus.$on('isHaveBar',  function(data){
                that.isApp = true;
            });

            this.deployBusiness();
        }
    }
</script>

<style scoped>
    .pages-view{
        width: 10rem;
    }
</style>    
