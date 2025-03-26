<script>
 export default {
  name: 'ProjectView',
  data() {
    return {
      bannerImage: "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2Fartez.jpg?alt=media&token=9b7759a6-9a3e-4c39-a465-c252bb2ff267",
      allstarImage: "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2Fallstar.jpg?alt=media&token=ca4456bd-08d7-42be-b4bb-b5d2706d1673",
      longlivemarcosImage: "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2Flonglmarcos.png?alt=media&token=446d954c-d5fb-48a5-abda-a625189f2ae3",
      sceneitImage: "https://firebasestorage.googleapis.com/v0/b/benditowebstudio.firebasestorage.app/o/images%2Fsceneit.png?alt=media&token=1e33df23-c918-4678-8456-e66bf995d945",
    };
  },
  mounted() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeElements.forEach((element) => observer.observe(element));

    // ✅ Custom Cursor logic (Enabled only for desktop)
    const cursor = document.querySelector('.custom-cursor');

   // Function to check screen width
   function isDesktop() {
  return window.innerWidth > 768; // Only screens wider than 768px
  }

if (isDesktop()) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  const links = document.querySelectorAll('.custom-link');
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      cursor.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursor.style.transform = 'scale(.5)';
    });
  });
} else {
  // Hide custom cursor on mobile
  cursor.style.display = 'none';
}
  },
};
</script>

<template>
    <div id="app">
    <!-- Custom Cursor -->
    <div class="custom-cursor">Visit</div>
   <a href="https://www.artez.store/" target="_blank" class="custom-link text-decoration-none">
    <section class="container-fluid px-3 px-md-5 pt-2 pb-5 d-flex align-items-center justify-content-center">
    <div class="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
      <!-- Background Image -->
      <img :src="bannerImage" alt="Banner Image" class="img-fluid w-100 h-100 object-fit-cover rounded position-absolute opacity-75" />

      <!-- Text Overlay -->
      <p class="artez text-white position-absolute text-center fw-bold">
        Artez
      </p>
    </div>
  </section>
  </a>

  <section class="container fade-in" ref="fadeElements">
    <div class="row justify-content-center g-4">
      <!-- First Box -->
      <div class="col-12 col-md-6 d-flex justify-content-center">
        <a href="https://allstarpainting.webflow.io/" target="_blank" class="custom-link text-decoration-none w-100">
          <div class="box position-relative" :style="{
            backgroundImage: 'url(' + allstarImage + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }">
            <!-- Dark Overlay -->
            <div class="overlay"></div>
            <!-- Text Content -->
            <div class="text-overlay text-white text-start">
              <h3>Allstar</h3>
              <p>Painting Service Website</p>
            </div>
          </div>
        </a>
      </div>

      <!-- Second Box -->
      <div class="col-12 col-md-6 d-flex justify-content-center">
        <a href="https://www.longlivemarcosfoundation.org/" target="_blank" class="custom-link text-decoration-none w-100">
          <div class="box position-relative" :style="{
            backgroundImage: 'url(' + longlivemarcosImage + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }">
            <!-- Dark Overlay -->
            <div class="overlay"></div>
            <!-- Text Content -->
            <div class="text-overlay text-white text-start">
              <h3>Long Live Marcos Foundation</h3>
              <p>website</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <a href="https://sceneit.us/" target="_blank" class="custom-link text-decoration-none w-100 fade-in" ref="fadeElements">
  <section class="container-fluid px-3 px-md-5 pt-5 pb-5 d-flex align-items-center justify-content-center">
    <div class="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
      <!-- Background Image -->
      <img :src="sceneitImage" alt="Banner Image" class="img-fluid w-100 h-100 object-fit-cover rounded position-absolute opacity-75" />
    </div>
  </section>
  </a>
</div>
</template>

<style scoped>
#app{
    background-color: var(--background)
}
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
/* State when the element is visible */
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
.container-fluid{
  height: 700px;
}
/* Ensures the entire section fills the viewport */
.artez {
  font-size: 5rem;
  font-family: var(--font-2);
}

/* Box layout */
.box {
  width: 100%;
  max-width: 600px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Background images */
.bg-box-1 {

}

.bg-box-2 {

}

/* Dark Overlay from Bottom-Right */
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(to top right, rgba(0, 0, 0, 0.5), transparent);

}

/* Text Positioned at Bottom-Right */
.text-overlay {
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 2;
}

/* Custom Cursor */
.custom-cursor {
  position: fixed;
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-out, background-color 0.2s ease;
  mix-blend-mode: difference; /* Gives a nice effect on dark backgrounds */
  z-index: 1000;
  opacity: 0;
}

/* Custom Cursor Visibility on Hover */
.custom-link:hover ~ .custom-cursor {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

/* Hide the default cursor over links */
.custom-link {
  cursor: none;
}
/* Responsive adjustments */
@media (max-width: 768px) {
  .box {
    max-width: 450px;
    height: 300px;
  }
  .container-fluid{
  height: 550px;
}
.overlay {
  height: 32%;
}
}
</style>