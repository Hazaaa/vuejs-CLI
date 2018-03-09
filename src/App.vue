<!--Templejt deo komponente-->
<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './primeri/Primer1/Header.vue';
import Footer from './primeri/Primer1/Footer.vue';
import Ninjas from './primeri/Primer1/Ninjas.vue';

//objekat koji vraca ova komponenta
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },

  data () {
    return {
      ninjas: [
            {name:'Ryu', speciality:'Taijuitsu',show:false},
            {name:'Naruto', speciality:'Ninjuitsu',show:false},
            {name:'Sasuke', speciality:'Genjuitsu',show:false},
            {name:'Rock Lee', speciality:'Taijuitsu',show:false},
            {name:'Hinata', speciality:'Genjuitsu',show:false}
        ]
    }
  }
}
</script>

<style scoped>
</style>
