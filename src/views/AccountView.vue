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
            <div class="account-view text-white">
      <h2>My Account</h2>
      <p>You're logged in as <strong>{{ user?.email || "Guest" }}</strong></p>
  
      <button class="btn btn-outline-light rounded-pill w-50 mx-auto" @click="logout">Log Out</button>
    </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import { getAuth, signOut } from "firebase/auth";
  import app from "@/firebase";
  
  export default {
    name: "AccountView",
    data() {
      return {
        user: null,
        leftImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2Fweb.jpg?alt=media&token=31816540-2189-41b7-8a9e-834ca50c12f6",
      };
    },
    created() {
      const auth = getAuth(app);
      this.user = auth.currentUser;
    },
    methods: {
      logout() {
        const auth = getAuth(app);
        signOut(auth)
          .then(() => {
            this.$router.push("/login");
          })
          .catch((error) => {
            console.error("Error signing out:", error);
          });
      },
    },
  };
  </script>