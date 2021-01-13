<template>
    <div class="container">
        <div v-show="bannerVisible" class="banner">
            <!-- <img @click="handleImgLink(adImg.interlinkPath)" style="width:100%;height:100%;" :src="adImg.photoPath" alt="加载失败..."> -->
            <img @click="handleImgLink(adImg.interlinkPath)" style="width:100%;height:100%;"  alt="加载失败...">
            <a-icon @click.stop="bannerVisible = false" class="close" type="close-circle" />
        </div>
        <a-affix :offset-top="0">
            <div class="main">
                <div class="logo">
                    <img @click="$router.push('/')" style="cursor:pointer;" :src="logoUrl" alt="加载失败...">
                </div>
                <div class="nav">
                    <a-button class="nav-item" type="link">论文服务</a-button>
                    <!-- <a-button class="nav-item" type="link">格式校验</a-button> -->
                </div>
                <div class="search">
                    <a-input-search @search="onSearch" enter-button placeholder="请输入要搜索的论文信息" style="width:100%;padding-right:24px;" />
                </div>
                <div v-if="!isLogin" class="login">
                    <a-button @click="loginVisible = true" type="link" class="button nopadding">登录</a-button>
                    <a-divider type="vertical" />
                    <a-button @click="registerVisible = true" type="link" class="button nopadding">注册</a-button>
                </div>
                <a-dropdown v-else>
                    <div class="account-info">
                        <div class="avatar">
                            <template v-if="allData.headPortrait!=null">
                                <img :src="allData.headPortrait" alt=" . ">
                            </template>
                            <template v-else>
                                {{allData.username.slice(0,1)}}
                                
                            </template>
                        </div>
                        <div class="username">{{allData.username}}</div>
                    </div>
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <router-link class="menu-item-link" to="/personalCenter/myInfo">个人中心</router-link>
                        </a-menu-item>
                        <a-menu-item>
                            <router-link class="menu-item-link" to="/personalCenter/myPoint">我的积分</router-link>
                        </a-menu-item>
                        <a-menu-item>
                            <router-link class="menu-item-link" to="/personalCenter/recharge">积分充值</router-link>
                        </a-menu-item>
                        <a-menu-item>
                            <router-link class="menu-item-link" to="/thesis/history">历史浏览</router-link>
                        </a-menu-item>
                        <a-menu-item>
                            <router-link class="menu-item-link" to="/thesis/collect">我的收藏</router-link>
                        </a-menu-item>
                        <a-menu-item>
                            <router-link class="menu-item-link" to="/thesis/buy">已购买</router-link>
                        </a-menu-item>
                        <a-menu-item>
                            <a-button class="menu-item-link" type="link" icon="poweroff" @click="logout()">退出登录</a-button>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
                
            </div>
        </a-affix>
        <Login @register="registerFromLogin" :visible.sync="loginVisible"></Login>
        <Register :visible.sync="registerVisible"></Register>
    </div>
</template>

<script>
    import { getAd } from '@/api/shop/ad'
    import { indexSearch } from '@/api/shop/search'
    import Login from '@/components/Login'
    import Register from '@/components/Register'
    import { removeToken } from '@/utils/auth.js'
    import { mapState } from "vuex"
    export default {
        components:{
            Login,
            Register,
        },
        data() {
            return {
                loginVisible:false,
                registerVisible:false,
                bannerVisible:true,
                adImg:'',
                logoUrl:require('@/assets/img/shop/logo.png'),
                allData:{
                    headPortrait:'',
                    username:'',
                },
            }
        },
        mounted(){
            getAd({ advertPosition:'top',oneEnd:'pc',advert:'position' }).then(res=>{
                this.adImg = res.data.data[0]
            }),
            this.allData=this.$store.getters.userInfo
            console.log('headerUser',this.allData)
        },
        methods: {
            registerFromLogin() {
                this.loginVisible = false
                this.registerVisible = true
            },
            onSearch(value){
                let data={
                    aString:value,
                }
                return indexSearch(data).then(res=>{
                    console.log("res",res)
                })
            },
            logout(){
                removeToken()
                this.$store.commit("doLogout")
                this.$router.push('/')
            }
        },
        computed:{
            isLogin(){
                return true;
            },
            // user
           ...mapState(["user"])
        },
    }
</script>

<style lang="less" scoped>
    .container{
        .position();
        z-index:950;
        width:100%;
        .banner{
            .position();
            .flex(row;nowrap;center;center);
            background:#333;
            color:#FFF;
            height:50px;
            .close{
                .position(absolute;4px;10px);
            }
        }
        .main{
            background:#FFF;
            height:64px;
            .flex(row;nowrap;space-between;center;);
            &>*{ .space('h',12px) }
            .logo{
                .flex(row;nowrap;center;center;);
                width:220px;
                height:100%;
                img{
                    width:100%;
                }
            }
            .nav{
                .flex(row;nowrap;flex-start;center;);
                flex-grow:1;
                height:100%;
                padding-left:24px;
                .nav-item{
                    font-size:16px;
                    color:rgba(0,0,0,0.65);
                    &:hover{
                        color:@color-theme;
                    }
                }
            }
            .search{
                .flex(row;nowrap;center;center;);
                width:260px;
                height:100%;
            }
            .login{
                .flex(row;nowrap;center;center;);
                width:80px;    
                height:100%;
                .button{
                    color:rgba(0,0,0,0.65);
                    &:hover{
                        color:@color-theme;
                    }
                }
            }
            .account-info{
                .flex(row;nowrap;center;center;);
                padding:0 12px;
                height:100%;
                &:hover{
                    background:#EEE;
                    cursor:pointer;
                };
                .avatar{
                    .radius(50%);
                    .flex(row;nowrap;center;center;);
                    background: @color-theme;
                    width:34px;
                    height:34px;
                    color:#FFF;
                    font-weight:bold;
                    img{
                      border-radius: 50%; 
                      width:34px;
                      height:34px; 
                    }
                }
                .username{
                    .text-ellipsis();
                    margin-left:8px;
                    font-size:16px;
                    
                }
            }
        }
    }
    .menu-item-link{
        width:100%;
        text-align:center;
        margin:0 !important;
        padding:0 !important;
        color:rgba(0,0,0,0.65);
    }
</style>