<template>
  <div>
    <v-text-field label="Titre"
                  v-model="newItem.title"
                  :disabled="loading">
    </v-text-field>

    <div :class="['img-preview', 'text-xs-center', {'empty': !currentFile}]">
      <v-icon v-show="!currentFile"
              class="mt-5"
              x-large
              dark>
        image
      </v-icon>

      <img v-if="currentFile"
           :src="newItem.photo">
    </div>

    <div class="text-xs-center my-3">
      <z-upload-btn :selectedCallback="showPhoto"
                    class="orange">
        <v-icon left dark>file_upload</v-icon>
        Choisir une image
      </z-upload-btn>
    </div>

    <v-btn to="/photos" dark secondary>
      <v-icon left>keyboard_backspace</v-icon>
      Annuler
    </v-btn>

    <v-btn @click.native="add" dark primary :disabled="loading">
      <v-icon left>done</v-icon>
      Ajouter
    </v-btn>
  </div>
</template>

<script>
import ZUploadBtn from './ZUploadBtn.vue'

export default {
  name: 'new-photo-item',
  components: { ZUploadBtn },
  data () {
    return {
      newItem: {
        title: '',
        photo: ''
      },
      currentFile: null,
      loading: false
    }
  },
  methods: {
    showPhoto (file) {
      // console.log('[FILE]', file)
      var reader = new FileReader()

      reader.addEventListener('load', () => {
        this.newItem.photo = reader.result
      })

      if (file) {
        if (file.size < 2000000) {
          reader.readAsDataURL(file)
          this.currentFile = file
        } else {
          this.newItem.photo = ''
          alert('La photo est trop volumineuse, il faut en choisir une autre.')
        }
      } else {
        this.newItem.photo = ''
      }
    },
    add () {
      if (this.newItem.title !== '' && this.newItem.photo !== '') {
        this.loading = true
        this.$http.post('/photos', this.newItem)
        .then(res => {
          this.$router.push({ path: '/photos' })
        })
        .catch((err) => {
          this.loading = false
          console.error(err)
        })
      } else {
        alert('Il manque des information pour pouvoir envoyer la photo')
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .img-preview
    background: #bbb

    &.empty
      height: 150px

    img
      display: block
      max-width: 100%

</style>
