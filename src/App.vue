

<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth';

export default {

  mounted() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        this.$store.commit('setUser', user);
    })

  },

  name: 'App',
  components: {
    AppHeader,
    AppFooter

  }
}
</script>
<style>
#app {
  font-family: 'Sofia Sans', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
