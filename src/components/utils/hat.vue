<template>
    <el-select v-model="hatCode" :multiple="multiple" placeholder="帽子" @change="changeItem" clearable size="small"
               style="width: 100%">
        <el-option v-for="item in hatInfo" :key="item.code" :label="item.name" :value="item.code">
        </el-option>
    </el-select>
</template>
<script>
    import {hatInfo} from '@/common/data.js';

    export default {
        data() {
            return {
                hatCode: '',
                hatInfo
            };
        },
        props: ['multiple'],
        mounted: function () {
            console.log(hatInfo);
        },
        methods: {
            changeItem() {
                this.$emit('getCode', this.hatCode.toString(), 'hatCode');
                console.log(this.hatCode);
            },
            clear() {
                if (this.multiple) {
                    this.hatCode = [];
                } else {
                    this.hatCode = '';
                }
            }
        }
    };
</script>
<style scoped>
</style>

