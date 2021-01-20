<template>
  <div class="pa-5">
    <div v-if="!template" class="text-center mt-5">
      <v-progress-circular size="100" indeterminate color="teal" />
    </div>
    <v-row v-else justify="center" class="mt-6">
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

const url = "http://madlibz.herokuapp.com/api/random?minlength=3&maxlength=20";

export default {
  data() {
    return {
      template: null
    };
  },
  methods: {
    ...mapMutations(["setMadlib"]),
    getTemplate() {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.template = data;
          this.template.inputs = [];
        });
    },
    handleSubmit() {
      this.setMadlib(this.template);
      this.$router.push("/story");
    }
  },
  mounted() {
    this.getTemplate();
  }
};
</script>
