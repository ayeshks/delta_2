import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js"; // Import the existing router

const app = createApp(App);

// Register a custom directive for slow scrolling
app.directive("slow-scroll", {
  mounted(el, binding) {
    let startY = 0;
    let startScroll = 0;
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      // Calculate new scroll position with reduced speed
      const scrollSpeed = binding.value || 2; // Default to 2x slower
      const delta = e.deltaY * (1 / scrollSpeed);

      // Apply the scroll with reduced speed
      el.scrollTop += delta;

      // Prevent default behavior to control scroll speed
      e.preventDefault();
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
  },
});

app.use(router);
app.mount("#app");
