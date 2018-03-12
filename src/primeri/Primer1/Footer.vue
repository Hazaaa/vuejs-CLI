<!--Templejt deo komponente-->
<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>

<script>
import { bus } from '../../main';
//objekat koji vraca ova komponenta
export default {
    props: {
        title: {
            type: String
        }
    },

    data () {
        return {
            copyright: 'Copyright 2018',
            title: 'Vue Ninjas'
        }
    },

    created() {
        bus.$on('titleChanged', (data) => {
            this.title = data;
        })
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