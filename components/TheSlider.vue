<template>
  <h1>slide</h1>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="~/assets/1_cod.png" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item">
        <img src="~/assets/2_cod.png" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item">
        <img src="~/assets/3_cod.png" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item">
        <img src="~/assets/4_cod.png" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item">
        <img src="~/assets/5_cod.png" class="d-block w-100" alt="" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script setup>
// import * as Bootstrap from "bootstrap";
// console.log($bootstrap);
// onMounted(() => {
//   let myCarousel = document.querySelector("#carouselExampleControls");
//   new Bootstrap.Carousel(myCarousel);
// });
</script>
