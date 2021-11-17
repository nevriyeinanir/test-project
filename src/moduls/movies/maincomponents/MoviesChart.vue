<template>
  <Movies
    v-for="(items, index) in programTypes"
    :key="programTypes[ index ]"
    :index="index"
  ><MoviesImage :index="index"  :moviestype ="programTypes[ index ]" />
    <MoviesFooter :index="index" :moviesContent="programTypes[ index ]"/>
  </Movies>
</template>
<script>
import Movies from "../components/Movies.vue";
import MoviesFooter from "../components/MoviesFooter.vue";
import MoviesImage from "../components/MoviesImage.vue";
/* <MoviesImage :index="index" :moviesimg="items.images['Poster Art'].url" />*/
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
      programTypes: [],
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      axios.get("/db_movies.json").then((response) => {
        this.movies = response.data.entries;
        this.programTypes = this.movies
          .map((movie) => movie.programType)
          .filter((value, index, arr) => arr.indexOf(value) === index);
              
           // console.log(this.programTypes)
       return this.programTypes
      })
      .catch((err)=>{
     console.log(err);
    });
    },
  },
};
</script>