<template>
    <div>
        <group>
            <search placeholder="请输入文字"> </search>
            <x-input title="请输入内容" type="number"></x-input>
            <datetime title="日期"></datetime>
        </group>
    </div>
</template>

<script>
import { Group, Search, XInput, Datetime } from 'vux'

export default {
    data () {
        return {

        }
    },
    methods: {

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