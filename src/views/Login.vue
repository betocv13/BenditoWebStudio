<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "@/firebase";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      leftImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2Fweb.jpg?alt=media&token=31816540-2189-41b7-8a9e-834ca50c12f6",
    };
  },
  methods: {
    async loginWithEmail() {
      this.error = null;
      try {
        const auth = getAuth(app);
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        const isAdmin = user.email === "betito.castillo.98@icloud.com";
        this.$router.push(isAdmin ? "/admin" : "/account");
      } catch (err) {
        this.error = err.message;
      }
    },
    async loginWithGoogle() {
      this.error = null;
      try {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        console.log("Logged in as:", user); 
        const isAdmin = user.email === "betito.castillo.98@icloud.com";
        this.$router.push(isAdmin ? "/admin" : "/account");
      } catch (err) {
        this.error = err.message;
      }
    },
    async continueAsGuest() {
      this.error = null;
      try {
        const auth = getAuth(app);
        const userCredential = await signInAnonymously(auth);
        const user = userCredential.user;
        const isAdmin = user.email === "betito.castillo.98@icloud.com"; // user.email will likely be null as guest
        this.$router.push(isAdmin ? "/admin" : "/account");
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>

<template>
    <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center px-3 px-md-5">
      <div class="row w-100 rounded-2 overflow-hidden">
        <div class="col-md-6 d-none d-md-block p-0">
            <img
             :src="leftImageUrl"
             alt="Side Image"
             class="img-fluid w-100 object-fit-cover"
             style="max-height: 90vh;"
            />
        </div>
        <!-- Right Column: Login Form -->
        <div class="right col-md-6 d-flex align-items-center justify-content-center">
          <div class="card p-4 w-75">
            <h1 class="card-title text-center mb-4 fw-bold text-white">Login</h1>
            
            <!-- Email Input -->
            <div class="mb-3">
              <input
                v-model="email"
                type="email"
                id="email"
                class="form-control p-2"
                placeholder="Email"
              />
            </div>
            
            <!-- Password Input -->
            <div class="mb-3">
              <input
                v-model="password"
                type="password"
                id="password"
                class="form-control p-2"
                placeholder="Password"
              />
            </div>
            
            <!-- Login with Email Button -->
            <div class="d-grid gap-2 mb-3">
             <button @click="loginWithEmail" class="btn btn-outline-light rounded-pill w-50 mx-auto">
              Sign In
             </button>
            </div>
            
            <hr>
            
            <!-- Login with Google Button -->
            <div class="d-grid gap-2 mb-3">
              <button @click="loginWithGoogle" class="btn btn-primary">
                Login with Google
              </button>
            </div>
            
            <!-- Continue as Guest Button -->
            <div class="d-grid gap-2">
              <button @click="continueAsGuest" class="btn btn-secondary">
                Continue as Guest
              </button>
            </div>
            
            <!-- Error Message -->
            <p v-if="error" class="mt-3 text-danger text-center">{{ error }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<style>
.right{
background-color: var(--background);
}
.card{
background-color: var(--background) !important;
}
.card-title{
    font-family: var(--font-1);
}
.form-control{
    font-family: var(--font-1);
}
</style>
