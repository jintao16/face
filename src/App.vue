<template>
    <router-view></router-view>
</template>


<script>

    export default {
        name: 'app'
    };
</script>

<style src="@/common/basic.less">
</style>

<style lang="less">
    html,
    body {
        height: 100%;
        width: 100%;
    }

    /*滚动条*/
    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }

    ::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        /* background-color: #f1f1f1; */
        background-color: transparent;
        border-radius: 10px;
    }
</style>
