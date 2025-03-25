<script>
export default {
  name: "ContactView",
};
</script>
<template>
    <div class="contact-section d-flex align-items-center">
      <div class="container">
        <div class="row">
          <!-- Stay in Touch Section -->
          <div class="col-12 col-md-6 d-flex" v-fade-in>
            <h2 class="stay-in-touch">Let's Work Together</h2>
          </div>
  
          <!-- Contact Form -->
          <div class="col-12 col-md-6 contact-form" v-fade-in>
            <h1 class="contact-header mb-4">Contact</h1>
            <form action="https://formspree.io/f/mqaeavrv" method="POST">
              <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="form-control"
                  placeholder="John"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  placeholder="Doe"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="email@domain.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="form-control"
                  placeholder="+1 555 555 5555"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="form-control"
                  placeholder="Describe your project or request..."
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-3 d-flex align-items-center">
                Submit
                <span class="material-symbols-outlined ms-2">arrow_outward</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Section Layout */
  .contact-section {
    min-height: 100vh;
    background-color: black;
    color: white;
    padding: 2rem 0;
    margin-bottom: 2rem;
  }
  
  /* Stay in Touch Section */
  .stay-in-touch {
    font-size: 2.5rem;
    text-align: center;
    font-family: 'CustomFont4', sans-serif;
  }
  .contact-header{
    font-family: 'CustomFont4', sans-serif;
  }
  
  /* Contact Form */
  .contact-form label {
    font-weight: bold;
  }
  
  .contact-form input,
  .contact-form textarea {
    background-color: #333;
    color: white;
    border: 1px solid #555;
    border-radius: 5px;
  }
  
  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: #aaa;
  }
  
  .contact-form .btn {
    background-color: var(--medium-brown);
    border: none;
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  
  .contact-form .btn:hover {
    background-color: white;
    color: black;
  }
  
  /* Fade-in Animations */
  .fade-in {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 0.6s ease;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .contact-section {
      margin-bottom: 4rem; /* Add spacing between the contact section and footer */
    }
    .row {
      flex-direction: column; /* Change to normal column layout */
    }
  
    .stay-in-touch {
      margin-bottom: 1rem; /* Keep spacing between header and form */
      white-space: nowrap; /* Prevent text from wrapping */
      font-size: 2rem;
    }
  
    .contact-form {
      margin-top: 1rem; /* Add spacing between the text and the form */
    }
  }
  </style>