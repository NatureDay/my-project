<template>
    <div>
        <group>
            <search placeholder="请输入搜索内容" v-model="searchValue" cancel-text="取消"></search>
            <x-input title="请输入内容" type="number"></x-input>
            <datetime title="出生日期" v-model="birthday" @on-confirm="onBirthdayConfirm"></datetime>
        </group>
    </div>
</template>

<script>
import { Group, Search, XInput, Datetime } from 'vux'

export default {
    data () {
        return {
            searchValue: "",
            birthday: "2018-08-09"
        }
    },
    methods: {
        onBirthdayConfirm: function () {
            console.log('-------birthday---------' + this.birthday)
        }
    },
    components: {
        Group,
        Search,
        XInput,
        Datetime
    }
}
</script>

<style>
</style>