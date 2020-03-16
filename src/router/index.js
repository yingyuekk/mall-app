import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Category from '@/view/Category'
import Subject from '@/view/Subject'
import Mine from '@/view/Mine'

Vue.use(Router)

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden: true
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    hidden: true
  },
  {
    path: '/subject',
    name: 'Subject',
    component: Subject,
    hidden: true
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
    hidden: true
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
