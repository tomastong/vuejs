<template>
    <div class="title">
        <div class="sex bg" v-if="ttype === 'sex'"></div>      
        <div class="work bg" v-else-if="ttype === 'work'"></div>      
        <div class="salary bg" v-else-if="ttype === 'salary'"></div>      
        <div class="addr bg" v-else-if="ttype === 'addr'"></div>      
        <div class="credit bg" v-else></div>      
    </div>
</template>

<script>
    export default{
        name: 'title',
        props: {
            ttype : {
                type: String,
                default: 'sex'
            }
        }
    }
</script>

<style scoped lang="less">
    .title{
        .bg{
            width: 10rem;
            height: 4.346667rem;
        }
        .sex{
            background: url(../assets/tsex.png) no-repeat;
            background-size: 100% 100%;
        }
        .work{
            background: url(../assets/twork.png) no-repeat;
            background-size: 100% 100%;
        }
        .salary{
            background: url(../assets/tsalary.png) no-repeat;
            background-size: 100% 100%;
        }
        .addr{
            background: url(../assets/taddr.png) no-repeat;
            background-size: 100% 100%;
        }
        .credit{
            background: url(../assets/tcredit.png) no-repeat;
            background-size: 100% 100%;
        }
    }

</style>