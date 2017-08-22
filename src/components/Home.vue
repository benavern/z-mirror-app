<template>
  <div>
    <v-layout row-sm column child-flex-sm>

        <v-card class="ma-1">
          <v-layout>
            <v-flex xs8>
              <v-card-title primary-title>
                <div class="headline">Liste de courses</div>
                <div>Ajouter, supprimer, modifier la liste de courses affichée sur le mirroir</div>
              </v-card-title>
            </v-flex>
            <v-flex xs4>
              <v-card-media class="text-xs-center mt-5 pt-3">
                <v-icon x-large class="cyan--text text--darken-2">shopping_basket</v-icon>
              </v-card-media>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-btn flat primary to="/shopping">Accéder</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="ma-1">
          <v-layout>
            <v-flex xs8>
              <v-card-title primary-title>
            <div class="headline">Postits</div>
            <div>Ajouter, supprimer, modifier les postits affichés sur le mirroir</div>
          </v-card-title>
            </v-flex>
            <v-flex xs4>
              <v-card-media class="text-xs-center mt-5 pt-3">
                <v-icon x-large class="teal--text text--darken-2">dashboard</v-icon>
              </v-card-media>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-btn flat primary to="/postit">Accéder</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="ma-1">
          <v-layout>
            <v-flex xs8>
              <v-card-title primary-title>
            <div class="headline">Photos</div>
            <div>Ajouter, supprimer, modifier les photos affichées sur le mirroir</div>
          </v-card-title>
            </v-flex>
            <v-flex xs4>
              <v-card-media class="text-xs-center mt-5 pt-3">
                <v-icon x-large class="orange--text text--darken-2">image</v-icon>
              </v-card-media>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-btn flat primary to="/photos">Accéder</v-btn>
          </v-card-actions>
        </v-card>

    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
</style>
