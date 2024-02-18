<template>
  <nav class="bg-gray-800 border-gray-200">
    <div class="max-w-screen-xl mx-auto p-3">
      <a href="/home">
        <div class="flex justify-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-2"
            alt="Company Logo"
          />
          <span class="text-white text-2xl font-semibold whitespace-nowrap">{{
            companyInfo.name
          }}</span>
        </div>
      </a>
      <div class="flex justify-center items-center">
        <ul class="font-medium flex pt-2 rounded-lg flex-row space-x-8">
          <li>
            <a
              href="/home"
              class="navbar-elem"
              :class="{
                'bg-blue-700 hover:bg-blue-700': getActiveTab('/home'),
              }"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/about"
              class="navbar-elem"
              :class="{
                'bg-blue-700 hover:bg-blue-700': getActiveTab('/about'),
              }"
              >About</a
            >
          </li>
          <li>
            <a
              href="/menu"
              class="navbar-elem"
              :class="{
                'bg-blue-700 hover:bg-blue-700': getActiveTab('/menu'),
              }"
              >Menu</a
            >
          </li>
          <li>
            <a
              href="/contact"
              class="navbar-elem"
              :class="{
                'bg-blue-700 hover:bg-blue-700': getActiveTab('/contact'),
              }"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { companyInfo } from "@/constant/companyInfo";
import { router } from "@/main";

function getActiveTab(value) {
  return router?.currentRoute?.value?.path == value;
}
</script>
