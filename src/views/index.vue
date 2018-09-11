<template>
    <div>
        <p>这是index页面</p>
        <router-link to="/main/faceLibQuery">
            <el-button>
                跳转人像库检索页面
            </el-button>
        </router-link>
        <router-link to="/main/channel">
            <el-button>
                跳转实时监控页面
            </el-button>
        </router-link>
        <div id="analysis" style="width:300px;height:300px;bottom:0;"></div>
        <SocketTest/>
    </div>
</template>

<script>
    let echarts = require('echarts');

    import SocketTest from './socketest';

    export default {
        components: {
            SocketTest
        },
        data() {
            return {
                myChartAnalysis: {},
                option: {}
            };
        },
        mounted() {
            this.option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    show: true,
                    left: '5%',
                    right: '5%',
                    bottom: '6%',
                    top: '5%',
                    containLabel: true,
                    // backgroundColor: "rgba(13,42,124,0.72)",
                    borderColor: 'rgba(0,0,0,0)'
                },
                calculable: true,
                itemStyle: {
                    normal: {
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            var colorList = [
                                '#32d669',
                                '#2196f3',
                                '#ffd076',
                                '#505464',
                                '#e75647'
                            ];
                            return colorList[params.dataIndex];
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [],
                        boundaryGap: true, // 是否2端留空白
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#000'
                            },
                            formatter: function (title) {
                                if (title.length > 3) {
                                    title = title.substring(0, 3) + '...';
                                }
                                return title;
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        splitNumber: 3,
                        splitLine: {
                            // 网格线
                            show: false // 是否显示
                        },
                        nameLocation: 'start',
                        // nameTextStyle:{ fontWeight: 'bold', color: 'white',fontSize:8 },
                        type: 'value',
                        axisLine: {
                            // 	坐标轴线
                            show: false
                        },
                        axisLabel: {
                            // y坐标文本
                            show: true,
                            textStyle: {
                                color: '#000',
                                width: 50
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: '',
                        type: 'bar',
                        // barWidth : 30,
                        // barWidth : 30,//柱图宽度
                        barMaxWidth: 50, //最大宽度
                        data: []
                    }
                ]
            };
            this.myChartAnalysis = echarts.init(document.getElementById('analysis'));
            this.myChartAnalysis.setOption(this.option, true);
            this.getStatistics();
        },
        methods: {
            getStatistics() {
                this._services.getStatistics({type: 'getTotal'}).then(
                    (res) => {
                        if (parseInt(res.code, 10) !== 0) {
                            this.tools.message(res.message, 'error');
                            return;
                        }
                        let na = [];
                        let nums = [];

                        // 最多显示前5条，排序后面再加
                        res.data.vidCaremaAlarmStaticList.map((row, i) => {
                            if (i < 5) {
                                na.push(row.channelName);
                                nums.push(row.totalNum);
                            }
                        });
                        this.option.xAxis[0].data = na;
                        this.option.series[0].data = nums;
                        this.myChartAnalysis.setOption(this.option, true);
                    }
                );
            }
        }
    };
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #000;
    }
</style>
