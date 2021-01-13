<template>
    <div class="my-order-container">
        <div class="search-container">
            <div class="search-form">
                <div class="form-item">
                    <span class="label">订单号：</span>
                    <a-input style="width:120px;" placeholder="输入订单号"></a-input>
                </div>
                <div class="form-item">
                    <span class="label">时间：</span>
                    <a-range-picker
                        :show-time="{ format: 'HH:mm' }"
                        format="YYYY-MM-DD HH:mm:ss"
                        :placeholder="['开始时间', '结束时间']"
                    />
                </div>
                <div class="form-item">
                    <span class="label">状态：</span>
                    <a-select default-value="1" style="width: 120px">
                        <a-select-option value="1">已完成</a-select-option>
                        <a-select-option value="2">待支付</a-select-option>
                    </a-select>
                </div>
            </div>
            <div class="search-button">
                <a-button :loading="loading" type="primary" icon="search">查询</a-button>
            </div>
        </div>
        <a-table style="margin-top:24px" :data-source="dataSource" row-key="id">
            <a-table-column title="订单编号" dataIndex="order"></a-table-column>
            <a-table-column title="订单内容" dataIndex="content">
                <template slot-scope="content">
                    <a-button style="margin:0;padding:0;" type="link">{{content}}</a-button>
                </template>
            </a-table-column>
            <a-table-column title="订单状态" dataIndex="state"></a-table-column>
            <a-table-column title="消费积分" dataIndex="point"></a-table-column>
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
        data() {
            return {
                loading:false,
                dataSource:[
                    { id:1,order:'ASDASDASDASD',content:'asdasfasf.docx',state:'已完成',point:125,time:'2020-10-25' },
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
    .my-order-container {
        padding:24px;
        .search-container{
            .flex(row;nowrap;space-between;center);
            .search-form{
                .flex(row;nowrap;flex-start;center);
                .form-item{ .space('h';12px;) };
                margin-top:24px;
            }
            .search-button{
                .flex(row;nowrap;flex-end;center;);
                margin-top:24px;
            }
        }
    }
</style>