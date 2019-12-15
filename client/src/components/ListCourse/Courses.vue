<template>
  <div class="row">
    <div class="col-md-8 offset-2 mt-5">
      <table class="table table-hover table-dark table-striped border-dark border shadow-lg">
        <thead>
        <th>#id</th>
        <th>Kurs Adı</th>
        <th>Kupon Kodu</th>
        <th>Ücreti</th>
        <th>İşlem</th>
        </thead>
        <tbody>
        <Course v-for="course in courses" :key="courses.id" :course ="course"/>


        </tbody>
      </table>
      <router-link to="/yeni" tag="button" class="btn btn-dark text-info float-right">Yeni Ekle</router-link>

    </div>
  </div>
</template>
<script>
  import Course from "./Course"

  export default {
    components:{
      Course
    },
    computed:{
      courses(){
        return this.$store.getters.getCourses
      }
    }
  }

</script>
