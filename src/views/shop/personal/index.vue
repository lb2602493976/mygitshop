<template>
    <Layout :is-component="true">
        <div class="personal-center">
            <a-menu class="menu">
                <a-menu-item>
                    <router-link to="/personalCenter/myInfo">我的信息</router-link>
                </a-menu-item>
                <a-menu-item>
                    <router-link to="/personalCenter/editInfo">修改信息</router-link>
                </a-menu-item>
                <a-menu-item>
                    <router-link to="/personalCenter/myPoint">我的积分</router-link>
                </a-menu-item>
                <a-menu-item>
                    <router-link to="/personalCenter/recharge">积分充值</router-link>
                </a-menu-item>
                <a-menu-item>
                    <router-link to="/personalCenter/myOrder">我的订单</router-link>
                </a-menu-item>
            </a-menu>
            <div class="view">
                <router-view></router-view>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from '@/views/shop/layout' 
    export default {
        components:{
            Layout,
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="less" scoped>
    .personal-center{
        .flex(row;nowrap;center;stretch;);
        margin-top:24px;
        min-height:560px;
        .border(1px solid #DDD);
        .menu{
            width:240px;
        }
        .view{
            width:calc(~'100% - 240px');
        }
    }
</style>