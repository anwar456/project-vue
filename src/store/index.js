import { createStore } from "vuex";
import axios from "axios";

const MAX_LOGIN_TIME = 24 * 60 * 60 * 1000;

export default createStore({
  state: {
    users: [],
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated: localStorage.getItem("user") !== null,
    isLoading: true,
  },
  mutations: {
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = true;
      const loginTime = new Date();
      localStorage.setItem("user", JSON.stringify({ user, loginTime }));
    },
    checkLoginTime(state) {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        const { loginTime } = userData;
        const currentTime = new Date();
        const elapsedTime = currentTime - new Date(loginTime);

        if (elapsedTime > MAX_LOGIN_TIME) {
          state.user = null;
          state.isAuthenticated = false;
          localStorage.removeItem("user");
        }
      }
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
          username,
          password,
        });
        console.log(response.data);
        if (response.status === 200) {
          commit("setUser", response.data);
          return true;
        }
      } catch (error) {
        console.error("Login failed", error);
        return false;
      }
    },
    logout({ commit }) {
      commit("logout");
    },

    async fetchUsers({ commit }) {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        commit("SET_LOADING", false);
        commit("SET_USERS", response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    currentUser: (state) => state.user,
    getUsers(state) {
      return state.users;
    },
  },
});
