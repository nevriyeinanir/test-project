<template>
    <Find/>
  <Movies
    v-for="(items, index) in series"
    :key="items.programType"
    :index="index"
  ><SeriesImage :index="index" :moviesimg="items.images['Poster Art'].url"/>
    <SeriesFooter :index="index"/>
  </Movies>
</template>
<script>
import Movies from "../components/Movies.vue";
import SeriesFooter from "../components/SeriesFooter.vue";
import SeriesImage from "../components/SeriesImage.vue";
import Find from "../components/Find.vue";
import axios from "axios";
export default {
  name: "MoviesChart",
  components: {
    Movies: Movies,
    SeriesFooter: SeriesFooter,
    SeriesImage: SeriesImage,
    Find: Find
  },
  data() {
    return {
      series: [],
      programTypes: [],
    };
  },
  created() {
    this.getSeries();
   
  },
  methods: {
    getSeries() {
     axios.get("/db_movies.json").then((response) => {
        this.series = response.data.entries.filter(function(item) {
        return item.programType == 'series'});
        console.log(this.series.title);
      }).catch((err)=>{
     console.log(err);
    })
    },
  }
}

</script>