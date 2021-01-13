<template>
    <div class="recharge-container">
        <div class="history"><a-button @click="$router.push({name:'个人中心-充值历史',})" type="link">查看充值历史</a-button></div>
        <div class="main">
            <div class="left">
                <div class="label">选择充值方式：</div>
                <div class="selection-type">
                    <a-radio-group name="type" v-model="selectionType">
                        <a-radio :value="1">
                            <img :src="wxPayImg" alt="微信">
                        </a-radio>
                        <a-radio :value="2">
                            <img :src="aliPayImg" alt="支付宝">
                        </a-radio>
                    </a-radio-group>
                </div>
                <div class="label">选择充值金额：</div>
                <div class="selection-count">
                    <a-radio-group style="width:100%;" name="count" v-model="selectionCount">
                        <a-row v-for="count of rowCount" :key="'count' + count" class="row" type="flex" justify="start" align="middle">
                            <a-col v-for="(item,index) of infoList.slice((count-1)*3,count*3)" :key="index+'count'" :span="8">
                                <div class="radio-box">
                                    <a-radio :value="item.id">
                                        {{item.amount}}元，{{item.integral}}积分
                                    </a-radio>      
                                </div>
                            </a-col>
                        </a-row>
                        <a-row v-if="scale" class="row" type="flex" justify="space-between" align="middle">
                            <a-col :span="24">
                                <div class="radio-box" style="padding:12px;">
                                    <a-radio value="other">
                                        其他：
                                        <a-input style="width:200px;" type="text" :disabled="selectionCount!=='other'" v-model="otherCount" placeholder="只能输入10的整倍数"></a-input>
                                        元
                                        <span v-show="otherCount && Number(otherCount)==Number(otherCount) && parseInt(otherCount) == Number(otherCount)">
                                            ，{{ otherCount*scale}}积分
                                        </span>
                                    </a-radio>      
                                </div>
                            </a-col>
                        </a-row>
                    </a-radio-group>
                </div>
            </div>
            <div class="right">
                <div v-show="selectionType===1" style="padding:12px;text-align:left;">
                    微信支付是指通过微信支付储值账户进行的在线付款的支付方式。
                    消费者只要能够保证充值时，自己的“微信支付账户”留有足够余额，就可以直接从账户划款充值。
                    微信支付是只有微信注册用户才可以享受的特别支付服务。
                </div>
                <div v-show="selectionType===2" style="padding:12px;text-align:left;">
                    支付宝充值时，消费者要保证自己的“支付宝支付账户”留有足够余额。
                    支付宝充值是只有支付宝注册用户才可以享受的特别支付服务。
                    温馨提示：
                    如果支付宝充值提示“无法使用账户余额付款，请使用其他方式付款”，可能是因为您还没有申请支付宝数字证书。
                </div>
            </div>
        </div>
        <a-button type="primary" style="float:left;margin-top:12px;">确认充值</a-button>
    </div>
</template>

<script>
    import { getPointInfo } from '@/api/shop/point' 
    export default {
        data() {
            return {
                infoList:[],
                scale:null,
                selectionType: 1,
                selectionCount:10,
                otherCount:0,
                wxPayImg:require('@/assets/img/shop/weixin_payment.png'),
                aliPayImg:require('@/assets/img/shop/alipay_payment.png'),
            }
        },
        computed:{
            rowCount(){
                return Math.ceil(this.infoList.length/3)
            },
        },
        mounted(){
            getPointInfo().then(res => {
                if(res.data.code != 200) return this.$message.error(res.data.msg)
                this.infoList = res.data.data.filter(item => item.type == 'preferential')
                this.scale = res.data.data.find(item => item.type == 'scale').scale
            })
        },
    }
</script>

<style lang="less" scoped>
    .recharge-container{
        padding:24px;
        .history{
            .flex(row;nowrap;flex-end;center;);
        }
        .main{
            .border(1px solid #DDD,'top');
            .flex(row;nowrap;center;stretch;);
            .left{
                flex-grow:1;
                padding-right:24px;
                .selection-type{
                    .flex(row;nowrap;flex-start;stretch;);
                    margin-top:12px;
                }
                .label{
                    .space('v',24px);
                    text-align:left;
                    margin-top:12px;
                }
                .selection-count{
                    margin-top:12px;
                    .row{
                        width:100%;
                        .radio-box{
                            .flex(row;nowrap;flex-start;center);
                            .border(1px dashed #DDD);
                            padding:6px 12px;
                        }
                    }
                    
                }
            }
            .right{
                .border(1px solid #DDD,'left');
                width:240px;
            }
        }
    }
</style>