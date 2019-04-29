import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Class from '@/components/class.vue'
import Chat from '@/components/chat.vue'
import Cart from '@/components/cart.vue'
import Contact from '@/components/contact.vue'
import NewList from '@/components/newList.vue'
import Detial from '@/components/detail.vue'
import PhotoList from '@/components/photoList.vue'
import PhotoDetail from '@/components/photoDetail.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      name: '/',
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'class',
      path: '/class',
      component: Class
    },
    {
      name: 'chat',
      path: '/chat',
      component: Chat
    },
    {
      name: 'cart',
      path: '/cart',
      component: Cart
    },
    {
      name: 'contact',
      path: '/contact',
      component: Contact
    },
    {
      name: 'newList',
      path: '/home/newList',
      component: NewList
    },
    {
      path: '/home/newList/:id',
      component: Detial
    },
    {
      name: 'photoList',
      path: '/home/photoList',
      component: PhotoList
    },
    {
      name: 'photoDetail',
      path: '/home/photoList/:id',
      component: PhotoDetail
    }
  ]
})
