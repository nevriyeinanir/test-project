<template>
<NavbarSelected>
  <Find  @seriess ="series = $event"/>
  <DropDown @seriess ="series = $event"/>
</NavbarSelected>
  <Movies
    v-for="(items, index) in series"
    :key="programTypes[index]"
    :index="index"
  ><SeriesImage  :index="index" :moviesimg="items.images['Poster Art'].url"/>
    <SeriesFooter :index="index" :moviesContent="items.title"/>
  </Movies>
</template>
<script>
import Movies from "../components/Movies.vue";
import SeriesFooter from "../components/SeriesFooter.vue";
import SeriesImage from "../components/SeriesImage.vue";
import Find from "../components/Find.vue";
import NavbarSelected from "../components/NavbarSelected.vue";
import DropDown from "../components/DropDown.vue";
import axios from "axios";
export default {
  name: "MoviesChart",
  components: {
    Movies: Movies,
    SeriesFooter: SeriesFooter,
    SeriesImage: SeriesImage,
    Find: Find,
    NavbarSelected: NavbarSelected,
    DropDown: DropDown

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
  //İlk 18 filmi getirir
  methods: {
    getSeries() {
     axios.get("/db_movies.json").then((response) => {
        this.series = response
          .data
          .entries
          .filter(function(item) {
            return item.programType == 'movie'})
            .slice(0,18);
          //console.log(this.series.title);
          })
          .catch((err)=>{
          console.log(err);
        })
    },
  }
}

</script>