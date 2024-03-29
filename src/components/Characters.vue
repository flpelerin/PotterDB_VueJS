<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

import PageHeader from './PageHeader.vue'

import DatabaseInteraction from './DatabaseInteraction.vue';
const { subUrl, elements } = DatabaseInteraction.setup();

subUrl.value = 'characters/';
</script>

<template>
 <div v-if="!route.params.id">
    <div class="page-header">
      <h1>Personnages</h1>
      <PageHeader />
    </div>
    <ul>
      <li v-for="char in elements.data" :key="char.id" class="cell-container">
        <div class="cell">
          <img :src="char.attributes.image" alt="">
          <router-link :to="{ name: 'CharacterDetails', params: { id: char.id } }">
            {{ char.attributes.name }}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <div v-for="char in elements.data" :key="char.id">
      <div class="cell" v-if="char.id == route.params.id">
        <img :src="char.attributes.image" alt="" width="300">
        <h2>{{ char.attributes.name }}</h2>
        <p> Sexe: {{char.attributes.gender}} </p>
        <p> Espèce: {{char.attributes.species}} </p>
        <p> Date de naissance: {{char.attributes.born}} </p>
      </div>
    </div>
  </div>

</template>

<-- Présentation des personnages clés avec des détails comme leur nom,
affiliation, et une courte biographie. -->
