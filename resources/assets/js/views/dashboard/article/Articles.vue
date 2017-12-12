<template>
    <div id="content">
        <template>
            <el-table
                    :data="tableData"
                    border
                    style="width: 60%">
                <el-table-column
                        prop="title"
                        label="标题">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="120">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    id: 1,
                    title: '上海市普陀弄'
                }, {
                    id: 2,
                    title: '上海市普陀区金沙江路 1517 弄'
                }]
            }
        },
        methods: {
            edit(row) {
                console.log(row);
                this.$router.push('/dashboard/articles/edit/' + row.id)
            }
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    #content {
        margin: 30px;
    }
</style>
