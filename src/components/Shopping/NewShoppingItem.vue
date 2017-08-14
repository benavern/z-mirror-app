<template>
  <div>
    <v-list two-line>
      <v-list-tile>

        <v-list-tile-action>
          <v-checkbox v-model="newItem.done" :disabled="loading"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-text-field
            label="Nouvel article"
            v-model="newItem.item"
            :disabled="loading"
            @keyup.enter="add">
          </v-text-field>
        </v-list-tile-content>

      </v-list-tile>
    </v-list>

    <v-btn to="/shopping" dark secondary>
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
  name: 'newShoppingItem',
  data () {
    return {
      newItem: {
        item: '',
        done: false
      },
      loading: false
    }
  },
  methods: {
    add () {
      if (this.newItem.item !== '') {
        this.loading = true
        this.$http.post('/shopping', this.newItem)
        .then(res => {
          this.$router.push({ path: '/shopping' })
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
