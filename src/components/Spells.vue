<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

import PageHeader from './PageHeader.vue'

import DatabaseInteraction from './DatabaseInteraction.vue';
const { subUrl, elements } = DatabaseInteraction.setup();

subUrl.value = 'spells/';
</script>

<template>
  <div v-if="!route.params.id">
    <div class="page-header">
      <h1>Sorts</h1>
      <PageHeader />
    </div>
    <ul>
      <li v-for="spell in elements.data" :key="spell.id" class="cell-container">
        <div class="cell">
          <img :src="spell.attributes.image" alt="">
          <router-link :to="{ name: 'SpellDetails', params: { id: spell.id } }">
            {{ spell.attributes.name }}
          </router-link>
        </div>
      </li>
    </ul>
    
  </div>
  <div v-else>
    <div v-for="spell in elements.data" :key="spell.id">
      <div class="cell" v-if="spell.id == route.params.id">
        <img :src="spell.attributes.image" alt="" width="300">
        <h2>{{ spell.attributes.name }}</h2>
        <p>Effet: {{ spell.attributes.effect }}</p>
        <p>Catégorie: {{spell.attributes.category }}</p>
      </div>
    </div>
  </div>
</template>

<-- Affichage des sorts, incluant leur nom, effet, et une brève description. -->
