<script setup>
import Form from "./components/Form.vue"
</script>
<script>
export default {
  inject: ['profile'],
  data() {
    return {
      formData: {
        name: `${this.profile.givenName} ${this.profile.surname}`,
        email: this.profile.mail,
        cell: this.profile.mobilePhone,
        position: this.profile.jobTitle = "", // init as empty string to pre-select disable select option
      }
    }
  },
  methods: {
    copy() {
      // TODO: find a way to call select method without
      // using private properties
      this.$refs.preview._instance.exposed.select();
      document.execCommand('copy');
    },
  }
}
</script>

<template>

  <nav class="navbar">
    <span>BDSU Signatur-Generator</span>
    <button class="edit-profile"><a href="https://bdsuev-my.sharepoint.com/PersonImmersive.aspx" target="_blank">Profil in MS365 bearbeiten</a></button>
  </nav>

  <main>

    <p class="info">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>

    <Form @change="(e) => formData = e" :privateFormData="formData"/>

    <button class="copy-content" type="button" name="button" @click="copy">Signatur kopieren</button>
    <signature-preview
      ref="preview"
      :name="formData.name"
      :email="formData.email"
      :cell="formData.cell"
      :position="formData.position"
      />
  </main>
</template>

<style>

nav.navbar {
  width: 100%;
  padding: 1rem 4rem;
  background-color: rgb(132, 185, 63);
  display: flex;
  justify-content: space-between;
}

nav.navbar span {
  font-size: 24pt;
  font-weight: 600;
  color: white;
}

button.edit-profile {
  border: 0;
  border-radius: 10px;
  background-color: white;
  padding: 0 1rem;
  cursor: pointer;
}

button.edit-profile a {
  color: rgb(132, 185, 63);
  font-size: 14pt;
  text-decoration: none;
}

button.edit-profile:hover {
  background-color: #BBFFDD;
}

p.info {
  color: #555;
  margin-bottom: 1rem;
}

main {
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

main > * {
  margin: 1rem 0;
}

button.copy-content {
  background-color: rgba(132, 185, 63, 0.5);
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px auto;
}

button.copy-content:hover {
  background-color: rgba(132, 185, 63, 0.8)
}

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

signature-preview {
  margin-top: 1rem;
  border: 1px solid;
  padding: 0.5rem;
}
</style>
