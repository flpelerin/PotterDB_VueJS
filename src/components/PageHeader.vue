<script>
import { ref, watch } from 'vue';


const currentPage = ref(1);
const maxPage = ref(100);
const elementsPerPage = ref(25);
const maxElementsPerPage = ref(150);
const search = ref('');
    
const updateFunction = ref(null);

watch([currentPage, elementsPerPage, search], () => {
  updateFunction.value();
});    


export default {
  setup() {
    return {
      currentPage,
      maxPage,
      elementsPerPage,
      maxElementsPerPage,
      search,
      updateFunction
    }
  }
}

</script>

<template>
  <input type="text" v-model="search" placeholder="Search...">

  <button @click="currentPage--;" :disabled="currentPage === 1">prev</button>

  <select v-model="currentPage">
    <option v-for="n in maxPage" :key="n" :value="n">{{ n }}</option>
  </select>

  <button @click="currentPage++;" :disabled="currentPage === maxPage">next</button>

  <select v-model="elementsPerPage">
    <option v-for="n in maxElementsPerPage / 25" :key="n * 25" :value="n * 25">{{ n * 25 }}</option>
  </select>
</template>

<!-- Présentation de l'encyclopédie avec des liens vers les différentes sections
(potions, sorts, livres, personnages). -->
