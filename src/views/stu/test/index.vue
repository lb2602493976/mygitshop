<template>
  <div class="container">
    <!-- 头 -->
    <div class="title">
      <div class="s1">提交文档</div> 
    </div>
    <div class="text">每个学校有不同的论文格式要求，请选择合适的模板以保证检测准确。</div>
    <!-- 内容 -->
    <div class="content">
      <div class="school" >
        <div class="text1">学校</div>
        <a-input class="input" aria-placeholder="请选择学校" @click="showModal"/>
        <a-button class='btn1' size="large" @click="showModal">选择</a-button>
      </div>

      <div style="display:flex;">
        <div class="template">
          <div class="text1">模板</div>
        </div>
        <div class="template2">
          <div class="text2">
            <div class="name">名称</div>
            <div class="time">发布时间</div>
          </div>
          <!-- 模板内容 -->
          <div class="thesis" v-for="(item,i) of ceshi" :key="i">
            <a-radio></a-radio>
            <div class="texta">
              <div class="texta">
                {{item.a}}
              </div>
            </div>
            <div class="textb">
                {{item.b}}
            </div>
          </div>
       </div>
      </div>
      <!-- 按钮 -->
      <div class="btn">
        <a-button size="large">下一步</a-button>
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
      ceshi:[
        {a:'xxx大学学xxxxxxxxxxxx论文模板',b:'2020-11-26'},
        {a:'aaa大学学xxxxxxxxxxxx论文模板',b:'2020-11-16'},
        {a:'bbb大学学xxxxxxxxxxxx论文模板',b:'2020-11-06'},
        {a:'ccc大学学xxxxxxxxxxxx论文模板',b:'2020-12-06'},
        {a:'ddd大学学xxxxxxxxxxxx论文模板',b:'2020-10-06'},
      ],
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
    .title{
      width:940px;
      height:55px;
      margin: 0px 0px 10px;
      background: #f2f2f2;
      padding: 15px;
      border-left: 5px solid #f395d2;
      .s1{
        font-size: 20px;
        font-weight: 300;

      }
    }
    .text{
        width:940px;
        height:55px;
        color:#808080;
        padding:20px;
        border: 1px dashed #e2e2e2;
        border-bottom: 0;
    }
    .content{
      width:940px;
      height:450px;
      margin: 0px 0px 15px;
      color:#000000;
      border: 1px dashed #e2e2e2;
      padding: 15px;
      min-width: 500px;
      .school{
        width:908px;
        height:38px;
        margin: 0px 0px 15px;
        // background: #f395d2;
        display: flex;
        .text1{
          width:110px;
          height:38px;
          padding: 9px 15px;
          text-align: right;
        }
        .input{
          width:190px;
          height:38px;
          margin-left: 10px;
        }
        .btn1{
          width:64px;
          height:38px;
          margin-left:2px;
        }
      }
      .template{
        width:908px;
        margin: 0px 0px 15px;
        display: flex;
        // border-bottom: 1px solid #f2f2f2;
        .text1{
          width:110px;
          height:38px;
          padding: 9px 15px;
          text-align: right;
        }
      }
      .template2{
        width:798px;
        height:212px;
        margin: 0 0 0 10px;
        .text2{
          width:795px;
          height:43px;
          padding: 10px 0px 8px;
          display: flex;
          .name{
          width:400px;
          height:19px;
          margin: 0px 10px 5px 0px;
          }
          .time{
            width:150px;
            height:19px;
            margin: 0px 10px 5px 0px;
          }
        }
        .thesis{
          display: flex;
          width:795px;
          height:42px;
          padding: 10px 0px 8px;
          border-bottom: 1px solid #f2f2f2;
          .texta{
            width: 380px;
            height: 18px;
            margin: 0px 10px 5px 0px;
            .textaa{
            width:309px;
            height:18px;
            margin: -5px 0 0 ;
            padding-right: 15px;
            }
          }
          .textab{
            width:150px;
            height:16px;
            margin: 0px 10px 5px 0px;
            padding-right: 15px;
          }
        }
      }
      
      .btn{
        margin: 50px 0px 50px 0px;
        padding: 20px 0px 0px 110px;
        // text-align: right;
      }
    }
  }

</style>