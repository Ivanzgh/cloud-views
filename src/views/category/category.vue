<template>
  <div class="category-mange">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>分类管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table :data='tableData'>
      <el-table-column
        prop="icon"
        label="图标"
        width="150">
        <template slot-scope="scope">
          <img :src="scope.row.icon">
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="分类标题"
        width="150">
      </el-table-column>
      <el-table-column
        prop="_id"
        label="图书"
        width="150">

      </el-table-column>
      <el-table-column
        prop="index"
        label="排序"
        width="150">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="150">
      </el-table-column>
      <el-table-column label='操作' >
        <template slot-scope="scope">
          <el-button @click='handleUpdata' size='small' type='primary'>编辑</el-button>
          <el-button @click='handleDelete(scope.row._id)' size='small' type='danger'>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页-->
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="pageChange"
      :page-size="5"
      :total="count">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData : [],
        count : 0,
        page : 1,
      }
    },
    methods : {
      getData() {
        this.$axios.get('/category',{pn: this.page,size : 5}).then(res => {
          console.log(res);
          if (res.code === 200) {
            this.count = res.count;
            this.tableData = res.data
          }
        })
      },
      handleUpdata(){
        this.$router.push('/layout/categoryEdit')
      },
      handleDelete(categoryid){
        this.$confirm('确定删除该分类?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/category/:id',{categoryIds: [categoryid]}).then(res =>{
            this.$message.success(res.msg);
            this.getData()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      pageChange(page){
        this.page = page;
        this.getData();
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .category-mange{
    img{
      width: 60px;
      height: 60px;
    }
  }
</style>
