<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import app from "@/firebase";
import ContactView from "./ContactView.vue";
import ServicesView from "./ServicesView.vue";

export default {
  components: {
    ContactView,
    ServicesView,
  },
  name: "HomeView",
  data() {
    return {
      user: null,
      adminEmail: "betito.castillo.98@icloud.com",
      bannerUrl: "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2Fwebbaner.jpg?alt=media&token=362f3820-3a54-4732-b17d-25bbfd6eb86d",
    };
  },
  created() {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
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
          console.error("Error signing out:", error);
        });
    },
  },
};
</script>

<template>
  <section id="home" class="home px-3 px-md-5 py-3">
          <div class="banner d-flex align-items-center justify-content-center">
            <div class="w-100 h-100 overflow-hidden position-relative">
              <img :src="bannerUrl" alt="Banner Image" class="banner-img img-fluid w-100 h-100 rounded" />
              <div class="position-absolute start-50 bottom-0 translate-middle text-white text-center">
                <h1 class="custom-header">WEB DESIGN, ELEVATED.</h1>
                <button class="btn btn-outline-light btn-md custom-btn" @click="scrollToContact">
                  BOOK A SERVICE
                </button>
              </div>
            </div>
          </div>
        </section>
        <ServicesView/>
        <ContactView/>
</template>

<style scoped>
#home{
  background-color: var(--background);
}
/* banner image and transition--------------- */
.custom-header {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.banner {
  height: 85vh;
}


.banner-img {
  object-fit: cover;
  filter: brightness(40%);
  animation: growIn 1.5s ease-in-out forwards;
}
</style>