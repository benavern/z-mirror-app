<template>
  <div>
    <v-text-field label="Titre"
                  v-model="newItem.title"
                  :disabled="loading">
    </v-text-field>

    <div :class="['img-preview', 'text-xs-center', {'empty': !newItem.photo}]">
      <v-icon v-show="!newItem.photo"
              class="mt-5"
              x-large
              dark>
        image
      </v-icon>

      <img v-if="newItem.photo"
            :src="newItem.photo">
    </div>

    <div class="text-xs-center my-3">
      <z-upload-btn :selectedCallback="showPhoto"
                    class="orange">
        <v-icon left dark>file_upload</v-icon>
        Choisir une image
      </z-upload-btn>
    </div>

    <v-btn to="/photos"
           dark
           secondary>
      <v-icon left>keyboard_backspace</v-icon>
      Annuler
    </v-btn>

    <v-btn @click.native="add" dark primary :disabled="loading || !newItem.photo || !newItem.title">
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
      console.log('[FILE]', file)
      var reader = new FileReader()

      reader.addEventListener('load', () => {
        this.resize(reader.result)
          .then(newUri => {
            this.newItem.photo = newUri
          })
          .catch(() => {
            // this.currentFile = null
            this.newItem.photo = ''
          })
      })

      if (file) {
        reader.readAsDataURL(file)
        this.currentFile = file
      } else {
        this.currentFile = null
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
    },
    resize (oldDataUri) {
      return new Promise((resolve, reject) => {
        if (!oldDataUri) reject()

        // default settings
        const newWidth = 800
        const imageType = this.currentFile.type || 'image/jpg'
        const imageArguments = 0.7

        // Create a temporary image so that we can compute the height of the downscaled image.
        let image = new Image()
        image.src = oldDataUri

        image.onload = () => {
          // when image is loaded, get size & calculate new image size keeping ratio
          const oldWidth = image.width
          const oldHeight = image.height
          const newHeight = Math.floor(oldHeight / oldWidth * newWidth)

          // Create a temporary canvas to draw the downscaled image on.
          let canvas = document.createElement('canvas')
          canvas.width = newWidth
          canvas.height = newHeight

          // Draw the downscaled image on the canvas and return the new data URL.
          const ctx = canvas.getContext('2d')
          ctx.drawImage(image, 0, 0, newWidth, newHeight)
          const newDataUri = canvas.toDataURL(imageType, imageArguments)

          // resolve promise with the new data uri
          resolve(newDataUri)
        }
      })
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
      width: 100%

</style>
