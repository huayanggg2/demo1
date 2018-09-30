<template>
  <input @input="handleInput" :value="value">
</template>

<script>
export default {
  name: "AInput",
  props: {
    value: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    handleInput : function(a) {
       const value = a.target.value;
      this.$emit("input", value);
    }
  }
};
</script>
