<template>
    <div class="msg-box" @click.self="destroyMsg()" >
        <div class="msg-body">
            <svg t="1569721713120" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2469" width="200" height="200">
                <path d="M422.4 750.933333 422.4 750.933333 422.4 750.933333zM512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM512 960C264.533333 960 64 759.466667 64 512S264.533333 64 512 64 960 264.533333 960 512 759.466667 960 512 960zM693.0176 282.702507l51.28832 51.28832-410.30656 410.30656-51.28832-51.28832 410.30656-410.30656ZM282.702507 330.9824l51.28832-51.28832 410.30656 410.30656-51.28832 51.28832-410.30656-410.30656Z" p-id="2470" fill="#d81e06"></path>
            </svg>
            <p class="message">{{ msg }}</p>
            <svg  @click.self="destroyMsg()" t="1569722582250" class="icon close" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3845" width="200" height="200">
                <path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128L512.128 467.904l-263.04-263.84c-12.448-12.48-32.704-12.544-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248a31.937 31.937 0 0 0 22.688 9.44c8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408a31.94 31.94 0 0 0 22.592-9.344c12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z" fill="#333333" p-id="3846"></path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: ""
        };
    },
    methods:{
        destroyMsg(){
            // console.log(this.$el);
            document.body.removeChild(this.$el);
            this.$destroy()
        }
    }
};
</script>

<style scoped>
.msg-box {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}
.msg-body {
    width: 160px;
    height: 160px;
    overflow: hidden;
    background-color: white;
    /* margin: 0 auto; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
}
svg {
    width: 100px;
    height: 100px;
    background-color: white;
}
.message {
    height: 40px;
    line-height: 40px;
    background-color: white;
    color: red;
    font-size: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.close {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}
</style>

