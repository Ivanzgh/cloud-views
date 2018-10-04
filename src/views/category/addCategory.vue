<template>
  <div class="addCategory">
    <h2>添加分类</h2>
    <div class="form-wrap">
      <el-form size="small" :model="formData" label-width="120px" label-position="left">
        <el-form-item label="分类名：">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="分类图标：">
          <uploadImg v-model="formData.icon" style="float : left"></uploadImg>
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
    name: "addCategory",
    data() {
      return {
        formData : {
          title : '',
          icon : '',
        }
      }
    },
    methods : {
      submitData(){
        this.$axios.post('/category',this.formData).then(res => {
          this.$message.success(res.msg)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .addCategory{
    width: 400px;
    margin-top: 20px;
  }
</style>
