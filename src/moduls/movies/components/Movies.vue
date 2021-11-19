<template>
  <div class="gallery">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Movies",
  props: ["key"],
};
</script>
