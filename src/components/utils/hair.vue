<template>
    <el-select v-model="hairCode" :multiple="multiple" placeholder="发型" @change="changeItem" clearable size="small"
               style="width: 100%">
        <el-option v-for="item in hairInfo" :key="item.code" :label="item.name" :value="item.code">
        </el-option>
    </el-select>
</template>
<script>
    import {hairInfo} from '@/common/data.js';

    export default {
        data() {
            return {
                hairCode: '',
                hairInfo
            };
        },
        props: ['multiple'],
        mounted: function () {
            console.log(hairInfo);
        },
        methods: {
            changeItem() {
                this.$emit('getCode', this.hairCode.toString(), 'hairCode');
                console.log(this.hairCode);
            },
            clear() {
                if (this.multiple) {
                    this.hairCode = [];
                } else {
                    this.hairCode = '';
                }
            }
        }
    };
</script>
<style scoped>
</style>

