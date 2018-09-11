<template>
    <el-select v-model="ageCode" :multiple="multiple" placeholder="年龄" @change="changeItem" clearable size="small"
               style="width: 100%">
        <el-option v-for="item in ageInfo" :key="item.code" :label="item.name" :value="item.code">
        </el-option>
    </el-select>
</template>
<script>
    import {ageInfo} from '@/common/data.js';

    export default {
        data() {
            return {
                ageCode: '',
                ageInfo
            };
        },
        props: ['multiple'],
        mounted: function () {
            console.log(ageInfo);
        },
        methods: {
            changeItem() {
                this.$emit('getCode', this.ageCode.toString(), 'ageCode');
                console.log(this.ageCode);
            },
            clear() {
                if (this.multiple) {
                    this.ageCode = [];
                } else {
                    this.ageCode = '';
                }
            }
        }
    };
</script>
<style scoped>
</style>

