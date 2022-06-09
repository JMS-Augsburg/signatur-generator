<script setup>
import Signature from "./components/Signature.vue";
import Form from "./components/Form.vue"
</script>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        cell: '',
        position: ''
      }
    }
  }
}
</script>

<template>

  <main style="padding: 4rem;">
    <Form @change="(e) => formData = e"/>
    <Signature 
      :name="formData.name" 
      :email="formData.email" 
      :cell="formData.cell" 
      :position="formData.position" 
      />
  </main>
</template>

<style>

body {
  min-height: 100vh;
  transition: color 0.5s, background-color 0.5s;
  font-family: Tahoma, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin: 0;
  padding: 0
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

</style>
