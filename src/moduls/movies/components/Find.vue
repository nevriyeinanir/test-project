   <template>
  <div class="search-wrapper panel-heading col-sm-4">
    <input type="text" v-model="search" placeholder="Film/ Dizi/ Oyuncu Ara" />
    <button type="button" class="btn btn-light" @click="searchItems">
      Ara
    </button>
  </div>
</template>
  <script>
import axios from "axios";
export default {
  name: "Find",

  data() {
    return {
      search: "",
      series: [],
    };
  },
  methods: {
    //Tüm veri üzerinde 3 karakterden sonra adına göre arama işlemi yapılır
    searchItems() {
      console.log(this.search);
      const searchStr = this.search.toLowerCase();
      if (searchStr.length >= 3) {
        axios
          .get("/db_movies.json")
          .then((response) => {
            this.series = response.data.entries.filter(function (item) {
              return item.title.toLowerCase().includes(searchStr);
            });
           this.$emit("seriess", this.series);
            console.log(this.series);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.series = "";
      }
    },
  },
};
</script>