<template>
  <div class="w-full px-12 py-4">
    <div class="text-4xl font-bold flex justify-center">Menu</div>
    <div class="flex justify-start">
      <input
        type="search"
        v-model="filterQuery"
        class="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Search menu..."
      />
      <span
        class="px-2 py-1 bg-yellow-500 rounded-md ml-4 text-sm flex items-center"
        v-if="filterQuery !== ''"
      >
        Remove Filter
        <span class="pl-2">
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
    <div v-for="type in menuTypes" :key="type" class="pt-2">
      <h1 class="text-3xl font-bold">{{ type }}</h1>
      <div v-for="menu in filteredMenu(type)" :key="menu.name" class="py-1">
        <div class="flex flex-row items-center">
          <div class="font-bold">{{ menu.name }} - ${{ menu.price }}</div>
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
      <div v-if="menuLength[type] == 0" class="text-red-500">
        Sorry, no match was found
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, computed } from "vue";
const filterQuery = ref("");
const menuTypes = ref(["Appetizer", "Entree", "Dessert"]);
const menuLength = ref({
  Appetizer: undefined,
  Entree: undefined,
  Dessert: undefined,
});
const menuItems = ref([
  {
    name: "Spicy Noodles with Shrimp",
    price: "9.99",
    collapsed: false,
    descriptionHeader: "A fiery delight for noodle lovers!",
    description:
      "Spice up your taste buds with our Spicy Noodles with Shrimp. This dish is a perfect blend of bold flavors and succulent shrimp, creating a delightful culinary experience.",
    ingredients: ["Noodles", "Shrimp", "Spices", "Vegetables"],
    type: "Entree",
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
    type: "Entree",
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
    type: "Entree",
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
    type: "Entree",
  },
  {
    name: "Classic Cheeseburger",
    price: "8.99",
    collapsed: false,
    descriptionHeader: "A timeless favorite for burger enthusiasts!",
    description:
      "Sink your teeth into our Classic Cheeseburger, featuring juicy beef patty, melted cheese, fresh lettuce, ripe tomatoes, and tangy pickles, all served on a toasted bun.",
    ingredients: [
      "Beef Patty",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Pickles",
      "Bun",
    ],
    type: "Entree",
  },
  {
    name: "Crispy Chicken Caesar Salad",
    price: "10.99",
    collapsed: false,
    descriptionHeader: "A refreshing twist on a classic salad!",
    description:
      "Indulge in our Crispy Chicken Caesar Salad, made with crisp romaine lettuce, seasoned croutons, grated Parmesan cheese, and tender grilled chicken strips, all tossed in creamy Caesar dressing.",
    ingredients: [
      "Romaine Lettuce",
      "Chicken",
      "Croutons",
      "Parmesan Cheese",
      "Caesar Dressing",
    ],
    type: "Entree",
  },
  {
    name: "Vegetarian Pizza",
    price: "12.99",
    collapsed: false,
    descriptionHeader: "A veggie lover's dream come true!",
    description:
      "Savor the flavors of our Vegetarian Pizza, topped with a medley of fresh vegetables including bell peppers, onions, mushrooms, olives, and juicy tomatoes, all on a crispy thin crust.",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Bell Peppers",
      "Onions",
      "Mushrooms",
      "Olives",
      "Tomatoes",
    ],
    type: "Entree",
  },
  {
    name: "Grilled Salmon Fillet",
    price: "14.99",
    collapsed: false,
    descriptionHeader: "A seafood sensation you won't forget!",
    description:
      "Delight your palate with our Grilled Salmon Fillet, featuring a perfectly grilled salmon fillet seasoned with herbs and spices, served with a side of roasted vegetables and lemon butter sauce.",
    ingredients: [
      "Salmon Fillet",
      "Herbs",
      "Spices",
      "Roasted Vegetables",
      "Lemon Butter Sauce",
    ],
    type: "Entree",
  },
  {
    name: "Spaghetti Bolognese",
    price: "11.99",
    collapsed: false,
    descriptionHeader: "A classic Italian dish that never disappoints!",
    description:
      "Treat yourself to our Spaghetti Bolognese, featuring al dente spaghetti tossed in a rich and savory meat sauce made with ground beef, tomatoes, onions, and aromatic herbs.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomatoes", "Onions", "Herbs"],
    type: "Entree",
  },
  {
    name: "Crispy Fried Chicken Wings",
    price: "9.99",
    collapsed: false,
    descriptionHeader: "A finger-licking good appetizer for any occasion!",
    description:
      "Enjoy our Crispy Fried Chicken Wings, perfectly seasoned and fried to golden perfection, served with your choice of dipping sauce.",
    ingredients: ["Chicken Wings", "Flour", "Seasonings", "Dipping Sauce"],
    type: "Appetizer",
  },
  {
    name: "Margherita Pizza",
    price: "10.99",
    collapsed: false,
    descriptionHeader: "Simple yet satisfying, just like Nonna used to make!",
    description:
      "Experience the classic flavors of Italy with our Margherita Pizza, topped with fresh mozzarella cheese, ripe tomatoes, fragrant basil leaves, and a drizzle of olive oil.",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Fresh Mozzarella Cheese",
      "Tomatoes",
      "Basil Leaves",
      "Olive Oil",
    ],
    type: "Entree",
  },
  {
    name: "Caesar Salad",
    price: "8.99",
    collapsed: false,
    descriptionHeader: "A timeless salad that never goes out of style!",
    description:
      "Indulge in our Caesar Salad, featuring crisp romaine lettuce, crunchy croutons, and grated Parmesan cheese, all tossed in a creamy Caesar dressing.",
    ingredients: [
      "Romaine Lettuce",
      "Croutons",
      "Parmesan Cheese",
      "Caesar Dressing",
    ],
    type: "Entree",
  },
  {
    name: "Mushroom Risotto",
    price: "13.99",
    collapsed: false,
    descriptionHeader: "A creamy and comforting Italian classic!",
    description:
      "Delight your senses with our Mushroom Risotto, made with creamy Arborio rice cooked to perfection with savory mushrooms, onions, garlic, and Parmesan cheese.",
    ingredients: [
      "Arborio Rice",
      "Mushrooms",
      "Onions",
      "Garlic",
      "Parmesan Cheese",
    ],
    type: "Entree",
  },
  {
    name: "Beef Tacos",
    price: "9.99",
    collapsed: false,
    descriptionHeader: "A fiesta of flavors in every bite!",
    description:
      "Treat yourself to our Beef Tacos, featuring seasoned ground beef, fresh lettuce, diced tomatoes, shredded cheese, and zesty salsa, all wrapped in soft corn tortillas.",
    ingredients: [
      "Ground Beef",
      "Lettuce",
      "Tomatoes",
      "Cheese",
      "Salsa",
      "Corn Tortillas",
    ],
    type: "Entree",
  },
  {
    name: "Caprese Salad",
    price: "9.99",
    collapsed: false,
    descriptionHeader: "A simple yet elegant salad",
    description:
      "Indulge in the fresh flavors of our Caprese Salad, made with ripe tomatoes, creamy mozzarella cheese, and aromatic basil leaves, drizzled with balsamic glaze and olive oil.",
    ingredients: [
      "Tomatoes",
      "Mozzarella Cheese",
      "Basil Leaves",
      "Balsamic Glaze",
      "Olive Oil",
    ],
    type: "Entree",
  },
  {
    name: "Garlic Parmesan Fries",
    price: "6.99",
    collapsed: false,
    descriptionHeader: "A savory twist on a classic favorite!",
    description:
      "Indulge in our Garlic Parmesan Fries, featuring crispy golden fries tossed with garlic butter and grated Parmesan cheese. A flavorful appetizer that's perfect for sharing or enjoying on your own.",
    ingredients: ["French Fries", "Garlic Butter", "Parmesan Cheese"],
    type: "Appetizer",
  },
  {
    name: "Mozzarella Sticks",
    price: "7.99",
    collapsed: false,
    descriptionHeader: "Crispy on the outside, gooey on the inside!",
    description:
      "Satisfy your cravings with our Mozzarella Sticks, made with golden-brown breading and oozing with melted mozzarella cheese. Served with marinara sauce for dipping, they're the perfect appetizer for cheese lovers.",
    ingredients: ["Mozzarella Cheese", "Breadcrumbs", "Marinara Sauce"],
    type: "Appetizer",
  },
  {
    name: "Loaded Nachos",
    price: "10.99",
    collapsed: false,
    descriptionHeader: "A fiesta of flavors in every bite!",
    description:
      "Dive into our Loaded Nachos, piled high with crispy tortilla chips, melted cheese, seasoned ground beef, jalapenos, sour cream, guacamole, and salsa. Perfect for sharing with friends or enjoying as a meal on your own.",
    ingredients: [
      "Tortilla Chips",
      "Cheese",
      "Ground Beef",
      "Jalapenos",
      "Sour Cream",
      "Guacamole",
      "Salsa",
    ],
    type: "Appetizer",
  },
  {
    name: "New York Cheesecake",
    price: "8.99",
    collapsed: false,
    descriptionHeader: "Creamy, rich, and indulgent!",
    description:
      "Treat yourself to a slice of our New York Cheesecake, featuring a velvety smooth cream cheese filling on a buttery graham cracker crust. It's a classic dessert that's sure to satisfy your sweet tooth.",
    ingredients: ["Cream Cheese", "Sugar", "Eggs", "Graham Crackers", "Butter"],
    type: "Dessert",
  },
  {
    name: "Chocolate Lava Cake",
    price: "9.99",
    collapsed: false,
    descriptionHeader: "Irresistibly decadent and gooey!",
    description:
      "Indulge in our Chocolate Lava Cake, a rich and moist chocolate cake with a gooey molten center. Served warm with a scoop of vanilla ice cream, it's the ultimate dessert for chocolate lovers.",
    ingredients: ["Chocolate Cake", "Chocolate Ganache", "Vanilla Ice Cream"],
    type: "Dessert",
  },
  {
    name: "Fruit Tart",
    price: "7.99",
    collapsed: false,
    descriptionHeader: "A burst of freshness in every bite!",
    description:
      "Enjoy our Fruit Tart, a delightful dessert featuring a buttery pastry crust filled with creamy custard and topped with an assortment of fresh seasonal fruits. It's a colorful and refreshing treat for any occasion.",
    ingredients: ["Pastry Crust", "Custard", "Assorted Fresh Fruits"],
    type: "Dessert",
  },
]);

const emptyFilter = () => {
  filterQuery.value = "";
};

const filteredMenu = (type) => {
  let data = menuItems.value.filter((item) => item.type == type);
  if (filterQuery.value !== "") {
    data = menuItems.value.filter((item) => {
      let hasIngredients = false;
      for (let ingredient of item.ingredients) {
        if (
          ingredient.toLowerCase().includes(filterQuery.value.toLowerCase())
        ) {
          hasIngredients = true;
          break;
        }
      }
      return (
        (item.name.toLowerCase().includes(filterQuery.value.toLowerCase()) ||
          hasIngredients) &&
        item.type == type
      );
    });
    // filteredItems.value.includes(item => item.name == filteredItems);
  }
  menuLength.value[type] = data.length;
  return data;
};

const toggleItem = (item) => {
  console.log(item.collapsed);
  return (item.collapsed = !item.collapsed);
};
</script>
