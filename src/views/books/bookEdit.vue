<template>
  <div class="bookEdit">
    <h2>修改图书</h2>
    <div class="form-wrap">
      <el-form size="small" :model="formData" label-width="120px" label-position="left">
        <el-form-item label="作者：">
          <el-input v-model="formData.author"></el-input>
        </el-form-item>
        <el-form-item label="书籍：">
          <el-input v-model="formData.book_id"></el-input>
        </el-form-item>
        <el-form-item label="排序：">
          <el-input-number v-model="formData.index" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item label="类型：">
          <el-select v-model="formData.type">
            <el-option v-for="(item,index) in categoryData"
                       :key="index"
                       :label="item.title"
                       :value="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="图书头图：">
          <uploadImg v-model="formData.img"></uploadImg>
        </el-form-item>
        <el-form-item label="简介：">
          <el-input type="textarea" v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleClick">保存修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bookEdit",
      data() {
        return {
          formData : {
            book_id : '',
            author : '',
            img : '',
            type : '',
            desc : '',
            index : ''
          },
          categoryData : []
        }
      },
      methods :{
        async getCategoryData(){
          const res = await this.$axios.get('/category');
          this.categoryData = res.data;
        },

        initData(){
          this.formData = {
            ...this.$store.state.bookinfo
          }
        },
        handleClick(){
          this.$axios.put('/book',this.formData).then(res => {
            console.log(res);
            if (res.code === 200){
              let bookinfo = res.data;
              this.$store.commit('CHANGE_BOOKINFO',bookinfo);
              this.initData();
              this.$message.success(res.msg);
            }
          })
        },
      },
      created() {
        this.initData();
        this.getCategoryData()
      }
    }
</script>

<style scoped>
  .form-wrap{
    width: 400px;
    margin-top: 20px;
  }
</style>
