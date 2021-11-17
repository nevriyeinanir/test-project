<template>
<div class="container">
        <MoviesChart />
   </div>
</template>
<script>
import MoviesChart from "@/moduls/movies/views/MoviesChart.vue";

export default {
  name: "Home",
  components: {
    MoviesChart: MoviesChart 
  },
};
</script>
