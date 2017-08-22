<template>
  <div>
    <v-list two-line subheader>
      <!-- <v-subheader>Liste de courses</v-subheader> -->
      <shopping-item
            v-for="item in sortedList"
            :key="item.id"
            :item="item"
            :loading="loading"
            @update="update"
            @delete="remove">
      </shopping-item>
    </v-list>
  </div>
</template>

<script>
  import ShoppingItem from './ShoppingItem.vue'
  export default {
    name: 'shopping',
    components: { ShoppingItem },
    data () {
      return {
        list: [],
        loading: false
      }
    },
    mounted () {
      this.get()
    },
    computed: {
      sortedList () {
        return this.list.sort((a, b) => a.id > b.id)
      }
    },
    methods: {
      get () {
        this.loading = true
        this.$http.get('/shopping')
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
        this.$http.put('/shopping', data)
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
        this.$http.delete('/shopping', { data }) // weird...
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
