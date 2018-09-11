<template>
    <el-select v-model="glassesCode" :multiple="multiple" placeholder="眼镜" @change="changeItem" clearable size="small"
               style="width: 100%">
        <el-option v-for="item in glassesInfo" :key="item.code" :label="item.name" :value="item.code">
        </el-option>
    </el-select>
</template>

<script>
    import {glassesInfo} from '@/common/data.js';

    export default {
        data() {
            return {
                glassesCode: '',
                glassesInfo
            };
        },
        props: ['multiple'],
        mounted: function () {
            console.log(glassesInfo);
        },
        methods: {
            changeItem() {
                this.$emit('getCode', this.glassesCode.toString(), 'glassesCode');
                console.log(this.glassesCode);
            },
            clear() {
                if (this.multiple) {
                    this.glassesCode = [];
                } else {
                    this.glassesCode = '';
                }
            }
        }
    };
</script>
<style scoped>
</style>

