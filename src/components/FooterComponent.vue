<template>
  <footer class="bg-white shadow dark:bg-gray-800">
    <div class="w-full p-4 flex justify-center items-center">
      <div
        class="grid gap-4 grid-cols-2 place-content-between lg:place-items-center lg:grid-cols-3"
      >
        <div
          class="text-sm text-gray-300 place-self-start lg:place-self-center"
        >
          {{ companyInfo.phoneNum }}
        </div>
        <div class="text-sm text-gray-300 place-self-end lg:place-self-center">
          {{ companyInfo.address }}
        </div>
        <div
          class="text-sm text-gray-300 place-self-start lg:place-self-center"
        >
          <a :href="mailTo"> {{ companyInfo.email }} </a>
        </div>
        <div
          class="text-sm text-gray-400 col-span-1 place-self-end lg:col-span-3 lg:place-self-center"
        >
          {{ companyInfo.name }} © 2024
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { companyInfo } from "@/constant/companyInfo";
const mailTo = `mailto:${companyInfo.email}?subject = Feedback&body = Message`;
</script>
