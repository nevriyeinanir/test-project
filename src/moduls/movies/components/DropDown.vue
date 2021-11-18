<template>
   <div class="col-6 col-md-4">
        <select
          type="text"
          class="form-select"
          placeholder="Select a date"
          id="select-people"
          value=""
        >
          <option
            value="1"
            data-custom-properties='&lt;span class="avatar avatar-xs" style="background-image: url(./static/avatars/000m.jpg)"&gt;&lt;/span&gt;'
          >
            Paweł Kuna
          </option>
          <option
            value="2"
            data-custom-properties='&lt;span class="avatar avatar-xs"&gt;JL&lt;/span&gt;'
          >
            Jeffie Lewzey
          </option>
        </select>
             </div>
</template>
<script>
export default {
  name: "DropDown",
};
</script>