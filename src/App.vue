<template>
  <div id="app">
    <h1>{{ msg }}</h1>
      <p>Tu post: <input type="text" id= "post" value=""/></p>
      <p>Tus tokens: <input type="text" id="token" value=""/></p>
      <p>ID de grupos: <input type="text" id="grupos" value=""/></p>
      <button class="btn btn-primary" @click="axios">Enviar</button>
    <div class="panel-body" id="getResult"></div>
  </div> 
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: "Form Web"
    }
  },
  methods: {
    axios() {
      console.log("prueba")
      let resultEl = document.getElementById("getResult")
      resultEl.innerHTML = ""
      this.$http.get('https://young-brushlands-86101.herokuapp.com/publications')
        .then(response => {
          console.log("hi")
        })
        .catch(error => {
          console.log("ho")
        })
    },
    getRequest() {
      let resulEl = document.getElementById("getResult")
      resulEl.innerHTML = ''
      // We use Axios to perform a GET request with params
      this.$http.get('https://young-brushlands-86101.herokuapp.com/publications')
        .then(response => {
          console.log("he")
        })
        .catch(error => {
          console.log("ha")
        })
    },
  }
}
</script>

<style></style>
