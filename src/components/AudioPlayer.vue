<template>
  <div class="audio-player">
    <button
      @click="togglePlay"
      class="audio-toggle"
      :class="{ playing: isPlaying }"
      :aria-label="
        isPlaying ? 'Pause background music' : 'Play background music'
      "
    >
      <svg
        v-if="!isPlaying"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect
          x="6"
          y="4"
          width="4"
          height="16"
        ></rect>
        <rect
          x="14"
          y="4"
          width="4"
          height="16"
        ></rect>
      </svg>
    </button>

    <div
      class="volume-control"
      v-if="isPlaying"
    >
      <input
        type="range"
        min="0"
        max="100"
        v-model="volume"
        @input="updateVolume"
        class="volume-slider"
        aria-label="Volume control"
      />
    </div>

    <audio
      ref="audioElement"
      :src="audioSource"
      loop
      preload="auto"
    ></audio>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const audioElement = ref(null);
  const isPlaying = ref(false);
  const volume = ref(30);

  // Helicopter/chopper sound effect
  const audioSource =
    "https://cdn.pixabay.com/audio/2022/03/10/audio_4dedf26f94.mp3";

  const togglePlay = async () => {
    if (!audioElement.value) return;

    try {
      if (isPlaying.value) {
        audioElement.value.pause();
        isPlaying.value = false;
      } else {
        await audioElement.value.play();
        isPlaying.value = true;
      }
    } catch (error) {
      console.error("Audio playback error:", error);
    }
  };

  const updateVolume = () => {
    if (audioElement.value) {
      audioElement.value.volume = volume.value / 100;
    }
  };

  onMounted(async () => {
    if (audioElement.value) {
      audioElement.value.volume = volume.value / 100;
      // Autoplay helicopter sound
      try {
        await audioElement.value.play();
        isPlaying.value = true;
      } catch (error) {
        // Autoplay might be blocked by browser, user will need to click play
        console.log("Autoplay blocked, user interaction required:", error);
      }
    }
  });

  onUnmounted(() => {
    if (audioElement.value && isPlaying.value) {
      audioElement.value.pause();
    }
  });
</script>

<style scoped>
  .audio-player {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .audio-toggle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #dcc62d;
    background: rgba(24, 24, 24, 0.9);
    backdrop-filter: blur(10px);
    color: #dcc62d;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(220, 198, 45, 0.2);
  }

  .audio-toggle:hover {
    background: rgba(220, 198, 45, 0.1);
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(220, 198, 45, 0.3);
  }

  .audio-toggle.playing {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 4px 15px rgba(220, 198, 45, 0.2);
    }
    50% {
      box-shadow: 0 4px 25px rgba(220, 198, 45, 0.5);
    }
  }

  .volume-control {
    background: rgba(24, 24, 24, 0.9);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    border: 2px solid #dcc62d;
    box-shadow: 0 4px 15px rgba(220, 198, 45, 0.2);
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .volume-slider {
    -webkit-appearance: none;
    width: 100px;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    cursor: pointer;
  }

  .volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #dcc62d;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .volume-slider::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }

  .volume-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #dcc62d;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }

  .volume-slider::-moz-range-thumb:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    .audio-player {
      bottom: 1rem;
      right: 1rem;
    }

    .audio-toggle {
      width: 45px;
      height: 45px;
    }

    .volume-control {
      padding: 0.4rem 0.8rem;
    }

    .volume-slider {
      width: 80px;
    }
  }

  @media (max-width: 480px) {
    .audio-player {
      bottom: 0.8rem;
      right: 0.8rem;
    }

    .audio-toggle {
      width: 40px;
      height: 40px;
    }

    .volume-slider {
      width: 60px;
    }
  }
</style>
