<template>
  <v-card>
    <v-card-text v-if="!editing">
      {{ item.content }}
    </v-card-text>

    <v-card-text v-if="editing">
      <v-text-field
          multi-line
          v-model="item.content">

      </v-text-field>
    </v-card-text>

    <div v-if="!editing">
      <v-btn flat primary @click.native="edit" :disabled="loading">
        <v-icon left primary>edit</v-icon>
        modifier
      </v-btn>

      <v-btn flat secondary @click.native="remove" :disabled="loading">
        <v-icon left>delete</v-icon>
        supprimer
      </v-btn>
    </div>
    <div v-if="editing">
      <v-btn flat primary @click.native="update">
        <v-icon left>done</v-icon>
        OK
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PostitItem',
  props: ['item', 'loading'],
  data () {
    return {
      editing: false
    }
  },
  methods: {
    edit () {
      this.editing = true
    },
    update () {
      this.editing = false
      this.$emit('update', this.item)
    },
    remove () {
      this.$emit('remove', this.item)
    }
  }

}
</script>

<style>

</style>
