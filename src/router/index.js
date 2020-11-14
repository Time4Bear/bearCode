import Vue from 'vue'
import VueRouter from 'vue-router'
//为了解决 路由中点击路径重复 的报错，可以添加以下代码
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

//路由懒加载方式 打包文件时会生成这个组件的相应的js文件，浏览器使用时才下载这个文件
const Home = () => import('@/views/Home')
const Login = () => import('@/views/Login')
const Register = () => import('@/views/Register')
const About = () => import('@/views/About')

Vue.use(VueRouter)

const routes = [
  //默认情况下，进入网站首页我们希望<router-view>渲染首页的内容，就可以设置路由的默认路径
  //path配置的是根路径，redirect是重定向:用户在访问/的时候，强制用户跳转到地址/home
    //当我们访问根页面的时候，页面就会默认重定向到#/home下的组件页面
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    //当某个路由有子集路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
    },
    // 妈的原来子路由里的component不能加s 是components就会没有任何警告和报错而不显示子路由
    // children: [
    //   {
    //     path: '',
    //     redirect: 'nan'
    //   },
    //   {
    //     path: 'nan',
    //     component: NanYuan,
    //   },
    // ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录页',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '注册页',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于我们',
    },
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
})

export default router
