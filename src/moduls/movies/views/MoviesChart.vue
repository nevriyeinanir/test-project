<template>
  <Movies v-for="(items, index) in movies" :key="items.programType" :index="index">
      <MoviesImage :index="index" :moviesid="items.title"/>
      <MoviesFooter
        :programType="items.programType"
        :index="index"
      />
  </Movies>
</template>
<script>
import Movies from "../components/Movies.vue";
import MoviesFooter from "../components/MoviesFooter.vue";
import MoviesImage from "../components/MoviesImage.vue";
import axios from "axios";
export default {
  name: "MoviesChart",
  components: {
    Movies: Movies,
    MoviesFooter: MoviesFooter,
    MoviesImage: MoviesImage,
  },
  data() {
    return {
      movies: [],
      moviesList:[]
      
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      axios.get("/db_movies.json").then((response) => {
        this.movies= response.data.entries.programType;
        console.log(this.movies)
      });
    },
  },
};
</script>
