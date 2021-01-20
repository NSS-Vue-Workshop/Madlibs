import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Create from "../views/Create";
import Story from "../views/Story";
import MyMadlibs from "../views/MyMadlibs";
import Community from "../views/Community";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/story",
    name: "Story",
    component: Story,
    beforeEnter(to, from, next) {
      if (!store.getters.story) {
        return next("/create");
      }
      return next();
    }
  },
  {
    path: "/my-madlibs",
    name: "MyMadlibs",
    component: MyMadlibs,
    beforeEnter(to, from, next) {
      if (!store.state.user) {
        return next("/");
      }
      return next();
    }
  },
  {
    path: "/community",
    name: "Community",
    component: Community
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
