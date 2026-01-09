{
"scripts": {
"build:minify": "vite build && minify dist/**/*.html dist/**/*.js dist/**/*.css --output dist/",
"preview:minify": "npm run build:minify && vite preview"
}
}
<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from "vue";
import Nav from "@/components/UI/Nav.vue";

// Create components with loading placeholders and error handling
const createLazyComponent = (importFn, placeholderHeight = '100vh') => {
  return defineAsyncComponent({
    loader: importFn,
    loadingComponent: {
      template: `<div class="lazy-component-placeholder" :style="{ height: '${placeholderHeight}' }"></div>`
    },
    delay: 50, // Reduced delay for faster loading
    timeout: 10000, // Timeout after 10 seconds
    errorComponent: {
      template: `<div class="lazy-component-error" :style="{ height: '${placeholderHeight}', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#181818' }">Failed to load component</div>`
    }
  });
};

// Lazy load components with placeholders
const Hero = createLazyComponent(() => import("../components/Hero.vue"), '100vh');
const Mobilehero = createLazyComponent(() => import("@/components/Mobile/Mobilehero.vue"), '100vh');
const AerialServices = createLazyComponent(() => import("../components/AerialServices.vue"), '100vh');
const DroneServices = createLazyComponent(() => import("../components/DroneServices.vue"), '100vh');
const Portfolio = createLazyComponent(() => import("../components/Portfolio.vue"), '800px');
const Showreel = createLazyComponent(() => import("../components/Showreel.vue"), '100vh');
const WhyFlyWithUs = createLazyComponent(() => import("../components/WhyFlyWithUs.vue"), '100vh');
const ClientFeedback = createLazyComponent(() => import("../components/ClientFeedback.vue"), '100vh');
const GetInTouch = createLazyComponent(() => import("@/components/GetInTouch.vue"), '100vh');
const Footer = createLazyComponent(() => import("@/components/Footer.vue"), '100vh');

const isMobile = ref(false);
let mql;
const isLoading = ref(true);
let onWindowLoad;

const updateIsMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches;
};

// Optimized scroll handler without parallax effect to eliminate gaps
let ticking = false;

const optimizedScrollHandler = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;

      // Handle scroll to top button visibility only
      showScrollTop.value = currentScrollY > 300;

      ticking = false;
    });
    ticking = true;
  }
};

const showScrollTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

onMounted(() => {
  // Preloader: hide when window has fully loaded or after a short fallback
  onWindowLoad = () => {
    isLoading.value = false;
    window.removeEventListener("load", onWindowLoad);
  };
  window.addEventListener("load", onWindowLoad);
  // Fallback in case the load event was already fired or doesn't fire
  setTimeout(() => (isLoading.value = false), 2000);

  mql = window.matchMedia("(max-width: 768px)");
  updateIsMobile();
  mql.addEventListener?.("change", updateIsMobile);
  // Safari fallback
  mql.addListener?.(updateIsMobile);

  // Use optimized scroll handler with passive option for better performance
  window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
});

onUnmounted(() => {
  mql?.removeEventListener?.("change", updateIsMobile);
  mql?.removeListener?.(updateIsMobile);
  if (onWindowLoad) {
    window.removeEventListener("load", onWindowLoad);
  }
  window.removeEventListener('scroll', optimizedScrollHandler);
});
</script>

<template>
  <div class="home-view">
    <div v-if="isLoading" class="preloader" aria-live="polite" aria-busy="true">
      <div class="spinner"></div>
    </div>
    <Nav v-if="!isMobile" />
    <section id="home">
      <component :is="isMobile ? Mobilehero : Hero" />
    </section>
    <section id="fleet" class="parallax-section" data-speed="0.18">
      <DroneServices />
    </section>
    <section id="services" class="parallax-section" data-speed="0.14">
      <AerialServices />
    </section>
    <section class="parallax-section" data-speed="0.22">
      <Showreel />
    </section>
    <section id="about" class="parallax-section" data-speed="0.16">
      <WhyFlyWithUs />
    </section>
    <div id="faqs"></div>
    <section id="testimonials" class="parallax-section" data-speed="0.12">
      <ClientFeedback />
    </section>
    <section id="portfolio" class="parallax-section" data-speed="0.1">
      <Portfolio />
    </section>
    <section id="getintouch" class="parallax-section" data-speed="0.12">
      <GetInTouch />
    </section>
    <section id="contact" class="parallax-section" data-speed="0.05">
      <Footer />
    </section>

    <button class="scroll-to-top" :class="{ 'show': showScrollTop }" @click="scrollToTop" aria-label="Scroll to top">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.home-view [id] {
  scroll-margin-top: 50px;
}

.home-view {
  width: 100%;
  position: relative;
  overflow-x: hidden;
  background: #181818;
}

.home-view>* {
  position: relative;
  z-index: 1;
}

.parallax-section {
  will-change: transform;
  transform: translateZ(0);
  /* Ensure no unexpected spacing */
  margin: 0;
  padding: 0;
}

.preloader {
  position: fixed;
  inset: 0;
  background: #0b0b0f;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: #DCC62D;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #DCC62D;
  color: #000;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 99;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.scroll-to-top.show {
  opacity: 1;
  visibility: visible;
  bottom: 40px;
}

.scroll-to-top:hover {
  transform: translateY(-5px);
  background-color: #e5cf3e;
}

/* Loading placeholders for lazy components */
.lazy-component-placeholder {
  background: #181818;
  /* Match the site's background */
  position: relative;
  overflow: hidden;
  margin: 0 !important;
  padding: 0 !important;
}

.lazy-component-placeholder::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  animation: loading-shimmer 1.5s infinite;
}

@keyframes loading-shimmer {
  100% {
    left: 100%;
  }
}

.lazy-component-error {
  background: #181818;
  color: #DCC62D;
  font-family: 'Oswald', sans-serif;
  text-align: center;
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }

  .scroll-to-top.show {
    bottom: 30px;
  }
}

@media (max-width: 480px) {
  .scroll-to-top {
    bottom: 16px;
    right: 16px;
    width: 42px;
    height: 42px;
    z-index: 10000;
  }

  .scroll-to-top.show {
    bottom: 24px;
  }
}
</style>