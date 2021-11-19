<template>
  <img :src="this.moviesimg" width="200" height="300" class="rounded" />
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
