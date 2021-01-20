import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    madlib: {
      title: null,
      blanks: [],
      value: [],
      inputs: []
    }
  },
  mutations: {
    setMadlib(state, payload) {
      state.madlib = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  getters: {
    story({ madlib }) {
      return madlib.value.reduce((story, fragment, index) => {
        if (fragment === 0) return story;

        story += fragment;

        if (madlib.blanks[index]) {
          story += madlib.inputs[index];
        }
        return story;
      }, "");
    }
  },
  modules: {}
});
