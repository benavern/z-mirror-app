<template>
  <div>
    <v-container fluid class="grid-list-lg">
          <v-layout row wrap>
            <v-flex xs12 md6 lg4
                    v-for="item in orderedList"
                    :key="item.id">
              <photo-item :photo="item"
                          :loading="loading"
                          @update="update"
                          @delete="remove">
              </photo-item>

            </v-flex>
          </v-layout>
        </v-container>
  </div>
</template>

<script>
import PhotoItem from './PhotoItem.vue'

export default {
  name: 'photos',
  components: {
    PhotoItem
  },
  data () {
    return {
      list: [],
      loading: false
    }
  },
  computed: {
    orderedList () {
      return this.list.sort((a, b) => a.id - b.id)
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    get () {
      this.$http.get('/photos')
        .then(res => {
          this.list = res.data.data
        })
        .catch(() => {
          this.list = []
        })
    },
    update (data) {
      this.loading = true
      this.$http.put('/photos', data)
        .then(res => {
          this.loading = false
          this.get()
        })
        .catch(() => {
          this.loading = false
          this.get()
        })
    },
    remove (data) {
      this.loading = true
      this.$http.delete('/photos', { data }) // weird...
        .then(res => {
          this.loading = false
          this.get()
        })
        .catch(() => {
          this.loading = false
          this.get()
        })
    }
  }
}
</script>

<style>

</style>
