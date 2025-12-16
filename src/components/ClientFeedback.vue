<template>
  <section class="client-feedback">
    <!-- <div class="decorative-bg-right">
      <img src="https://api.builder.io/api/v1/image/assets/TEMP/2cdedecc5316dc46d8a4ae6a8230de07e99248fb?width=921"
        alt="" />
    </div> -->
    <!-- <div class="decorative-bg-left">
      <img src="https://api.builder.io/api/v1/image/assets/TEMP/bbf456b8ed839c877d92c66fb2cc520cc26c41be?width=2192"
        alt="" />
    </div> -->
    <div class="bottom-right-triangle"></div>

    <div class="bottom-right-geo">
      <img src="@/assets/portfolio/portfolio-10.png" alt="" />
    </div>

    <div class="feedback-container" :class="{ 'feedback-loaded': isFeedbackLoaded }" ref="feedbackContainerRef">
      <div class="feedback-header">
        <div class="header-content">
          <SectionLabel>CLIENT FEEDBACK</SectionLabel>
          <h2 class="section-title">
            <span class="title-bold">See What Our Clients</span> Are Saying
          </h2>
        </div>
        <div class="navigation-arrows">
          <button class="arrow-btn arrow-left" @click="previousTestimonial" aria-label="Previous testimonial">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_58_188)">
                <path
                  d="M7.21749 15.9646L20.8539 29.6006C21.3863 30.1332 22.2498 30.1332 22.7823 29.6005C23.3148 29.068 23.3148 28.2046 22.7822 27.6721L10.1101 15.0002L22.7823 2.32779C23.3148 1.79524 23.3148 0.931878 22.7822 0.399333C22.516 0.13306 22.167 -3.1652e-05 21.818 -3.16825e-05C21.469 -3.1713e-05 21.12 0.13306 20.8538 0.399424L7.21749 14.0361C6.96167 14.2919 6.81804 14.6387 6.81804 15.0003C6.81804 15.362 6.96167 15.7089 7.21749 15.9646Z"
                  fill="#DCC62D" />
              </g>
              <defs>
                <clipPath id="clip0_58_188">
                  <rect width="30" height="30" fill="white" transform="translate(30 30) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button class="arrow-btn arrow-right" @click="nextTestimonial" aria-label="Next testimonial">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_58_186)">
                <path
                  d="M22.7825 14.0354L9.14614 0.399398C8.61369 -0.133148 7.75023 -0.133148 7.21769 0.399489C6.68523 0.932034 6.68523 1.7954 7.21778 2.32794L19.8899 14.9998L7.21769 27.6722C6.68523 28.2048 6.68523 29.0681 7.21778 29.6007C7.48396 29.8669 7.83296 30 8.18196 30C8.53096 30 8.87996 29.8669 9.14623 29.6006L22.7825 15.9639C23.0383 15.7081 23.182 15.3613 23.182 14.9997C23.182 14.638 23.0383 14.2911 22.7825 14.0354Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_58_186">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="(t,) in displayedTestimonials" :key="t.id">
          <p class="testimonial-text">{{ t.text }}</p>
          <div class="client-info">
            <div class="client-avatar">
              <img :src="t.img" :alt="t.alt || t.name" />
            </div>
            <div class="client-details">
              <h3 class="client-name">{{ t.name }}</h3>
              <p class="client-title">{{ t.title }}</p>
              <div class="star-rating">
                <svg width="112" height="16" viewBox="0 0 112 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                    fill="#DCC62D" />
                  <path
                    d="M32 0L33.7961 5.52786H39.6085L34.9062 8.94427L36.7023 14.4721L32 11.0557L27.2977 14.4721L29.0938 8.94427L24.3915 5.52786H30.2039L32 0Z"
                    fill="#DCC62D" />
                  <path
                    d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                    fill="#DCC62D" />
                  <path
                    d="M80 0L81.7961 5.52786H87.6085L82.9062 8.94427L84.7023 14.4721L80 11.0557L75.2977 14.4721L77.0938 8.94427L72.3915 5.52786H78.2039L80 0Z"
                    fill="#DCC62D" />
                  <path
                    d="M104 0L105.796 5.52786H111.608L106.906 8.94427L108.702 14.4721L104 11.0557L99.2977 14.4721L101.094 8.94427L96.3915 5.52786H102.204L104 0Z"
                    fill="#DCC62D" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import SectionLabel from './SectionLabel.vue'

const feedbackContainerRef = ref(null)
const isFeedbackLoaded = ref(false)
let autoSlideInterval = null

const observeFeedback = () => {
  if (!feedbackContainerRef.value) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          isFeedbackLoaded.value = true
        }, 100)
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })

  observer.observe(feedbackContainerRef.value)
}

const startAutoSlide = () => {
  // Auto-slide every 5 seconds
  autoSlideInterval = setInterval(() => {
    nextTestimonial()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

const resetAutoSlide = () => {
  stopAutoSlide()
  startAutoSlide()
}

onMounted(() => {
  observeFeedback()
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
  if (feedbackContainerRef.value) {
    const observer = new IntersectionObserver(() => { })
    observer.disconnect()
  }
})

const testimonials = ref([
  {
    id: 1,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.',
    img:
      'https://api.builder.io/api/v1/image/assets/TEMP/848263f85f5375bf7055de6bd05cc5a37ade935e?width=120',
    alt: 'Miss Sammy Feeney',
    name: 'Miss Sammy Feeney',
    title: 'Investor Metrics Executive',
  },
  {
    id: 2,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.',
    img:
      'https://api.builder.io/api/v1/image/assets/TEMP/3b2da61a2e3ad317410b97864cc39cd9227c8ea5?width=120',
    alt: 'Rosemary Mante',
    name: 'Rosemary Mante',
    title: 'Human Integration Agent',
  },
  {
    id: 3,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.',
    img:
      'https://api.builder.io/api/v1/image/assets/TEMP/307f7d726da98d25a3d7afbab5acf7a2512ed447?width=120',
    alt: 'Avery Stone',
    name: 'Avery Stone',
    title: 'Operations Lead',
  },
  {
    id: 4,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.',
    img:
      'https://api.builder.io/api/v1/image/assets/TEMP/1bf0a13215a03880a6cfa10d11fa1d627cf6e4ca?width=120',
    alt: 'Jordan Brooks',
    name: 'Jordan Brooks',
    title: 'Project Coordinator',
  },
  {
    id: 5,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.',
    img:
      'https://api.builder.io/api/v1/image/assets/TEMP/03644084a0fd8b6fa374aafc9306767822eae530?width=120',
    alt: 'Morgan Riley',
    name: 'Morgan Riley',
    title: 'Senior Designer',
  },
  {
    id: 6,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.',
    img:
      'https://api.builder.io/api/v1/image/assets/TEMP/b1cc194b4ca81ad46baf5ddb8f5c918933b7d326?width=120',
    alt: 'Casey Thompson',
    name: 'Casey Thompson',
    title: 'Technical Lead',
  },
  {
    id: 7,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.',
    img:
      'https://api.builder.io/api/v1/image/assets/TEMP/8f81977224e5c284583f23081ac031693bd09f2a?width=120',
    alt: 'Blake Martinez',
    name: 'Blake Martinez',
    title: 'Business Analyst',
  },
  {
    id: 8,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.',
    img:
      'https://api.builder.io/api/v1/image/assets/TEMP/6da9614879d9bac418755ed625b1d8fe07aae119?width=120',
    alt: 'Dakota Johnson',
    name: 'Dakota Johnson',
    title: 'Product Manager',
  },
])

const pageSize = 4
const currentPage = ref(0)
const totalPages = computed(() => Math.ceil(testimonials.value.length / pageSize))
const displayedTestimonials = computed(() =>
  testimonials.value.slice(currentPage.value * pageSize, currentPage.value * pageSize + pageSize)
)

const nextTestimonial = () => {
  currentPage.value = (currentPage.value + 1) % totalPages.value
  resetAutoSlide()
}

const previousTestimonial = () => {
  currentPage.value = (currentPage.value - 1 + totalPages.value) % totalPages.value
  resetAutoSlide()
}
</script>

<style scoped>
.bottom-right-triangle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: rgb(24, 24, 24);
  z-index: 2;
  pointer-events: none;
  clip-path: polygon(100% 100%, 0 100%, 100% calc(100% - 200px));
}

.bottom-right-geo {
  position: absolute;
  bottom: -210px;
  right: -420px;
  width: 700px;
  height: 700px;
  z-index: 3;
  pointer-events: none;
  transform: rotate(82deg) scaleX(-1);
}

.bottom-right-geo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.client-feedback {
  position: relative;
  background: rgb(31, 31, 31);
  padding: 120px 0;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.decorative-bg-right {
  position: absolute;
  top: -6%;
  right: 0;
  width: 32%;
  max-width: 461px;
  height: auto;
  aspect-ratio: 460.54 / 492.62;
  transform: rotate(21.41deg);
  pointer-events: none;
  z-index: 1;
}

.decorative-bg-right img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.decorative-bg-left {
  position: absolute;
  bottom: -30%;
  left: -35%;
  width: 76%;
  max-width: 1096px;
  height: auto;
  aspect-ratio: 137 / 157;
  transform: rotate(-75deg);
  pointer-events: none;
  z-index: 1;
}

.decorative-bg-left img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.feedback-container {
  position: relative;
  z-index: 2;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 145px;
  top: -80px;
}

.feedback-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 64px;
  gap: 40px;
}

.header-content {
  flex: 1;
}

.section-title {
  color: #FFF;
  text-shadow: 0 6px 4.4px rgba(0, 0, 0, 0.24);
  font-family: Oswald, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 50px;
  font-weight: 250;
  line-height: 71px;
  text-transform: uppercase;
  margin: 0;
}

.title-bold {
  font-weight: 500;
}

.navigation-arrows {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-shrink: 0;
}

.arrow-btn {
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.arrow-btn:hover {
  transform: scale(1.15);
  opacity: 0.8;
}

.arrow-btn svg {
  width: 100%;
  height: 100%;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 32px;
  height: 236px;
  border-radius: 0;
  background: rgba(170, 170, 170, 0.06);
  backdrop-filter: blur(25px);
  opacity: 0;
  transform: translateY(30px);
}

.feedback-loaded .testimonial-card {
  animation: testimonialCardLoadIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.feedback-loaded .testimonial-card:nth-child(1) {
  animation-delay: 0s;
}

.feedback-loaded .testimonial-card:nth-child(2) {
  animation-delay: 0.3s;
}

.feedback-loaded .testimonial-card:nth-child(3) {
  animation-delay: 0.6s;
}

.feedback-loaded .testimonial-card:nth-child(4) {
  animation-delay: 0.9s;
}

@keyframes testimonialCardLoadIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.testimonial-text {
  color: #FFF;
  font-family: Manrope, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  margin: 0;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.client-avatar {
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background: #484848;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.client-avatar img {
  width: 60px;
  height: 90px;
  object-fit: cover;
  position: absolute;
  left: -2px;
  top: 0;
}

.client-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.client-name {
  color: #FFF;
  font-family: Manrope, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
}

.client-title {
  color: #FFF;
  font-family: Manrope, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
}

.star-rating {
  display: flex;
  gap: 8px;
}

@media (max-width: 1200px) {
  .feedback-container {
    padding: 0 80px;
  }

  .bottom-right-geo {
    width: 180px;
    right: 250px;
    bottom: 70px;
  }

  .section-title {
    font-size: 42px;
    line-height: 60px;
  }

  .decorative-bg-right {
    width: 300px;
    right: -100px;
  }

  .decorative-bg-left {
    width: 700px;
    left: -300px;
  }
}

@media (max-width: 992px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .feedback-container {
    padding: 0 60px;
  }
}

@media (max-width: 768px) {
  .client-feedback {
    padding: 80px 0;
  }

  .bottom-right-geo {
    width: 150px;
    right: 150px;
    bottom: 60px;
  }

  .feedback-container {
    padding: 0 40px;
  }

  .feedback-header {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 36px;
    line-height: 50px;
  }

  .testimonial-card {
    padding: 24px;
    height: auto;
  }

  .testimonial-card:nth-child(n+2) {
    display: none;
  }

  .decorative-bg-right {
    width: 200px;
    right: -50px;
    top: -50px;
  }

  .decorative-bg-left {
    width: 500px;
    left: -200px;
  }
}

@media (max-width: 480px) {
  .bottom-right-triangle {
  position: absolute;
  clip-path: polygon(100% 100%, 0 100%, 100% calc(100% - 100px));
}

 .feedback-header {
    flex-direction: column;
    margin-top: 70px;
  }

  .client-feedback {
    padding: 2rem 8% 2.5rem;
    min-height: 70vh;
  }

  .bottom-right-geo {
    width: 120px;
    right: -80px;
    bottom: -305px;
    z-index: 2;
    transform: rotate(-106deg);
  }

  .feedback-container {
    padding: 0 20px;
    /* top: -50px; */
  }

  .section-label {
    font-size: 16px;
    line-height: 28px;
  }

  .section-title {
    font-size: 28px;
    line-height: 40px;
  }

  .testimonial-text {
    font-size: 14px;
    line-height: 20px;
  }

  .client-name {
    font-size: 20px;
    line-height: 26px;
  }

  .client-title {
    font-size: 11px;
  }

  .testimonial-card {
    padding: 20px;
  }
}
</style>
