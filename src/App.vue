<template>
  <div class="flex flex-col h-screen">
    <NavigationBar logo="Phuc" />

    <main class="flex-grow">
      <router-view />
      <!-- <HelloWorld /> -->
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>
