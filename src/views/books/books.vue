<template>
  <div class="book-manage">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>图书管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table :data='tableData'>
      <el-table-column
        prop="img"
        label="图书头图"
        width="100">
        <template slot-scope="scope">
          <img :src="scope.row.img">
        </template>
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="100">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="looknums"
        label="观看人数"
        width="100">
      </el-table-column>
      <el-table-column
        prop="startsnums"
        label="开始数量"
        width="100">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="更改时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="_id"
        label="图书"
        width="100">
      </el-table-column>
      <el-table-column
        prop="index"
        label="排序"
        width="100">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="100">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="简介"
        width="300">
      </el-table-column>
      <el-table-column label='操作' >
        <template slot-scope="scope">
          <el-button @click='handleUpdata' size='small' type='primary'>
            编辑
          </el-button>
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
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData : [],
        page : 1
      }
    },
    methods : {
      getData() {
        this.$axios.get('/book',{pn: this.page,size : 5}).then(res => {
          if (res.code === 200) {
            console.log(res);
            this.tableData = res.data
          }
        })
      },
      handleUpdata(){
        this.$router.push('/layout/bookEdit')
      },
      handleDelete(bookid){
        this.$confirm('确定删除本书?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/book/delete',{bookIds: [bookid]}).then(res =>{
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
  .book-manage{
    img{
      width: 60px;
      height: 60px;
    }
  }
</style>
