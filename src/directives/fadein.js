export default {
    mounted(el) {
      el.classList.add('fade-in'); // Start hidden
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Only fade in once
            }
          });
        },
        { threshold: 0.1 }
      );
  
      observer.observe(el);
    }
  };