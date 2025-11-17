<script setup>
import Hero from '../components/Hero.vue'
import AerialServices from '../components/AerialServices.vue'
import DroneServices from '../components/DroneServices.vue'
import Portfolio from '../components/Portfolio.vue'
import Showreel from '../components/Showreel.vue'
import WhyFlyWithUs from '../components/WhyFlyWithUs.vue'
import ClientFeedback from '../components/ClientFeedback.vue'
</script>

<template>
  <div class="home-view">
    <Hero />
    <DroneServices />
    <AerialServices />
    <Showreel />
    <WhyFlyWithUs />
    <ClientFeedback />
    <Portfolio />
  </div>
</template>

<style>
.home-view {
  width: 100%;
  position: relative;
}
</style>
