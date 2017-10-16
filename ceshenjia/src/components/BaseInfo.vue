<template>
    <div class="base-info">
        <template v-if="ttype === 'sex'">
            <v-touch tag="div" class="avatar-sex" v-bind:class="checkedsex" @tap="checkedSex">
                <div class="item1 box"></div>
                <div class="item2 box"></div>
                <div class="item3 box"></div>
            </v-touch>
            <figure class="imgwrap" v-bind:class="{ top: isActive }"><img src="../assets/avatar1.png" alt=""></figure>
        </template>
        <template v-else-if="ttype === 'work'">
            <v-touch tag="div" class="avatar-work" v-bind:class="checkedwork" @tap="checkedWork">
                <div class="item1 box"></div>
                <div class="item2 box"></div>
                <div class="item3 box"></div>
                <div class="item4 box"></div>
                <div class="item5 box"></div>
                <div class="item6 box"></div>
            </v-touch>
            <figure class="imgwrap" v-bind:class="{ top: isActive }"><img src="../assets/avatar2.png" alt=""></figure>
        </template>
        <template v-else-if="ttype === 'salary'">
            <v-touch tag="div" class="avatar-salary" v-bind:class="checkedsalary" @tap="checkedSalary">
                <div class="item1 box"></div>
                <div class="item2 box"></div>
                <div class="item3 box"></div>
                <div class="item4 box"></div>
                <div class="item5 box"></div>
                <div class="item6 box"></div>
            </v-touch>
            <figure class="imgwrap" v-bind:class="{ top: isActive }"><img src="../assets/avatar3.png" alt=""></figure>
        </template>
        <template v-else-if="ttype === 'addr'">
            <v-touch tag="div" class="avatar-addr" v-bind:class="checkedaddr" @tap="checkedAddr">
                <div class="item1 box"></div>
                <div class="item2 box"></div>
                <div class="item3 box"></div>
                <div class="item4 box"></div>
                <div class="item5 box"></div>
                <div class="item6 box"></div>
            </v-touch>
            <figure class="imgwrap" v-bind:class="{ top: isActive }"><img src="../assets/avatar4.png" alt=""></figure>
        </template>
        <template v-else>
            <v-touch tag="div" class="avatar-credit" v-bind:class="checkedcredit" @tap="checkedCredit">
                <div class="item1 box"></div>
                <div class="item2 box"></div>
                <div class="item3 box"></div>
                <div class="item4 box"></div>
            </v-touch>
            <figure class="imgwrap" v-bind:class="{ top: isActive }"><img src="../assets/avatar5.png" alt=""></figure>
        </template>
    </div>
</template>

<script>
    export default{
        name: 'base-info',
        props: {
            ttype: {
                type: String,
                default: 'sex',
            }
        },
        data(){
            return {
                checkedsex:'none',
                checkedwork:'none',
                checkedsalary:'none',
                checkedaddr:'none',
                checkedcredit:'none',

                isActive: false
            }
        },
        methods: {
            checkedSex: function(e){
                var e = e || window.Event;
                var n = e.target.className.split(' ')[0].slice(-1);
                this.checkedsex = 'check-sex' + n;

                // 发送track数据
                var eventid = '';
                if(n==1) eventid = '04004297';
                else if(n==2) eventid = '04200728';
                else eventid = '04307404';
                tracker2.send({
                    pagetype: 'act_ceshengjia',
                    tracking_type: 'click',
                    eventid: eventid
                });

                this.$emit('childSay', {'nextpage':1, 'classes':n, 'sex': n});
            },
            checkedWork: function(e){
                var e = e || window.Event;
                var n = e.target.className.split(' ')[0].slice(-1);
                this.checkedwork = 'check-work' + n;

                // 发送track数据
                var eventid = '';
                if(n==1) eventid = '4908058';
                else if(n==2) eventid = '4972634';
                else if(n==3) eventid = '4233570';
                else if(n==4) eventid = '4280066';
                else if(n==5) eventid = '4349154';
                else eventid = '4412268';
                tracker2.send({
                    pagetype: 'act_ceshengjia',
                    tracking_type: 'click',
                    eventid: eventid
                });


                this.$emit('childSay', {'nextpage':2, 'classes':n, 'type': 'work'});
            },
            checkedSalary: function(e){
                var e = e || window.Event;
                var n = e.target.className.split(' ')[0].slice(-1);
                this.checkedsalary = 'check-salary' + n;

                // 发送track数据
                var eventid = '';
                if(n==1) eventid = '4541193';
                else if(n==2) eventid = '4575125';
                else if(n==3) eventid = '4616987';
                else if(n==4) eventid = '4651333';
                else if(n==5) eventid = '4725382';
                else eventid = '4689866';
                tracker2.send({
                    pagetype: 'act_ceshengjia',
                    tracking_type: 'click',
                    eventid: eventid
                });

                this.$emit('childSay', {'nextpage':3, 'classes':n, 'type': 'salary'});
            },
            checkedAddr: function(e){
                var e = e || window.Event;
                var n = e.target.className.split(' ')[0].slice(-1);
                this.checkedaddr = 'check-addr' + n;

                // 发送track数据
                var eventid = '';
                if(n==1) eventid = '4958507';
                else if(n==2) eventid = '4982976';
                else if(n==3) eventid = '4012957';
                else if(n==4) eventid = '4069130';
                else if(n==5) eventid = '4093782';
                else eventid = '4115311';
                tracker2.send({
                    pagetype: 'act_ceshengjia',
                    tracking_type: 'click',
                    eventid: eventid
                });


                this.$emit('childSay', {'nextpage':4, 'classes':n, 'type': 'addr'});
            },
            checkedCredit: function(e){
                var e = e || window.Event;
                var n = e.target.className.split(' ')[0].slice(-1);
                this.checkedcredit = 'check-credit' + n;

                // 发送track数据
                var eventid = '';
                if(n==1) eventid = '4435041';
                else if(n==2) eventid = '4457608';
                else if(n==3) eventid = '4485230';
                else eventid = '4566228';
                tracker2.send({
                    pagetype: 'act_ceshengjia',
                    tracking_type: 'click',
                    eventid: eventid
                });

                
                this.$emit('childSay', {'nextpage':5, 'classes':n, 'type': 'credit'});
            }
        },
        created: function(){
            this.isActive  = !this.$route.params.isApp;
        }
    }
</script>

<style scoped lang="less">
    .base-info{
        width: 10rem;

        // sex
        .avatar-sex{
            display: -webkit-flex;
            display: flex;
            justify-content:space-around;
            flex-wrap: wrap;
            width: 10rem;
            height: 8.013333rem;
            .box{
                position: relative;
                width: 2.8rem;
                z-index: 2;
            }
        }
        .check-sex1{
            background: url(../assets/a1c1.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-sex2{
            background: url(../assets/a1c2.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-sex3{
            background: url(../assets/a1c3.png) no-repeat;
            background-size: 100% 100%;   
        }


        .imgwrap{
            position: absolute;
            top: 4.346667rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .top{
            top: 5.52rem !important; 
        }
        // work
        .avatar-work{
            display: -webkit-flex;
            display: flex;
            justify-content:space-around;
            flex-wrap: wrap;
            width: 10rem;
            height: 10.933333rem;
            .box{
                position: relative;
                width: 2.8rem;
                z-index: 2;
            }
        }
        .check-work1{
            background: url(../assets/a2c1.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-work2{
            background: url(../assets/a2c2.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-work3{
            background: url(../assets/a2c3.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-work4{
            background: url(../assets/a2c4.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-work5{
            background: url(../assets/a2c5.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-work6{
            background: url(../assets/a2c6.png) no-repeat;
            background-size: 100% 100%;   
        }
        
        // salary
        .avatar-salary{
            display: -webkit-flex;
            display: flex;
            justify-content:space-around;
            flex-wrap: wrap;
            width: 10rem;
            height: 10.266667rem;
            .box{
                position: relative;
                width: 2.8rem;
                z-index: 2;
            }
        }
        .check-salary1{
            background: url(../assets/a3c1.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-salary2{
            background: url(../assets/a3c2.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-salary3{
            background: url(../assets/a3c3.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-salary4{
            background: url(../assets/a3c4.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-salary5{
            background: url(../assets/a3c5.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-salary6{
            background: url(../assets/a3c6.png) no-repeat;
            background-size: 100% 100%;   
        }

        // addr
        .avatar-addr{
            display: -webkit-flex;
            display: flex;
            justify-content:space-around;
            flex-wrap: wrap;
            width: 10rem;
            height: 10.8rem;
            .box{
                position: relative;
                width: 2.8rem;
                z-index: 2;
            }
        }
        .check-addr1{
            background: url(../assets/a4c1.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-addr2{
            background: url(../assets/a4c2.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-addr3{
            background: url(../assets/a4c3.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-addr4{
            background: url(../assets/a4c4.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-addr5{
            background: url(../assets/a4c5.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-addr6{
            background: url(../assets/a4c6.png) no-repeat;
            background-size: 100% 100%;   
        }
        
        // credit
        .avatar-credit{
            display: -webkit-flex;
            display: flex;
            justify-content:space-around;
            flex-wrap: wrap;
            width: 10rem;
            height: 10.52rem;
            .box{
                position: relative;
                width: 5rem;
                z-index: 2;
            }
        }
        .check-credit1{
            background: url(../assets/a5c1.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-credit2{
            background: url(../assets/a5c2.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-credit3{
            background: url(../assets/a5c3.png) no-repeat;
            background-size: 100% 100%;   
        }
        .check-credit4{
            background: url(../assets/a5c4.png) no-repeat;
            background-size: 100% 100%;   
        }
    }
</style>