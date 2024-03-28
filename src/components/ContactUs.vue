<template>
    <section>
        <div class="relative w-full h-96 overflow-hidden">
            <img src="../assets/landscape.jpg" class="object-cover w-full h-full">
            <div class="absolute flex items-center justify-center inset-0 font-extrabold text-5xl lg:text-7xl">Contact Us</div>
        </div>
    </section>
    <section class="bg-blue-400">
        <div
        class="gap-4 py-8 px-4 mx-16 lg:px-6 lg:mx-64 lg:grid lg:grid-cols-3"
        >
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
                <p class="mb-4 text-justify">We'd love to hear from you. Send us an email at <a href="mailto:fakeEmail@email.com" class="text-blue-700 underline">fakeEmail@email.com</a></p>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>
