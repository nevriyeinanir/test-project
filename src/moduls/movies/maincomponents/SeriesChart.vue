<template>
<NavbarSelected>
  <Find  @seriess ="series = $event"/>
  <DropDown @seriess ="series = $event"/>
</NavbarSelected>
  <Movies 
    v-for="(items, index) in series"
    :key="programTypes[index]"
    :index="index"
    ><SeriesImage  :index="index" :moviesimg="items.images['Poster Art'].url" />
    <SeriesFooter  :index="index" :moviesContent="items.title "/>
  </Movies>
</template>
<script>
import Movies from "../components/Movies.vue";
import SeriesFooter from "../components/SeriesFooter.vue";
import SeriesImage from "../components/SeriesImage.vue";
import Find from "../components/Find.vue";
import DropDown from "../components/DropDown.vue";
 import NavbarSelected from "../components/NavbarSelected.vue";
import axios from "axios";


export default {
  name: "MoviesChart",
  components: {
    Movies: Movies,
    SeriesFooter: SeriesFooter,
    SeriesImage: SeriesImage,
    Find: Find,
    DropDown: DropDown,
    NavbarSelected :NavbarSelected,
    
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
  //Herhangi bir filtreleme işlemi yapılmadıysa ilk 18 diziyi getirir 
  methods: {
    getSeries() {
      console.log(this.series)
      axios
        .get("/db_movies.json")
        .then((response) => {
          this.series = 
            response
            .data
            .entries
            .filter(function (item) {
            return item.programType == "series";
          })
          .slice(0,18);
          console.log(this.series.title);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>