<template>
    <div class="pa_body">

        <Sidebar/>
        <Navbar/>

        <div class="body-content">
            <Breadcrumb/>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Sidebar from './dashboard/Sidebar.vue';
    import Navbar from './dashboard/Navbar.vue';
    import Breadcrumb from './dashboard/Breadcrumb.vue';

    export default {
        name: 'Dashboard',
        components: {
            Sidebar,
            Navbar,
            Breadcrumb
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    body {
        margin: 0 auto;
        background-color: yellow;
    }

    .body-content {
        position: absolute;
        top: 48px;
        left: 200px;
        right: 0;
        padding: 10px;
        bottom: 0;
        /* “bottom:0 与 overflow” 结合使用的效果：当内容超出显示器时，自动添加本区域的滚动条，其他区域保持不变*/
        overflow: auto;
        /*除了上面的方式，还有一种是不定义bottom，也不用overflow，这样内容是多少，中间内容区的行高就是多少，自适应，但是菜单和标题栏就会随着滚轮而动*/
        display: flex;
        flex-direction: column;
    }

</style>
