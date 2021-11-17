<template>
 <div style= "display:inline-grid" class="portfolioimages"  white-space="nowrap" float="left">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Movies",
  props:["key"],
};
</script>
