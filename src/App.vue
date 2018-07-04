<template>
  <div id="app">
      <h1>Formulario con VueJs</h1>
        <p>Tu post: <input type="text" id= "post" value=""/></p>
        <p>Tus tokens: <input type="text" id="token" value=""/></p>
        <p>ID de grupos: <input type="text" id="grupos" value=""/></p>
        <button class="btn btn-primary" @click="extract_data">Enviar</button>
      <div id="getResult">
    <table border="1">
      <thead>
        <th>Id</th>
        <th>post</th>
        <th>usuarios</th>
        <th>grupos</th>
        <th>notificacion</th>
      </thead>
      <tr v-for="data in new_data ">
        <td>{{data.id}}</td>
        <td>{{data.post}}</td>
        <td>{{data.tokens}}</td>
        <td>{{data.groups}}</td>
        <td>{{data.notification}}</td>
      </tr>
    </table>
      </div>
  </div> 
</template>

<script>
export default {
  name: "app",
  data(){
    new_data : response
  },
  methods:{
    generateSuccessHTMLOutput(response) {
      return  "<pre>" + JSON.stringify(response.data) + "</pre>";
    },
    generateErrorHTMLOutput(error) {
      return  "<pre>" + JSON.stringify(error, null, "\t") + "</pre>";
    },
    extract_data() {
      let resultEl = document.getElementById("getResult")
      this.$http.get("http://127.0.0.1:5000/publications")
        .then(response => {
          console.log(response)
          .then(response=>response.json())
          .then(json=>{this.new_data=json.response})
          resultEl.innerHTML = this.generateSuccessHTMLOutput(response)
      })
        .catch(error => {
          resultEl.innerHTML = this.generateErrorHTMLOutput(error)
      })
    }
  }
}
</script>

<style></style>