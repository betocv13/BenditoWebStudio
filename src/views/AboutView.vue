<template>
  <div class="about d-flex justify-content-center align-items-center">
    <div v-if="!unlocked" class="password-container text-center">
      <h2 class="header text-white mb-5 mb-md-4">Enter Password to Access</h2>
      <div class="input-container"></div>
      <input
  type="password"
  v-model="passwordInput"
  class="form-control mb-3 mx-auto"
  placeholder="Enter password"
/>
      <button @click="checkPassword" class="btn btn-outline-light mt-4 ">Submit</button>
      <p v-if="error" class="error mt-3">Incorrect password. Try again.</p>
    </div>

    <div v-else class="text-center text-white bottom-0 start-0">
      <h1>This is an about page</h1>
      <!-- You can place your resume or personal info here later -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordInput: '',
      unlocked: false,
      error: false
    };
  },
  methods: {
    checkPassword() {
      if (this.passwordInput === 'Pleasehireme') {
        this.unlocked = true;
        this.error = false;
      } else {
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
.about {
  background-color: black;
  height: 100vh;
  width: 100%;
}
.header {
  font-size: 4rem;
  background: linear-gradient(19deg, #ffffff 23%, #878787 32%, #ffffff 51%, #878787 67%, #ffffff 83%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.password-container {
  width: 100%;
  max-width: 10000px;
  font-family: var(--font-1);
}

input.form-control {
  font-family: var(--font-1);
  width: 400px;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid white;
  color: white;
  outline: none;
  box-shadow: none;
}

input.form-control::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
button.btn {
  font-family: var(--font-1);
}

.error {
  color: red;
}
@media (max-width: 768px) {
  .header {
  font-size: 1.9rem;
}
input.form-control {
  font-family: var(--font-1);
  width: 280px;
  font-size: 1.1rem;
}
}
</style>