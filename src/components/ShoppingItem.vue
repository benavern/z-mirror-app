<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="item.done" @change="update"></v-checkbox>
    </v-list-tile-action>

    <v-list-tile-content>
      <v-text-field
          v-model="item.item"
          max="120"
          @blur="update"
          @keyup.enter="$event.target.blur()">
      </v-text-field>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-btn icon @click.native="remove">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  name: 'shoppingItem',
  props: ['item'],
  data () {
    return {
      edit: false
    }
  },
  methods: {
    update () {
      this.$emit('update', this.item)
    },
    remove () {
      this.$emit('delete', this.item)
    }
  }
}
</script>

<style>
</style>
