<template>
  <section class="bg-blue-400">
    <div
      class="items-center gap-12 py-8 px-4 mx-16 lg:px-6 lg:mx-48 lg:grid lg:grid-cols-2"
    >
      <div class="sm:text-lg lg:mx-auto">
        <h1
          class="mb-2 text-4xl font-extrabold text-center text-white lg:text-left lg:mb-4"
        >
          Our Story
        </h1>
        <p class="mb-4 text-justify">
          In the heart of a serene town, amidst winding streets and rustling
          trees, Dleifrag, a spirited orange cat with dreams as vast as the sky,
          discovered an old, forgotten building. Ignited by a fervent passion
          for the written word and the comforting aroma of freshly brewed
          coffee, Dleifrag embarked on a whimsical journey. With unwavering
          determination and boundless creativity, he transformed the forgotten
          structure into Dleifrag's Café & Book Nook—a charming retreat where
          patrons are invited to lose themselves in the pages of cherished books
          while savoring the rich flavors of artisanal coffee. Dleifrag's vision
          of a sanctuary for the mind and soul has blossomed into a beloved
          community hub, where tales are shared, friendships are forged, and
          memories are made, one cup of coffee at a time.
        </p>
      </div>
      <div class="mt-4 mb-8 mx-16 lg:mb-0 lg:mx-auto">
        <img
          class="w-full h-full rounded-lg"
          src="../assets/cat2.jpg"
          alt="about-us-pic"
        />
      </div>
    </div>
  </section>
  <!-- Personal Info Section for About Us -->
  <section class="bg-red-400">
    <div
      class="items-center gap-12 py-8 px-4 mx-16 lg:grid lg:grid-cols-3 lg:px-6 lg:mx-48"
    >
      <div class="mt-4 mb-8 mx-16 lg:mb-0 lg:mx-auto">
        <img
          class="w-full h-full rounded-lg"
          src="../assets/cat.jpg"
          alt="about-us-pic"
        />
      </div>
      <div class="sm:text-lg lg:col-span-2 lg:mx-auto">
        <h2
          class="mb-2 text-4xl font-extrabold text-center text-white lg:text-left lg:mb-4"
        >
          Meet Dleifrag
        </h2>
        <p class="mb-4 text-justify">
          Meow! My name is Dleifrag, and let me tell you the tail of how I came
          to open this wondrous establishment. It all started when I stumbled
          upon this abandoned building on the outskirts of our charming little
          town. With a whisker of imagination and a pawful of determination, I
          saw potential where others saw decay. I envisioned a place where the
          aroma of freshly brewed coffee would mingle with the scent of
          well-loved books—a sanctuary where people could gather, share stories,
          and forge connections. With each nail hammered and each shelf
          assembled, my dream took shape until it became the vibrant haven you
          see before you. Here at Dleifrag's Café & Book Nook, I believe in the
          power of community, the magic of literature, and the joy of a warm cup
          of meow-fee. It's been quite the journey, but seeing the smiles on the
          faces of our patrons makes every purrfect moment worthwhile.
        </p>
      </div>
    </div>
  </section>
  <section class="bg-green-400">
    <div class="py-8 px-4">
      <div>
        <h2 class="mb-2 text-4xl font-extrabold text-center text-white lg:mb-4">
          Location
        </h2>
      </div>
      <div class="flex justify-center items-center">
        <div id="map" class="w-2/3 h-96"></div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
// import openlayer css for style
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
// This is library of openlayer for handle map
import Map from "ol/Map";
import View from "ol/View";
import { defaults as defaultControls, ScaleLine } from "ol/control";
import { Tile, Tile as TileLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
export default {
  async mounted() {
    await this.initiateMap();
  },
  methods: {
    initiateMap() {
      // create vector layer
      var source = new VectorSource();
      // create map with 2 layer
      var map = new Map({
        target: "map",
        layers: [
          new Tile({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([-117.426048, 47.658779]),
          zoom: 13,
        }),
      });
    },
  },
};
</script>
