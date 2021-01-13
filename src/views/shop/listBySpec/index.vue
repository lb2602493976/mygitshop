<template>
  <div class="container">
    <!--主体头部内容-->
    <div class="title">
      <h3 class="w">{{major[0] && major[0].majorCategoryName}}</h3>
      <span role="button" :class="{ active:activeTag == 'all' }" @click="activeTag='all'" class="s1">全部</span>
      <span role="button" :class="{ active:activeTag == index }"  @click="activeTag=index" class="s1" v-for="(item,index) of major" :key="index">
        {{item.majorName}}
      </span>
    </div>
    <!-- 课程 -->
    <template v-if="activeTag == 'all'" >
      <div class="course"  v-for="(item,index) in major" :key="index" >
        <div class='flex1'>
          <p class="p1">{{item.majorName}}</p>  
          <a style="line-height:25px;" @click="activeTag=index">更多>></a>
        </div>
        <div class="d1">
          <div class="card" v-for="(it,index) of detail" :key="index">
            <div class="card1">
                <img width="230px" @click="$router.push(`/thesis/detail/${1}`)" height="120px" src="../../../assets/img/shop/detail9.jpg" alt="">
            </div>
            <div class="card2">
              <p>{{it.span2}}</p>
              <p><a-icon type="eye" />共{{it.span3}}次浏览</p>
              <a-divider class='bottom' />
              <div class="footer">
                  <div class="button">
                      <a-icon  type="star" class="collection-button" theme="outlined"/>
                      <a-icon class="share-button" type="share-alt" />
                  </div>
                  <div>
                      <a-button type="danger" shape="round">下载</a-button>
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
    </template>
    <template v-else>
      <div class="course"  >
        <div class='flex1'>
          <p class="p1">{{major[activeTag].majorName}}</p>  
        </div>
        <div class="d1">
          <div class="card" v-for="(it,index) of detail" :key="index">
            <div class="card1">
              <router-link :to="`/thesis/detail/${it.id}`">
                <img width="230px" height="120px" src="../../../assets/img/shop/detail9.jpg" alt="">
              </router-link>
            </div>
            <div class="card2">
              <p>{{it.span2}}</p>
              <p><a-icon type="eye" />共15次浏览</p>
              <a-divider class='bottom' />
              <div class="footer">
                  <div class="button">
                      <a-icon  type="star" class="collection-button" theme="outlined"/>
                      <a-icon class="share-button" type="share-alt" />
                  </div>
                  <div>
                      <a-button type="danger" shape="round">下载</a-button>
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
        <div class="pages">
          <Pagination :page.sync="page" :size.sync="size" :total="total" @change="handleSearch"/>
        </div>
      </div>
    </template>
  </div>
  
</template>

<script>
import { getListBySpecId } from '@/api/shop/thesis'
import { getLevel2Spec } from '@/api/shop/specialty'
import Pagination from '@/components/Pagination'
export default {
  name: 'container',
  components: {
    Pagination,
  },
  data() { 
    return {
      // 专业大类
      // majorCategories:[
      //   {name:''}
      // ],
      loading:false,
      page:1,
      size:10,
      total:100,
      activeTag:'all',
      // 专业
      major:[],
      detailList:[],
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
  mounted(){
    this.getSpecList().then(()=>{
      if(this.$route.params.m == 0 ) this.activeTag = 'all'
      else if(this.$route.params.m){
        this.activeTag = this.major.findIndex(item =>item.id == this.$route.params.m)
      }
      this.handleSearch(true)
    })
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
    },
    //获取查询参数
    getFormattedParams(){
      return {
        page:this.page,
        size:this.size,
        category:this.$route.params.c,
      }
    },
    //查询
    handleSearch() {
      let params = this.getFormattedParams()
      if(this.activeTag == 'all'){
        Promise.all(this.major.map(item=>this.getTempById({page:1,size:10,majorId:item.id}))).then(res => {
          this.detailList = res.map(({data:{ data }})=> data)
        })
      }else{
        this.getTempById({page:params.page,size:params.size,majorId:this.major[this.activeTag].id}).then(res => {
          this.detail = res.data.data
        })
      }
    },
    //根据专业id 获取模板
    getTempById(params){
      return getListBySpecId(params).then(({data})=>data)
    },
    //查询专业列表
    getSpecList(){
      let params = this.getFormattedParams()
      return getLevel2Spec(params.category).then(res => {
        this.major = res.data.data
      })
    },
  },
  watch: {
    activeTag() {
      if(this.page !== 1 ) this.page = 1
      else this.handleSearch()
    }
  },
 }
</script>

<style lang="less" scoped>
  .container{
    .title{
      .radius(8px);
      .flex(row;wrap;flex-start;);
      padding:12px;
      width:1200px;
      height:142px;
      margin:5px 0 0 0;
      font-size: 14px;
      background:lighten(@color-theme,10%);
      color:#333;
        // 外语
        .w{
        display: inline-block;
        height: 32px;
        line-height: 32px;
        margin-right: 40px;
        font-size: 24px;
        font-weight: 500;
        color: #333;
      }
      // 全部
      
      // 文字排版
      .s1{
        display: inline-block;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        padding: 0 20px;
        text-align: center;
        color: #333;
        border-radius: 16px;
        margin: 0 12px 14px 0;
        &.active{
          // background-color: #00C758;
          color: #FFF;
        }
      }
    }
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
        .flex(row;nowrap;flex-end;center);
        margin-top:24px;
      }
    }
    
    
  }
</style>