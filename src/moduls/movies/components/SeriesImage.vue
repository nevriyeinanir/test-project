<template>

      <img :src="this.moviesimg" width="250" height="350" class="rounded" />
   
  <slot></slot>
</template>

<script>
export default {
  name: "MoviesImage",
  props: ["moviesimg"],
  data() {
    return {
      src: "",
      path: "",
    };
  },
};
</script>
