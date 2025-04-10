<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import app from "@/firebase";
import accountIcon from "@/assets/account.svg";

export default {
  name: "App",
  data() {
    return {
      user: null,
      adminEmail: "betito.castillo.98@icloud.com",
      isMobileMenuOpen: false,
      accountIcon,
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
    closeMenu() {
    this.isMobileMenuOpen = false;
    const toggle = document.getElementById("menuToggle");
    if (toggle) toggle.checked = false; // Uncheck the checkbox visually
  },
  },
};
</script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg px-3 py-2">
      <div class="container d-flex justify-content-between align-items-center flex-wrap">
        <!-- Left Side: Brand + Nav Links -->
        <div class="d-none d-lg-flex d-flex align-items-center gap-5 left-nav">
          <a href="https://www.artez.store/" class="nav-link" target="_blank" rel="noopener noreferrer">SHOP</a>
          <router-link class="nav-link" to="/about">ABOUT</router-link>
          <router-link class="nav-link" to="/projects">PROJECTS</router-link>
        </div>

        <!-- Desktop Logo (centered) -->
<router-link
  class="logo nav-link d-none d-lg-block desktop-logo"
  to="/"
  @click="closeMenu"
>
  BWS
</router-link>

<!-- Mobile Row: Logo on left + Menu Toggle on right -->
<div class="d-flex d-lg-none justify-content-between align-items-center w-100 ">
  <router-link class="logo nav-link left-nav pt-1" to="/" @click="closeMenu">
    BWS
  </router-link>
  <label class="menu-toggle">
    <input type="checkbox" id="menuToggle" @click="isMobileMenuOpen = !isMobileMenuOpen">
    <div class="checkmark right-nav">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </label>
</div>

        <!-- Right Side: Additional Nav Links (desktop) -->
        <div class="d-none d-lg-flex align-items-center gap-5 right-nav">
          <a href="#" class="nav-link">SEARCH</a>
          <router-link class="nav-link" to="/contact">CONTACT</router-link>
          <router-link class="nav-link" :to="accountLink">ACCOUNT</router-link>
        </div>

        <!-- Mobile Menu (shown only when toggled) -->
        <!-- Mobile Menu (shown only when toggled) -->
<div
  v-if="isMobileMenuOpen"
  class="mobile-menu d-flex flex-column gap-4 w-100 d-lg-none"
>
  <a href="#" class="nav-row w-100 d-flex justify-content-between align-items-center nav-link">
    <span>SEARCH</span>
    <span class="nav-number">01</span>
  </a>
  <hr class="hr"/>

  <a href="https://www.artez.store/" target="_blank" rel="noopener noreferrer"
     class="nav-row w-100 d-flex justify-content-between align-items-center nav-link">
    <span>SHOP</span>
    <span class="nav-number">02</span>
  </a>
  <hr class="hr"/>

  <router-link to="/about" @click="closeMenu"
    class="nav-row w-100 d-flex justify-content-between align-items-center nav-link">
    <span>ABOUT</span>
    <span class="nav-number">03</span>
  </router-link>
  <hr class="hr"/>

  <router-link to="/projects" @click="closeMenu"
    class="nav-row w-100 d-flex justify-content-between align-items-center nav-link">
    <span>PROJECTS</span>
    <span class="nav-number">04</span>
  </router-link>
  <hr class="hr"/>

  <router-link to="/contact" @click="closeMenu"
    class="nav-row w-100 d-flex justify-content-between align-items-center nav-link">
    <span>CONTACT</span>
    <span class="nav-number">05</span>
  </router-link>
  <hr class="hr"/>

  <router-link :to="accountLink" @click="closeMenu"
    class="nav-row w-100 d-flex justify-content-between align-items-center nav-link">
    <span class="d-flex align-items-center gap-2">
      <img :src="accountIcon" alt="Account Icon" class="nav-icon" />
      ACCOUNT
    </span>
    <span class="nav-number">06</span>
  </router-link>
  <hr class="hr"/>
</div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
.left-nav{
  animation: myAnim 1s ease 0s 1 normal forwards;
}

@keyframes myAnim {
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
.right-nav{
  animation: myAnimRight 1s ease 0s 1 normal forwards;
}
@keyframes myAnimRight {
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
.desktop-logo{
  animation: myAnimTop 1s ease 0s 1 normal forwards;
}
@keyframes myAnimTop {
	0% {
		opacity: 0;
		transform: translateY(-250px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

.nav-icon {
  width: 25px;
  height: 25px;
  object-fit: contain;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.navbar{
  background-color: var(--background);
  font-size: 1rem;
  font-family: var(--font-1);
  font-weight: bold;
}
.navbar a{
  background: linear-gradient(41deg, #858585 5%, #c4c4c4 54%, #858585 99%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar a:hover{
  background: linear-gradient(12deg, #626262 5%, #626262 99%, #858585 54%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar a.router-link-exact-active {
  background: linear-gradient(to right, #ffffff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo{
  font-size: 1.8rem !important;
  z-index: 1000;
}


.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* take full screen height */
  background-color: var(--background);
  z-index: 999;
  animation: slideFadeIn 0.3s ease-in-out;
  padding: 5rem 1.5rem;
  overflow-y: auto; /* scroll if content gets long */
}

@keyframes slideFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hide the default checkbox */
.menu-toggle input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1100;
}

/* Custom Toggle Button */
.checkmark {
  position: relative;
  width: 30px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.checkmark span {
  width: 30px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease-in-out;
}

/* Toggle Effect */
input:checked+.checkmark span:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

input:checked+.checkmark span:nth-child(2) {
  opacity: 0;
}

input:checked+.checkmark span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}
.nav-row {
  padding: 1rem 0;
}

.nav-number {
  font-size: 1rem;
  font-weight: bold;
  color: #c4c4c4;
}

 
.hr {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.432);
  margin: 0;
}
@media (max-width: 991px) {
  .btn-link {
    font-size: 1.5rem;
    border: none;
    background: none;
  }
  .navbar{
  font-size: 1.5rem;
  }
}
</style>