<template>
  <div>
    <h2>{{msg}}</h2>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name:'child',
  data () {
    return {
      msg:'hello im child.'
    }
  }
}
</script>
