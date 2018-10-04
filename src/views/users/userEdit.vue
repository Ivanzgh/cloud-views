<template>
  <div>
    <h2>修改个人信息</h2>
    <div class="form-wrap">
      <el-form size="small" :model="formData" label-width="100px" label-position="left">
        <el-form-item label="用户名：">
          <el-input v-model="formData.username" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="昵称：">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="用户头像：">
          <uploadImg v-model="formData.avatar" style="float : left"></uploadImg>
        </el-form-item>
        <el-form-item label="个性签名：">
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
        name: "userEdit",
      data() {
        return {
          formData: {
            username: '',
            nickname: '',
            email: '',
            desc: '',
            avatar: '',
          }
        }
      },
      methods :{
        initData(){
          this.formData = {
            ...this.$store.state.userinfo
          }
        },
        handleClick(){
          this.$axios.put('/user/userInfo',this.formData).then(res => {
            console.log(res);
            if (res.code === 200){
              let userInfo = res.data;
              this.$store.commit('CHANGE_USERINFO',userInfo);
              this.initData();
              this.$message.success(res.msg);
            }
          })
        }
      },
      created() {
          this.initData()
      }
    }
</script>

<style scoped>
  .form-wrap {
    width: 400px;
    margin-top: 20px;
  }
</style>
