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
        <v-list-tile avatar tag="div">
          <!-- <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar> -->
          <v-list-tile-content>
            <v-list-tile-title>Z-MIRROR</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon dark @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
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
    <v-toolbar fixed class="teal" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Z-MIRROR</v-toolbar-title>
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
          { title: 'Postits', icon: 'dashboard', link: '/postits' }
        ],
        mini: false,
        right: null
      }
    }
  }
</script>
