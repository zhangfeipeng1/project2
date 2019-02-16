import Vue from 'vue'
import App from './App.vue'
import router from './router'

//mint-ui css文件
import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


//vue_app_00/main.js
//0.1引入vuex库
import Vuex from "vuex";
//0.2注册vuex库
Vue.use(Vuex);
//0.3对vuex配置
var store = new Vuex.Store({
  state:{cartCount:0},   //购物车中商品数量
  mutations:{
    increment(state){state.cartCount++},
    substract(state){state.cartCount--}
  },
  getters:{
    optCartCount:function(state){
      return state.cartCount;
    }
  }
});




//1:引入mint-ui组件库
//1:引入指定组件 Header
import {Header,Swipe,SwipeItem,Button} from "mint-ui";
//2:注册指定组件(注册一个组件)
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
//3:在Home.vue 使用组件

//4:引入axios库 main.js
import axios from "axios"
//5:修改配置信息 跨域保存session值!!!!
axios.defaults.withCredentials=true
//6:注册组件
Vue.prototype.axios = axios
//7:创建全局日期格式过滤器
// 2018-10-10 12:11:11
Vue.filter("datetimeFilter",function(val){
  //val 当前日期对象
  //1:新创建日期对象
  var data = new Date(val);
  //2:获取年月日时分秒
  var y = data.getFullYear();
  var m = data.getMonth()+1;
  var d = data.getDate();
  var h = data.getHours();
  var mi = data.getMinutes();
  var s = data.getSeconds();
  //3:拼接字符串
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
})



new Vue({
  router,
  render: h => h(App),
  //0.4将vuex对象注册vue实例
  store
}).$mount('#app')
