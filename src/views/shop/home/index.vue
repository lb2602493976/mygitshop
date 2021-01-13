<template>
    <div class="container">
        <div class="f f1">
            <div class="nav" >
                <div style="background:#FFF;" >
                    <a-breadcrumb class="text-ellipsis nav-item"  v-for="(item,index) of computedNavList" :key="index">
                        <a-breadcrumb-item >
                            <span 
                                :style="{ 
                                    fontSize:'16px',
                                    color:'rgba(0,0,0,0.85)', 
                                    cursor:'pointer'
                                }"
                                class="text"
                                @click="$router.push(`/thesis/listBySpec/${item.itemValue}/0`)"
                            >
                                {{ item.itemText }}
                            </span>
                        </a-breadcrumb-item>
                        <a-breadcrumb-item v-for="(item2,index2) of item.majors" :key="index2">
                            <span 
                                :style="{ 
                                    fontSize:'12px',
                                    color:'rgba(0,0,0,0.45)', 
                                    cursor:'pointer'
                                }"
                                class="text"
                                @click="$router.push(`/thesis/listBySpec/${item.itemValue}/${item2.id}`)"
                            >
                                {{ item2.majorCategoryName }}
                            </span>
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <a-button @click="$router.push('/thesis/more')" type="link" class="nopadding" style="text-align:left;font-size:16px;" block>
                    更多<a-icon type="right" />
                </a-button>
            </div>
            <div class="carousel-container">
                <a-carousel class="carousel" autoplay arrows>
                    <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;z-index:1">
                        <a-icon type="left-circle" />
                    </div>
                    <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
                        <a-icon type="right-circle" />
                    </div>
                    <div v-for="(item,index) of imgList" :key="index" class="img-container">
                        <div @click="handleImgLink(item.interlinkPath)" :style="{ backgroundImage:`url(${item.photoPath})`}" class="img"></div>
                    </div>
                </a-carousel>
            </div>
            <div class="login">
                <div class="header">轻松搞定论文格式，获取论文模板</div>
                <div class="main">
                    <div class="avatar">
                        <a-icon style="color:#FFF;font-size:34px;" type="user" />
                    </div>
                    <a-button @click="loginVisible = true" type="primary" shape="round" block>登录</a-button>
                </div>
                <div class="footer">世略英图网络信息科技有限公司出品</div>
            </div>
        </div>
        <div class="f f2">
            <div class="title">热门专业</div>
            <div class="content">
                <a-button @click="$router.push(`/thesis/listBySpec/${item.majorCategory}/${item.id}`)" style="position:relative;z-index:500;" v-for="(item,index) of hotSpecs" :key="index" class="tag" type="primary" shape="round">
                    {{ item.majorName }}
                </a-button>
            </div>
        </div>
        <div class="f f3" :style="{ backgroundImage:`url(${bigDataBgImage})`,}">
            <div class="header">论多多在线大数据</div>
            <div class="content">
                <div class="content-item">
                    <div class="row row1">
                        <a-icon class="icon" type="user" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">用户总数</div>
                </div>
                <div class="content-item">
                    <div class="row row1">
                        <a-icon class="icon" type="user-add" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">活跃用户</div>
                </div>
                <div class="content-item">
                    <div class="row row1">
                        <a-icon class="icon" type="solution" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">老师用户</div>
                </div>
                <div class="content-item">
                    <div class="row row1">
                        <a-icon  class="icon" type="team" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">学生用户</div>
                </div>
                <div class="content-item">
                    <div class="row row1">
                        <a-icon class="icon" type="file-word" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">模板总数</div>
                </div>
                <div class="content-item">
                    <div class="row row1">
                        <a-icon class="icon" type="check-square" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">校验总数</div>
                </div>
                <div class="content-item">
                    <div class="row row1">
                        <a-icon class="icon" type="download" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">下载总数</div>
                </div>
                <div class="content-item">
                    <div class="row row1">
                        <a-icon class="icon" type="book" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">研究生院校</div>
                </div>
                <div class="content-item">
                    <div class="row row1">
                        <a-icon class="icon" type="book" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">本科院校</div>
                </div>
                <div class="content-item">
                    <div class="row row1">
                        <a-icon class="icon" type="book" />
                        <span>185,488,45</span>
                    </div>
                    <div class="row row2">专科院校</div>
                </div>
            </div>
        </div>
        <div v-show="hotTemps && hotTemps.length" class="f f4">
            <div class="title">热门模板</div>
            <div class="content">
                <div @click="$router.push(`/thesis/detail/${item.id}`)" v-for="(item,index) of hotTemps" :key="index" class="card">
                    <img :src="item.img" alt="加载失败...">
                    <div class="info">
                        <div class="top">
                            <div class="title">{{ item.templateName }}</div>
                            <div class="code">11D44W8Q43Q54W35E4</div>
                        </div>
                        <div class="bottom">
                            <div class="num"><a-icon type="eye" /> 共15次浏览</div>
                            <a-divider style="margin:8px 0;background:#DDD;" />
                            <div class="footer">
                                <div class="button">
                                    <a-icon v-if="item.collected" class="collection-button" type="star" theme="filled"/>
                                    <a-icon v-else type="star" class="collection-button" theme="outlined"/>
                                    <a-icon class="share-button" type="share-alt" />
                                </div>
                                <div>
                                    <a-button @click.stop="handleDownload" type="danger" shape="round">立即下载</a-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="f f5">
            <div v-for="(item,index) of centerAds" :key="index" class="banner">
                <img @click="handleImgLink(item.interlinkPath)" style="width:100%;height:100%;" :src="item.photoPath" alt="加载失败...">
            </div>
        </div>
        <div class="f f6">
            <div class="title">本周论文排行</div>
            <div class="content">
                <div class="rank">
                    <div class="title">热门论文Top50</div>
                    <div class="list-view">
                        <div class="list-container">
                            <a-list class="list" v-for="(item,index) of hotTops" :key="index" item-layout="horizontal" :data-source="item">
                                <a-list-item  slot="renderItem" slot-scope="item, itemIndex">
                                    <div @click="$router.push('/thesis/listBySpec')" class="item">
                                        <div class="num" 
                                            :style="{color:itemIndex===0 ? '#FA5055' :itemIndex===1 ? '#FF7130' :itemIndex===2 ? '#FFB425':''}"
                                        >
                                            {{(index+1)*(itemIndex+1)}}
                                        </div>
                                        <img :src="item.img" alt="加载失败...">
                                        <div class="info">
                                            <div class="title">表情管理进阶</div>
                                            <div class="code">SAD454543A5S3D54</div>
                                            <div class="view"><a-icon type="eye" /> 共15次浏览</div>
                                        </div>
                                    </div>
                                </a-list-item>
                            </a-list>
                        </div>
                        
                    </div>
                </div>
                <div class="rank">
                    <div class="title">论文收藏Top50</div>
                    <div class="list-view">
                        <div class="list-container">
                            <a-list class="list" v-for="(item,index) of collectTops" :key="index" item-layout="horizontal" :data-source="item">
                                <a-list-item slot="renderItem" slot-scope="item, itemIndex">
                                    <div class="item">
                                        <div class="num" 
                                            :style="{color:itemIndex===0 ? '#FA5055' :itemIndex===1 ? '#FF7130' :itemIndex===2 ? '#FFB425':''}"
                                        >
                                            {{(index+1)*(itemIndex+1)}}
                                        </div>
                                        <img :src="item.img" alt="加载失败...">
                                        <div class="info">
                                            <div class="title">表情管理进阶</div>
                                            <div class="code">SAD454543A5S3D54</div>
                                            <div class="view"><a-icon type="star" /> 共15次收藏</div>
                                        </div>
                                    </div>
                                </a-list-item>
                            </a-list>
                        </div>
                    </div>
                </div>
                <div class="rank">
                    <div class="title">论文分享Top50</div>
                    <div class="list-view">
                        <div class="list-container">
                            <a-list class="list" v-for="(item,index) of shareTops" :key="index" item-layout="horizontal" :data-source="item">
                                <a-list-item slot="renderItem" slot-scope="item, itemIndex">
                                    <div class="item">
                                        <div class="num" 
                                            :style="{color:itemIndex===0 ? '#FA5055' :itemIndex===1 ? '#FF7130' :itemIndex===2 ? '#FFB425':''}"
                                        >
                                            {{(index+1)*(itemIndex+1)}}
                                        </div>
                                        <img :src="item.img" alt="加载失败...">
                                        <div class="info">
                                            <div class="title">表情管理进阶</div>
                                            <div class="code">SAD454543A5S3D54</div>
                                            <div class="view"><a-icon type="share-alt" /> 共15次分享</div>
                                        </div>
                                    </div>
                                </a-list-item>
                            </a-list>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="qr-code-button">
            <a-popover placement="left" title="小程序商城">
                <a-button icon="mobile" type="primary"></a-button>
                <template slot="content">
                    <img class="img" style="width:100px;height:100px;" :src="qrCode" alt="图片加载失败...">
                </template>
            </a-popover>
        </div>
        <a-back-top class="back-to-top" :visibility-height="200">
            <a-button icon="vertical-align-top" type="primary"></a-button>
        </a-back-top>
        <!-- <div class="ad-aside">
            广告位招租
        </div> -->
        <Login @register="registerFromLogin" :visible.sync="loginVisible"></Login>
        <Register :visible.sync="registerVisible"/>
    </div>
</template>

<script>
    import { getSpec,getHotSpec } from '@/api/shop/specialty'
    import { getAd } from '@/api/shop/ad'
    import { getHotTemp } from '@/api/shop/thesis'
    import Login from '@/components/Login'
    import Register from '@/components/Register'
    export default {
        components:{
            Login,
            Register,
        },
        data() {
            return {
                expand:false,
                qrCode:require('@/assets/img/shop/xueyou.jpg'),
                loginVisible:false,
                registerVisible:false,
                bigDataBgImage:require('@/assets/img/shop/real_time_bg.png'),
                centerAds:[],
                imgList:[],
                navList:[],
                hotSpecs:[],
                hotTemps:[],
                hotTops:Array.from({length:10}).map((_,index)=>[
                    { img:require('@/assets/img/shop/jinguanzhang.jpg') },
                    { img:require('@/assets/img/shop/jinguanzhang.jpg') },
                    { img:require('@/assets/img/shop/jinguanzhang.jpg') },
                    { img:require('@/assets/img/shop/jinguanzhang.jpg') },
                    { img:require('@/assets/img/shop/jinguanzhang.jpg') },
                ]),
                collectTops:Array.from({length:10}).map((_,index)=>[
                    { img:require('@/assets/img/shop/yaoming.jpg') },
                    { img:require('@/assets/img/shop/yaoming.jpg') },
                    { img:require('@/assets/img/shop/yaoming.jpg') },
                    { img:require('@/assets/img/shop/yaoming.jpg') },
                    { img:require('@/assets/img/shop/yaoming.jpg') },
                ]),
                shareTops:Array.from({length:10}).map((_,index)=>[
                    { img:require('@/assets/img/shop/xiangcai.jpg') },
                    { img:require('@/assets/img/shop/xiangcai.jpg') },
                    { img:require('@/assets/img/shop/xiangcai.jpg') },
                    { img:require('@/assets/img/shop/xiangcai.jpg') },
                    { img:require('@/assets/img/shop/xiangcai.jpg') },
                ]),
            }
        },
        computed:{
            computedNavList(){
                return this.navList.slice(0,12)
            },
        },
        mounted(){
            this.getSpecialty()
            this.getAdvertise()
            this.getHotSpecialty()
            this.getHotTemplate()
        },
        methods: {
            //图片url跳转
            handleImgLink(url){
                window.location.href = url
            },
            //获取专业列表
            getSpecialty(){
                return getSpec().then(res => {
                    this.navList = res.data.data
                    return res
                })
            },
            //获取热门专业列表
            getHotSpecialty(){
                return getHotSpec().then(res => {
                    this.hotSpecs = res.data.data.flatMap(item=>item.majors)
                    console.log("热门专业",this.hotSpecs)
                    return res
                })
            },
            //获取热门模板列表
            getHotTemplate(){
                // return getHotTemp().then(res => {
                //     this.hotTemps = res.data.data.flatMap(item=>item.paperTemplates)
                //     console.log("热门1",this.hotTemps)
                //     console.log("热门2",res)
                //     return res
                    
                // })
            },
            //获取广告
            getAdvertise(){
                return Promise.all([
                    getAd({ advertPosition:'center',oneEnd:'pc',advert:'position' }),
                    getAd({ oneEnd:'pc',advert:'carousel' }),
                ]).then(([centerAd,carousels]) => {
                    this.centerAds = centerAd.data.data
                    // console.log('111',this.centerAds)
                    this.imgList = carousels.data.data
                    // console.log('222',this.imgList)
                })
            },
            registerFromLogin() {
                this.loginVisible = false
                this.registerVisible = true
            },
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
        .f{ 
            .space('v',48px);
            .title{
                font-size:24px;
                color:rgba(0,0,0,0.65);
                text-align:left;
                font-weight:bold;
                margin-bottom:8px;
            }
        }
        .f1{
            .flex(row;nowrap;initial;stretch;);
            margin-top:24px;
            height:360px;
            background:#FFF;
            &>*{ .space('h',12px); }
            .nav{
                .position();
                .flex(column;nowrap;space-between;stretch);
                box-sizing:border-box;
                width:200px;
                .nav-item{
                    .position();
                    padding-top:4px;
                    z-index:800;
                    text-align:left;
                    .text:hover{
                        color:@color-theme !important;
                    }
                    &.expand{
                        .position(absolute;0;auto;auto;0);
                    }
                    background:#FFF;
                }
            }
            .carousel-container{
                width:calc(~'100% - 400px - 24px');
                height:100%;
                background:rgba(0,0,0,0.6);
                .carousel{
                    width:100%;
                    height:100%;
                    .custom-slick-arrow {
                        width: 25px;
                        height: 25px;
                        font-size: 25px;
                        color: #fff;
                        background-color: rgba(31, 45, 61, 0.11);
                        opacity: 0.3;
                        &:before {
                            display: none;
                        }
                        &:hover {
                            opacity: 0.5;
                        }
                    }
                    .img-container{
                        width:100%;
                        height:100%;
                        .img{
                            width:100%;
                            height:360px;
                            background-size:cover;
                            background-position:center top;
                        }
                    }
                }
            }
            .login{
                .flex(column;nowrap;space-between;center);
                box-sizing:border-box;
                padding:12px;
                width:200px;
                .header{
                    width:100%;
                }
                .main{
                    width:100%;
                    .avatar{
                        .flex(row;nowrap;center;center);
                        .radius(50%);
                        width:68px;
                        height:68px;
                        margin:-12px auto 12px auto;
                        background:#DDD;
                    }
                }
                .footer{
                    width:100%;
                    font-size:12px;
                    color:rgba(0,0,0,0.45);
                }
            }
        }
        .f2{
            .content{
                .flex(row;wrap;flex-start;center);
                align-content:center;
                .tag{
                    margin:6px;
                    position:relative;
                    right:6px;
                }
            }
        }
        .f3{
            width:100%;
            height: 380px;
            background-size:cover;
            background-position:center bottom; 
            &::before{
                content:'';
                display:table;
            }
            .header{
                font-size:32px;
                color:#FFF;
                text-align:center;
                margin-top:24px;
            }
            .content{
                height:calc(~'100% - 72px');
                display:grid;
                grid-template-columns: repeat(5,20%);
                grid-template-rows:repeat(2);
                .content-item{
                    .flex(column;nowrap;center;);
                    box-sizing:border-box;
                    padding:12px;
                    .row{
                        .center-w();
                        color:#FFF;
                    }
                    .row1{
                        .flex(row;nowrap;initial;flex-start;);
                        .icon{
                            font-size:24px;
                        }
                        span{
                            line-height:1;
                            font-size:28px;
                            margin-left:6px;
                        }
                    }
                    .row2{
                        .nomargin();
                        font-size:16px;
                        text-align:left;
                        box-sizing:border-box;
                        padding-left:60px;
                    }
                }
            }
            
        }
        .f4{
            .content{
                height:600px;
                display:grid;
                grid-template-columns: repeat(auto-fill,232px);
                grid-template-rows:repeat(auto-fill,295px);
                grid-row-gap: 10px;
                grid-column-gap: 10px;
                .card{
                    .radius(8px);
                    overflow:hidden;
                    width:100%;
                    height:100%;
                    cursor:pointer;
                    transition:all 0.5s;
                    &:hover{
                        transform:translateY(-4%);
                        box-shadow:2px 2px 10px 4px rgba(0,0,0,0.3);
                    }
                    img{
                        width:100%;
                        height:126px;
                    }
                    .info{
                        .flex(column;nowrap;space-between;flex-start;);
                        padding:12px;
                        height:169px;
                        text-align:left;
                        .top{
                            .text-wrap();
                            width:100%;
                            .title{
                                font-size:16px;
                                font-weight:bold;
                            }
                            .code{
                                color:rgba(0,0,0,0.65);
                            }
                        }
                        .bottom{
                            .text-wrap();
                            width:100%;
                            color:rgba(0,0,0,0.45);
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
                        }
                    }
                }
            }
        }
        .f5{
            width:100%;
            height:120px;
            display:grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-rows: 120px;
            grid-column-gap: 10px;
            .banner{
                .radius(12px);
                .flex(row;nowrap;center;center;);
                color:#FFF;
                background:#333;
            }
        }
        .f6{
            .content{
                height:496px;
                display:grid;
                grid-template-columns: repeat(3,384px);
                grid-column-gap: 24px;
                .rank{
                    width:384px;
                    height:100%;
                    .title{
                        font-size:16px;  
                    }
                    .list-view{
                        width:100%;
                        height:100%;
                        overflow:hidden;
                        .list-container{
                            .flex(row;nowrap;);
                            width:calc(~'100% * 10');
                            height:100%;
                            .list{
                                width:100%;
                                .item{
                                    .flex(row;nowrap;initial;stretch;);
                                    width:100%;
                                    height:68px;
                                    cursor:pointer;
                                    .num{
                                        width:20px;
                                        font-size:20px;
                                        font-weight:bold;
                                        margin-right:4px;
                                        text-align:left;
                                    }
                                    img{
                                        width:112px;
                                        height:100%;
                                    }
                                    .info{
                                        .flex(column;nowrap;space-between;stretch;);
                                        width:calc(~'100% - 20px - 112px - 4px');
                                        text-align:left;
                                        padding-left:12px;
                                        .title{ .nomargin();}
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
            
        }
        .qr-code-button{
            position:fixed;
            right:10px;
            bottom:170px;
        }
        .back-to-top{
            position:fixed;
            right:6px;
            bottom:124px;
        }
        .ad-aside{
            .position(fixed;auto;10px;222px;auto;);
            .radius(4px);
            .flex(column;nowrap;center;center);
            color:#FFF;
            background:#000;
            writing-mode:vertical-lr;
            width:32px;
            height:200px;
        }
    }
</style>