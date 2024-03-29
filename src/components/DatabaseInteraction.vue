<script>
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';

  import PageHeader from './PageHeader.vue'
  const { currentPage, elementsPerPage, search, updateFunction } = PageHeader.setup();

  const baseUrl = 'https://api.potterdb.com/v1/';
  const subUrl = ref('');
  const elements = ref([]);
  let urlFilter = '';



  onMounted(async () => {
    try {
      await fetchData()
    } catch (error) {
      console.error("Could not fetch data from remote database", error)
    }
  })

  async function fetchData() {    
    console.log('fetching data')

    urlFilter = `?filter[name_cont]=${search.value}&page[size]=${elementsPerPage.value}&page[number]=${currentPage.value}`
    const response = await axios.get(`${baseUrl}${subUrl.value}${urlFilter}`);
    elements.value = response.data;
  }

  updateFunction.value = fetchData;
  watch(subUrl, () => { updateFunction.value(); });    

  export default {
    setup() {
      return {
        subUrl,
        elements
      }
    }
  }
</script>