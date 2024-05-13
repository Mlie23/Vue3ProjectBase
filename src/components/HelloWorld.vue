<template>
  <div class="relative h-full">
    <!-- Behind div with lower z-index -->
    <SlideShow></SlideShow>
    <!-- Forward div with higher z-index -->
    <div
      class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
    >
      <div
        class="flex flex-col items-center justify-center w-2/3 md:w-1/2 lg:w-1/3 h-1/2 p-6 bg-gray-700 bg-opacity-65 z-10 text-gray-200 rounded-md shadow-lg"
      >
        <div class="text-2xl">Sample Document</div>
        <div class="flex-grow overflow-hidden">
          <img :src="porscheImage" class="object-scale-down max-h-full" />
        </div>

        <div class="text-xl">Sample Document</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import porscheImage from "../assets/porsche.jpg";
import { ref } from "vue";
import SlideShow from "./SlideShow.vue";
const name = ref("Hello world");
name.value = "Test";
</script>
