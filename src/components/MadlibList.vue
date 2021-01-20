<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="madlib in madlibs" :key="madlib.id">
      <v-expansion-panel-header class="brand">
        {{ madlib.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ madlib.story }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: ["madlibs"]
};
</script>

<style></style>
