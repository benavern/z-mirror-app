<template>
  <div>
    <v-list three-line subheader>
      <v-subheader>Liste de courses</v-subheader>
      <shopping-item
            v-for="item in sortedList"
            :key="item.id"
            :item="item"
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
        list: []
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
        this.$http.get('/shopping')
        .then(res => {
          this.list = res.data.data
        })
        .catch(() => {
          this.list = []
        })
      },
      add (data) {
        this.$http.post('/shopping')
        .then(res => {
          this.get()
        })
        .catch(() => {
          this.get()
        })
      },
      update (data) {
        this.$http.put('/shopping', data)
        .then(res => {
          this.get()
        })
        .catch(() => {
          this.get()
        })
      },
      remove (data) {
        console.log('REMOVE')
        this.$http.delete('/shopping')
        .then(res => {
          this.get()
        })
        .catch(() => {
          this.get()
        })
      }
    }
  }
</script>

<style>

</style>
