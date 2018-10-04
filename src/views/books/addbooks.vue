<template>
  <div class="addbooks">
    <h2>添加图书</h2>
    <div class="form-wrap">
      <el-form size="small" :model="formData" label-width="120px" label-position="left">
        <el-form-item label="链接：">
          <el-input v-model="formData.url"></el-input>
        </el-form-item>
        <el-form-item label="作者：">
          <el-input v-model="formData.author"></el-input>
        </el-form-item>
        <el-form-item label="图书头图：">
          <el-switch
            v-model="isUpload"
            active-text="手动上传"
            inactive-text="头图网址">
          </el-switch>
          <el-input v-model="formData.img" v-if="!isUpload"></el-input>
          <uploadImg v-model="formData.img" v-else></uploadImg>
        </el-form-item>
        <el-form-item label="分类：">
          <el-select v-model="formData.typeId">
            <el-option v-for="(item,index) in categoryData"
                       :key="index"
                       :label="item.title"
                       :value="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitData">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "addbooks",
      data() {
          return {
            formData : {
              url : '',
              author : '',
              img : '',
              typeId : ''
            },
            categoryData : [],
            isUpload : false
          }
      },
      methods : {
        submitData(){
          this.$axios.post('/book',this.formData).then(res => {
            if (res.code === 200) {
              this.$message.success(res.msg);
              this.$router.push('/books')
            }
          })
        },
        async getCategoryData(){
          const res = await this.$axios.get('/category');
          this.categoryData = res.data;
        }
      },
      created(){
          this.getCategoryData()
      }
    }
</script>

<style scoped lang="scss">
  .addbooks{
    width: 500px;
    margin-top: 20px;
  }
</style>
