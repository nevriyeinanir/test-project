<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <MoviesChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MoviesChart from "@/moduls/movies/maincomponents/MoviesChart.vue";

export default {
  name: "Home",
  components: {
    MoviesChart: MoviesChart,
  },
};
</script>
