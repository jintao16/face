<template>
    <el-select v-model="carKindCode" :multiple="multiple" placeholder="请选择" @change="changeItem" clearable size="small"
               style="width: 100%">
        <el-option v-for="item in kindInfo" :key="item.code" :label="item.name" :value="item.code">
        </el-option>
    </el-select>
</template>

<script>
    const kindInfo = [
        {
            'gbCarKindCode': 'K33',
            'gbCarKindName': '\u8f7f\u8f66',
            'displayKindName': '\u8f7f\u8f66',
            'classifyCode': '1',
            'classifyName': '\u8f7f\u8f66',
            'tollgateKindName': '',
            'code': '1',
            'name': '\u8f7f\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u5c0f\u578b\u8d27\u8f66',
            'displayKindName': '\u5c0f\u578b\u8d27\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '4',
            'name': '\u5c0f\u578b\u8d27\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u5927\u578b\u8d27\u8f66',
            'displayKindName': '\u5927\u578b\u8d27\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '5',
            'name': '\u5927\u578b\u8d27\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u5c0f\u578b\u5ba2\u8f66',
            'displayKindName': '\u5c0f\u578b\u5ba2\u8f66',
            'classifyCode': '3',
            'classifyName': '\u5ba2\u8f66',
            'tollgateKindName': '',
            'code': '7',
            'name': '\u5c0f\u578b\u5ba2\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u5927\u578b\u5ba2\u8f66',
            'displayKindName': '\u5927\u578b\u5ba2\u8f66',
            'classifyCode': '3',
            'classifyName': '\u5ba2\u8f66',
            'tollgateKindName': '',
            'code': '8',
            'name': '\u5927\u578b\u5ba2\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u4e09\u8f6e\u8f66',
            'displayKindName': '\u4e09\u8f6e\u8f66',
            'classifyCode': '4',
            'classifyName': '\u4e09\u8f6e\u8f66',
            'tollgateKindName': '',
            'code': '9',
            'name': '\u4e09\u8f6e\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u6e23\u571f\u8f66',
            'displayKindName': '\u6e23\u571f\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '17',
            'name': '\u6e23\u571f\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u5fae\u9762',
            'displayKindName': '\u5fae\u9762',
            'classifyCode': '5',
            'classifyName': '\u9762\u5305\u8f66',
            'tollgateKindName': '',
            'code': '10',
            'name': '\u5fae\u9762'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u8d8a\u91ce\u8f66',
            'displayKindName': '\u8d8a\u91ce\u8f66',
            'classifyCode': '1',
            'classifyName': '\u8f7f\u8f66',
            'tollgateKindName': '',
            'code': '2',
            'name': '\u8d8a\u91ce\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u5546\u52a1\u8f66',
            'displayKindName': '\u5546\u52a1\u8f66',
            'classifyCode': '1',
            'classifyName': '\u8f7f\u8f66',
            'tollgateKindName': '',
            'code': '3',
            'name': '\u5546\u52a1\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u8f7b\u5ba2',
            'displayKindName': '\u8f7b\u5ba2',
            'classifyCode': '5',
            'classifyName': '\u9762\u5305\u8f66',
            'tollgateKindName': '',
            'code': '6',
            'name': '\u8f7b\u5ba2'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u76ae\u5361\u8f66',
            'displayKindName': '\u76ae\u5361\u8f66',
            'classifyCode': '2',
            'classifyName': '\u76ae\u5361\u8f66',
            'tollgateKindName': '',
            'code': '11',
            'name': '\u76ae\u5361\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u680f\u677f\u5361\u8f66',
            'displayKindName': '\u680f\u677f\u5361\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '21',
            'name': '\u680f\u677f\u5361\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u6302\u8f66',
            'displayKindName': '\u6302\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '12',
            'name': '\u6302\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u6df7\u51dd\u571f\u6405\u62cc\u8f66',
            'displayKindName': '\u6df7\u51dd\u571f\u6405\u62cc\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '13',
            'name': '\u6df7\u51dd\u571f\u6405\u62cc\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u7f50\u8f66',
            'displayKindName': '\u7f50\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '14',
            'name': '\u7f50\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u968f\u8f66\u540a',
            'displayKindName': '\u968f\u8f66\u540a',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '15',
            'name': '\u968f\u8f66\u540a'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u6d88\u9632\u8f66',
            'displayKindName': '\u6d88\u9632\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '16',
            'name': '\u6d88\u9632\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u62bc\u8fd0\u8f66',
            'displayKindName': '\u62bc\u8fd0\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '18',
            'name': '\u62bc\u8fd0\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u5de5\u7a0b\u62a2\u4fee\u8f66',
            'displayKindName': '\u5de5\u7a0b\u62a2\u4fee\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '19',
            'name': '\u5de5\u7a0b\u62a2\u4fee\u8f66'
        },
        {
            'gbCarKindCode': '',
            'gbCarKindName': '\u6551\u63f4\u8f66',
            'displayKindName': '\u6551\u63f4\u8f66',
            'classifyCode': '2',
            'classifyName': '\u8d27\u8f66',
            'tollgateKindName': '',
            'code': '20',
            'name': '\u6551\u63f4\u8f66'
        },
        {
            'gbCarKindCode': 'X99',
            'gbCarKindName': '\u5176\u4ed6',
            'displayKindName': '\u5176\u4ed6',
            'classifyCode': '0',
            'classifyName': '\u5176\u4ed6',
            'tollgateKindName': '',
            'code': '0',
            'name': '\u5176\u4ed6'
        }
    ];

    export default {
        data() {
            return {
                carKindCode: '',
                kindInfo: kindInfo
            };
        },
        props: ['multiple'],
        mounted: function () {
        },
        methods: {
            changeItem() {
                this.$emit('getCode', this.carKindCode.toString(), 'carKindCode');
                console.log(this.carKindCode);
            },
            clear() {
                if (this.multiple) {
                    this.carKindCode = [];
                } else {
                    this.carKindCode = '';
                }
            }
        }
    };
</script>
<style scoped>
</style>

