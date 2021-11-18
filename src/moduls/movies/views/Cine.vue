<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <CineChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CineChart from "../maincomponents/CineChart.vue";
export default {
  name: "Cine",
  components: {
    CineChart: CineChart,
  },
};
</script>