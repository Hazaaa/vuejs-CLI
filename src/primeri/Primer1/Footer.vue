<!--Templejt deo komponente-->
<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>
//objekat koji vraca ova komponenta
export default {
  data () {
    return {
        copyright: 'Copyright 2018 Vue Stefan'
    }
  }
}
</script>

<style scoped>

footer {
    background: #222;
    padding: 6px;
}

p {
    color: lightgreen;
    text-align: center;
}
</style>