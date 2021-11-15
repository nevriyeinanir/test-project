<template>
  <nav class="header"></nav>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#"><p class="h3">BulutMD</p></a>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto"></ul>
        <form class="d-flex">
          <button class="btn btn-link">Giriş</button>
          <button class="btn btn-danger">Deneme Başlat</button>
        </form>
      </div>
    </div>
  </nav>
  <nav
    class="navbar navbar-expand-sm bg-secondary navbar-dark"
    style="background-color: grey"
  >
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#"
            ><p class="h5">Popüler Başlıklar</p></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
</script>
<style scoped>

.bg-secondary {
  background-color: rgb(99, 96, 96) !important;
}
.btn-link {
  font-weight: 400;
  color: white;
  text-decoration: none;
}
</style>
