<template>
  <div>
    <h2>{{msg}}</h2>
    <button @click="retupage('push')">上一页</button>
  </div>

</template>

<script>
export default {
  name:'hi',
  data () {
    return {
      msg:'hello im hi111.'
    }
  },
  methods: {
   retupage(ty){
     if(ty==='push') this.$router.push({
       name:'parent'
     })
    }
  }
}
</script>
