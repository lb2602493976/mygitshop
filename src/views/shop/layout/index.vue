<template>
    <div class="app-container">
        <Header></Header>
        <div class="main">
            <slot v-if="isComponent"/>
            <router-view v-else />
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './Header'
    import Footer  from './Footer'
    export default {
        props:{
            isComponent:{
                type:Boolean,
                default:false,
            },
        },
        components: {
            Header,
            Footer,
        },
    }
</script>

<style lang="less" scoped>
    .app-container{
        .center-w();
        width:1200px;
    }
</style>