<template>
  <v-row justify="center" class="mt-6">
    <v-col :sm="12" :md="8" :lg="6">
      <madlib-list :madlibs="madlibs" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import MadlibList from "../components/MadlibList";
import { db } from "../firebase";

export default {
  components: { MadlibList },
  data() {
    return {
      madlibs: []
    };
  },
  async mounted() {
    const userId = this.user.uid;
    const snapshot = await db
      .collection("madlibs")
      .where("authorId", "==", userId)
      .get();
    this.madlibs = snapshot.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      };
    });
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style></style>
