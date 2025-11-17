<template>
  <button
    class="btn-primary"
    @click="$emit('click')"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    v-bind="$attrs"
  >
    <span class="btn-text" :class="{ 'animate-typing': isHovering }">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['click'])

const isHovering = ref(false)
</script>

<style scoped>
.btn-primary {
  width: 266px;
  height: 61px;
  background: #DCC62D;
  color: #000;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.btn-text {
  display: inline-block;
  opacity: 1;
}

.btn-text.animate-typing {
  animation: militaryButtonScan 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes militaryButtonScan {
  0% {
    opacity: 0;
    text-shadow: -2px 0 0 #000;
    transform: scaleX(0.8);
  }
  30% {
    opacity: 0.6;
    text-shadow: -1px 0 0 #000;
    clip-path: inset(0% 0% 0% 0%);
  }
  60% {
    opacity: 1;
    text-shadow: none;
    transform: scaleX(1.02);
  }
  100% {
    opacity: 1;
    text-shadow: none;
    transform: scaleX(1);
  }
}

.btn-primary:hover {
  background: #c4b028;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 198, 45, 0.3);
  cursor: url('data:image/svg+xml;utf8,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" stroke="%23DCC62D" stroke-width="2" fill="none"/><circle cx="16" cy="16" r="8" stroke="%23DCC62D" stroke-width="1.5" fill="none"/><circle cx="16" cy="16" r="2" fill="%23DCC62D"/><line x1="6" y1="16" x2="26" y2="16" stroke="%23DCC62D" stroke-width="1"/><line x1="16" y1="6" x2="16" y2="26" stroke="%23DCC62D" stroke-width="1"/><line x1="8" y1="8" x2="12" y2="8" stroke="%23DCC62D" stroke-width="1.5"/><line x1="8" y1="8" x2="8" y2="12" stroke="%23DCC62D" stroke-width="1.5"/><line x1="24" y1="8" x2="20" y2="8" stroke="%23DCC62D" stroke-width="1.5"/><line x1="24" y1="8" x2="24" y2="12" stroke="%23DCC62D" stroke-width="1.5"/><line x1="8" y1="24" x2="12" y2="24" stroke="%23DCC62D" stroke-width="1.5"/><line x1="8" y1="24" x2="8" y2="20" stroke="%23DCC62D" stroke-width="1.5"/><line x1="24" y1="24" x2="20" y2="24" stroke="%23DCC62D" stroke-width="1.5"/><line x1="24" y1="24" x2="24" y2="20" stroke="%23DCC62D" stroke-width="1.5"/></svg>') 16 16, pointer;
}

@media (max-width: 768px) {
  .btn-primary {
    width: 100%;
    max-width: 340px;
    height: 56px;
  }
}

@media (max-width: 480px) {
  .btn-primary {
    height: 50px;
    font-size: 16px;
  }
}
</style>
