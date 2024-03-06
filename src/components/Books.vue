
<script setup>
import { ref, onMounted } from 'vue';

import axios from 'axios';

//https://api.potterdb.com/v1/books?filter[title_cont]=Harry%20Potter%20and%20the%20Philosopher%27s%20Stone

const baseUrl = 'https://api.potterdb.com/v1/';
const booksUrl = 'books/';

const books = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${baseUrl}${booksUrl}`);
    books.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <h1>Livres</h1>
  <ul class="element-list">
    <li v-for="book in books.data" :key="book.id">
      {{ book.attributes.title }}
    </li>
  </ul>
</template>

<-- Liste des livres de l'univers Harry Potter avec des informations telles que
le titre, l'auteur, la date de publication. -->
