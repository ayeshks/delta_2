<template>
  <p class="section-label" ref="labelRef">
    <span class="label-text" :class="{ 'animate-typing': isVisible }">
      <slot></slot>
    </span>
  </p>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const labelRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  if (!labelRef.value) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible.value) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.5
  })

  observer.observe(labelRef.value)
})

onUnmounted(() => {
  if (labelRef.value) {
    const observer = new IntersectionObserver(() => {})
    observer.disconnect()
  }
})
</script>

<style scoped>
.section-label {
  color: #DCC62D;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.8;
  margin: 0;
  cursor: pointer;
}

.label-text {
  display: inline-block;
  opacity: 1;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  padding-right: 5px;
}

.label-text.animate-typing {
  animation: typing 6s steps(50) forwards;
}


@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}



@media (max-width: 768px) {
  .section-label {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .section-label {
    font-size: 16px;
  }
}
</style>
