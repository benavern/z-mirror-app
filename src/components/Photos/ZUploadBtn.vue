<template>
  <v-btn dark large class="btn--dark-flat-focused jbtn-file">
    <slot></slot><input id="selectFile" type="file" accept="image/*" v-on:change="fileSelected">
  </v-btn>
</template>

<script>
  export default {
    name: 'z-upload-button',
    props: {
      selectedCallback: Function
    },
    methods: {
      fileSelected (e) {
        if (this.selectedCallback) {
          if (e.target.files[0]) {
            this.selectedCallback(e.target.files[0])
          } else {
            this.selectedCallback(null)
          }
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .jbtn-file
    cursor: pointer
    position: relative
    overflow: hidden

  .jbtn-file input[type=file]
    position: absolute
    top: 0
    right: 0
    min-width: 100%
    min-height: 100%
    font-size: 100px
    text-align: right
    filter: alpha(opacity=0)
    opacity: 0
    outline: none
    cursor: inherit
    display: block
</style>
