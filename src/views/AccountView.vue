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

<template>
  <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center px-0 px-lg-5">
    <div class="row w-100 radius-md overflow-hidden">
      <!-- Left image column -->
      <div class="col-md-6 d-none d-lg-block p-0">
        <img
          :src="leftImageUrl"
          alt="Side Image"
          class="img-fluid w-100 object-fit-cover"
          style="max-height: 90vh;"
        />
      </div>

      <!-- Right content -->
      <div class="right col-md-6 d-flex align-items-start justify-content-center pt-4">
        <div class="account-view w-100 text-white p-4">
          <!-- Top Right Title -->
          <div class="d-flex justify-content-start mb-5">
            <h2 class="fw-bold">My Account</h2>
          </div>

          <!-- Account Info Rows -->
          <div class="account-info-row d-flex justify-content-between align-items-center py-2">
            <span>Name</span>
            <span>Placeholder</span>
          </div>
          <hr class="hr" />

          <div class="account-info-row d-flex justify-content-between align-items-center py-2">
            <span>Password</span>
            <span>••••••••</span>
          </div>
          <hr class="hr" />

          <div class="account-info-row d-flex justify-content-between align-items-center py-2">
            <span>Email</span>
            <span>{{ user?.email || "Guest" }}</span>
          </div>
          <hr class="hr" />

          <!-- Log out button -->
          <div class="d-flex justify-content-center mt-4 gap-5">
            <button class="btn btn-sm btn-outline-light ms-3 px-3">Settings</button>
            <button class="btn btn-outline-light rounded-pill px-4" @click="logout">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.radius-md {
border-radius: 10px;
}
@media (max-width: 992.98px) {
  .radius-md {
border-radius: 0;
}
.account-view {
  font-family: var(--font-1);
}

.account-info-row {
  font-size: 1rem;
  font-weight: 500;
}

.hr {
  border-color: rgba(255, 255, 255, 0.2);
}
}
</style>