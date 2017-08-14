<template>
  <div>
    <v-layout row-sm column child-flex-sm>
        <v-card class="ma-1">
          <v-card-title primary-title>
            <div class="headline">Liste de courses</div>
            <div>Ajouter, supprimer, modifier la liste de courses affichée sur le mirroir</div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat to="/shopping">Accéder</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="ma-1">
          <v-card-title primary-title>
            <div class="headline">Postits</div>
            <div>Ajouter, supprimer, modifier les postits affichés sur le mirroir</div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat to="/postit">Accéder</v-btn>
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
