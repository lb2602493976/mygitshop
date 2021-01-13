<template>
  <div class="container">
    <div class="title">
      <div class="image">
        <img width='470px' height='300px' src="@/assets/img/shop/detail7.jpg" alt="">
      </div>
      <div class="s1">
        <div class="ss1">

          <div>
            <span class="sp1">马克思哲学</span>
          </div>
          <div class="center1">
            <span>分享</span>
            <div>
              <a class="mag" href="" title="分享到微信">
                <img src="@/assets/img/shop/weixin.png" alt="">
              </a>
              <a class="mag" href="" title="分享到QQ">
                <img src="@/assets/img/shop/qq.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <!-- <a-icon type="step-forward" /> -->
        <div class=" ss2">
          <div class="ssb1">第一次开课</div>
          <div class="ssb2">论文上传时间：2020年11月26日</div>
          <div class="ssb3">论文安排：xxxxx</div>
        </div>
        <div class="ss3">
          <span>已有230人购买</span>
        </div>
        <div class="ss4">
          <span @click="handleDownload" class="btn">立即下载</span>
        </div>
      </div>
    </div>
    <!-- 中间隔行 -->
    <div class="ff2"></div>
    <!-- 课程详情 -->
    <div class="ff3">
      <!-- 左边详情 -->
      <div class="ffa1">
        <!-- <div class="ffaa1">
          <a class="aa1">课程详情</a>
        </div>
        <div class="ffaa2">
          <div class="ab1">
            If you are freshmen, ready for college physics course; 10th-12th graders, preparing for AP or A-level physics; non-native English speakers, going to study in English speaking countries ...... Join us, you will see the physical concepts with the physical way of thinking; feel the magic of physics in hands-on experiments; understand and express the physical ideas in English; join the online interactive classroom; most importantly, enjoy it!......大学物理=碎片化知识点+全英授课+实验演示+视频会议互动+感受用英文学物理的快乐！
          </div>
          <div class="ab2">
            论文概述
          </div>
          <div class="ab3">
            <p style="padding-left:10px;">&nbsp;&nbsp; Welcome to College Physics class! </p>
            <span style="padding-left:10px;">
              &nbsp;&nbsp;Physics is a branch of science concerned with the nature and properties of matter and energy, and its main goal is to understand how the universe behaves. Physics teaches you the way of thinking, like model thinking, how to set up a model, like statistical thinking, reverse thinking, graphical thinking, and many more. Physics puts your math to use, like the calculus, vector operations, when you use them, you will see the corresponding physics behind. For example, if the force vector and displacement vector are perpendicular to each other, i.e., the dot product is zero, that means no work.
            </span>
          </div>
          <div class="ab4">
            论文大纲
          </div>
          <div class="ab5">
            <p style="padding-left:10px;">&nbsp;&nbsp; Welcome to College Physics class! </p>
            <span style="padding-left:10px;">
              &nbsp;&nbsp;Physics is a branch of science concerned with the nature and properties of matter and energy, and its main goal is to understand how the universe behaves. Physics teaches you the way of thinking, like model thinking, how to set up a model, like statistical thinking, reverse thinking, graphical thinking, and many more. Physics puts your math to use, like the calculus, vector operations, when you use them, you will see the corresponding physics behind. For example, if the force vector and displacement vector are perpendicular to each other, i.e., the dot product is zero, that means no work.
            </span>
          </div>
        </div> -->
        <img :src="require('@/assets/img/shop/detail.png')" alt="">
      </div>
      <!-- 右边学校 -->
      <!-- <div class="ffa2">
        <p>那个学校的模板</p>
      </div>   -->
    </div>

  </div>
   
</template>

<script>
export default {
  name: '',
  data() { 
    return {

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
    .title{
      width:1200px;
      height:400px;
      // background:@color-theme;
      display: flex;
      justify-content: space-around;
      align-items:center;
      
      .s1{
        width:700px;
        height:300px;
        // background:cyan;
        .ss1{
          display:flex;
          justify-content: space-between;
          align-items:center;
          
          height:33px;
          margin-bottom: 5px;
          // background: chartreuse;
          .center1{
            display:flex;
            justify-content: space-between;
            align-items:center;
          }
          .mag{
            margin:0 5px;
          }
          .sp1{

            font-size: 24px;
            color: #333333;
            margin-left: 6px;
          }
        }
        .ss2{
          width:540px;
          height:95px;
          padding: 5px 10px 15px 20px;
          margin-bottom: 30px;
          // background-color: #f5f5f5;
          text-align:start;
          .ssb1{
            width:510px;
            height:39px;
            font-size: 14px;
            color: #333333;
            padding: 5px 0 5px 0;
          }
        }
        .ss3{
          width:540px;
          height:18px;
          margin-bottom: 10px;
          // background: darkorange;
          text-align: start;
        }
        .ss4{
          width:540px;
          height:54px;
          // background: crimson;
          text-align: start;
          .btn{
            display:block;
            border-radius: 5px;
            width:220px;
            height: 52px;
            line-height: 52px;
            font-size: 18px;
            background-color: #ff7a3e;
            border-color: #ff7a3e;
            min-width: 220px;
            text-align: center;
            cursor: pointer;
            margin-top:20px ;
            
          }
        }
      }
      .ss1 .ss2 .ss3 .ss4{
        position: relative;
      }
      .ss3,.ss4{
        margin-left: 10px;
      }
    }
    // 隔行
    .ff2{
      width:1205px;
      height:40px;
      background: #f5f5f5;
    }
    // 课程详情
    .ff3{
      width:1200px;
      // background:darkgreen;
      height:100%;
      display:flex;
      justify-content: space-between;
      align-items:flex-start;
      .ffa1{
        width:100%;
        // height:90%;
        // background:darksalmon;
        // margin:10px 0 10px 20px;
        padding:20px;
        .ffaa1{
          width:806px;
          height:67px;
          // background: fuchsia;
          text-align: start;
          padding: 30px 0 0 10px;
          .aa1{
            cursor: pointer;
            font-size: 26px;
          }
        }
        .ffaa2{
          width:806px;
          height:90%;
          // background: forestgreen;
          margin-top:30px;
          .ab1{
            width:806px;
            height:177px;
            // background-color: #F5F8F4;
            padding: 30px 30px 20px;
            margin-bottom: 48px;
            color: #333333;
            text-align: start;
          }
          .ab2{
            width:806px;
            height:37px;
            // background-color: gold;
            padding: 0 0 5px 10px;
            font-size: 18px;
            font-weight: bold;
            color: #333333;
            text-align: start;
          }
          .ab3{
            width:806px;
            height:177px;
            background-color: #F5F8F4;
            padding: 30px 30px 20px;
            margin-bottom: 48px;
            color: #333333;
            text-align: start;
          }
          .ab4{
            width:806px;
            height:37px;
            // background-color: gold;
            padding: 0 0 5px 10px;
            font-size: 18px;
            font-weight: bold;
            color: #333333;
            text-align: start;
          }
          .ab5{
            width:806px;
            height:177px;
            // background-color: #F5F8F4;
            padding: 30px 30px 20px;
            margin-bottom: 48px;
            color: #333333;
            text-align: start;
          }
        }
      }
      .ffa2{
        width:295px;
        height:350px;
        background: deepskyblue;
        margin:10px 20px 0 0;
      }
    }
    
  }
</style>