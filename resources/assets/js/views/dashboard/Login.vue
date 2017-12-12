<template>
    <div id="wrapper">
        <el-card class="box-card">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import ElCard from "element-ui/packages/card/src/main";

    export default {
        components: {ElCard},
        data() {
            return {
                form: {
                    name: '',
                    password: '',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!')
                var _this = this
                this.$http.post('/api/admin/login', {
                    email: 'efrain82@example.org',
                    password: '123456'
                })
                .then(function (response) {
                    console.log(response);
                    window.User = response.data

                    window.axios.defaults.headers.common = {
                        'X-Requested-With':'XMLHttpRequest',
                        'X-CSRF-TOKEN': window.Laravel.csrfToken,
                        'Authorization': '333Bearer '+response.data.api_token
                    };

                    // console.log(_this.$route)
                    _this.$router.go(-1)
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    #wrapper {
        display: flex;
        justify-content: center;
    }

    .box-card {
        width: 400px;
    }
</style>
