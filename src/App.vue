<script setup>
import Signature from "./components/Signature.vue";
</script>

<template>

  <main style="padding: 4rem;">
    <Signature 
      :name="'Maria Mustermensch'" 
      :email="'maria.mustermensch@mail.example'" 
      :cell="'+1 (234) 567 890'" 
      :position="'Stabsstelle IT | Webentwicklung Signatur-Generator'" 
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
