<template>
  <div><span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span></div>
</template>

<script>
export default {
  data () {
    return {
      message:'haha'+new Date().toLocaleString()
    }
  }
}
</script>
