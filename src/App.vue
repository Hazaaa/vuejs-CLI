<!--Templejt deo komponente-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{ msg }}</h2> <!--Pristupa msg atributu-->
  </div>
</template>

<script>
//objekat koji vraca ova komponenta
export default {
  data () {
    return {
      msg: 'Vue.js komponenta'
    }
  }
}
</script>

<style>
</style>
