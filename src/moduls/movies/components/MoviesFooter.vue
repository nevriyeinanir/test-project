<template>
 <div class="caption" >
  <figcaption v-if="moviesContent == 'series'" justification=centering><h4>Dizi</h4></figcaption>
  <figcaption v-if="moviesContent == 'movie'" justification=centering><h4>Film</h4></figcaption>
          </div>
</template>

<script>
export default {
  name: "MoviesFooter",
  props:["moviesContent"],
};
</script>
