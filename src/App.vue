<script setup lang="ts">
import AddForm from "./components/AddForm.vue";
</script>

<template>
  <main class="sm:container sm:mx-auto px-4">
    <h2 class="text-2xl mb-5 mt-10">Convocatoria</h2>
    <AddForm />
    <section>
      <h3 class="text-xl mt-10 mb-5">Lista de asistentes</h3>

      <article
        class="bg-white shadow-md px-4 py-2 rounded-md flex justify-between items-center mb-5"
      >
        <span class="font-bold mr-5">Bruno Diaz</span>
        <button
          class="bg-red-500 hover:bg-red-700 focus:outline-none border-transparent text-sm rounded-md shadow-sm text-white inline-flex px-4 py-2"
        >
          Eliminar
        </button>
      </article>
      <article
        class="bg-white shadow-md px-4 py-2 rounded-md flex justify-between items-center"
      >
        <span class="font-bold mr-5">Bruno Diaz</span>
        <button
          class="bg-red-500 hover:bg-red-700 focus:outline-none border-transparent text-sm rounded-md shadow-sm text-white inline-flex px-4 py-2"
        >
          Eliminar
        </button>
      </article>
    </section>
    <section class="mt-5">
      <h4 class="text-xl mb-5">Lista de esapera</h4>
      <article
        class="bg-white shadow-md px-4 py-2 rounded-md flex justify-between items-center"
      >
        <span class="font-bold mr-5">Bruno Diaz</span>
      </article>
    </section>
  </main>
</template>
