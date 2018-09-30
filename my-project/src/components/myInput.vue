<template>
<div>{{biaoq}} <Input v-model="value" placeholder="Enter something..." style="width: 300px"/></div>
</template>
<script>
    export default{
        data () {
            return {
              value:''
            }
       },
        props:['biaoq']
    }
</script>
