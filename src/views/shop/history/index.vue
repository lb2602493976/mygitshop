<template>
  <div class="container">
    <h1>历史足迹</h1>
    <!-- 课程 -->
    <!-- <div class="course"  v-for="(item,i) in history" :key="i" > -->
    <div class="course"  >
      <!-- <p class="p1">{{item.name}}</p> -->
      <div class="d1">
        <div class="card" v-for="(it,index) of detail" :key="index">
          <div class="card1">
            <router-link to="/thesis/detail">
              <img width="230px" height="120px" src="../../../assets/img/shop/detail9.jpg" alt="">
            </router-link>
          </div>
          <div class="card2">
            <!-- <h4>{{it.span1}}</h4> -->
            <p>{{it.span2}}</p>
            <p><a-icon type="eye" />共{{it.span3}}次浏览</p>
            <!-- 111 -->
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
        <!-- <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div> -->
      </div>
    </div>
    <div class="pages">
      <!-- <a-pagination  :default-current="6" :total="500" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      // 时间
      history:[
      // {name:'2020-12-10',value:'1'},
      // {name:'2020-12-9',value:'2'},
      // {name:'2020-12-8',value:'3'},
      // {name:'2020-12-7',value:'4'},
      // {name:'2020-12-6',value:'5'},
      // {name:'2020-12-5',value:'6'},
      // {name:'2020-12-4',value:'7'},
      // {name:'2020-12-3',value:'8'},
      // {name:'2020-12-2',value:'9'},
      // {name:'2020-12-1',value:'10'},
      // {name:'2020-11-26',value:'11'},
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
    width:1200px;
    // height: 1200px;
    // border: 1px solid red;
    // 课程
    .course{
      width: 1200px;
      margin: 0 auto;
      margin-top: 48px;
      // background: rgba(0,0,0,0.5);
      .p1{
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
        text-align:left;
      }
      .d1{
        height:480px;
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
        
      // 分页
      .pages {
        display:flex;
        width:1200px;
        height: 60px;
	      text-align: center;
        margin:30px 0 30px 0;
      }
    }
  }
</style>