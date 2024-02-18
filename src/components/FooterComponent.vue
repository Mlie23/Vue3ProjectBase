<template>
  <footer class="bg-white shadow dark:bg-gray-800">
    <div class="w-full p-4">
      <div class="flex justify-center items-center">
        <div class="text-sm text-gray-300 px-4">{{ companyInfo.phoneNum }}</div>
        <div class="text-sm text-gray-300 px-3">◈</div>
        <div class="text-sm text-gray-300 px-4">{{ companyInfo.address }}</div>
        <div class="text-sm text-gray-300 px-3">◈</div>
        <div class="text-sm text-gray-300 px-4">
          <a :href="mailTo"> {{ companyInfo.email }} </a>
        </div>
      </div>
      <div class="flex justify-center">
        <span class="text-sm text-gray-400"
          >{{ companyInfo.name }} © 2024</span
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
import { companyInfo } from "@/constant/companyInfo";
const mailTo = `mailto:${companyInfo.email}?subject = Feedback&body = Message`;
</script>
