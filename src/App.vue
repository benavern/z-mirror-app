<template>
  <v-app toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :mini-variant.sync="mini"
      light
      overflow
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile avatar tag="div" to="/">
          <v-list-tile-avatar>
            <img src="/static/img/icons/mipmap-xxhdpi/ic_launcher.png"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Z-MIRROR</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="primary" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
      <v-btn
          v-if="$route.meta.button"
          absolute
          dark
          class="blue-grey"
          fab
          bottom
          right
          :to="$route.meta.button.link">
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Accueil', icon: 'home', link: '/' },
          { title: 'Liste de courses', icon: 'shopping_basket', link: '/shopping' },
          { title: 'Postits', icon: 'dashboard', link: '/postit' },
          { title: 'Photos', icon: 'image', link: '/photos' }
        ],
        mini: false,
        right: null
      }
    }
  }
</script>
