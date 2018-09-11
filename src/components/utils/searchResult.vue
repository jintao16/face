<template>
    <div style="height:100%;position:relative;">
        <el-row class="tool-box" v-show="totalNum>0">
            <el-checkbox v-model="allCheck" @change="handleCheckAllChange">全选本页</el-checkbox>
        </el-row>
        <el-row class="item-wrap">
            <el-checkbox-group v-model="checkedItems" @change="handleCheckedChange">
                <el-col class="items" :span="4" v-for="(item,index) in searchData" :key="item.faceId"
                        :offset="index%5==0?0:1">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <el-checkbox :key="item.faceId" :label="item.faceId" class="item-checkbox"></el-checkbox>
                        <div class="image-wrap">
                            <img :src="item.faceId|imageUrl">
                        </div>
                        <div class="bottom-part">
                            <p class="attr-item">姓名：{{item.name}}</p>
                            <p class="attr-item">身份证号：{{item.idNumber}}</p>
                            <p class="attr-item">更新时间：{{timeFormat(item.updateTime,'dateTime')}}</p>
                        </div>
                    </el-card>
                </el-col>
            </el-checkbox-group>
        </el-row>
        <el-row v-show="totalNum>0" class="pagenation">
            <el-pagination background layout="prev, pager, next, total" :total="totalNum"
                           @current-change="handlePageChange">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    export default {
        props: ['searchData', 'totalNum'],
        data() {
            return {
                allCheck: false,
                checkedItems: [] //所有勾选的Id集合
            };
        },
        watch: {
            searchData(newVal) {
                let flag = true;

                newVal.map(i => {
                    flag = this.checkedItems.includes(i.faceId);
                });
                this.allCheck = flag;
            }
        },
        filters: {
            imageUrl(val) {
                if (!val) {
                    return;
                }
                val = val.toString();
                return 'http://' + location.host + '/client/get_face.php?faceId=' + val;
            }
        },
        methods: {
            timeFormat(val, type) {
                return this.tools.timeFormat(val, type);
            },
            handlePageChange(currentPage) {
                this.$emit('search', currentPage);
            },
            handleCheckAllChange(val) {
                if (val) {
                    this.searchData.map(i => {
                        if (!this.checkedItems.includes(i.faceId)) {
                            this.checkedItems.push(i.faceId);
                        }
                    });
                } else {
                    this.searchData.map(i => {
                        let idx = this.checkedItems.indexOf(i.faceId);

                        this.checkedItems.splice(idx, 1);
                    });
                }
            },
            handleCheckedChange(value) {
                let checkedCount = value.length;

                this.allCheck = checkedCount === this.searchData.length;
            }
        }
    };
</script>
<style lang="less">
    .item-wrap {
        height: 90%;
        .attr-item {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .item-checkbox {
            position: absolute;
            margin-left: 10px;
            margin-top: 5px;
        }
        .el-checkbox__label {
            display: none;
        }
    }

    .pagenation {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
    }

    .tool-box {
        margin-bottom: 20px;
    }
</style>
