<template>
  <div ref="wrapRef" class="service-card-wrapper" :style="cardStyle">
    <section ref="cardRef" class="service-card">
      <div class="card-inside">
        <div class="card-glare" />

        <div class="card-content card-image-content">
          <img
            class="service-image"
            :src="imageUrl"
            :alt="title"
            loading="lazy"
            @error="handleImageError"
          />
        </div>

        <div class="card-content">
          <div class="card-details">
            <div class="card-number">{{ number }}</div>
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, useTemplateRef } from 'vue'

interface Props {
  number?: string
  title?: string
  description?: string
  imageUrl?: string
  enableTilt?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  number: '01.',
  title: 'Service Title',
  description: 'Service description goes here',
  imageUrl: '',
  enableTilt: true
})

const wrapRef = useTemplateRef<HTMLDivElement>('wrapRef')
const cardRef = useTemplateRef<HTMLElement>('cardRef')

const DEFAULT_BEHIND_GRADIENT =
  'radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)'

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60
} as const

const clamp = (value: number, min = 0, max = 100): number => Math.min(Math.max(value, min), max)

const round = (value: number, precision = 3): number => parseFloat(value.toFixed(precision))

const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin))

const easeInOutCubic = (x: number): number => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)

let rafId: number | null = null

const updateCardTransform = (offsetX: number, offsetY: number, card: HTMLElement, wrap: HTMLElement) => {
  const width = card.clientWidth
  const height = card.clientHeight

  const percentX = clamp((100 / width) * offsetX)
  const percentY = clamp((100 / height) * offsetY)

  const centerX = percentX - 50
  const centerY = percentY - 50

  const properties = {
    '--pointer-x': `${percentX}%`,
    '--pointer-y': `${percentY}%`,
    '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
    '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
    '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
    '--pointer-from-top': `${percentY / 100}`,
    '--pointer-from-left': `${percentX / 100}`,
    '--rotate-x': `${round(-(centerX / 5))}deg`,
    '--rotate-y': `${round(centerY / 4)}deg`
  }

  Object.entries(properties).forEach(([property, value]) => {
    wrap.style.setProperty(property, value)
  })
}

const createSmoothAnimation = (
  duration: number,
  startX: number,
  startY: number,
  card: HTMLElement,
  wrap: HTMLElement
) => {
  const startTime = performance.now()
  const targetX = wrap.clientWidth / 2
  const targetY = wrap.clientHeight / 2

  const animationLoop = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = clamp(elapsed / duration)
    const easedProgress = easeInOutCubic(progress)

    const currentX = adjust(easedProgress, 0, 1, startX, targetX)
    const currentY = adjust(easedProgress, 0, 1, startY, targetY)

    updateCardTransform(currentX, currentY, card, wrap)

    if (progress < 1) {
      rafId = requestAnimationFrame(animationLoop)
    }
  }

  rafId = requestAnimationFrame(animationLoop)
}

const cancelAnimation = () => {
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}

const handlePointerMove = (event: PointerEvent) => {
  const card = cardRef.value
  const wrap = wrapRef.value

  if (!card || !wrap || !props.enableTilt) return

  const rect = card.getBoundingClientRect()
  updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap)
}

const handlePointerEnter = () => {
  const card = cardRef.value
  const wrap = wrapRef.value

  if (!card || !wrap || !props.enableTilt) return

  cancelAnimation()
  wrap.classList.add('active')
  card.classList.add('active')
}

const handlePointerLeave = (event: PointerEvent) => {
  const card = cardRef.value
  const wrap = wrapRef.value

  if (!card || !wrap || !props.enableTilt) return

  createSmoothAnimation(ANIMATION_CONFIG.SMOOTH_DURATION, event.offsetX, event.offsetY, card, wrap)
  wrap.classList.remove('active')
  card.classList.remove('active')
}

const cardStyle = computed(() => ({}))

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
}

onMounted(() => {
  if (!props.enableTilt) return

  const card = cardRef.value
  const wrap = wrapRef.value

  if (!card || !wrap) return

  card.addEventListener('pointerenter', handlePointerEnter)
  card.addEventListener('pointermove', handlePointerMove)
  card.addEventListener('pointerleave', handlePointerLeave)

  const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET
  const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET

  updateCardTransform(initialX, initialY, card, wrap)
  createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY, card, wrap)
})

onUnmounted(() => {
  const card = cardRef.value

  if (card) {
    card.removeEventListener('pointerenter', handlePointerEnter)
    card.removeEventListener('pointermove', handlePointerMove)
    card.removeEventListener('pointerleave', handlePointerLeave)
  }

  cancelAnimation()
})
</script>

<style scoped>
.service-card-wrapper {
  --pointer-x: 50%;
  --pointer-y: 50%;
  --pointer-from-center: 0;
  --pointer-from-top: 0.5;
  --pointer-from-left: 0.5;
  --card-opacity: 0;
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --background-x: 50%;
  --background-y: 50%;
  --card-radius: 0;
  perspective: 500px;
  transform: translate3d(0, 0, 0.1px);
  position: relative;
  touch-action: none;
}

.service-card-wrapper::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: inherit;
  background-position: inherit;
  border-radius: inherit;
  transition: all 0.5s ease;
  filter: contrast(1) saturate(0) blur(36px);
  transform: scale(0.8) translate3d(0, 0, 0.1px);
  background-size: 100% 100%;
  background-image: none;
}

.service-card-wrapper:hover,
.service-card-wrapper.active {
  --card-opacity: 1;
}

.service-card-wrapper:hover::before,
.service-card-wrapper.active::before {
  filter: contrast(1) saturate(0) blur(40px) opacity(0.3);
  transform: scale(0.9) translate3d(0, 0, 0.1px);
}

.service-card {
  display: grid;
  border-radius: var(--card-radius);
  position: relative;
  background-blend-mode: color-dodge, normal, normal, normal;
  animation: glow-bg 12s linear infinite;
  box-shadow: rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px)
    calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
  transition: transform 0.6s ease;
  transform: translate3d(0, 0, 0.1px) rotateX(0deg) rotateY(0deg);
  background-size: 100% 100%;
  background-position:
    0 0,
    0 0,
    50% 50%,
    0 0;
  background-image:
    radial-gradient(
      farthest-side circle at var(--pointer-x) var(--pointer-y),
      hsla(266, 100%, 90%, var(--card-opacity)) 4%,
      hsla(266, 50%, 80%, calc(var(--card-opacity) * 0.75)) 10%,
      hsla(266, 25%, 70%, calc(var(--card-opacity) * 0.5)) 50%,
      hsla(266, 0%, 60%, 0) 100%
    );
  overflow: hidden;
  height: 480px;
}

.service-card:hover,
.service-card.active {
  transition: none;
  transform: translate3d(0, 0, 0.1px) rotateX(var(--rotate-y)) rotateY(var(--rotate-x));
}

.service-card * {
  display: grid;
  grid-area: 1/-1;
  border-radius: var(--card-radius);
  transform: translate3d(0, 0, 0.1px);
  pointer-events: none;
}

.card-inside {
  inset: 1px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  transform: translate3d(0, 0, 0.01px);
}

.card-glare {
  transform: translate3d(0, 0, 1.1px);
  overflow: hidden;
  z-index: 4;
  border: 2px solid #DCC62D;
  transition: box-shadow 0.6s ease, border-color 0.6s ease;
}

.service-card:hover .card-glare,
.service-card.active .card-glare {
  box-shadow: 0 0 20px rgba(220, 198, 45, 0.5);
  border-color: #FFE066;
}

.card-image-content {
  mix-blend-mode: screen;
  overflow: hidden;
}

.card-image-content .service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 1;
  filter: grayscale(100%) brightness(0.7) contrast(1.2);
}

.card-image-content::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.45);
  pointer-events: none;
}

.card-content {
  max-height: 100%;
  overflow: hidden;
  text-align: center;
  position: relative;
  transform: translate3d(
    calc(var(--pointer-from-left) * -6px + 3px),
    calc(var(--pointer-from-top) * -6px + 3px),
    0.1px
  ) !important;
  z-index: 5;
}

.card-details {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 2rem 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%);
}

.card-number {
  font-family: 'Oswald', sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #DCC62D;
  letter-spacing: 1px;
  line-height: 1;
  text-transform: uppercase;
}

.card-details h3 {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  margin: 0;
  font-size: 18px;
  color: #DCC62D;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: none;
  -webkit-text-fill-color: unset;
  background-clip: unset;
  -webkit-background-clip: unset;
  text-align: left;
}

.card-details p {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 13px;
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.4;
  max-width: 100%;
  text-align: left;
}

@keyframes glow-bg {
  0% {
    --bgrotate: 0deg;
  }

  100% {
    --bgrotate: 360deg;
  }
}

@media (max-width: 1024px) {
  .service-card {
    height: 420px;
  }

  .card-details {
    padding: 1.5rem 1.2rem;
    gap: 0.4rem;
  }

  .card-details h3 {
    font-size: 16px;
  }

  .card-details p {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .service-card {
    height: 380px;
  }

  .card-details {
    padding: 1.2rem 1rem;
    gap: 0.3rem;
  }

  .card-number {
    font-size: 28px;
  }

  .card-details h3 {
    font-size: 15px;
  }

  .card-details p {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .service-card {
    height: 350px;
  }

  .card-details {
    padding: 1rem 0.8rem;
    gap: 0.3rem;
  }

  .card-number {
    font-size: 22px;
  }

  .card-details h3 {
    font-size: 14px;
  }

  .card-details p {
    font-size: 10px;
    line-height: 1.3;
  }
}
</style>
