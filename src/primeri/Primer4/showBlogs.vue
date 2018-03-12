<!--Templejt deo komponente-->
<template>
  <div  v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <div v-for="blog in blogs" :key="blog" class="single-blog">
          <h2 v-rainbow> {{ blog.title }}</h2>
          <article> {{ blog.body }}</article>
      </div>
  </div>
</template>

<script>

//objekat koji vraca ova komponenta
export default {
  data () {
    return {
        blogs: []
    }
  },

  methods: {

  },

  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
          this.blogs = data.body.slice(0,10);
      })
  }
}
</script>

<style>

</style>
