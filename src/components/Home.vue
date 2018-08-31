<template>
    <div class="home">
        <header>主页</header>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
    },
    components: {
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
html {
    font-size: 62.5%;
}
header {
    text-align: center;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    font-weight: bold;
}
.home {
    width: 100%;
    height: 5rem;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
