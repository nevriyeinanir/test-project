<template>
  <router-link :to="this.Selectpath(this.moviestype)">
    <img
      :src="this.SelectSrc(this.moviestype)"
      width="250"
      height="300"
      class="rounded"
    />
  </router-link>
  <slot></slot>
</template>

<script>
export default {
  name: "MoviesImage",
  props: ["moviestype"],
  data() {
    return {
      src: "",
      path: "",
    };
  },
  methods: {
    // Ansayfa'da bulunan Ana başlıklara yönlendirme ve görsel atanır
    SelectSrc(m) {
      if (m == "series") {
        this.src =
          "https://streamcoimg-a.akamaihd.net/000/108/70/10870-PosterArt-c37e8232f327b27bc62043ea627ca528.jpg";
      } else {
        this.src =
          "https://streamcoimg-a.akamaihd.net/000/958/725/958725-PosterArt-96c5bbb6e15269f5b5cd9bc7801de1d9.jpg";
      }
      return this.src;
    },
    Selectpath(m) {
      if (m == "series") {
        this.path = "/series";
      } else {
        this.path = "/cine";
      }
      return this.path;
    },
  },
};
</script>
