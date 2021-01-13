<template>
    <div class="recharge-history-container">
        <div class="title">充值历史记录</div>
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
                        @change="onChange"
                        @ok="onOk"
                    />
                </div>
                <div class="form-item">
                    <span class="label">状态：</span>
                    <a-select default-value="1" style="width: 120px" @change="handleChange">
                        <a-select-option value="1">支付成功</a-select-option>
                        <a-select-option value="2">待支付</a-select-option>
                        <a-select-option value="3">支付失败</a-select-option>
                    </a-select>
                </div>
            </div>
            <div class="search-button">
                <a-button :loading="loading" type="primary" icon="search">查询</a-button>
            </div>
        </div>
        <a-table style="margin-top:24px" :data-source="dataSource" row-key="id">
            <a-table-column title="时间" dataIndex="time"></a-table-column>
            <a-table-column title="订单编号" dataIndex="order"></a-table-column>
            <a-table-column title="状态" dataIndex="count"></a-table-column>
            <a-table-column title="充值积分" dataIndex="operation"></a-table-column>
        </a-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                dataSource:[
                    { id:1,time:'2020-10-11 15:13:22',order:'ASDAS445646ASD46',state:'支付成功',count:'1000' },
                ],
            }
        },
    }
</script>

<style lang="less" scoped>
    .recharge-history-container{
        padding:24px;
        .title{
            .border(4px solid @color-theme;'left');
            width:100%;
            height:50px;
            line-height:50px;
            padding-left:12px;
            background:#F2F2F2;
            text-align:left;
            font-size:20px;
        }   
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