<template>
    <div>
        <group>
            <search placeholder="请输入文字"></search>
            <x-input title="请输入内容" type="number"></x-input>
            <datetime title="生日" v-model="birthday" @on-confirm="onBirthdayConfirm"></datetime>
        </group>
    </div>
</template>

<script>
import { Group, Search, XInput, Datetime } from 'vux'

export default {
    data () {
        return {
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