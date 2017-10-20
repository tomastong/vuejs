<template>
    <div class="pages-view">
        <back-bar></back-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import NativeAPI from 'native-api'

    import request from 'superagent'
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
            getUserInfo:function(){
                // 这里容易出现一个问题，就是这个获取app信息的会发生比较慢
                // 容易先执行下面的callback(null)
                var promise = new Promise(function(resolve, reject){
                    var userinfo = {};
                    NativeAPI.invoke('getUserInfo', null, (data)=>{
                        if(data && data.phone) userinfo.token = data.token;
                        else userinfo = null;
                        resolve(userinfo);
                    });
                });
                return promise;
            },
            // 判断是否登录，返回用户phone和id
            isLogin: function(callback){
                if(this.isApp){
                    this.getUserInfo().then(function(userinfo){
                            callback(userinfo);    
                    });
                }else{
                    var userinfo = {};
                    request.post('/check_quota/isLogin')
                       .end(function(err, res){
                            if(res.ok) {
                                var result = JSON.parse(res.text); 
                                if(!result.status) userinfo = null;
                                else{
                                    userinfo.phone = result.data.phone;
                                    userinfo.userId = result.data.userId;  
                                }
                                callback(userinfo);
                            }else
                                callback(null);
                       }); 
                }
            },
            // 是true，否false玩过游戏
            isPlayGame: function(callback){
                var that = this, flag = false;
                this.isLogin(function(user){
                    if(!!user)
                    request
                       .post('/check_quota/getNewRecord')
                       .send(user)
                       .end(function(err, res){
                            // 请求成功，而且activeResult字段存在
                            if(res.ok) {
                                var result = JSON.parse(res.text); 
                                if (result.status && result.data.activeResult){   
                                    that.reslevel = result.data.activeResult;
                                    flag = true;
                                    console.log(result);
                                }
                                else
                                    flag = false;
                                callback(flag);
                            }else
                                callback(false);
                       });
                    else
                        callback(false);
                })
            },
            deployBusiness:function(){
                var that = this;
                this.isPlayGame(function(flag){
                    if(flag){   // 玩过游戏
                        that.$router.push({name:'SecondView', params:{'level': that.reslevel, 'isApp':that.isApp}});
                        }
                    else{       // 第一次玩游戏，有成绩缓存
                        if(window.localStorage && localStorage.getItem('CESHENJIA_PERSON')){
                            that.reslevel = localStorage.getItem('CESHENJIA_PERSON');
                            that.$router.push({name:'SecondView', params:{'level': that.reslevel, 'isApp':that.isApp}});
                        }else{
                            // 无登录第一次或者第一次登录玩游戏
                            bus.$emit('isShowVw','');
                        }
                    }
                });
            }
        },
        created: function(){
            var that = this;
            bus.$on('isHaveBar',  function(data){
                that.isApp = true;
            });
        },
        mounted: function(){
            this.deployBusiness();
        }
    }
</script>

<style scoped>
    .pages-view{
        width: 10rem;
    }
</style>    
