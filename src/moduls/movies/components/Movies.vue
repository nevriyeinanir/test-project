<template>   
  <div
    style="display: inline-grid"
    class="portfolioimages"
    white-space="nowrap"
    float="left"
  >
  <div class="row row-cards">
  <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Movies",
  props: ["key"],
};
</script>
