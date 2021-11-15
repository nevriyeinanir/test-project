<template>
 <a href="#" target="_blank">
          <img :src="this.moviesimg"  alt="Cinque Terre" class="fit-picture" >
        </a>
 
  <slot></slot>
</template>

<script>
export default {
  name: "MoviesImage",
  props:["moviesimg"],
};
</script>
