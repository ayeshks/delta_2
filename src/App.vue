<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    width: 100%;
    min-height: 100vh;
    background: #181818;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10" stroke="%23DCC62D" stroke-width="1" fill="none"/><line x1="16" y1="2" x2="16" y2="6" stroke="%23DCC62D" stroke-width="1"/><line x1="16" y1="26" x2="16" y2="30" stroke="%23DCC62D" stroke-width="1"/><line x1="2" y1="16" x2="6" y2="16" stroke="%23DCC62D" stroke-width="1"/><line x1="26" y1="16" x2="30" y2="16" stroke="%23DCC62D" stroke-width="1"/><circle cx="16" cy="16" r="2" fill="%23DCC62D"/></svg>')
        16 16,
      auto;
  }
</style>
