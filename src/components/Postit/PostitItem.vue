<template>
  <v-card>
    <v-card-text v-if="!editing">
      {{ item.content }}
    </v-card-text>

    <v-card-text v-if="editing">
      <v-text-field
          multi-line
          v-model="editedContent">

      </v-text-field>
    </v-card-text>

    <div v-if="!editing">
      <v-btn icon flat primary @click.native="edit" :disabled="loading">
        <v-icon primary>edit</v-icon>
      </v-btn>

      <v-btn icon flat secondary @click.native="remove" :disabled="loading">
        <v-icon>delete</v-icon>
      </v-btn>
    </div>

    <div v-if="editing">
      <v-btn icon flat primary @click.native="update">
        <v-icon>done</v-icon>
      </v-btn>

      <v-btn icon flat secondary @click.native="editing = false">
        <v-icon>clear</v-icon>
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
      editing: false,
      editedContent: ''
    }
  },
  methods: {
    edit () {
      this.editing = true
      this.editedContent = this.item.content
    },
    update () {
      this.editing = false
      this.item.content = this.editedContent
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
