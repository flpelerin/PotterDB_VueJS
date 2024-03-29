<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

import PageHeader from './PageHeader.vue'

import DatabaseInteraction from './DatabaseInteraction.vue';
const { subUrl, elements } = DatabaseInteraction.setup();

subUrl.value = 'potions/';
</script>

<template>
  <div v-if="!route.params.id">
    <div class="page-header">
      <h1>Potions</h1>
      <PageHeader />
    </div>
    <ul>
      <li v-for="potion in elements.data" :key="potion.id" class="cell-container">
        <div class="cell">
          <img :src="potion.attributes.image" alt="">
          <router-link :to="{ name: 'PotionDetails', params: { id: potion.id } }">
            {{ potion.attributes.name }}
          </router-link>
        </div>
      </li>
    </ul>
    
  </div>
  <div v-else>
    <div v-for="potion in elements.data" :key="potion.id">
      <div class="cell" v-if="potion.id == route.params.id">
        <img :src="potion.attributes.image" alt="" width="300">
        <h2>{{ potion.attributes.name }}</h2>
        <p>Effet: {{ potion.attributes.effect }}</p>
        <p>Ingrédients: {{ potion.attributes.ingredients }}</p>
        <p>Caractéristiques: {{ potion.attributes.characteristics }}</p>
      </div>
    </div>
  </div>
</template>

<-- Liste des potions avec des détails accessibles sur une page dédiée pour
chaque potion. -->
