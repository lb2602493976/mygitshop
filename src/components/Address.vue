<template>
    <div id="container">
        <!-- <a-modal 
          title="Title"
          :visible="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
          @cancel="handleCancel" 
          width="400px"
          >
          <p>aaaa</p>
        </a-modal> -->
        <a-modal 
          title="选择学校"
          :visible="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
          @cancel="handleCancel"
          width="880px"
          cancelText='取消'
          okText='确定'
          >
          <!-- 大div -->
          <div class="all">
            <div class="search">
              <a-input class="input" placeholder="请输入学校名称"></a-input>
              <a-button class="btn">搜索</a-button>
            </div>
            <div class="area">
              <a-divider orientation="left" :dashed="true" >
                地区
              </a-divider>
              <div class="area_button">
                <a-button class="area_button_1" v-for="(item,i) of address" :key="i">{{item.a}}</a-button>
              </div>
            </div>
            <!-- 大学 -->
            <div class="university">
              <a-divider orientation="left" :dashed="true">
                大学
              </a-divider>
              <div class="university_content" >
                <!-- <div class="un_content_div"  v-for="(item,i) of items" :key="i">
                  <div >
                    <span>{{item.a}}.{{item.b}}</span>
                  </div>
                </div> -->
                <div class="un_content_div" v-for="(item,i) of items" :key="i">
                  
                    <span >{{item.a}}.{{item.b}}</span>
                  
                </div>
                <!-- <div class="un_content_div" >
                  
                </div> -->
                <!-- <div class="un_content_div">
                  <span>{{item.a}}.</span> 
                  <span>{{item.b}}</span>
                </div> -->
              </div>
            </div>
          </div>
          
        </a-modal>
    </div>
</template>

<script>
    export default {
        props:{
          visible:{
              type:Boolean,
              default(){
                  return false
              },
          },
          confirmLoading:{
              type:Boolean,
              default(){
                  return false
              },
          }
        },
        data() {
            return {
              obj:{},
              ModalText: 'Content of the modal',
              // visible: false,
              // confirmLoading: false,
              address:[
                {a:'北京'},
                {a:'天津'},
                {a:'河北'},
                {a:'山西'},
                {a:'内蒙古'},
                {a:'辽宁'},
                {a:'吉林'},
                {a:'黑龙江'},
                {a:'上海'},
                {a:'江苏'},
                {a:'浙江'},
                {a:'安徽'},
                {a:'福建'},
                {a:'江西'},
                {a:'山东'},
                {a:'河南'},
                {a:'湖北'},
                {a:'湖南'},
                {a:'广东'},
                {a:'广西'},
                {a:'海南'},
                {a:'重庆'},
                {a:'四川'},
                {a:'贵州'},
                {a:'云南'},
                {a:'西藏'},
                {a:'陕西'},
                {a:'甘肃'},
                {a:'青海'},
                {a:'宁夏'},
                {a:'新疆'},
              ],
              items:[
                {a:'1',b:'清华大学'},
                {a:'2',b:'北京大学'},
                {a:'3',b:'天井大学'},
                {a:'4',b:'清华大学'},
                {a:'5',b:'清华大学'},
                {a:'6',b:'清华大学'},
                {a:'7',b:'清华大学'},
                {a:'8',b:'清华大学'},
                {a:'9',b:'清华大学'},
                {a:'10',b:'清华大学'},
                {a:'11',b:'1华大学'},
                {a:'12',b:'清华大学'},
                {a:'13',b:'清华大学'},
                {a:'14',b:'清华大学'},
                {a:'15',b:'清华大学'},
                {a:'16',b:'清华大学'},
                {a:'17',b:'清华大学'},
                {a:'18',b:'清华大学'},
                {a:'19',b:'清华大学'},
                {a:'20',b:'清华大学'},
                {a:'21',b:'清华大学'},
                {a:'22',b:'清华大学'},
                {a:'23',b:'清华大学'},
                {a:'24',b:'清华大学'},
                {a:'25',b:'清华大学'},
                {a:'26',b:'清华大学'},
                {a:'27',b:'清华大学'},
                {a:'28',b:'清华大学'},
              ],
            }
        },
        methods: {
          //  showModal() {
          //     this.visible = true;
          //   },
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
    .all{
      width: 870px;
      height: 450px;
      padding: 20px;
      .search{
        width: 830px;
        height: 45px;
        margin-bottom: 15px;
        display: flex;
        .input{
          width: 730px;
          height: 38px;
          padding-left:10px;
        }
        .btn{
          width: 78px;
          height: 38px;
          padding: 0px 18px;
          margin-left: 5px;
        }
      }
      .area{
        width: 830px;
        height: 150px;
        margin-bottom: 15px;
        .area_button{
          width: 828px;
          height: 125px;
          padding: 10px 15px;
          .area_button_1{
            width: 62px;
            height: 30px;
            margin: 0px 0px 5px 2px;
            padding: 0px 10px;

          }
        }
      }
      // 大学
      .university{
        width: 830px;
        height: 168px;
        margin-bottom: 15px;
        .university_content{
          width: 828px;
          height: 125px;
          padding: 10px 15px;
          // background: blue;
          // overflow-y:auto ;
          overflow-y:auto ;
          // display:flex;
          display:flex;
          flex-flow:row wrap;
          justify-content: flex-start;
          // 多行对齐方式
          // align-content:center;
          
          .un_content_div{
            width: 390px;
            height: 28px;
            padding: 2px 5px;
            
            // background: pink;
            
          }
        }
      }
    }

</style>