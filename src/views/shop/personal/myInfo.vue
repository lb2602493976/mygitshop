<template>
    <div class="personal-my-info">
        
        <div class="top">
            <div class="top-left">
                <div class="avatar">
                    <template v-if="allData.headPortrait">
                        <img :src="allData.headPortrait" alt="">
                    </template>
                    <template v-else>
                        {{allData.username.slice(0,1)}}
                    </template>
                </div>
                <div class="info-container" >
                    <div class="username">{{allData.username}}</div>
                    <!-- <div class="account">账号：{{allData.stuPhone}}</div> -->
                    <div class="mobile">手机：{{allData.stuPhone}}</div>
                    <div style="margin-top:50px;">已购模板：<router-link to="/thesis/buy">100个</router-link></div>
                </div>
            </div>
            <div class="top-right">
                <span>积分余额：{{allData.points}}</span>
                <a-button type="link" style="height:auto;line-height:1;padding:0;margin-left:12px;">充值</a-button>
            </div>
        </div>
        <a-divider type="horizontal" />
        <div class="bottom">
            <a-row class="row" type="flex" justify="start" align="middle">
                <a-col class="label" :span="labelWidth">昵称：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.nickName}}</a-col>
                <a-col class="label" :span="labelWidth">姓名：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.name}}</a-col>
            </a-row>
            <a-row class="row" type="flex" justify="start" align="middle">
                <a-col class="label" :span="labelWidth">学校名称：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.collegeName}}</a-col>
                <a-col class="label" :span="labelWidth">专业名称：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.majorName}}</a-col>
            </a-row>
            <a-row class="row" type="flex" justify="start" align="middle">
                <a-col class="label" :span="labelWidth">性别：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.username}}</a-col>
                <a-col class="label" :span="labelWidth">生日：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.username}}</a-col>
            </a-row>
            <a-row class="row" type="flex" justify="start" align="middle">
                <a-col class="label" :span="labelWidth">微信：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.wechat}}</a-col>
                <a-col class="label" :span="labelWidth">QQ：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.username}}</a-col>
            </a-row>
            <a-row class="row" type="flex" justify="start" align="middle">
                <a-col class="label" :span="labelWidth">地区：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.username}}</a-col>
                <a-col class="label" :span="labelWidth">街道：</a-col>
                <a-col class="content" :span="contentWidth">{{allData.username}}</a-col>
            </a-row>
        </div>
        
    </div>
</template>

<script>
import {getUserInfo} from '@/api/shop/info'
    export default {
        data() {
            return {
                labelWidth:2,
                contentWidth:10,
                allData:{
                    username:'',
                    name:'',
                    stuPhone:'',
                    collegeName:'',
                    collegeId:'',
                    majorName:'',
                    majorId:'',
                    nickName:'',
                    points:'',
                    headPortrait:'',
                    wechat:'',
                },
                    
                
            }
        },
        mounted(){
            this.allData=this.$store.getters.userInfo
            console.log('info',this.$store.getters.userInfo)
            console.log('图像',this.allData.headPortrait)
        },
    }
</script>

<style lang="less" scoped>
    .personal-my-info{
        padding:24px;
        .top{
            .flex(row;nowrap;space-between;flex-end;);
            .top-left{
                width:340px;
                height:160px;
                .flex(row;nowrap;flex-start;stretch;);
                .avatar{
                    .radius(50%);
                    .flex(row;nowrap;center;center;);
                    width:160px;
                    height:160px;
                    color:#FFF;
                    background:@color-theme;
                    font-size:50px;
                    img{
                      .radius(50%); 
                      width:160px;
                      height:160px; 
                    }
                }
                .info-container{
                    .flex(column;nowrap;flex-start;flex-start;);
                    margin-left:24px;
                    .username{
                        font-size:28px;
                    }
                }
            }
        }
        .row{
            padding:12px 0;
            .label{
                text-align:right;
            }
            .content{
                text-align:left;
            }
        }
        
    }
</style>