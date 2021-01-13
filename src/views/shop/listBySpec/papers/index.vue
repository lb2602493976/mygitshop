<template>
  <div class="container">
    <!-- 课程 -->
    <div class="course"  v-for="(item,i) in major" :key="i" >
      <div class='flex1'>
        <p class="p1">{{item.name}}</p>  
        <!-- <a style="line-height:25px;" @click="$router.push('/thesis/papers')">更多>></a> -->
      </div>
      <div class="d1">
        <div class="card" v-for="(it,index) of detail" :key="index">
          <div class="card1">
            <!-- <router-link to="/thesis/detail"> -->
              <img @click="$router.push('/thesis/detail')" style="cursor:pointer" width="230px" height="120px" :src="require('@/assets/img/shop/detail9.jpg')" alt="">
            <!-- </router-link> -->
          </div>
          <div class="card2">
            <!-- <h4>{{it.span1}}</h4> -->
            <p>{{it.span2}}</p>
            <p><a-icon type="eye" />共{{it.span3}}次浏览</p>
            <!-- 111 -->
            <!-- <div class='bottom'></div> -->
            <a-divider class='bottom' />
            <div class="footer">
                <div class="button">
                    <!-- <a-icon  class="collection-button" type="star" theme="filled"/> -->
                    <a-icon  type="star" class="collection-button" theme="outlined"/>
                    <a-icon class="share-button" type="share-alt" />
                </div>
                <div>
                    <a-button @click="handleDownload" type="danger" shape="round">立即下载</a-button>
                </div>
            </div>
            <!-- <p>{{it.span1}}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'container',
  data() { 
    return {
       // 专业
      major:[
      {name:'程序设计与开发',value:'1'},
      // {name:'C语言',value:'2'},
      // {name:'计算机基础与应用',value:'3'},
      // {name:'软件工程',value:'4'},
      // {name:'网络与安全技术',value:'5'},
      // {name:'硬软件系统及原理',value:'6'},
      // {name:'JavaScript',value:'7'},
      // {name:'VueE',value:'8'},
      // {name:'Python数据分析',value:'9'},
      // {name:'C++',value:'10'},
      // {name:'全部',value:'11'},
      ],
      detail:[
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
        {span1:'111',span2:'222',span3:'333'},
      ],
    }
  },
  methods: {
    handleDownload() {
      this.$confirm({
        title: '确认购买',
        content: '购买此模板需要消耗10积分，确认购买？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          
        },
      });
    }
  },
 }
</script>

<style lang="less" scoped>
  .container{
     // 课程
    .course{
      width: 1200px;
      margin: 0 auto;
      margin-top: 48px;
      // background: rgba(0,0,0,0.5);
      .flex1{
        display: flex;
        justify-content: space-between;
        .p1{
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
        text-align:left;
       }
      }
      
      .d1{
        // height:480px;
        // padding: 12px;
        display:grid;
        grid-template-columns: repeat(auto-fill,232px);
        grid-template-rows:repeat(auto-fill,232px);
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        border-radius: 10px;
        .card{
          width:100%;
          height:100%;
          border-radius: 10px;
          // padding:12px;
          // background:#DDD;
          .card1{
            width:230px;
            height:120px;
            // background:chartreuse;

            img{
              border-radius: 10px;
            }
          }
          .card2{
            width:230px;
            height:120px;
            // background: chocolate;
            border-radius: 10px;
            .bottom{
              margin:8px 0px 8px 0px;
              color:#ddd;
              // width:px;
            }
            .footer{
                .flex(row;nowrap;space-between;flex-end;);
                .share-button{
                    color:#62AC48;
                    font-size:20px;
                    cursor:pointer;
                    margin-left:4px;
                }
                .collection-button{
                    color:#FABF01;
                    font-size:20px;
                    cursor:pointer;
                }
            }
            p,h4,span{
              text-align:start;
            }
            
          }
          
        }
        .card:hover{
            box-shadow: 10px 10px 5px #888888;
            transition: all 0.5s;
            transform: scale(0.9) ease ;
            transform: translateY(-5px);
          }
      }
    }
  }
</style>