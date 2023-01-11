<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="~/assets/1_cod.png" class="d-block" alt="" />
      </div>
      <div class="carousel-item">
        <img src="~/assets/2_cod.png" class="d-block" alt="" />
      </div>
      <div class="carousel-item">
        <img src="~/assets/3_cod.png" class="d-block" alt="" />
      </div>
      <div class="carousel-item">
        <img src="~/assets/4_cod.png" class="d-block" alt="" />
      </div>
      <div class="carousel-item">
        <img src="~/assets/5_cod.png" class="d-block" alt="" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true">
        <svg
          class="d-none d-xl-block"
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.18546 0.240635C7.48517 -0.0802098 7.98399 -0.0802097 8.29419 0.240635C8.5939 0.550629 8.5939 1.06657 8.29419 1.37585L2.67228 7.19069L21.2238 7.19069C21.6563 7.19142 22 7.54691 22 7.99425C22 8.44149 21.6563 8.80857 21.2238 8.80857L2.67228 8.80856L8.29419 14.6126C8.5939 14.9335 8.5939 15.4501 8.29419 15.7594C7.98399 16.0802 7.48447 16.0802 7.18546 15.7594L0.232644 8.56798C-0.0775499 8.258 -0.0775499 7.74198 0.232644 7.43272L7.18546 0.240635Z"
            fill=""
            fill-opacity=""
          />
        </svg>
      </span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true">
        <svg
          class="d-none d-xl-block"
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8145 15.7594C14.5148 16.0802 14.016 16.0802 13.7058 15.7594C13.4061 15.4494 13.4061 14.9334 13.7058 14.6242L19.3277 8.80931L0.7762 8.80931C0.3437 8.80858 6.59772e-07 8.45309 6.98879e-07 8.00575C7.37978e-07 7.55851 0.3437 7.19143 0.7762 7.19143L19.3277 7.19144L13.7058 1.38738C13.4061 1.06653 13.4061 0.549893 13.7058 0.240633C14.016 -0.0802113 14.5155 -0.0802113 14.8145 0.240633L21.7674 7.43202C22.0775 7.742 22.0775 8.25802 21.7674 8.56728L14.8145 15.7594Z"
            fill=""
          />
        </svg>
      </span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script setup>
import * as Bootstrap from "bootstrap";

onMounted(() => {
  let myCarousel = document.querySelector("#carouselExampleControls");
  new Bootstrap.Carousel(myCarousel);
});
</script>
<style scoped lang="scss">
.carousel {
  &-item {
    & img {
      width: 285px;
      margin: auto;
      height: 174px;
    }
  }
  &-control {
    &-next {
      width: auto;
      right: 0%;
    }
    &-prev {
      width: auto;
      left: 0%;
    }
  }
}
@media (min-width: 768px) {
  .carousel {
    &-item {
      & img {
        width: 400px;

        height: 236px;
      }
    }
    &-control {
      &-next {
      }
      &-prev {
      }
    }
  }
}
@media (min-width: 1200px) {
  .carousel {
    &-item {
      & img {
        width: 500px;

        height: 450px;
      }
    }
    &-control {
      &-prev {
        width: 69px;
        height: 56px;
        right: 70px;
        left: inherit;
        top: inherit;
        bottom: 0;
        margin: -30px;
        transform: none;
        fill: #00284f80;
        &:hover {
          fill: #69c522;
        }
        &-icon {
          width: 22px;
          height: 16px;
        }
      }
      &-next {
        width: 69px;
        height: 56px;
        right: 0px;
        transform: none;
        top: inherit;
        bottom: 0;
        margin: -30px;
        fill: #00284f80;
        &:hover {
          fill: #69c522;
        }
        &-icon {
          width: 22px;
          height: 16px;
        }
      }
    }
  }
}
</style>
