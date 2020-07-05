<template>
    <div class="tip-box" :style=" 'animation-duration:'+time+'s;' ">{{ msg }}</div>
</template>
<script>
export default {
    data() {
        return {
            msg: "",
            time: 3
        };
    }
};
</script>
<style scoped>
.tip-box {
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 6px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    animation-name: tipFade;
    animation-iteration-count: 1;
    /* animation-duration: 3s; */
}
@keyframes tipFade {
    0% {
        transform: translate(-50%, -100%);
        opacity: 0;
    }
    15% {
        transform: translate(-50%, 100%);
        opacity: 1;
    }
    85% {
        transform: translate(-50%, 100%);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -100%);
        opacity: 0;
    }
}
</style>