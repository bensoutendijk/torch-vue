import { createStore } from "vuex";
import auth from "./auth";
import pages from "./pages";

export default createStore({
  modules: {
    auth,
    pages,
  },
});
