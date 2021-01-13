<template>
    <div id="container">
        <a-modal :footer="null" v-model="modalVisible" title="登录" width="400px">
            <!-- <a-tabs default-active-key="1" @change="handleTabChange">
                <a-tab-pane key="1" tab="手机登录" force-render>
                    <a-form :form="mobileLoginForm" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" @submit="handleMobileSubmit">
                        <a-form-item label="手机号">
                            <a-input
                                type="text"
                                placeholder="请输入手机号"
                                v-decorator="['phone', { rules: [{ required: true, message: '请输入手机号!' }] }]"
                            >
                                <a-icon slot="prefix" type="mobile" />
                            </a-input>
                        </a-form-item>
                        <a-form-item label="密码">
                            <a-input
                                type="text"
                                placeholder="请输入密码"
                                v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
                            >
                                <a-icon slot="prefix" type="lock" />
                            </a-input>
                        </a-form-item>
                        <a-row type="flex" justify="space-between" align="middle">
                            <a-col>
                                <a-checkbox @click="rememberMe = !rememberMe" :checked="rememberMe">记住我</a-checkbox>
                                <a-divider type="vertical"/>
                                <a-button type="link">忘记密码？</a-button>
                            </a-col>
                            <a-col>
                                <a-button type="link">去注册</a-button>
                            </a-col>
                        </a-row>
                        <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
                            <a-button type="primary" html-type="submit" block>登录</a-button>
                        </a-form-item>
                    </a-form>
                </a-tab-pane>
                <a-tab-pane key="2" tab="邮箱登录" force-render>
                    <div class="login">
                        <a-form :form="emileLoginForm" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" @submit="handleEmailSubmit">
                            <a-form-item label="邮箱">
                                <a-input
                                    type="text"
                                    placeholder="请输入邮箱"
                                    v-decorator="['phone', { rules: [{ required: true, message: '请输入邮箱!' }] }]"
                                >
                                    <a-icon slot="prefix" type="mail" />
                                </a-input>
                            </a-form-item>
                            <a-form-item label="密码">
                                <a-input
                                    type="text"
                                    placeholder="请输入密码"
                                    v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
                                >
                                    <a-icon slot="prefix" type="lock" />
                                </a-input>
                            </a-form-item>
                            <a-row type="flex" justify="space-between" align="middle">
                                <a-col>
                                    <a-checkbox @click="rememberMe = !rememberMe" :checked="rememberMe">记住我</a-checkbox>
                                    <a-divider type="vertical"/>
                                    <a-button type="link">忘记密码？</a-button>
                                </a-col>
                                <a-col>
                                    <a-button type="link">去注册</a-button>
                                </a-col>
                            </a-row>
                            <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
                                <a-button type="primary" html-type="submit" block>登录</a-button>
                            </a-form-item>
                        </a-form>
                        
                    </div>
                </a-tab-pane>
            </a-tabs> -->
            <a-tabs default-active-key="1" @change="handleTabChange">
                <a-tab-pane key="1" tab="用户名登录" force-render>
                    <a-form :form="mobileLoginForm" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" @submit="handleSubmit">
                        <a-form-item label="用户名">
                            <a-input
                                type="text"
                                placeholder="请输入手机号/用户名/邮箱"
                                v-model="params.username"
                                v-decorator="['username', { rules: [{ required: true, message: '请输入手机号/用户名/邮箱!' }] }]"
                            >
                                <a-icon slot="prefix" type="mobile" />
                            </a-input>
                        </a-form-item>
                        <a-form-item label="密码">
                            <a-input
                                type="password"
                                placeholder="请输入密码"
                                v-model="params.password"
                                v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
                            >
                                <a-icon slot="prefix" type="lock" />
                            </a-input>
                        </a-form-item>
                        <a-row type="flex" justify="space-between" align="middle">
                            <a-col>
                                <a-checkbox @click="rememberMe = !rememberMe" :checked="rememberMe">记住我</a-checkbox>
                                <a-divider type="vertical" style="margin:0;"/>
                                <a-button type="link">忘记密码？</a-button>
                            </a-col>
                            <a-col>
                                <a-button type="link" @click="$emit('register')">去注册</a-button>
                            </a-col>
                        </a-row>
                        <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
                            <a-button @click="stuLogin" type="primary" html-type="submit" block>登录</a-button>
                        </a-form-item>
                    </a-form>
                </a-tab-pane>
                <a-tab-pane key="2" tab="微信扫码登录" force-render>
                    <div id="wechat_qr_code_container"></div>
                </a-tab-pane>
            </a-tabs>
            
        </a-modal>
    </div>
</template>

<script>
import {login} from "@/api/shop/login.js"
import {setToken,TokenKey} from "@/utils/auth.js"
    export default {
        props:{
            visible:{
                type:Boolean,
                default(){
                    return false
                },
            }
        },
        watch:{
            visible(val){
                this.modalVisible = val
                if(val){
                    this.$nextTick(()=>{
                        this.wechatLogin = new WxLogin({
                            id:"wechat_qr_code_container",//div的id
                            appid: "",
                            scope: "snsapi_login",//写死
                            redirect_uri:encodeURI("http://192.168.0.115:8080/#/") ,
                            state: "",
                            style: "black",//二维码黑白风格        
                            // href: "https://某个域名下的css文件"
                        });
                    })
                    
                }
            },
            modalVisible(val){
                this.$emit('update:visible',val)
            },
        },
        data() {
            return {
                userHidden:false,// 显示隐藏用户
                wechatLogin:null,
                rememberMe:false,
                modalVisible:false,
                mobileLoginForm:this.$form.createForm(this, { name: 'mobileLoginForm' }),
                emileLoginForm:this.$form.createForm(this, { name: 'emileLoginForm' }),
                params:{
                  username:'',
                  password:'',
                  type:1,
                },
            }
        },
        mounted(){
            
        },
        methods: {
            stuLogin(){
                
              return login(this.params).then(res=>{
                if(res.data.code==200){
                    console.log("res",res)
                    setToken(res.data.data.token)
                    this.$store.dispatch('GetUserInfo').then(()=>{
                        console.log(this.$store.getters.userInfo)
                    })
                    this.$message.success('登录成功');
                    this.userHidden=true
                    this.modalVisible=false
                }else{
                    // alert(`登录失败：${res.data.msg}`)
                    this.$message.error({content:res.data.msg})
                }
              })
            },
            handleOk() {
                this.$emit('ok',this)
            },
            handleMobileSubmit(){

            },
            handleEmailSubmit(){

            },
            handleSubmit(){

            },
            handleTabChange(){

            }
        },
    }
</script>

<style lang="less" scoped>
    .bottom{
        padding:0 10% 0 18%;
    }
</style>