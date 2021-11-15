<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
    </div>
    <div class="page-body" >
      <div class="container-xl">
        <MoviesChart />
      </div>
    </div>
  </div>
</template>
<script>
import MoviesChart from "../moduls/movies/views/MoviesChart.vue";
export default {
  name: "Home",
  components: {
    MoviesChart: MoviesChart 
  },
};
</script>
