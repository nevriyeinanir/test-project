<template>
  <div class="card-body">
    <div class="d-flex align-items-center">
      <h4>{{ Figcap(moviesContent) }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesFooter",
  props: ["moviesContent"],
  caption: "",
  methods: {
    //Ana Ekranda Görsel altına Açıklama eklenir
    Figcap(f) {
      if (f == "series") {
        this.caption = "Dizi";
      } else {
        this.caption = "Film";
      }
      return this.caption;
    },
  },
};
</script>
