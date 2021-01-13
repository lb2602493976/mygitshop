<template>
    <div class="edit-info-container">
        <a-tabs type="card" tab-position="top" @change="tabClick">
            <a-tab-pane key="1" tab="基本信息" >
                <div class="item-container">
                    <div class="item"><a-input :value="params.nickName" @input="setNickName" addon-before="昵称"/></div>
                    <div class="item"><a-input :value="params.name" @input="setName" addon-before="姓名"/></div>
                    <!-- <div class="item"><a-input :value="allData.collegeName" addon-before="学校名称"/><div> -->
                    <!-- <div class="item"><a-input :value="allData.majorName" addon-before="专业名称"/></div> -->

                    <!-- <div class="item"><a-input addon-before="地区" v-model=""/></div>
                    <div class="item"><a-input addon-before="街道" v-model=""/></div> -->
                    <!-- <div class="item">
                         <a-select :default-value="params.collegeName" style="width:100%;" @change="schoolChange" placeholder="请选择学校">
                            <a-select-option value="jack">
                                Jack
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="item">
                         <a-select :default-value="params.collegeName" style="width:100%;" @change="schoolChange" placeholder="请选择专业">
                            <a-select-option value="jack">
                                Jack
                            </a-select-option>
                        </a-select>
                    </div> -->

                </div>
                <div class="footer">
                    <a-button class="button" type="primary" @click="reset()">重置</a-button>
                    <a-button class="button" type="primary" @click="updateUser()">保存</a-button>
                </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="更换头像">
                <div class="avatar-container" :class="{ empty:!avatar }">
                    <!-- <img v-show="avatar" :src="avatar" alt="加载失败...">
                    <span v-show="!avatar">暂无头像</span> -->
                    <img v-show="avatar" :src="avatar" alt="加载失败...">
                    <span v-show="!avatar">暂无头像</span>
                </div>
                <div class="avatar-tip">建议尺寸168*168，支持jpg、png、gif，最大不能超过5M</div>
                <div class="avatar-container-footer">
                    <a-button @click="$refs['imgSelector'].click()" icon="file-image" class="button" type="primary">选择图片</a-button>
                    <a-button icon="form" class="button" type="primary" @click="updateAvatar()">确认修改</a-button>
                </div>
            </a-tab-pane>
            <a-tab-pane key="3" tab="修改密码">
                <div class="item-container">
                    <div class="item"> <a-input :value="params.nickName" disabled addon-before="昵称" /> </div>
                    <div class="item"><a-input type="password" v-model="oldPass" @input="oldPassChange" addon-before="旧密码" v-decorator="['oldPass', { rules: [{ required: true, message: '请输入原密码!' }] }]"/></div>
                    <div class="item"><a-input type="password" v-model="password" @input="passwordChange" addon-before="新密码" v-decorator="['password', { rules: [{ required: true, message: '新密码不能为空!' }] }]"/></div>
                    <div class="item"><a-input type="password" v-model="password1" @change="password1Change" addon-before="新密码确认"/></div>
                </div>
                <div class="footer">
                    <a-button class="button" type="primary" @click="updatePass()">确认修改</a-button>
                </div>
            </a-tab-pane>
            <a-tab-pane key="4" tab="账号绑定">
                <ul class="bind-list">
                    <li class="bind-item">
                        <a-row class="row" type="flex" justify="start" align="middle">
                            <a-col :span="1" class="col"><a-icon type="check" /></a-col>
                            <a-col :span="2" class="col">已绑定</a-col>
                            <a-col :span="2" class="col">手机绑定</a-col>
                            <a-col :span="16" class="col">绑定后可通过手机找回密码，并接收系统通知</a-col>
                            <a-col :span="3" class="col">
                                <a-button v-if="true" type="link">修改</a-button>
                                <a-button v-else type="link">绑定</a-button>
                            </a-col>
                        </a-row>
                    </li>
                    <li class="bind-item">
                        <a-row class="row" type="flex" justify="start" align="middle">
                            <a-col :span="1" class="col"><a-icon type="check" /></a-col>
                            <a-col :span="2" class="col">已绑定</a-col>
                            <a-col :span="2" class="col">邮箱绑定</a-col>
                            <a-col :span="16" class="col">绑定后可通过邮箱找回密码，并接收系统通知</a-col>
                            <a-col :span="3" class="col">
                                <a-button v-if="true" type="link">修改</a-button>
                                <a-button v-else type="link">绑定</a-button>
                            </a-col>
                        </a-row>
                    </li>
                    <!-- <li class="bind-item">
                        <a-row class="row" type="flex" justify="start" align="middle">
                            <a-col :span="1" class="col"><a-icon type="check" /></a-col>
                            <a-col :span="2" class="col">已绑定</a-col>
                            <a-col :span="2" class="col">QQ绑定</a-col>
                            <a-col :span="16" class="col">绑定后可使用QQ直接登录</a-col>
                            <a-col :span="3" class="col">
                                <a-button v-if="true" type="link">修改</a-button>
                                <a-button v-else type="link">绑定</a-button>
                            </a-col>
                        </a-row>
                    </li> -->
                    <li class="bind-item">
                        <a-row class="row" type="flex" justify="start" align="middle">
                            <a-col :span="1" class="col"><a-icon type="check" /></a-col>
                            <a-col :span="2" class="col">已绑定</a-col>
                            <a-col :span="2" class="col">微信绑定</a-col>
                            <a-col :span="16" class="col">绑定后可使用微信扫码登录</a-col>
                            <a-col :span="3" class="col">
                                <a-button v-if="true" type="link">修改</a-button>
                                <a-button v-else type="link">绑定</a-button>
                            </a-col>
                        </a-row>
                    </li>
                    <!-- <li class="bind-item">
                        <a-row class="row" type="flex" justify="start" align="middle">
                            <a-col :span="1" class="col"><a-icon type="check" /></a-col>
                            <a-col :span="2" class="col">已绑定</a-col>
                            <a-col :span="2" class="col">新浪微博</a-col>
                            <a-col :span="16" class="col">绑定后可使用微博登录</a-col>
                            <a-col :span="3" class="col">
                                <a-button v-if="true" type="link">修改</a-button>
                                <a-button v-else type="link">绑定</a-button>
                            </a-col>
                        </a-row>
                    </li> -->
                </ul>
            </a-tab-pane>
        </a-tabs>
        <input v-show="false" ref="imgSelector" type="file" accept="image/*" @change="handleFileChange">
    </div>
</template>

<script>
import {updatePass,updateUserInfo,updateImage} from '@/api/shop/info.js'
import { removeToken } from '@/utils/auth.js'
import { mapState } from "vuex"
    export default {
        data() {
            return {
                avatar:'',
                allData:[],
                oldPass:'', //原密码
                password:'', //新密码 
                password1:'', //新密码确定 
                params:{
                  nickName:'',
                  name:'',
                },
               
            }
        },
        mounted(){
            // 获取基本信息
            this.allData=this.$store.getters.userInfo
            if(this.allData!=''){
             this.params.nickName=this.allData.nickName
             this.params.name=this.allData.name
            }else{
             this.params.nickName=''
             this.params.name=''
            }
            
            console.log('nickName',this.params.nickName)
            console.log('info',this.$store.getters.userInfo)
        },
        methods: {
            tabClick() {
                
            },
            // 修改图像
            handleFileChange(e){
                if(this.avatar) URL.revokeObjectURL(this.avatar)
                let file = e.target.files[0]
                this.avatar = URL.createObjectURL(file)
                console.log("file",this.avatar)
                // console.log("value",e.target.value)
                e.target.value = ''
            },
            // 修改图像确认接口
            updateAvatar(){
              return  updateImage({headPortrait:this.avatar}).then(res=>{
                 if(res.data.code==200){
                     this.$message.success({content:res.data.msg})
                 }else if(params.headPortrait==""){
                     this.$message.error("请选择照片")
                 }else{
                     this.$message.error({content:res.data.msg})
                 }
              })
            },
            // 昵称和姓名变化
            setNickName(e){
                console.log(e.target.value)
                this.params.nickName=e.target.value
            },
            setName(e){
                console.log(e.target.value)
                this.params.name=e.target.value
            },
            // 学校专业变化
            schoolChange(value){
                console.log(value)
            },
            // 点击修改基本信息
            updateUser(){
                console.log(this.params.nickName)
                console.log(this.params.name)
                return updateUserInfo(this.params).then(res=>{
                  console.log("修改信息",res)
                  this.$message.success("修改成功")
                //   this.getInfo()
                  this.$store.getters.userInfo
                })
            },
            // 重置
            reset(){
                this.params.nickName=""
                this.params.name=""
            },

            // 密码变化
            oldPassChange(e){
                this.oldPass=e.target.value
                console.log(e.target.value)
            },
            passwordChange(e){
                this.password=e.target.value
                console.log(e.target.value)
            },
            password1Change(e){
                this.password1=e.target.value
                console.log(e.target.value)
            },
            // 修改密码
            updatePass(){
                if(this.password!=this.password1){
                    console.log("两次输入密码不一致")
                }
                let data={
                   oldPass:this.oldPass,
                   password:this.password,

                }
                return updatePass(data).then(res=>{
                    if(res.data.code==200){
                        
                        this.$message.success('密码修改成功请重新登录');
                        removeToken()
                        this.$store.commit("doLogout")
                        this.$router.push('/')
                    }else{
                        this.$message.error({content:res.data.msg})
                    }
                })
            }
        },
        computed:{
            // user
           ...mapState(["user"])
        },
    }
</script>

<style lang="less" scoped>
    .edit-info-container{
        box-sizing:border-box;
        padding:24px;
        .item-container{
            width:100%;
            .item{
                width:600px;
                .space('v';24px;)
            }
        }
        .avatar-container{
            .center-w();
            .border(1px dashed @color-theme);
            margin-top:24px;
            width:260px;
            height:260px;
            &.empty{
                .flex(row;nowrap;center;center;)
            }
            img{
                width:100%;
                height:100%;
            }
        }
        .footer{
            .flex(row;nowrap;flex-start;center;);
            margin-top:24px;
            .button{
                .space('h',12px);
            }
        }
        .avatar-tip{
            margin:24px auto;
            color:rgba(0,0,0,0.65);
        }
        .avatar-container-footer{
            .footer;
            .flex(row;nowrap;center;center;);
            .button{
                .space('h';24px);
            }
        }
        .bind-list{
            .bind-item{
                .divider('v';1px solid #EEE);
                box-sizing:border-box;
                padding:6px 0;
                .row{
                    .col{
                        &:first-child,&:nth-child(3){
                            color:@color-theme;
                        }
                        .flex(row;nowrap;flex-start;center;);
                    }
                }
            }
        }
    }
    
</style>
<style lang="less">
    .edit-info-container{
        .ant-tabs-nav-scroll{
            .flex(row;nowrap;flex-start;center;);
        }
        .ant-input-group-addon{
            min-width:120px;
        }
    }
    
</style>