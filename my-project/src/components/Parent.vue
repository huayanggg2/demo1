<template>
  <div>
    <h2>{{msg}}</h2>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name:'parent',
  data () {
    return {
      msg:'hello im parent.'
    }
  }
}
</script>
