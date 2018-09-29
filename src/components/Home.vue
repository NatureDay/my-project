<template>
    <section class="home">
        <header>主页</header>
        <section class="content">
            <div class="item" @click="login">登录</div>
            <div class="item" @click="list">列表</div>
            <div class="item" @click="edit">编辑</div>
            <div class="item" @click="detail">详情</div>
            <div class="item" @click="vuxDemo">VuxDemo</div>
        </section>
        <footer>这是我的测试页</footer>
    </section>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        login: function () {
            alert('登录');
        },
        list: function () {
            alert('列表');
        },
        edit: function () {
            this.$router.push({ name: 'edit' });
        },
        detail: function () {
            alert('详情');
        },
        vuxDemo: function () {
            this.$router.push({ name: 'vuxDemo' });
        },
    },
    components: {
    }
}
</script>

<style scoped>
.home {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}
header {
    width: 100%;
    height: 10%;
    background-color: blue;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
footer {
    width: 100%;
    height: 5%;
    background-color: grey;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
}
.content {
    width: 100%;
    height: 80%;
    background-color: greenyellow;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.item {
    color: #000;
    font-size: 25px;
}
</style>
