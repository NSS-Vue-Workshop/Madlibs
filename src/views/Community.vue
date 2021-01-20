<template>
  <v-row justify="center" class="mt-6">
    <v-col :sm="12" :md="8" :lg="6">
      <madlib-list :madlibs="madlibs" />
    </v-col>
  </v-row>
</template>

<script>
import MadlibList from "../components/MadlibList";
import { db } from "../firebase";

export default {
  components: { MadlibList },
  data() {
    return {
      madlibs: []
    };
  },
  mounted() {
    db.collection("madlibs").onSnapshot(snapshot => {
      this.madlibs = snapshot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        };
      });
    });
  }
};
</script>

<style></style>
