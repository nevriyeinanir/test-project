<template>
  <div class="col-6 col-md-4">
    <select @change="change($event)">
      <option>Sırala</option>
      <option value="1">Yeniye Göre Sırala</option>
      <option value="2">Eskiye Göre Sırala</option>
      <option value="3">Puana Göre Sırala</option>
      <option value="4">Rastgele Sırala</option>
    </select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DropDown",
  data() {
    return {
      selected: null,
      series: [],
    };
  },
  methods: {
    change(event) {
      this.selected = event.target.value;
      const Liststr = this.selected;
      switch (Liststr) {
        case "1":
          axios
            .get("/db_movies.json")
            .then((response) => {
              this.series = response.data.entries.sort(
                (a, b) => b.releaseYear - a.releaseYear
              );
              console.log(this.series);
              this.$emit("seriess", this.series);
            })
            .catch((err) => {
              console.log(err);
            });        
          break;
        case "2":
         console.log(this.series)
          axios
            .get("/db_movies.json")
            .then((response) => {
              this.series = response.data.entries.sort(
                (a, b) => a.releaseYear - b.releaseYear
              );
               this.$emit("seriess", this.series);
              console.log(this.series);
              //this.$emit("seriess", this.series);
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        case "3":
          alert("Puan verisi json verisinde yok");
          break;
        case "4":
          axios
            .get("/db_movies.json")
            .then((response) => {
              this.series = response.data.entries;
              for (var i = this.series.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.series[i];
                this.series[i] = this.series[j];
                this.series[j] = temp;
              }
              console.log(this.series);
               this.$emit("seriess", this.series);
              
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        default:
          break;
           
      }
      this.$emit("seriess", this.series);
      
    },
  },
};
</script>