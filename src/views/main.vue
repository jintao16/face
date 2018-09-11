<template>
    <el-container>
        <el-aside width="auto" style="background:#545c64">

        </el-aside>
        <el-container>
            <el-header>
                <el-col :span="2" style="color:#fff;font-size:20px;">
                    人像分析系统
                </el-col>
                <el-col :span="20" style="text-align:right;">
                    <Menu/>
                </el-col>

                <el-col :span="2" style="text-align:right;">
                    <el-button type="danger" @click="logOut">退出登录</el-button>
                </el-col>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import Menu from '../components/menu';

    export default {
        components: {
            Menu
        },
        data() {
            return {};
        },
        methods: {
            logOut() {
                this._services.getUserLogin(
                    {
                        type: 'logOut'
                    },
                    {
                        loading: {
                            msg: '正在退出'
                        }
                    }
                ).then((res) => {
                    if (parseInt(res.code, 10) !== 0) {
                        this.tools.message(res.message, 'error');
                        return;
                    }
                    this.$router.push('/login');
                });
            },
            isLogin() {
                this._services.getUserLogin({
                    type: 'isLogin'
                }).then((res) => {
                    if (parseInt(res.code, 10) === 403) {
                        this.$router.push('/login');
                    }
                });
            }
        },
        mounted() {
            this.isLogin();
        }
    };
</script>


<style lang="less">
    .el-header {
        line-height: 60px;
    }

    .el-main {
        height: 100%;
    }
</style>

