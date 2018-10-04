<template>
	<div class="layout">
		<div class="header ml-200">
			<h1 class="title">cloud-views后台管理系统</h1>
        <el-dropdown class="top-10">
          <img :src="this.$store.state.userinfo.avatar" class="el-dropdown-link">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="setUp">设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
		</div>
		<div class="side-bar">
			<el-menu
			:router = 'true'
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b">
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>用户管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="/layout/index">首页</el-menu-item>
					<el-menu-item index="/login">登录页</el-menu-item>
					<el-menu-item index="/layout/userEdit">修改个人信息</el-menu-item>
					<el-menu-item index="/layout/users">用户管理页面</el-menu-item>
					<el-menu-item index="/layout/addUsers">添加用户页面</el-menu-item>
				</el-menu-item-group>
			</el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>图书管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/books">图书列表</el-menu-item>
            <el-menu-item index="/layout/addbooks">添加图书</el-menu-item>
            <el-menu-item index="/layout/bookEdit">修改图书</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>分类管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/category">分类列表</el-menu-item>
            <el-menu-item index="/layout/addCategory">添加分类</el-menu-item>
            <el-menu-item index="/layout/categoryEdit">修改分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>轮播图管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/swiper">轮播图列表</el-menu-item>
            <el-menu-item index="/layout/addSwiper">添加轮播图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
		</el-menu>
	</div>
	<div class="main-content ml-200">
		<router-view></router-view>
	</div>
</div>
</template>

<script>
	export default {
		name : 'layout',
    methods : {
          setUp(){
            this.$router.push('/layout/userEdit');
          },
          logout(){
            this.$router.push('/login')
          }
      },
	}
</script>

<style scoped lang="scss">
.layout{
	.title{
		text-align: center;
		font-weight: 400;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #f1f1f1;
	}
  .top-10{
    position: fixed;
    top: 10px;
    right: 100px;
  }
   img{
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
	.ml-200{
		margin-left: 200px;
	}
	.side-bar{
		width : 200px;
		position: fixed;
		top : 0;
		bottom: 0;
		left: 0;
		border-right: 1px solid #f1f1f1;
		overflow: hidden;
		padding-top: 80px;
		background: #545c64;
	}
	.main-content{
		padding : 15px;
	}
}
</style>
