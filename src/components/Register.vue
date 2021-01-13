<template>
    <div id="container">
        <a-modal :footer="null" v-model="modalVisible" title="注册" width="400px">
            <a-tabs default-active-key="1" @change="handleTabChange">
            <!-- <a-tabs default-active-key="1"> -->
                <a-tab-pane key="1" tab="手机注册" force-render>
                    <a-form :form="mobileRegisterForm" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" @submit="handleMobileSubmit">
                        <!-- <a-form-item label="学校">
                            <a-input
                                type="text"
                                v-model="params.collegeId"
                                placeholder="请输入学校名称"
                                v-decorator="['collegeId', { rules: [{ required: true, message: '请输入学校名称!', trigger: 'blur' }] }]"
                            >
                                <a-icon slot="prefix" type="user" />
                            </a-input>
                        </a-form-item>
                        <a-form-item label="专业">
                            <a-input
                                type="text"
                                v-model="params.majorId"
                                placeholder="请输入专业名称"
                                v-decorator="['majorId', { rules: [{ required: true, message: '请输入专业名称!' }] }]"
                            >
                                <a-icon slot="prefix" type="user" />
                            </a-input>
                        </a-form-item> -->

                        <a-form-item label="用户名">
                            <a-input
                                type="text"
                                v-model="params.username"
                                placeholder="请输入用户名"
                                v-decorator="['username', { rules: [{ required: true, message: '请输入用户名!' }] }]"
                            >
                                <a-icon slot="prefix" type="user" />
                            </a-input>
                        </a-form-item>
                        <a-form-item label="密码">
                            <a-input
                                type="password"
                                v-model="params.password"
                                placeholder="请输入密码"
                                v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
                            >
                                <a-icon slot="prefix" type="lock" />
                            </a-input>
                        </a-form-item>
                        <a-form-item label="密码确认">
                            <a-input
                                type="password"
                                placeholder="请再次输入密码"
                                v-decorator="['password', { rules: [{ required: true, message: '请再次输入密码!' }] }]"
                            >
                                <a-icon slot="prefix" type="lock" />
                            </a-input>
                        </a-form-item>
                        <a-form-item label="手机号">
                            <a-input
                                type="text"
                                v-model="params.stuPhone"
                                placeholder="请输入手机号"
                                v-decorator="['stuPhone', { rules: [{ required: true, message: '请输入手机号!' }] }]"
                            >
                                <a-icon slot="prefix" type="mobile" />
                            </a-input>
                        </a-form-item>
                        <a-form-item label="验证码">
                            <a-row type="flex" justify="space-between" align="middle" :gutter="12">
                                <a-col :span="14">
                                    <a-input
                                        type="text"
                                        placeholder="请输入验证码"
                                        v-model="params.verifyCode"
                                        v-decorator="['verifyCode', { rules: [{ required: true, message: '请输入验证码!' }] }]"
                                    >
                                        <a-icon slot="prefix" type="lock" />
                                    </a-input>
                                </a-col>
                                <a-col :span="10">
                                    <a-button>获取验证码</a-button>
                                </a-col>
                            </a-row>
                        </a-form-item>
                        <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
                            <a-button type="primary" html-type="submit" @click="handleRegister()" block>注册</a-button>
                        </a-form-item>
                    </a-form>
                </a-tab-pane>
                <!-- <a-tab-pane key="2" tab="邮箱注册" force-render>
                    <div class="login">
                        <a-form :form="emileRegisterForm" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" @submit="handleEmailSubmit">
                            <a-form-item label="用户名">
                                <a-input
                                    type="text"
                                    placeholder="请输入用户名"
                                    v-decorator="['account', { rules: [{ required: true, message: '请输入用户名!' }] }]"
                                >
                                    <a-icon slot="prefix" type="user" />
                                </a-input>
                            </a-form-item>
                            <a-form-item label="密码">
                                <a-input
                                    type="password"
                                    placeholder="请输入密码"
                                    v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
                                >
                                    <a-icon slot="prefix" type="lock" />
                                </a-input>
                            </a-form-item>
                            <a-form-item label="密码确认">
                                <a-input
                                    type="password"
                                    placeholder="请再次输入密码"
                                    v-decorator="['password', { rules: [{ required: true, message: '请再次输入密码!' }] }]"
                                >
                                    <a-icon slot="prefix" type="lock" />
                                </a-input>
                            </a-form-item>
                            <a-form-item label="邮箱">
                                <a-input
                                    type="text"
                                    placeholder="请输入邮箱"
                                    v-decorator="['email', { rules: [{ required: true, message: '请输入邮箱!' }] }]"
                                >
                                    <a-icon slot="prefix" type="mail" />
                                </a-input>
                            </a-form-item>
                            <a-form-item label="验证码">
                                <a-row type="flex" justify="space-between" align="middle" :gutter="12">
                                    <a-col :span="14">
                                        <a-input
                                            type="text"
                                            placeholder="请输入验证码"
                                            v-decorator="['code', { rules: [{ required: true, message: '请输入验证码!' }] }]"
                                        >
                                            <a-icon slot="prefix" type="lock" />
                                        </a-input>
                                    </a-col>
                                    <a-col :span="10">
                                        <a-button>获取验证码</a-button>
                                    </a-col>
                                </a-row>
                            </a-form-item>
                            <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
                                <a-button type="primary" html-type="submit" block>注册</a-button>
                            </a-form-item>
                        </a-form>
                        
                    </div>
                </a-tab-pane> -->
            </a-tabs>
        </a-modal>
    </div>
</template>

<script>
import {register} from "@/api/shop/register"
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
            },
            modalVisible(val){
                this.$emit('update:visible',val)
            },
        },
        data() {
            return {
                params:{
                    username:'',
                    password:'',
                    stuPhone:'',
                    verifyCode:'',
                    // collegeId:'1',
                    // majorId:'1',
                },
                rememberMe:false,
                modalVisible:false,
                mobileRegisterForm:this.$form.createForm(this, { name: 'mobileRegisterForm' }),
                emileRegisterForm:this.$form.createForm(this, { name: 'emileRegisterForm' }),

            }
        },
        methods: {
            handleRegister(){
                // let data={
                //     username:this.username,
                //     password:this.password,
                //     stuPhone:this.stuPhone,
                //     verifyCode:this.verifyCode,
                //     collegeId:'1',
                //     majorId:'1'
                // }
                return register(this.params).then(res=>{
                    if(res.data.code==200){
                      console.log("res",res)
                      this.$message.success('注册成功');
                      this.modalVisible=false
                    }else{
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