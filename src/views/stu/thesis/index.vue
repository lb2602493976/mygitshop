<template>
  <div class="container">
    <div class="title">
      <div class="s1">论文设置</div> 
    </div>
    <div class="content">
      <div class='one'>
        <a-input class="input1" addon-before="学校" placeholder="请选择学校" size='large' @click="showModal"/>
        <a-button class="one_button" size='large' @click="showModal">选择</a-button>
      </div>
      <div class='two'>
        <a-input class="input" addon-before="专业" placeholder="请输入专业" size='large'/>
        <a-input class="input" addon-before="班级" placeholder="请输入班级" size='large'/>
        <a-input class="input" addon-before="题目" placeholder="请输入题目" size='large'/>
        <a-input class="input" addon-before="作者" placeholder="请输入作者" size='large'/>
        <a-input class="input" addon-before="一导师" placeholder="请输入一级导师" size='large'/>
        <a-input class="input" addon-before="二导师" placeholder="请输入二级导师" size='large'/>
      </div>
      <div class="btn">
        <a-button size='large'>提交修改</a-button>
      </div>
    </div>
    <Address 
      :visible.sync="visible"
      :confirm-loading="confirmLoading"
      >
    </Address>
  </div>
</template>

<script>
import Address from "@/components/Address.vue"
export default {
  components:{
    Address,
  },
  name: 'container',
  data() { 
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  },
  methods:{
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false;
    },
  },
 }
</script>

<style lang="less" scoped>
  .container{
    text-align: left;
    width:980px;
    // height:630px;
    padding: 20px;
    // 头
    .title{
      width:940px;
      height:55px;
      margin: 0px 0px 10px;
      background: #f2f2f2;
      padding: 15px;
      margin-bottom: 10px;
      border-left: 5px solid #f395d2;
      .s1{
        font-size: 20px;
        font-weight: 300;

      }
    }
    .content{
      .one{
        .input1{
        width:460px;
        height:38px;
        margin-bottom: 15px;
       }
       .one_button{
         width:110px;
         margin-left: 10px;
       }
      }
      .two{
        .input{
        width:580px;
        height:38px;
        margin-bottom: 15px;
        }
      }
      .btn{
        margin-top: 10px;;
      }
      
    }
  }
</style>