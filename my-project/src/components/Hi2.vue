<template>
  <div>
    <p>{{ name }}</p>
  </div>

</template>

<script>
export default {
  props:{
    name:{
      type:String,
      default:'abcd'
    }
  }
}
</script>
