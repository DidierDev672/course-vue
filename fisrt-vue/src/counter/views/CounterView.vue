<script setup lang="ts">
import { ref } from "vue";

const counter = ref(5);

const increase = () => {
  counter.value++;
};

const deduct = () => {
  counter.value--;
};

// export default defineComponent({
//   setup() {
//     const counter = ref(5);

//     const increase = () => {
//       counter.value++;
//     };

//     return {
//       counter,
//       increase,
//     };
//   },
// });
</script>

<template>
  <h1 class="text-2xl font-medium mr-2">
    Counter View:
    <span
      class="text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-orange-500 font-bold"
      >{{ counter }}</span
    >
  </h1>
  <aside class="flex justify-between gap-4 mt-2">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="increase"
    >
      +1
    </button>
    <button
      class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      @click="deduct"
    >
      -1
    </button>
  </aside>
</template>
