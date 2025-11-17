<template>
  <main class="main">
    <FuzzyText
      text="404 "
      :font-size="140"
      font-weight="900"
      padding="20"
      :enable-hover="true"
      :base-intensity="0.18"
      :hover-intensity="0.5"
    />
    <FuzzyText
      text="Not found"
      :font-size="140"
      font-weight="900"
      :enable-hover="true"
      :base-intensity="0.18"
      :hover-intensity="0.5"
    />
  </main>
</template>

<script setup lang="ts">
  import FuzzyText from "../components/FuzzyText.vue";
</script>
<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
