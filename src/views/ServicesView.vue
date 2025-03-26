<script>
export default {
  name: 'ServicesComponent',
  data() {
    return {
      basicImage: "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2Fimg2.jpeg?alt=media&token=0de83cbf-4207-495d-9abd-a63717e663b0",
      plusImage: "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2Fimg1.jpeg?alt=media&token=868799d0-5e89-4772-bc5a-c27b16bf8d87",
      proImage: "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2FPeoplan.jpg?alt=media&token=0104cd39-c37a-4c3e-b710-ba8fcfa8c694",
    };
  },
};
</script>

<template>
  <section class="services px-3 px-md-5 text-white">
    <h2 class="section-header mb-5 text-center">Services</h2>
    <div class="container">
      <!-- Service Section 1: Basic Plan -->
      <div class="row align-items-center mb-5 mt-0 mt-md-0 text-start" v-fade-in>
        <div class="col-md-6 order-2 order-md-1">
          <h2 class="service-header mt-4 mt-md-0">Basic Plan</h2>
          <p class="service-description">
            Get started with a clean, professional design tailored for individuals or freelancers. Perfect for showcasing your work and staying connected with your audience.
          </p>
          <ul class="service-features list-unstyled">
            <li>- 2-3 page responsive website</li>
            <li>- Portfolio display</li>
            <li>- Contact form and social links</li>
          </ul>
          <hr class="service-line" style="border-color: var(--basic);" />
          <p class="service-price">$250</p>
        </div>
        <div class="col-md-6 text-center order-1 order-md-2">
          <img :src="basicImage" alt="Basic Plan" class="img-fluid service-image" />
        </div>
      </div>

      <!-- Service Section 2: Plus Plan -->
      <div class="row align-items-center flex-md-row-reverse mb-5 text-start" v-fade-in>
        <div class="col-md-6 order-2 order-md-1">
          <h2 class="service-header mt-4 mt-md-0">Plus Plan</h2>
          <p class="service-description">
            A great choice for businesses looking for more features and customization. The Plus Plan ensures your website stands out with an engaging design and added functionality.
          </p>
          <ul class="service-features list-unstyled">
            <li>- Interactive features</li>
            <li>- Basic updates</li>
            <li>- Enhanced design elements</li>
          </ul>
          <hr class="service-line" style="border-color: var(--plus)" />
          <p class="service-price">$500</p>
        </div>
        <div class="col-md-6 text-center order-1 order-md-2">
          <img :src="plusImage" alt="Plus Plan" class="img-fluid service-image" />
        </div>
      </div>

      <!-- Service Section 3: Pro Plan -->
      <div class="row align-items-center mb-0 text-start"  v-fade-in>
        <div class="col-md-6 order-2 order-md-1">
          <h2 class="service-header mt-4 mt-md-0">Pro Plan</h2>
          <p class="service-description">
            Tailored for businesses seeking complete customization and e-commerce capabilities. This plan delivers everything you need for a professional, branded online presence.
          </p>
          <ul class="service-features list-unstyled">
            <li>- Fully customized designs</li>
            <li>- Shopify or e-commerce setup</li>
            <li>- Branding and animations</li>
          </ul>
          <hr class="service-line" style="border-color: var(--pro)" />
          <p class="service-price">$800</p>
        </div>
        <div class="col-md-6 text-center order-1 order-md-2">
          <img :src="proImage" alt="Pro Plan" class="img-fluid service-image" />
        </div>
      </div>
    </div>
  </section>
</template>
  
<style scoped>
.services{
    background-color: var(--background);
}
/* Initial state for fade-in elements */
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.section-header {
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'CustomFont4', sans-serif;
}
/* State when the element is visible */
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.services {
  padding: 3rem 0;
}

.service-header {
  font-size: 2rem;
  font-weight: bold;
}

.service-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.service-features li {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #ccc;
}

.service-line {
  border: 0;
  border-top: 3px solid;
  margin: 1rem 0;
  opacity: 0.7;
}

.service-price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
}

.service-image {
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
}
</style>