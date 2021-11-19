<template>
  <div class="col-6 col-md-4">
    <select  v-on:change="change($event)">
    <option>Sırala</option>
    <option value="1">Yeniye Göre Sırala</option>
    <option value="2">Eskiye Göre Sırala</option>
     <option value="3">Puana Göre Sırala</option>
    <option value="4">Rastgele Sırala</option>
  </select>
  <p>{{selected}}</p>
</div>

</template>
<script>
export default {
  name: "DropDown",
  data(){
  return{ 
     selected: null
  }
  },
   methods: {
     change(event)
     { this.selected = event.target.value 
      // this.$emit("seriess", this.selected);
    
       // const sortedActivities = activities.slice().sort((a, b) => b.date - a.date)
       }
  
  },
};
</script>