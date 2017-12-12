<template>
    <div id="content">
        <el-form label-width="80px">
            <el-form-item label="标题">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        methods: {
            onSubmit() {
                console.log('submit!')
                var _this = this
                this.$http.put('/api/article/'+ _this.$route.params.id, {
                    title: 'eew2dfd34aa56'
                })
                .then(function (response) {
                    console.log(response);

                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    #content {
        margin: 30px;
    }
</style>
