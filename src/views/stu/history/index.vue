<template>
  <div class="container">
    <!-- 标题 -->
    <div class="title">
      <div class="s1">历史检测记录</div> 
    </div>
    <!-- 文本 -->
    <div class="text" v-for="(item,i) of neirong" :key="i">
      {{item.a}}
    </div>
    <!-- 表格 -->
    <a-table style="margin-top:24px" :data-source="dataSource" row-key="id">
      <a-table-column title="检测编号" dataIndex="order"></a-table-column>
      <a-table-column title="文件名" dataIndex="content">
          <template slot-scope="content">
              <a-button style="margin:0;padding:0;" type="link">{{content}}</a-button>
          </template>
      </a-table-column>
      <a-table-column title="状态" dataIndex="state"></a-table-column>
      <a-table-column title="错误数" dataIndex="point"></a-table-column>
      <a-table-column title="差错率" dataIndex="point"></a-table-column>
      <a-table-column title="生成时间" dataIndex="time"></a-table-column>
      <a-table-column title="操作" key="action" dataIndex="action">
          <template slot-scope="text, record">
              <a-button @click="handlePay(record)" type="primary">去支付</a-button>
          </template>
      </a-table-column>
        
    </a-table>

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
      loading:false,
      dataSource:[
          { id:1,order:'1111111111111',content:'aaaaa.docx',state:'未完成',point:25,time:'2020-11-26' },
          { id:1,order:'3333333333333',content:'ccccc.docx',state:'已完成',point:5,time:'2020-10-25' },
          { id:1,order:'2222222222222',content:'bbbbb.docx',state:'未完成',point:15,time:'2020-7-02' },
      ],
    }
  },
  methods: {
      handlePay() {
          
      }
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
    // 表格
    .tab{
      
    }
  }
</style>