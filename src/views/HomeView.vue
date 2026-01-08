<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from "vue";
import Nav from "@/components/UI/Nav.vue";

// Lazy load components using dynamic imports
const Hero = defineAsyncComponent(() => import("../components/Hero.vue"));
const Mobilehero = defineAsyncComponent(() => import("@/components/Mobile/Mobilehero.vue"));
const AerialServices = defineAsyncComponent(() => import("../components/AerialServices.vue"));
const DroneServices = defineAsyncComponent(() => import("../components/DroneServices.vue"));
const Portfolio = defineAsyncComponent(() => import("../components/Portfolio.vue"));
const Showreel = defineAsyncComponent(() => import("../components/Showreel.vue"));
const WhyFlyWithUs = defineAsyncComponent(() => import("../components/WhyFlyWithUs.vue"));
const ClientFeedback = defineAsyncComponent(() => import("../components/ClientFeedback.vue"));
const GetInTouch = defineAsyncComponent(() => import("@/components/GetInTouch.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));

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

  window.addEventListener('scroll', handleScroll);
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

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
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