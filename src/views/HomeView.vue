<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent, shallowRef } from "vue";
import Nav from "@/components/UI/Nav.vue";

// Preload strategy for better performance when scrolling up/down
const componentsCache = new Map();

const createOptimizedComponent = (importFn, placeholderHeight = '100vh', preloadDistance = 300) => {
  return defineAsyncComponent({
    loader: async () => {
      // Check if already cached
      if (componentsCache.has(importFn.toString())) {
        return componentsCache.get(importFn.toString());
      }

      // Load the component
      const module = await importFn();
      // Cache for future use
      componentsCache.set(importFn.toString(), module);
      return module;
    },
    loadingComponent: {
      template: `<div class="lazy-component-placeholder" :style="{ height: '${placeholderHeight}' }"></div>`
    },
    delay: 50, // Reduced delay for faster response
    timeout: 10000,
    errorComponent: {
      template: `<div class="lazy-component-error" :style="{ height: '${placeholderHeight}', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#181818' }">Failed to load component</div>`
    }
  });
};

// Create optimized lazy components with caching
const Hero = createOptimizedComponent(() => import("../components/Hero.vue"), '100vh');
const Mobilehero = createOptimizedComponent(() => import("@/components/Mobile/Mobilehero.vue"), '100vh');
const AerialServices = createOptimizedComponent(() => import("../components/AerialServices.vue"), '100vh');
const DroneServices = createOptimizedComponent(() => import("../components/DroneServices.vue"), '100vh');
const Portfolio = createOptimizedComponent(() => import("../components/Portfolio.vue"), '800px');
const Showreel = createOptimizedComponent(() => import("../components/Showreel.vue"), '100vh');
const WhyFlyWithUs = createOptimizedComponent(() => import("../components/WhyFlyWithUs.vue"), '100vh');
const ClientFeedback = createOptimizedComponent(() => import("../components/ClientFeedback.vue"), '100vh');
const GetInTouch = createOptimizedComponent(() => import("@/components/GetInTouch.vue"), '100vh');
const Footer = createOptimizedComponent(() => import("@/components/Footer.vue"), '100vh');

const isMobile = ref(false);
let mql;
const isLoading = ref(true);
let onWindowLoad;

const updateIsMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches;
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

  // Add scroll listener with passive option for better performance
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  mql?.removeEventListener?.("change", updateIsMobile);
  mql?.removeListener?.(updateIsMobile);
  if (onWindowLoad) {
    window.removeEventListener("load", onWindowLoad);
  }
  window.removeEventListener('scroll', handleScroll);
});

const showScrollTop = ref(false);

// Optimized scroll handler with debounce
let scrollTimeout = null;
const handleScroll = () => {
  // Update scroll to top button visibility
  showScrollTop.value = window.scrollY > 300;

  // Clear previous timeout
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  // Throttle scroll events to improve performance
  scrollTimeout = setTimeout(() => {
    // Preload adjacent sections when user scrolls
    preloadVisibleSections();
  }, 150);
};

// Function to preload sections that are likely to be viewed
const preloadVisibleSections = () => {
  const sections = document.querySelectorAll('section[id]');
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + scrollPosition;
    const sectionBottom = sectionTop + rect.height;

    // Preload sections that are within 500px of viewport
    if (sectionTop <= scrollPosition + viewportHeight + 500 &&
      sectionBottom >= scrollPosition - 500) {
      // This section is visible or nearly visible, ensure it's loaded
      // The component will be loaded automatically when rendered
    }
  });
};

const scrollToTop = () => {
  // Smooth scroll with reduced speed for better UX
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    // Custom easing would require a polyfill, so using CSS instead
  });
};
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
/* Slower scroll behavior */
html {
  scroll-behavior: smooth;
  scroll-behavior: auto;
  /* We'll handle smooth scrolling manually */
}

/* Custom scrollbar styling for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #181818;
}

::-webkit-scrollbar-thumb {
  background: #DCC62D;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #e5cf3e;
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
  position: relative;
  overflow: hidden;
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

/* Custom slower scroll animation */
.smooth-scroll {
  scroll-behavior: smooth;
  scroll-behavior: auto;
  /* Fallback for browsers that support both */
}

/* Slow down the default scroll behavior */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }

  /* Override scroll behavior to be slower */
  .home-view {
    scroll-behavior: auto;
  }
}

/* Slower scroll-to-top animation */
.scroll-to-top[data-smooth] {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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

/* Custom scroll speed control */
.slow-scroll {
  scroll-behavior: auto;
}

.slow-scroll section {
  transition: opacity 0.3s ease;
}
</style>