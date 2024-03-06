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
    <div v-if="!$route.params.id">
      <li v-for="book in books.data" :key="book.id">
        <router-link :to="{ name: 'BookDetails', params: { id: book.id } }">
          {{ book.attributes.title }}
        </router-link>
      </li>
    </div>

    <div v-else>
      {{$route.params.id}}
      <li v-for="book in books.data" :key="book.id" v-if="book.id === $route.params.id">
        <h2>{{ book.attributes.title }}</h2>
        <p>Auteur: {{ book.attributes.author }}</p>
        <p>Date de publication: {{ book.attributes.published_at }}</p>
      </li>
    </div>

  </ul>
</template>

<-- Liste des livres de l'univers Harry Potter avec des informations telles que
le titre, l'auteur, la date de publication. -->
