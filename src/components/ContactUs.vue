<template>
  <section>
    <div class="relative w-full h-96 overflow-hidden">
      <img src="../assets/landscape.jpg" class="object-cover w-full h-full" />
      <div
        class="absolute flex items-center justify-center inset-0 font-extrabold text-5xl lg:text-7xl"
      >
        Contact Us
      </div>
    </div>
  </section>
  <section class="bg-blue-400">
    <div class="gap-4 py-8 px-4 mx-16 lg:px-6 lg:mx-64 lg:grid lg:grid-cols-3">
      <div class="mt-4 mb-8 mx-auto lg:mb-0">
        <img
          class="w-full h-96 rounded-lg object-cover"
          src="../assets/landscape.jpg"
          alt="about-us-pic"
        />
      </div>
      <div class="mt-8 sm:text-lg lg:mx-auto lg:col-span-2">
        <h1
          class="mb-2 text-3xl font-extrabold text-white text-center lg:text-4xl lg:text-left lg:mb-4"
        >
          Send Us a Message!
        </h1>
        <p class="mb-4 lg:text-justify">
          At {{ companyInfo.name }}, we strive to engage with our customers and
          provide the best service. If you have anything for us, we'd love to
          hear from you. <br /><br />
          Send us an email at
          <a :href="mailTo" class="text-blue-700 underline">
            {{ companyInfo.email }}
          </a>
          and we'll get back to you as soon as we can.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { companyInfo } from "@/constant/companyInfo";
const mailTo = `mailto:${companyInfo.email}?subject = Feedback&body = Message`;
</script>
