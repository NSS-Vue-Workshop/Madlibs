<template>
  <div>
    <h1 class="brand text-center">{{ madlib.title }}</h1>
    <v-row justify="center">
      <v-col :sm="12" :md="8" :lg="6">
        <section class="pa-4">
          <p>{{ story }}</p>
        </section>
        <v-btn to="/create" outlined class="mr-1">Make Another</v-btn>
        <v-btn v-if="user" @click="publish" color="teal" dark>Publish</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { db } from "../firebase";

export default {
  computed: {
    ...mapState(["madlib", "user"]),
    ...mapGetters(["story"]),
  },
  methods: {
    async publish() {
      if (!this.user) return;
      await db.collection("madlibs").add({
        title: this.madlib.title,
        story: this.story,
        authorName: this.user.displayName,
        authorId: this.user.uid,
      });

      this.$router.push("my-madlibs");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
}
p {
  margin-top: 30px;
  font-size: 2rem;
  line-height: 1.5em;
  text-align: justify;
}
</style>
