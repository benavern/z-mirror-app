<template>
  <v-card>
    <v-card-media :src="photo.url"
                  height="150px">
    </v-card-media>
    <v-card-title class="pb-0">
      <v-text-field class="pa-0"
                    v-model="photo.title"
                    @blur="update"
                    @keyup.enter="$event.target.blur()"
                    :disabled="loading">
      </v-text-field>
    </v-card-title>
    <v-card-actions class="pt-0">
      <v-spacer></v-spacer>
      <v-btn icon
             @click.native="remove"
             :disabled="loading">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'photo-item',
  props: ['photo', 'loading'],
  methods: {
    update () {
      this.$emit('update', this.photo)
    },
    remove () {
      this.$emit('delete', this.photo)
    }
  }
}
</script>

<style>

</style>
