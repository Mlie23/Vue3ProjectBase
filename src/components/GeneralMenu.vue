<template>
  <div class="w-full">
    <div class="text-4xl flex items-end">
      Menu
      <span
        class="px-2 py-1 bg-yellow-500 rounded-md ml-4 text-sm"
        v-if="filterQuery !== ''"
      >
        Filtered
        <span>
          <button>
            <font-awesome-icon
              icon="fa-solid fa-x"
              class="text-xs hover:text-black"
              @click="emptyFilter()"
            />
          </button>
        </span>
      </span>
    </div>
    <div class="flex">
      <input
        type="search"
        v-model="filterQuery"
        class="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="text here"
      />
      <div>{{ filterQuery }}</div>
    </div>
    <div v-for="menu in filteredMenu" :key="menu.name">
      <div class="flex flex-row items-center">
        <div>{{ menu.name }} - {{ menu.price }}</div>
        <div class="flex-1"></div>
        <button @click="toggleItem(menu)" class="hover:text-red-500 text-lg">
          <font-awesome-icon
            :icon="
              !menu.collapsed
                ? 'fa-solid fa-chevron-up'
                : 'fa-solid fa-chevron-down'
            "
          />
        </button>
      </div>
      <div v-if="!menu.collapsed" class="px-8">
        <div>
          {{ menu.descriptionHeader }}
        </div>
        <div>
          {{ menu.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, computed } from "vue";
const filterQuery = ref("");
const menuItems = ref([
  {
    name: "Spicy Noodles with Shrimp",
    price: "9.99",
    collapsed: false,
    descriptionHeader: "A fiery delight for noodle lovers!",
    description:
      "Spice up your taste buds with our Spicy Noodles with Shrimp. This dish is a perfect blend of bold flavors and succulent shrimp, creating a delightful culinary experience.",
    ingredients: ["Noodles", "Shrimp", "Spices", "Vegetables"],
  },
  {
    name: "Grilled Salmon Salad",
    price: "12.99",
    collapsed: false,
    descriptionHeader: "Freshness on a plate!",
    description:
      "Indulge in our Grilled Salmon Salad, a healthy and flavorful choice that combines the richness of grilled salmon with a variety of fresh, crisp vegetables. A refreshing option for those looking for a light yet satisfying meal.",
    ingredients: [
      "Salmon",
      "Mixed Greens",
      "Cherry Tomatoes",
      "Cucumbers",
      "Balsamic Dressing",
    ],
  },
  {
    name: "Vegetarian Stir-Fry",
    price: "8.99",
    collapsed: false,
    descriptionHeader: "A colorful medley of vegetables!",
    description:
      "Our Vegetarian Stir-Fry is a vibrant mix of colorful vegetables stir-fried to perfection. Packed with nutrients and flavor, it's a delicious choice for those seeking a wholesome and meat-free option.",
    ingredients: [
      "Broccoli",
      "Bell Peppers",
      "Carrots",
      "Snow Peas",
      "Tofu",
      "Soy Sauce",
    ],
  },
  {
    name: "BBQ Pulled Pork Sandwich",
    price: "10.99",
    collapsed: false,
    descriptionHeader: "A classic favorite with a twist!",
    description:
      "Savor the taste of our BBQ Pulled Pork Sandwich, featuring tender pulled pork smothered in tangy barbecue sauce, served in a soft bun. It's a mouthwatering twist on a classic favorite.",
    ingredients: [
      "Pulled Pork",
      "Barbecue Sauce",
      "Bun",
      "Pickles",
      "Coleslaw",
    ],
  },
]);

const emptyFilter = () => {
  filterQuery.value = "";
};

const filteredMenu = computed(() => {
  if (filterQuery.value !== "") {
    const data = menuItems.value.filter((item) =>
      item.name.toLowerCase().includes(filterQuery.value.toLowerCase()),
    );
    return data;
    // filteredItems.value.includes(item => item.name == filteredItems);
  }
  return menuItems.value;
});

const toggleItem = (item) => {
  console.log(item.collapsed);
  return (item.collapsed = !item.collapsed);
};
</script>
