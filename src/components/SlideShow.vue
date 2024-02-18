<template>
  <div class="relative">
    <img :src="images[currentIndex]" class="w-full" />
    <button
      @click="prevSlide"
      class="absolute top-1/2 transform -translate-y-1/2 left-4 text-white px-4 py-2 rounded hover:bg-gray-700 hover:bg-opacity-20 text-opacity-50 hover:text-opacity-100"
    >
      <font-awesome-icon icon="chevron-left" />
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 transform -translate-y-1/2 right-4 text-white px-4 py-2 rounded hover:bg-gray-700 hover:bg-opacity-20 text-opacity-50 hover:text-opacity-100"
    >
      <font-awesome-icon icon="chevron-right" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import desertImage from "../assets/slideshow/desert.jpg";
import seaImage from "../assets/slideshow/sea.jpg";
import stairwayImage from "../assets/slideshow/stairway.jpg";

const images = ref([desertImage, seaImage, stairwayImage]);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const timer = ref();

const startTimer = () => {
  timer.value = setInterval(() => {
    nextSlide();
  }, 10000);
};

const stopTimer = () => {
  clearInterval(timer);
};

// Lifecycle hook -> Start when mounted like ngONInit
onMounted(() => {
  startTimer();
});

// Remove timer when unmount
onUnmounted(() => {
  stopTimer();
});
</script>
