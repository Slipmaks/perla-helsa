<template>
  <div class="container">
    <div class="navbar">
      <div class="container-fluid navbar-logo">
        <div class="navbar-logo-icons">
          <!-- <font-awesome-icon icon="fa-solid fa-bars " />
          <font-awesome-icon icon="fa-solid fa-magnifying-glass " /> -->
          <img src="~/assets/burger-desk.svg" alt="" />
          <img src="~/assets/search.svg" alt="" />
        </div>
        <img class="navbar-brand" src="~/assets/Logo.svg" />
        <div class="navbar-logo-icons">
          <img src="~/assets/phone.svg" alt="" />
          <img src="~/assets/cart.svg" alt="" />
          <!-- <font-awesome-icon icon="fa-solid fa-phone" />
          <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
        </div>
      </div>
      <nav class="container-fluid d-none d-xl-block">
        <!-- <div class="collapse navbar-collapse"> -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="#">Омега-3</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="#">Вітаміни</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="#">Добавки</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="#">Доставка</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="#">Про нас</NuxtLink>
          </li>
        </ul>
        <!-- </div> -->
      </nav>
    </div>
  </div>
</template>
<style lang="scss">
nav {
  max-width: 636px;
}
.navbar {
  padding-top: 30px;
  padding-bottom: 45px;
  &-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &-logo {
    margin-bottom: 46px;
    &-icons {
      display: flex;
      gap: 1rem;
      & svg {
        cursor: pointer;
      }
    }
  }
}
.nav {
  &-item {
    font-weight: 400;
    font-style: normal;
    font-size: 23px;
  }
  &-link {
    color: #000000;
  }
}
.svg-inline--fa {
  width: 24px;
  height: 24px;
}
</style>
<script setup></script>
