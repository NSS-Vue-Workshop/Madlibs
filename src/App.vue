<template>
  <v-app>
    <sidebar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebase";

export default {
  components: { Sidebar },
  methods: {
    ...mapMutations(["setUser"])
  },
  mounted() {
    auth.onAuthStateChanged(user => {
      this.setUser(user);
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ribeye&display=swap");

.brand {
  font-family: "Ribeye";
}

.nav-header {
  padding: 20px 0;
  font-size: 2.2em;
}
</style>
