import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import People from '@/components/people'

Vue.use(Router)

export default new Router({
  menus: [
    {
      icon: "el-icon-zx-friend",
      name: "人员管理",
      path: "/people"
    }
  ],
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/people',
      name: 'People',
      component: People
    }
  ]
})
