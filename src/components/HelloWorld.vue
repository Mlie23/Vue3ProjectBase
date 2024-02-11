<template>
  <div class=" grid md:grid-cols-2 lg:grid-cols-4">
    <div>This is a start of a great project</div>
    <div>Right?</div>
    <div>Right??</div>
    <div>Right?!?!</div>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
const name = ref("Hello world");
name.value = "Test";
</script>

