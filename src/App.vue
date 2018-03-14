<!--Templejt deo komponente-->
<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './primeri/Primer4/addBlog.vue';
import showBlogs from './primeri/Primer4/showBlogs.vue';
import listBlogs from './primeri/Primer5/listBlogs.vue';
import header from './primeri/Primer6/header.vue';
//objekat koji vraca ova komponenta
export default {
  components: {
    'add-blog':addBlog,
    'show-blogs':showBlogs,
    'list-blogs':listBlogs,
    'app-header':header
  },

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
