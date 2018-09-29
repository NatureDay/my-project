<template>
    <div>
        <group>
            <search placeholder="请输入搜索内容" v-model="searchValue" cancel-text="取消"></search>
            <x-input title="姓    名" v-model="name"></x-input>
            <datetime title="出生日期" v-model="birthday" @on-confirm="onBirthdayConfirm"></datetime>
            <x-button type="warn" mini @click.native="reduce">减少</x-button>
            <x-button type="primary" mini @click.native="add">增加</x-button>
            {{ countData }}

            <x-button type="primary" @click.native="submit">提交</x-button>
        </group>
    </div>
</template>

<script>
import { Group, Search, XInput, Datetime, XButton } from 'vux'

export default {
    data () {
        return {
            name: "",
            searchValue: "",
            birthday: "2018-08-09",
            countData: 0
        }
    },
    methods: {
        onBirthdayConfirm: function () {
            console.log('-------birthday---------' + this.birthday)
        },
        reduce: function () {
            this.$store.commit('decrement')
        },
        add: function () {
            this.$store.commit('increment')
        },
        submit: function () {

        }
    },
    components: {
        Group,
        Search,
        XInput,
        Datetime,
        XButton
    },
    computed: {
        count () {
            return this.$store.state.count
        }
    }
}
</script>

<style>
</style>