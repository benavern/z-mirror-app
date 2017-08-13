<template>
  <v-list three-line subheader>
    <v-subheader>Liste de courses</v-subheader>
    <v-list-tile avatar v-for="shopItem in list" :key="shopItem.uid">
      <v-list-tile-action>
        <v-checkbox v-model="shopItem.done"></v-checkbox>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ shopItem.item }}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon>delete</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    mounted () {
      this.$http.get('/shopping')
        .then(res => {
          this.list = res.data.data
        })
        .catch(() => {
          this.list = []
        })
    }
  }
</script>
<style>

</style>
