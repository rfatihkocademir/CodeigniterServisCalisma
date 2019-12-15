<template>
  <tr>
    <td class="text-danger">#{{course.id}}</td>
    <td class="text-info">{{course.title}}</td>
    <td class="text-success">{{course.couponCode}}</td>
    <td class="text-warning">{{course.price}}</td>
    <td >
      <button class="btn btn-sm btn btn-outline-danger">Sil</button>
      <button class="btn btn-sm btn btn-outline-warning">Düzenle</button>
    </td>
  </tr>
</template>
<script>
export default {
  props:["course"]

}

</script>
