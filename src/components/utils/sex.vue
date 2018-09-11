<template>
    <el-select v-model="sexCode" :multiple="multiple" placeholder="性别" @change="changeItem" clearable size="small"
               style="width: 100%">
        <el-option v-for="item in sexInfo" :key="item.code" :label="item.name" :value="item.code">
        </el-option>
    </el-select>
</template>
<script>
    import {sexInfo} from '@/common/data.js';

    export default {
        data() {
            return {
                sexCode: '',
                sexInfo: sexInfo
            };
        },
        props: ['multiple'],
        mounted: function () {
            console.log(sexInfo);
        },
        methods: {
            changeItem() {
                this.$emit('getCode', this.sexCode.toString(), 'sexCode');
                console.log(this.sexCode);
            },
            clear() {
                if (this.multiple) {
                    this.sexCode = [];
                } else {
                    this.sexCode = '';
                }
            }
        }
    };
</script>
<style scoped>
</style>

