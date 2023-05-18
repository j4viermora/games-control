<script setup lang="ts">
import AddForm from "./components/AddForm.vue";
import { usePlayers } from "./composables/usePlayers";
import { getSunday } from "./utils/getSunday";
import { onMounted } from "vue";

const { players, handleDelete, getPlayers, totalPlayers } = usePlayers();
onMounted(getPlayers);
</script>

<template>
  <main class="sm:container sm:mx-auto px-4">
    <h2 class="text-2xl mb-5 mt-10">
      Convocatoria {{ new Date(getSunday()).toLocaleDateString() }}
    </h2>
    <AddForm />
    <section>
      <h3 class="text-xl mt-10 mb-5">Lista de asistentes</h3>
      <span class="mb-2">Total anotados: {{ totalPlayers }}</span>

      <template v-for="player in players.splice(0, 20)">
        <article
          class="bg-white shadow-md px-4 py-2 rounded-md flex justify-between items-center mb-5"
        >
          <span class="font-bold mr-5">{{ player.name }}</span>
          <button
            @click="handleDelete(String(player.id))"
            class="bg-red-500 hover:bg-red-700 focus:outline-none border-transparent text-sm rounded-md shadow-sm text-white inline-flex px-4 py-2"
          >
            Eliminar
          </button>
        </article>
      </template>
    </section>
    <section class="mt-5">
      <h4 class="text-xl mb-5">Lista de espera</h4>
      <span>En espera {{ players.length }}</span>
      <template v-for="player in players">
        <article
          class="bg-white shadow-md px-4 py-2 rounded-md flex justify-between items-center mb-5"
        >
          <span class="font-bold mr-5">{{ player.name }}</span>
          <button
            @click="handleDelete(String(player.id))"
            class="bg-violet-500 hover:bg-violet-700 focus:outline-none border-transparent text-sm rounded-md shadow-sm text-white inline-flex px-4 py-2"
          >
            Salirme
          </button>
        </article>
      </template>
    </section>
  </main>
</template>
