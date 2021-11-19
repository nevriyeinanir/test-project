<template>
 <div class="page-wrapper">
    <div class="container-xl">
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
    <SeriesChart />
           </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SeriesChart from "../maincomponents/SeriesChart.vue";
export default {
  name: "Series",
  components: {
    SeriesChart: SeriesChart,
  },
};
</script>