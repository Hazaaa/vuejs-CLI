<!--Templejt deo komponente-->
<template>
  <div>
      <form-helper>
          <div slot="form-header">
              <h3>Form one - Contact us</h3>
              <p>Fill in this form to contact us</p>
          </div>
          <div slot="form-fields">
              <input type="text" placeholder="name" required>
              <label>Your message:</label>
              <textarea></textarea>
          </div>
          <div slot="form-controls">
              <button @click="handleSubmit">Submit</button>
          </div>
      </form-helper>
  </div>
</template>

<script>
import formHelper from '../Primer2/formHelper.vue';
//objekat koji vraca ova komponenta
export default {
  components: {
      'form-helper':formHelper
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