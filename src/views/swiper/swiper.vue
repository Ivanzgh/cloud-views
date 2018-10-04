<template>
  <div class="swiper-manage">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>轮播图管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table :data='swiperData'>
      <el-table-column
        prop="img"
        label="图片"
        width="150">
        <template slot-scope="scope">
          <img :src="scope.row.img">
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="150">
      </el-table-column>
      <el-table-column
        prop="book"
        label="图书头图"
        width="150">
        <template slot-scope="scope">
          <img :src="scope.row.book.img" >
        </template>
      </el-table-column>
      <el-table-column
        prop="index"
        label="排序"
        width="250">
      </el-table-column>
      <el-table-column label='操作' >
        <template slot-scope="scope">
          <el-button @click='handleUpdata(scope.row._id)' size='small' type='primary'>
            编辑
          </el-button>
          <el-button @click='handleDelete(scope.row._id)' size='small' type='danger'>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination"
      background
      layout="prev, pager, next"
      @current-change="pageChange"
      :page-size="5"
      :total="swiperCount">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperData : [],
        swiperCount : 0,
        page : 1,
        size : 5
      }
    },
    methods : {
      getData() {
        this.$axios.get('/swiper',{pn: this.page,size : this.size}).then(res => {
          if (res.code === 200) {
            this.swiperCount = res.count;
            this.swiperData = res.data
          }
        })
      },
      handleUpdata(id){
        this.$router.push({name:'swiperEdit',query:{id}})
      },
      handleDelete(id){
        this.$confirm('此操作将删除轮播图, 是否继续?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/swiper/delete',{swiperIds: [id]}).then(res =>{
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
  .swiper-manage{
    img{
      width: 60px;
      height: 60px;
    }

    .pagination{
      text-align: center;
    }
  }
</style>
