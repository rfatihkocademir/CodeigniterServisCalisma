import Vue from "vue"
import VueRouter from "vue-router"
import Courses from "./components/ListCourse/Courses"
import NewCourse from "./Pages/NewCourse"
import UpdateCourse from "./Pages/UpdateCourse";
Vue.use(VueRouter)

export const router = new VueRouter({
  routes:[
    {path:"/",component:Courses},
    {path: "/yeni",component: NewCourse},
    {path:"/duzenle",component:UpdateCourse},
    {path:"*",component:Courses}
  ],
  mode:'history'
})
