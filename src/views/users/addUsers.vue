<template>
  <div class="addusers">
    <h2>添加管理员</h2>
    <div class="form-wrap">
      <el-form size="small" :model="formData" label-width="120px" label-position="left">
        <el-form-item label="姓名：">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="再次确认密码：">
          <el-input v-model="formData.checkPassword"></el-input>
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
          <el-button type="primary" @click="submitData">添加</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addUsers",
    data() {
      return {
        formData: {
          username: '',
          password: '',
          checkPassword: '',
          nickname: '',
          email: '',
          desc: '',
          avatar: '',
        }
      }
    },
    methods: {
      submitData() {
        if (this.formData.password !== this.formData.checkPassword){
          this.$message.error('两次密码不一致！')
        } else {
          this.$axios.post('/user',this.formData).then(res => {
            this.$message.success(res.msg)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .form-wrap {
    width: 600px;
    margin-top: 20px;
  }
</style>
