<template>
  <div>
    <v-subheader>Postits</v-subheader>
    <v-expansion-panel>

      <v-expansion-panel-content v-for="(item, index) in sortedItems" :key="item.id" :value="item.active">
        <div slot="header">#{{ index + 1 }}</div>

        <postit-item
            :item="item"
            :loading="loading"
            @update="update"
            @remove="remove">
        </postit-item>

      </v-expansion-panel-content>

    </v-expansion-panel>
  </div>
</template>

<script>
import PostitItem from './PostitItem'
export default {
  name: 'postits',
  components: { PostitItem },
  data () {
    return {
      list: [],
      loading: false
    }
  },
  computed: {
    sortedItems () {
      return this.list
        .sort((a, b) => a.id > b.id)
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    get () {
      this.loading = true
      this.$http.get('/postit')
      .then(res => {
        this.loading = false
        this.list = res.data.data
      })
      .catch(() => {
        this.loading = false
        this.list = []
      })
    },
    update (data) {
      this.loading = true
      this.$http.put('/postit', data)
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
      this.$http.delete('/postit', { data }) // weird...
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
