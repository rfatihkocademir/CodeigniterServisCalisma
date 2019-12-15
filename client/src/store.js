import Vuex from "vuex"
import Vue from "vue"
import axios from "axios"
Vue.use(Vuex)

const store= new Vuex.Store({
  state:{
    courses:[]
  },
  mutations:{
    initCourses(state,courses){
      state.courses = courses
    },
    addCourse(state,course){
      state.courses.push(course)
      console.log(state.courses)

    },
    updateCourse(state,course){},
    deleteCourse(state,courseID){},

  },
  actions:{
    initApp(context){
      axios.get("http://localhost/ProjeCI/api/get_all_data")
        .then(response=>{
          console.log(response)
          context.commit('initCourses',response.data)
        })
    },
    addCourse(context,course){
      axios.post("http://localhost/ProjeCI/api/save",JSON.stringify(course))
        .then(response=>{
          context.commit("addCourse",{id: response.data.insert_id,...course})
        })

      context.commit("addCourse",course)
      console.log(course)

    },
    updateCourse(context,course){},
    deleteCourse(context,courseID){},
  },
  getters:{
    getCourses(state){
      return state.courses
    }
  }
})

export default store
