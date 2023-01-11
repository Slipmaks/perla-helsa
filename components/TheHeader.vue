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
          <span class="position-relative">
            <img src="~/assets/cart.svg" alt="" />
            <span
              v-if="store.cart"
              class="position-absolute top-0 start-100 translate-middle badge rounded-circle badge-cart"
              >{{ store.cart }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </span>
          <!-- <font-awesome-icon icon="fa-solid fa-phone" />
          <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
        </div>
      </div>
      <nav class="container-fluid d-none d-md-block">
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
<script setup>
import { mainStore } from "~/stores/main";
const store = mainStore();
</script>
<style lang="scss">
.badge-cart {
  color: #000;
  background-color: #f5f352;
}
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
      & img {
        cursor: pointer;
        width: 21px;
      }
      // & svg {
      //   cursor: pointer;
      // }
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
@media (min-width: 768px) {
  .navbar {
    &-nav {
    }
    &-logo {
      &-icons {
        & img {
          width: 25px;
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .navbar {
    &-nav {
    }
    &-logo {
      &-icons {
        & img {
          width: 26px;
        }
      }
    }
  }
}
</style>
<script setup></script>
