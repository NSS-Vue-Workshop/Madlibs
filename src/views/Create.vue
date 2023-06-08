<template>
  <div v-if="template" class="pa-5">
    <h1 class="text-center teal--text brand">{{ template.title }}</h1>
    <v-row justify="center" class="mt-6">
      <v-col :sm="12" :md="8" :lg="6">
        <v-form @submit.prevent="handleSubmit">
          <div v-for="(prompt, index) in template.blanks" :key="index">
            <v-text-field
              v-model="template.inputs[index]"
              :label="prompt"
              outlined
              color="teal"
            />
          </div>
          <v-btn type="submit" color="teal" dark>Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getRandomTemplate } from "../data/templates";

export default {
  data() {
    return {
      template: null,
    };
  },
  methods: {
    ...mapMutations(["setMadlib"]),
    getTemplate() {
      this.template = getRandomTemplate();
      this.template.inputs = [];
    },
    handleSubmit() {
      this.setMadlib(this.template);
      this.$router.push("/story");
    },
  },
  mounted() {
    this.getTemplate();
  },
};
</script>
