<template>
  <div class="container">
    <!-- 搜索 -->
    <!-- <div class="sea">
      <a-input-search  
        class="search"
        placeholder="请输入要搜索的专业"
        width='400px'
        enter-button="搜索"
        size="large"
        @search="onSearch"
      />
    </div> -->
    
    <!-- 卡片 -->
    <div class="more" v-for="(item,i) of bigMajor" :key="i">
      <!-- 大标题 -->
      <p @click="$router.push(`/thesis/listBySpec/${item.itemValue}/0`)" class="bigMajor">
        {{item.itemText}}
      </p> 
      <a-divider style="margin:12px 0px 6px 0px;"/>
      <!-- 专业小类 -->
      <div class="major">
         <a-button @click="$router.push(`/thesis/listBySpec/${item.itemValue}/${t.id}`)" class="btn" v-for="(t,i) of item.majors" :key="i">
           {{t.majorName}}
          </a-button>
      </div>
    </div>
    <!-- 分页 -->
    <!-- <div class="page">
      <a-pagination v-model="current" :total="50" show-less-items />
    </div> -->
  </div>
</template>

<script>
import { getSpec } from '@/api/shop/specialty'
export default {
  name: 'container',
  data() { 
    return {
      current:1,
      major:[],
      bigMajor:[],
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    getList(){
      return getSpec().then(res=>{
        this.bigMajor = res.data.data
      })
    },
  },
 }
</script>

<style lang="less" scoped>
  .container{
    text-align: center;
    width:100%;
    padding-top: 24px;
    .sea{
      text-align: end;
      .search{
      
      width: 400px;
      margin:0px 0 20px 0px;
      }
    }
    
    .more{
      // width:800px;
      min-height:200px;
      border:1px solid #dddddd;
      margin-bottom: 20px;
      border-radius: 20px;
      padding: 12px;
      .bigMajor{
        padding-left:20px;
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
        text-align:left;
      }
      .major{
        .flex(row;wrap;flex-start;);
        // width:700px;
        min-height:150px;
        // border:1px solid red;
        
        // padding:20px;
        .btn{
          margin:20px 0px 0px 20px;
        }
      }
    }
    .more:hover{
      // box-shadow: 10px 10px 5px #888888;
      // transition: all 0.5s;
      // transform: scale(0.9) ease ;
      // transform: translateY(-5px);
    }
    .page{

    }
  }
</style>