<template>
    <div class="fexd-btn" @click="$router.back()">返回</div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.fexd-btn{
    position: fixed;
    bottom: @bottomHeight + 0.1rem;
    right: 10px;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 50%;
    text-align: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
}
</style>