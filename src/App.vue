<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import app from "@/firebase";

export default {
  name: "App",
  data() {
    return {
      user: null,
      adminEmail: "betito.castillo.98@icloud.com",
    };
  },
  created() {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  computed: {
  accountLink() {
    if (this.user) {
      return this.user.email === this.adminEmail ? '/admin' : '/account';
    }
    return '/login';
  }
},
  methods: {
    logout() {
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          this.user = null;
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error("Logout error:", error);
        });
    },
  },
};
</script>

<template>
  <div id="app">
   <nav class="navbar navbar-expand-lg p-3">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Left Side: Brand + Nav Links -->
      <div class="d-flex align-items-center gap-5">
      <a href="https://www.artez.store/" class="nav-link">SHOP</a>
      <router-link class="nav-link" to="/about">ABOUT</router-link>
      <router-link class="nav-link" to="/projects">PROJECTS</router-link>
    </div>

    <router-link class="logo nav-link" to="/">BWS</router-link>
    
    <!-- Right Side: Additional Nav Links -->
    <div class="d-flex align-items-center gap-5">
      <a href="#" class="nav-link">SEARCH</a>
      <router-link class="nav-link" to="/contact">CONTACT</router-link>
      <router-link class="nav-link" :to="accountLink">ACCOUNT</router-link>
    </div>
  </div>
</nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.navbar{
  background-color: var(--background);
  color: #c4c4c4;
  font-size: 1rem;
  font-family: var(--font-1);
  font-weight: bold;
}

.logo{
  font-size: 1.9rem !important;
}

.nav-link:hover {
  color: #d90101 !important;
}
nav a.router-link-exact-active {
  color: #8e0101;
}
</style>