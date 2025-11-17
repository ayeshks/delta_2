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

  const updateIsMobile = () => {
    isMobile.value = window.matchMedia("(max-width: 768px)").matches;
  };

  onMounted(() => {
    mql = window.matchMedia("(max-width: 768px)");
    updateIsMobile();
    mql.addEventListener?.("change", updateIsMobile);
    // Safari fallback
    mql.addListener?.(updateIsMobile);
  });

  onUnmounted(() => {
    mql?.removeEventListener?.("change", updateIsMobile);
    mql?.removeListener?.(updateIsMobile);
  });
</script>

<template>
  <div class="home-view">
    <Nav />
    <component :is="isMobile ? Mobilehero : Hero" />
    <DroneServices />
    <AerialServices />
    <Showreel />
    <WhyFlyWithUs />
    <ClientFeedback />
    <Portfolio />
    <GetInTouch />
    <Footer />
  </div>
</template>

<style>
  .home-view {
    width: 100%;
    position: relative;
  }
  
  .home-view > * {
    position: relative;
    z-index: 1;
  }
</style>
