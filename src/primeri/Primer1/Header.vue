<!--Templejt deo komponente-->
<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
//objekat koji vraca ova komponenta
export default {
  data () {
    return {
        title: 'View Ninjas'
    }
  }
}
</script>

<style scoped>

header {
    background: lightgreen;
    padding: 10px;
}

h1 {
    color: #222;
    text-align: center;
}
</style>