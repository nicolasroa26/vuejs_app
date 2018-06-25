<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <form action="/">
      <p>Tu post: <input type="text" id= "post" name="post" value=""/></p>
      <p>Tus tokens: <input type="text" id="token" name="token" value=""/></p>
      <p>ID de grupos: <input type="text" id="grupos" name="grupos" value=""/></p>
      <input type="submit" value="Enviar" />
    </form>
    <router-view/>
  </div> 
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Web Form'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #008000;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
