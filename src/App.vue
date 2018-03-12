<!--Templejt deo komponente-->
<template>
  <div>
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import addBlog from './primeri/Primer4/addBlog.vue';
import showBlogs from './primeri/Primer4/showBlogs.vue';
//objekat koji vraca ova komponenta
export default {
  components: {
    'add-blog':addBlog,
    'show-blogs':showBlogs
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

#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
