<script setup lang="ts">
import { ref } from "vue";
import { addPlayer } from "../firebase/db";
import { usePlayers } from "../composables/usePlayers";
import { getSunday } from "../utils/getSunday";

const { getPlayers } = usePlayers();

let name = ref("");

const handleSubmit = async () => {
  await addPlayer({
    name: name.value,
    isVerified: false,
    dateGame: getSunday(),
  });
  name.value = "";
  getPlayers();
};
</script>

<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <label class="block text-sm font-medium leading-6 text-gray-900 mb-2"
        >Nombre</label
      >
      <input
        v-model="name"
        class="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:tex-sm sm:leading-6 mb-3"
        type="text"
        placeholder="Bruno diaz"
      />
      <button
        type="submit"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
      >
        Anotar
      </button>
    </form>
  </section>
</template>
