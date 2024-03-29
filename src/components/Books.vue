<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

import PageHeader from './PageHeader.vue'

import DatabaseInteraction from './DatabaseInteraction.vue';
const { subUrl, elements } = DatabaseInteraction.setup();

subUrl.value = 'books/';
</script>

<template>
  <div v-if="!route.params.id">
    <div class="page-header">
      <h1>Livres</h1>
      <PageHeader />
    </div>
    <ul>
      <li v-for="book in elements.data" :key="book.id" class="cell-container">
        <div class="cell">
          <img :src="book.attributes.cover" alt="" width="100" height="150">
          <router-link :to="{ name: 'BookDetails', params: { id: book.id } }">
            {{ book.attributes.title }}
          </router-link>
        </div>
      </li>
    </ul>
    
  </div>
  <div v-else>
    <div v-for="book in elements.data" :key="book.id">
      <div class="cell" v-if="book.id == route.params.id">
        <img :src="book.attributes.cover" alt="" width="200" height="300">
        <h2>{{ book.attributes.title }}</h2>
        <p>Auteur: {{ book.attributes.author }}</p>
        <p>Date de publication: {{ book.attributes.release_date }}</p>
      </div>
    </div>
  </div>

</template>

<-- Liste des livres de l'univers Harry Potter avec des informations telles que
le titre, l'auteur, la date de publication. -->
