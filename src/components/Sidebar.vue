<template>
  <v-navigation-drawer class="teal" dark permanent app>
    <h1 class="text-center white--text brand nav-header">{MADLIBZ}</h1>
    <v-divider />
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item to="/create">
          <v-list-item-title>New Madlib</v-list-item-title>
        </v-list-item>
        <v-list-item to="/community">
          <v-list-item-title>Community Libz</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="user" to="/my-madlibs">
          <v-list-item-title>My Saved Madlibs</v-list-item-title>
        </v-list-item>
        <v-list-item
          inactive
          v-if="!user"
          @click="signIn"
          class="list-item--inactive"
        >
          <v-list-item-title>Sign In</v-list-item-title>
        </v-list-item>
        <v-list-item
          inactive
          v-else
          @click="signOut"
          class="list-item--inactive"
        >
          <v-list-item-title>Sign Out</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
import { signIn, signOut } from "../firebase";

export default {
  computed: {
    ...mapState(["user"])
  },
  methods: {
    signIn() {
      signIn();
    },
    signOut() {
      signOut();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.list-item--inactive {
  cursor: pointer;
}
</style>
