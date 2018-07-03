<template>
  <v-app dark>
    <v-navigation-drawer class="" v-model="sidebar" temporary app>
    <v-list>
      <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
        {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer>
      </v-spacer>
      
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sidebar: false,
        menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
        ]
      }
    },
    computed: {
      appTitle () {
        return this.$store.state.appTitle
      }
    }
  }
</script>