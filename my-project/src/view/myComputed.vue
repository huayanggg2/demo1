<template>
  <div>firstname:<input v-model="firstName">
  lastname:<input v-model="lastName">
  <p>{{fullName}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullName:'',
      firstName:'',
      lastName:''
    }
  },
  computed: {
    fullName() {
      return this.firstName +' '+ this.lastName
    }
  }
}
</script>
