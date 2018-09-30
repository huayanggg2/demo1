<template>
  <div>
    <a-input @input="handleEvent"></a-input>
    <p>{{inputValue}}</p>
    <a-show :content='inputValue'></a-show>
  </div>
</template>

<script>
import AInput from '@/components/AInput.vue'
import AShow from '@/components/AShow.vue'
export default {
  name:'store',
  data () {
    return {
      inputValue:''
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleEvent (a) {
      this.inputValue=a
    }
  }
}
</script>
