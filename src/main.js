import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

app.listen(process.env.PORT || 5000, function() {
    console.log("Server started.......");
});