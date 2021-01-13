<template>
  <div class="container">
    <!-- 标题 -->
    <div class="title">
      <div class="s1">检测报告</div> 
    </div>
    <div class="text" v-for="(item,i) of neirong" :key="i">
      {{item.a}}
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 循环 -->
      <div class="textall" v-for="(item,i) of ceshi" :key="i">
        <span class="fixed">
          {{item.a}}
        </span>
        <span class="detail">
          {{item.b}}
        </span>
      </div>
      <!-- 按钮 -->
      <div class="btn">
        <a-button class="btna">下载</a-button>
        <router-link :to="{path:'history'}">
          <a-button class="btna">历史检测记录</a-button>
        </router-link>
        <a-button class="btna" @click="showModal">分享检测报告</a-button>
        <!-- 弹窗 -->
         <a-modal
          title="分享测试报告"
          :visible="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
          @cancel="handleCancel"
          okText="确认"
          cancelText="取消"
          style="text-align:center;"
        >
          <h2>论多多·论文格式检测报告</h2>
          <img src="@/assets/img/shop/er_wei_ma.png" width="400" height="400" alt="">
        </a-modal>

      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'container',
  data() { 
    return {
      neirong:[
        {a:'如对检测报告有疑问，请联系客服，此处为检测答疑唯一渠道。'},
        {a:'检测报告之外的问题可联系QQ: XXXX，WX：XXX'},

      ],
      ceshi:[
        {a:'检测编号：',b:'20201215104904003'},
        {a:'检测状态：',b:'检测完成'},
        {a:'检测提交时间：',b:'2020-12-15 10:49:33'},
        {a:'错误数：',b:'3'},
        {a:'千字差错率：',b:'0.75'},
        {a:'页数：',b:'10'},
        {a:'检测机器人：',b:'11号机器人'},
      ],
      visible: false,
      confirmLoading: false,
    }
  },
  methods: {
    // 弹窗
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
      border-left: 5px solid #f395d2;
      .s1{
        font-size: 20px;
        font-weight: 300;

      }
    }
    // 小标题
    .text{
      color:#000;
    }
    // 内容
    .content{
      width: 938px;
      height:304px;
      margin-top:10px;
      padding:15px 20px;
      border: 1px dashed #e2e2e2;
      .textall{
        width:908px;
        height:29px;
        padding:5px;
        .fixed{
          color: #808080;
        }
        .detail{

        }
      }
      // 按钮
      .btn{
        width:938px;
        height:40px;
        margin-top:20px;
        .btna{
          margin-right:10px;
        }
      }
      
    }
    
  }
</style>