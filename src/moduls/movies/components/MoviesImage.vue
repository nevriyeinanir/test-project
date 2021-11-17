<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3">
      <figure>
        <a href="#" target="_blank">
          <img
            :src="this.SelectSrc(this.moviestype)"
            alt="Cinque Terre"
            width="250"
            height="300"
            class="rounded"
          />
        </a>
      </figure>
    </div>
  </div>
  <slot></slot>
</template>

<script>
export default {
  name: "MoviesImage",
  props: ["moviestype"],
  data() {
    return {
      src:"",
    };
  },
  methods: {
    SelectSrc(m) {
      if (m == "series") {
        this.src =
          "https://streamcoimg-a.akamaihd.net/000/108/70/10870-PosterArt-c37e8232f327b27bc62043ea627ca528.jpg";
      } else {
        this.src =
          "https://streamcoimg-a.akamaihd.net/000/115/3873/1153873-PosterArt-93b3333a696042bf7da06b874af771d8.jpg";
      }
      return this.src;
    },
  },
};
</script>
