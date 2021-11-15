<template>
  <a href="#" target="_blank">
    <img
      :src="this.moviesimg"
      alt="Cinque Terre"
      class="fit-picture"
      width="250"
      height="300"
    />
  </a>

  <slot></slot>
</template>

<script>
export default {
  name: "MoviesImage",
  props: ["moviesimg"],
};
</script>
