import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


const components = {
	login : () => import('@/views/login/login'),
	layout : () => import('@/views/layout/layout'),
	index : () => import('@/views/index/index'),
	users :() => import('@/views/users/index'),
  addUsers :() => import('@/views/users/addUsers'),
  userEdit :() => import('@/views/users/userEdit'),
  books : () => import('@/views/books/books'),
  addbooks : () => import('@/views/books/addbooks'),
  bookEdit : () => import('@/views/books/bookEdit'),
  swiper : () => import('@/views/swiper/swiper'),
  addSwiper : () => import('@/views/swiper/addSwiper'),
  category : () => import('@/views/category/category'),
  categoryEdit : () => import('@/views/category/categoryEdit'),
  addCategory : () => import('@/views/category/addCategory'),

};

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
    	path: '/login',
        component: components.login
    },
    {
    	path: '/layout',
    	component: components.layout,
    	redirect : '/layout/index',
    	meta : {
    		title : '首页'
    	},
    	children : [
    		{
    			path: 'index',
    			component : components.index
    		},
    		{
    			path: 'users',
    			meta : {
    				title : '用户管理'
    			},
    			component : components.users
    		},
        {
          path: 'addUsers',
          meta : {
            title : '添加用户'
          },
          component : components.addUsers
        },
        {
          path: 'userEdit',
          meta : {
            title : '修改用户信息'
          },
          component : components.userEdit
        },
        {
          path: 'books',
          meta : {
            titie : '图书管理'
          },
          component : components.books
        },
        {
          path: 'addbooks',
          name : 'addbooks',
          meta : {
            title : '添加图书'
          },
          component : components.addbooks
        },
        {
          path: 'bookEdit',
          name : 'bookEdit',
          meta : {
            title : '修改图书'
          },
          component : components.bookEdit
        },
        {
          path: 'swiper',
          meta : {
            title : '轮播图列表'
          },
          component : components.swiper
        },
        {
          path: 'addSwiper',
          name : 'addSwiper',
          meta : {
            title : '添加轮播图'
          },
          component : components.addSwiper
        },
        {
          path: 'swiperEdit',
          name: 'swiperEdit',
          meta : {
            title : '修改轮播图'
          },
          component : components.addSwiper
        },
        {
          path: 'category',
          meta : {
            title : '分类列表'
          },
          component : components.category
        },
        {
          path: 'categoryEdit',
          meta : {
            title : '修改分类'
          },
          component : components.categoryEdit
        },
        {
          path: 'addCategory',
          meta : {
            title : '添加分类'
          },
          component : components.addCategory
        }
    	]
    },

  ]
})
