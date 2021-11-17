<template>
  <div class="col-sm-6 col-lg-4">
    <div class="card card-sm">
        <img
          :src = this.moviesimg 
          alt="Cinque Terre"
          width="250"
          height="300"
          class="rounded"
        />
    </div>
  </div>
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
