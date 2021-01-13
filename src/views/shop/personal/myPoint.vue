<template>
    <div class="my-point-container">
        <div class="top">
            <div class="left">
                <div class="basic">
                    <div class="label">我的积分余额</div>
                    <div class="content">
                        <span class="point">1515</span>
                        <a-button type="primary">充值</a-button>
                        <a-button type="primary">查看充值记录</a-button>
                    </div>
                </div>
                <a-row class="row" type="flex">
                    <a-col class="col" :span="12">收入：123</a-col>
                    <a-col class="col" :span="12">支出：158</a-col>
                </a-row>
            </div>
            <div class="right">
                这是关于积分的说明
                这是关于积分的说明
                这是关于积分的说明
                这是关于积分的说明
                这是关于积分的说明
                这是关于积分的说明
                这是关于积分的说明
            </div>
        </div>
        <div class="bottom">
            <a-tabs v-model="tabKey" type="card" tab-position="top" @change="tabClick">
                <a-tab-pane key="0" tab="收入记录"/>
                <a-tab-pane key="1" tab="支出记录"/>
            </a-tabs>
            <a-table v-show="tabKey==1" :data-source="dataSource" row-key="id">
                <a-table-column title="时间" dataIndex="time"></a-table-column>
                <a-table-column title="操作" dataIndex="operation"></a-table-column>
                <a-table-column title="订单编号" dataIndex="order"></a-table-column>
                <a-table-column title="积分变动" dataIndex="count"></a-table-column>
            </a-table>
            <a-table v-show="tabKey==0" :data-source="dataSource2" row-key="id">
                <a-table-column title="时间" dataIndex="time"></a-table-column>
                <a-table-column title="操作" dataIndex="operation"></a-table-column>
                <a-table-column title="积分变动" dataIndex="count"></a-table-column>
            </a-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabKey:'0',
                dataSource:[
                    {
                        id:1,
                        time:'2010-05-20 18:00:00',
                        operation:'论文购买',
                        order:'5665465468959',
                        count:'-15',   
                    },
                ],
                dataSource2:[
                    {
                        id:1,
                        time:'2010-05-20 18:00:00',
                        operation:'充值',
                        count:'+15',   
                    },
                    {
                        id:2,
                        time:'2010-05-20 18:00:00',
                        operation:'分享',
                        count:'+15',   
                    },
                ],
            }
        },
        methods: {
            tabClick() {
                
            }
        },
    }
</script>

<style lang="less" scoped>
    .my-point-container{
        padding:24px;
        .top{
            .flex(row;nowrap;space-between;stretch;);
            .left{
                height:100%;
                flex-grow:1;
                padding-right:24px;
                .row{
                    .border(1px solid #DDD);
                    .col{
                        .divider('h';1px solid #DDD;);
                        text-align:left;
                        padding:6px 12px;
                    }
                }
                .basic{
                    .border(1px solid #DDD);
                    border-bottom:0;
                    padding:12px;
                    .label{
                        text-align:left;
                    }
                    .content{
                        .flex(row;nowrap;flex-start;center;);
                        &>*{ .space('h';12px;) }
                        .point{
                            font-size:50px;
                            color:@color-theme;
                        }
                    }
                }
            }
            .right{
                width:240px;
                background:#EEE;
                padding:12px;
            }
        }
        .bottom{
            margin-top:12px;
        }
    }
</style>
<style lang="less">
    .my-point-container{
        .ant-tabs-nav-scroll{
            .flex(row;nowrap;flex-start;center;);
        }
    }
</style>