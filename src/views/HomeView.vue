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
let scrollTriggers = [];

const updateIsMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches;
};

onMounted(() => {
  mql = window.matchMedia("(max-width: 768px)");
  updateIsMobile();
  mql.addEventListener?.("change", updateIsMobile);
  // Safari fallback
  mql.addListener?.(updateIsMobile);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const initGsap = async () => {
    try {
      const gsapMod = await import('https://cdn.skypack.dev/gsap@3.12.2');
      const stMod = await import('https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger');
      const gsap = gsapMod.default || gsapMod;
      const ScrollTrigger = stMod.default || stMod;
      gsap.registerPlugin(ScrollTrigger);

      const sections = Array.from(document.querySelectorAll('.parallax-section'));
      sections.forEach((el) => {
        const speedAttr = el.getAttribute('data-speed');
        const speed = speedAttr ? parseFloat(speedAttr) : 0.15;
        const yPercent = -100 * speed; // translate range across viewport

        const tween = gsap.to(el, {
          yPercent,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
        // keep references to cleanup
        scrollTriggers.push(tween.scrollTrigger);
      });
    } catch (e) {
      console.warn('GSAP ScrollTrigger failed to load', e);
    }
  };
  initGsap();
});

onUnmounted(() => {
  mql?.removeEventListener?.("change", updateIsMobile);
  mql?.removeListener?.(updateIsMobile);
  // cleanup ScrollTriggers if any
  scrollTriggers.forEach((st) => st && st.kill && st.kill());
  scrollTriggers = [];
});
</script>

<template>
  <div class="home-view">
    <Nav v-if="!isMobile" />
    <component :is="isMobile ? Mobilehero : Hero" />
    <section class="parallax-section" data-speed="0.18"><DroneServices /></section>
    <section class="parallax-section" data-speed="0.14"><AerialServices /></section>
    <section class="parallax-section" data-speed="0.22"><Showreel /></section>
    <section class="parallax-section" data-speed="0.16"><WhyFlyWithUs /></section>
    <section class="parallax-section" data-speed="0.12"><ClientFeedback /></section>
    <section class="parallax-section" data-speed="0.1"><Portfolio /></section>
    <section class="parallax-section" data-speed="0.12"><GetInTouch /></section>
    <section class="parallax-section" data-speed="0.05"><Footer /></section>
  </div>
</template>

<style>
.home-view {
  width: 100%;
  position: relative;
}

.home-view>* {
  position: relative;
  z-index: 1;
}

.parallax-section {
  will-change: transform;
  transform: translateZ(0);
}
</style>
