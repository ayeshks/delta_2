<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Nav from "@/components/UI/Nav.vue";
import Hero from "../components/Hero.vue";
import Mobilehero from "@/components/Mobile/Mobilehero.vue";
import AerialServices from "../components/AerialServices.vue";
import DroneServices from "../components/DroneServices.vue";
import Portfolio from "../components/Portfolio.vue";
import Showreel from "../components/Showreel.vue";
import WhyFlyWithUs from "../components/WhyFlyWithUs.vue";
import ClientFeedback from "../components/ClientFeedback.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import Footer from "@/components/Footer.vue";

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

});

onUnmounted(() => {
  mql?.removeEventListener?.("change", updateIsMobile);
  mql?.removeListener?.(updateIsMobile);
  if (onWindowLoad) {
    window.removeEventListener("load", onWindowLoad);
  }
});
</script>

<template>
  <div class="home-view">
    <div v-if="isLoading" class="preloader" aria-live="polite" aria-busy="true">
      <div class="spinner"></div>
    </div>
    <Nav v-if="!isMobile" />
    <section id="home"><component :is="isMobile ? Mobilehero : Hero" /></section>
    <section id="fleet" class="parallax-section" data-speed="0.18"><DroneServices /></section>
    <section id="services" class="parallax-section" data-speed="0.14"><AerialServices /></section>
    <section class="parallax-section" data-speed="0.22"><Showreel /></section>
    <section id="about" class="parallax-section" data-speed="0.16"><WhyFlyWithUs /></section>
    <div id="faqs"></div>
    <section id="testimonials" class="parallax-section" data-speed="0.12"><ClientFeedback /></section>
    <section id="portfolio" class="parallax-section" data-speed="0.1"><Portfolio /></section>
    <section id="getintouch" class="parallax-section" data-speed="0.12"><GetInTouch /></section>
    <section id="contact" class="parallax-section" data-speed="0.05"><Footer /></section>
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
  width: 100px;
  height: 100px;
  border: 8px solid rgb(24, 24, 24);
  border-top-color: #dbe72bff;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
