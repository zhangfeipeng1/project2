import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import testContainer from "./components/testContainer.vue"
import Home from "./components/tabbar/Home.vue"
import NewsList from "./components/home/NewsList.vue"
import test01 from "./components/test/test01.vue"
import test02 from "./components/test/test02.vue"
import NewsInfo from "./components/home/NewsInfo.vue"
import goodsList from "./components/goods/GoodsList.vue"
import goodsInfo from  "./components/goods/GoodsInfo.vue"
import Register from "./components/tabbar/Register.vue"
import login from "./components/tabbar/login.vue"
import ShopList from "./components/tabbar/ShopList.vue"
import Logout from "./components/home/Logout.vue"

Vue.use(Router)
export default new Router({
  routes: [
    /*用户访问 / 重新定位 /Home Home显示*/
    {path:'/',redirect:"/Home"},
    {path:'/test',component:testContainer},
    {path:'/Home',component:Home},
    {path:'/NewsList',component:NewsList},
    {path:"/test01",component:test01},
    {path:"/test02/:age",component:test02},
    {path:"/NewsInfo",component:NewsInfo},
    {path:"/GoodsList",component:goodsList},
    {path:"/GoodsInfo/:id",component:goodsInfo},
    {path:"/Register",component:Register},
    {path:"/login",component:login},
    {path:"/ShopList",component:ShopList},
    {path:"/Logout",component:Logout}
  ]
})
