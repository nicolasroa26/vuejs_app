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
      let resultEl = document.getElementById("getResult")
      resultEl.innerHTML = ""
      this.$http.get('https://young-brushlands-86101.herokuapp.com/publications')
        .then(response => {
          resultEl.innerHTML
        })
        .catch(error => {
          resultEl.innerHTML
        })
    },
  }
}
</script>

<style></style>
