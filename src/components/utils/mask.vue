<template>
    <el-select v-model="maskCode" :multiple="multiple" placeholder="口罩" @change="changeItem" clearable size="small"
               style="width: 100%">
        <el-option v-for="item in maskInfo" :key="item.code" :label="item.name" :value="item.code">
        </el-option>
    </el-select>
</template>
<script>
    import {maskInfo} from '@/common/data.js';

    export default {
        data() {
            return {
                maskCode: '',
                maskInfo
            };
        },
        props: ['multiple'],
        mounted: function () {
            console.log(maskInfo);
        },
        methods: {
            changeItem() {
                this.$emit('getCode', this.maskCode.toString(), 'maskCode');
                console.log(this.maskCode);
            },
            clear() {
                if (this.multiple) {
                    this.maskCode = [];
                } else {
                    this.maskCode = '';
                }
            }
        }
    };
</script>
<style scoped>
</style>

