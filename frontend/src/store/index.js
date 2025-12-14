import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    token: localStorage.getItem("token") || "",
    user: null,
  },
  getters: {
    getAllPosts: (state) => state.posts,
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    clearToken(state) {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchPosts({ commit, state }) {
      try {
        const response = await fetch("http://localhost:3000/api/posts", {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });
        if (response.ok) {
          const posts = await response.json();
          const mappedPosts = posts.map((post) => ({
            id: post.id,
            author: post.author,
            authorAvatar: "img/defaultPfp.jpg",
            displayDate: new Date(post.date).toLocaleDateString(),
            text: post.body,
            image: null,
            likes: 0,
          }));
          commit("setPosts", mappedPosts);
        } else if (response.status === 401 || response.status === 403) {
          commit("clearToken");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        if (response.ok) {
          const data = await response.json();
          commit("setToken", data.token);
          commit("setUser", data.user);
          return true;
        }
      } catch (error) {
        console.error(error);
      }
      return false;
    },
    async signup({ commit }, credentials) {
      try {
        const response = await fetch("http://localhost:3000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        if (response.ok) {
          const data = await response.json();
          commit("setToken", data.token);
          commit("setUser", data.user);
          return true;
        }
      } catch (error) {
        console.error(error);
      }
      return false;
    },
    logout({ commit }) {
      commit("clearToken");
    },
    async addPost({ state, dispatch }, body) {
      try {
        const response = await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
          body: JSON.stringify({ body }),
        });
        if (response.ok) {
          dispatch("fetchPosts");
          return true;
        }
      } catch (error) {
        console.error(error);
      }
      return false;
    },
    async deletePost({ state, dispatch }, id) {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });
        if (response.ok) {
          dispatch("fetchPosts");
          return true;
        }
      } catch (error) {
        console.error(error);
      }
      return false;
    },
    async deleteAllPosts({ state, dispatch }) {
      try {
        const response = await fetch("http://localhost:3000/api/posts", {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });
        if (response.ok) {
          dispatch("fetchPosts");
          return true;
        }
      } catch (error) {
        console.error(error);
      }
      return false;
    },
    async updatePost({ state, dispatch }, { id, body }) {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
          body: JSON.stringify({ body }),
        });
        if (response.ok) {
          dispatch("fetchPosts");
          return true;
        }
      } catch (error) {
        console.error(error);
      }
      return false;
    },
    async getPost({ state }, id) {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });
        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        console.error(error);
      }
      return null;
    },
  },
});
