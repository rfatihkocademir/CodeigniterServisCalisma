<template>
<div class="row">
  <div class="col-md-6 offset-3">
    <form  @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
      <div class="form-group">
        <label class="text-light" >Kurs Adı</label>
        <input v-model="course.title" class="form-control text-info border border-info shadow-lg"  type="text">

      </div>
      <div class="form-group border-dark">
        <label class="text-light">Kupon Kodu</label>
        <input v-model="course.couponCode" type="text" class="form-control text-success shadow-lg border border-success" >
      </div>
      <div class="form-group">
        <label class="text-light">Kurs Ücreti</label>
        <input  v-model="course.price" type="text" class="form-control text-warning shadow-lg border border-warning" >
      </div>
      <router-link to="/" tag="button" class="btn btn-dark text-info float-right">İptal</router-link>

      <button type="submit" class="btn btn-primary">Kaydet</button>
    </form>
  </div>
</div>

</template>
<script>

  import store from "../store";
  export default {
    data(){
      return {
        course:{

          title:'',
          couponCode : '',
          price :0.0
        }
      }
    },
    methods:{
      onSubmit(){
        this.$store.dispatch("addCourse", this.course)
      }
    }
  }

</script>
