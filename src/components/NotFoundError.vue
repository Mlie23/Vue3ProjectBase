<template>
  <div class="h-full flex flex-col items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <text
        x="50%"
        y="50%"
        font-size="60"
        text-anchor="middle"
        dy="0.3em"
        fill="red"
      >
        !
      </text>
    </svg>

    <div class="font-bold">
      Uh Oh, The page that you are looking for does not exist!
    </div>
    <div>
      Please go back to
      <span
        class="underline hover:text-gray-500 hover:cursor-pointer"
        @click="previousPage()"
        >previous</span
      >
      page
    </div>
    <button
      @click="previousPage()"
      class="mt-4 py-1 px-3 text-white bg-black rounded-md hover:bg-gray-300 hover:text-black"
    >
      Go Back
    </button>
  </div>
</template>

<script setup>
import { router } from "../main";

function previousPage() {
  router.push("/");
}
</script>
