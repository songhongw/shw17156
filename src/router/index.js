
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import AreaCity from '@/pages/areaCity/AreaCity'
import City from '@/pages/city/City'
import Daytour from '@/pages/daytour/Daytour'
import ListSelect from '@/pages/selectCity/ListSelect'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
    	path:"/areaCity",
    	name:"areaCity",
    	component:AreaCity
    },
     {
      path: '/daytour',
      name: 'daytour',
      component: Daytour
		},
		{
      path: '/selectCity',
      name: 'selectCity',
      component: ListSelect
    }
  ]
})
