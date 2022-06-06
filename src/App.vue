<script setup>
import Signature from "./components/Signature.vue";
</script>

<template>

  <main>
    <Signature 
      :name="'name'" 
      :email="'email'" 
      :cell="'cell'" 
      :position="'position'" 
      />
  </main>
</template>

<style>
@import './assets/base.css';
</style>
