<template>
    <a-pagination 
        v-model="currentPage" 
        :pageSize.sync="currentSize" 
        :pageSizeOptions="pageSizeOptions" 
        :total="total" 
        show-size-changer 
        show-quick-jumper
    />
</template>

<script>
    let sizeChanging = false
    export default {
        props: {
            page: {
                type: Number,
                default: 1, 
            },
            size:{
                type: Number,
                default: 10, 
            },
            total:{
                type: Number,
                default: 0, 
            },
        },
        created(){
            this.currentPage = this.page
            this.currentSize = this.size
        },
        data() {
            return {
                currentPage: 1,
                currentSize: 10,
                pageSizeOptions:['10','20','50','100'],
            }
        },
        methods: {
            handleSizeChange(page,size) {
                this.currentPage = 1
            }
        },
        watch: {
            page(val) {
                if(val!==this.currentPage){
                    this.currentPage = val
                }
            },
            currentPage(val){
                if(val!==this.page){
                    this.$emit('update:page',val)
                    if(sizeChanging ){
                        sizeChanging = false
                    }else{
                        this.$nextTick(()=>{
                            this.$emit('change')
                        })
                    }
                }
            },
            size(val) {
                if(val!==this.currentSize){
                    this.currentSize = val
                }
            },
            currentSize(val){
                if(val!==this.size){
                    this.currentPage = 1
                    sizeChanging = true
                    this.$emit('update:size',val)
                    this.$nextTick(()=>{
                        this.$emit('change')
                    })
                }
            },
        },
    }
</script>

<style lang="less" scoped>

</style>