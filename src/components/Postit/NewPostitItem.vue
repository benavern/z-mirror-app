<template>
  <div>
    <v-text-field label="Text du postit"
                  auto-grow
                  v-model="newItem.content"
                  :disabled="loading"
                  multi-line>
    </v-text-field>

    <v-btn to="/postit" dark secondary>
      <v-icon left>keyboard_backspace</v-icon>
      Annuler
    </v-btn>

    <v-btn @click.native="add" dark primary>
      <v-icon left>done</v-icon>
      Ajouter
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'newPostitItem',
  data () {
    return {
      newItem: {
        content: ''
      },
      loading: false
    }
  },
  methods: {
    add () {
      if (this.newItem.content !== '') {
        this.loading = true
        this.$http.post('/postit', this.newItem)
        .then(res => {
          this.$router.push({ path: '/postit' })
        })
        .catch((err) => {
          this.loading = false
          console.error(err)
        })
      }
    }
  }
}
</script>

<style>

</style>
