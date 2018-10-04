<template>
  <div class="categoryEdit">
    <h2>修改分类</h2>
    <div class="form-wrap">
      <el-form size="small" :model="formData" label-width="120px" label-position="left">
        <el-form-item label="分类标题：">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="排序：">
          <el-input-number v-model="formData.index" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item label="分类图标：">
          <uploadImg v-model="formData.icon" style="float : left"></uploadImg>
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
    name: "categoryEdit",
    data() {
      return {
        formData : {
          title : '',
          icon : '',
          index : ''
        }
      }
    },
    methods :{
      initData(){
        this.formData = {
          //语法糖
          ...this.$store.state.categoryinfo
        }
      },
      handleClick(){
        this.$axios.put('/category/:id',this.formData).then(res => {
          console.log(res);
          if (res.code === 200){
            //显式地提交 (commit) mutation,改变 store 中的状态
            let categoryinfo = res.data;
            this.$store.commit('CHANGE_CATEGORYINFO',categoryinfo);
            this.initData();
            this.$message.success(res.msg);
          }
        })
      },
    },
    created() {
      this.initData()
    }
  }
</script>

<style scoped>
  .form-wrap{
    width: 400px;
    margin-top: 20px;
  }
</style>
