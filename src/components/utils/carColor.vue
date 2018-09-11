<template>
    <el-select @change="changeItem" v-model="carColorCode" :multiple="multiple" placeholder="请选择" clearable size="small"
               style="width: 100%">
        <el-option v-for="item in colorInfo" :key="item.code" :label="item.name" :value="item.code">
        </el-option>
    </el-select>
</template>

<script>
    const colorInfo = [{
        'gbCarColorCode': 'J',
        'gbCarColorName': '\u9ed1\u8272',
        'displayColorName': '\u9ed1\u8272',
        'code': '1',
        'name': '\u9ed1\u8272'
    }, {
        'gbCarColorCode': 'H',
        'gbCarColorName': '\u84dd\u8272',
        'displayColorName': '\u84dd\u8272',
        'code': '2',
        'name': '\u84dd\u8272'
    }, {
        'gbCarColorCode': 'I',
        'gbCarColorName': '\u68d5\u8272',
        'displayColorName': '\u68d5\u8272',
        'code': '3',
        'name': '\u68d5\u8272'
    }, {
        'gbCarColorCode': 'G',
        'gbCarColorName': '\u7eff\u8272',
        'displayColorName': '\u7eff\u8272',
        'code': '4',
        'name': '\u7eff\u8272'
    }, {
        'gbCarColorCode': 'B',
        'gbCarColorName': '\u7070\u8272',
        'displayColorName': '\u7070\u8272',
        'code': '5',
        'name': '\u7070\u8272'
    }, {
        'gbCarColorCode': 'A',
        'gbCarColorName': '\u767d\u8272',
        'displayColorName': '\u767d\u8272',
        'code': '6',
        'name': '\u767d\u8272'
    }, {
        'gbCarColorCode': 'E',
        'gbCarColorName': '\u7ea2\u8272',
        'displayColorName': '\u7ea2\u8272',
        'code': '7',
        'name': '\u7ea2\u8272'
    }, {
        'gbCarColorCode': 'C',
        'gbCarColorName': '\u9ec4\u8272',
        'displayColorName': '\u9ec4\u8272',
        'code': '8',
        'name': '\u9ec4\u8272'
    }, {
        'gbCarColorCode': 'D',
        'gbCarColorName': '\u7c89\u8272',
        'displayColorName': '\u7c89\u8272',
        'code': '9',
        'name': '\u7c89\u8272'
    }, {
        'gbCarColorCode': 'F',
        'gbCarColorName': '\u7d2b\u8272',
        'displayColorName': '\u7d2b\u8272',
        'code': '10',
        'name': '\u7d2b\u8272'
    }, {
        'gbCarColorCode': null,
        'gbCarColorName': '\u91d1\u8272',
        'displayColorName': '\u91d1\u8272',
        'code': '13',
        'name': '\u91d1\u8272'
    }, {
        'gbCarColorCode': 'Z',
        'gbCarColorName': '\u5176\u4ed6',
        'displayColorName': '\u5176\u4ed6',
        'code': '0',
        'name': '\u5176\u4ed6'
    }];

    export default {
        props: ['multiple'],
        data() {
            return {
                carColorCode: '',
                colorInfo: colorInfo
            };
        },

        methods: {
            changeItem() {
                this.$emit('getCode', this.carColorCode.toString(), 'carColorCode');
                console.log(this.carColorCode);
            },
            clear() {
                if (this.multiple) {
                    this.carColorCode = [];
                } else {
                    this.carColorCode = '';
                }
            }
        }
    };
</script>
<style scoped>
</style>

