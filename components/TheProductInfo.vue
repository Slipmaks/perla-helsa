<template>
  <div class="product-header d-flex align-items-center justify-center">
    <h1 style="font-weight: 700">
      Омега-3
      <i style="font-weight: 400; font-family: 'Piazzolla' serif">Тріска</i>
    </h1>
    <span class="badge rounded-pill bg-light text-dark px-5 py-2 ms-4"
      >з вітамінами А і D3</span
    >
  </div>

  <div class="product-overview">
    <ul
      class="nav nav-pills mb-3 product__tab-buttons d-flex justify-content-between"
      id="pills-tab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <span
          class="product__tab-button active"
          id="pills-description-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-description"
          type="button"
          role="tab"
          aria-controls="pills-description"
          aria-selected="true"
        >
          ОПИС
        </span>
      </li>
      <li class="nav-item" role="presentation">
        <span
          class="product__tab-button"
          id="pills-benefit-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-benefit"
          type="button"
          role="tab"
          aria-controls="pills-benefit"
          aria-selected="false"
        >
          КОРИСТЬ
        </span>
      </li>
      <li class="nav-item" role="presentation">
        <span
          class="product__tab-button"
          id="pills-ingredients-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-ingredients"
          type="button"
          role="tab"
          aria-controls="pills-ingredients"
          aria-selected="false"
        >
          ІНГРЕДІЄНТИ
        </span>
      </li>
      <li class="nav-item" role="presentation">
        <span
          class="product__tab-button"
          id="pills-usage-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-usage"
          type="button"
          role="tab"
          aria-controls="pills-usage"
          aria-selected="false"
        >
          СПОСІБ ЗАСТОСУВАННЯ
        </span>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-description"
        role="tabpanel"
        aria-labelledby="pills-description-tab"
      >
        Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я
        твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.
      </div>

      <div
        class="tab-pane fade"
        id="pills-benefit"
        role="tabpanel"
        aria-labelledby="pills-benefit-tab"
      >
        <ul>
          <li>
            Покращують стан шкіри: борються з акне та сприяють її регенерації
          </li>
          <li>Зменшують випадіння волосся, стимулюють його ріст</li>
          <li>Підіймають настрій та полегшують симптоми депресії</li>
          <li>Зміцнюють імунітет: зменшують запальні процеси</li>
          <li>Поліпшують роботу гормонів, серця і ЦНС</li>
          <li>Зменшують болі в суглобах</li>
          <li>Покращують метаболізм і роботу ШКТ</li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="pills-ingredients"
        role="tabpanel"
        aria-labelledby="pills-ingredients-tab"
      >
        <tbody>
          <tr>
            <td>
              <p style="text-align: left"><strong>Склад:</strong></p>
            </td>
            <td>
              <p style="text-align: left">
                100% риб'ячий жир з печінки тріски, желатин, гліцерин.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p style="text-align: left">
                <strong><strong>EPA / DHA</strong></strong>
              </p>
            </td>
            <td>
              <p style="text-align: left">170 мг / 205 мг</p>
            </td>
          </tr>
          <tr>
            <td>
              <p style="text-align: left"><strong>Вітамін-А</strong></p>
            </td>
            <td>
              <p style="text-align: left">656 мкг 2187&nbsp;МО</p>
            </td>
          </tr>
          <tr>
            <td>
              <p style="text-align: left"><strong>Вітамін-D3</strong></p>
            </td>
            <td>
              <p style="text-align: left">5.2 мкг 210&nbsp;МО</p>
            </td>
          </tr>
        </tbody>
      </div>

      <div
        class="tab-pane fade"
        id="pills-usage"
        role="tabpanel"
        aria-labelledby="pills-usage-tab"
      >
        <p>
          Для профілактики, дорослим і дітям від 11 років –&nbsp;<em
            ><strong>4 капсули на день</strong></em
          >, разом із їжею або одразу після.&nbsp;Бажано з іншими жирами
          <em>для кращого засвоєння</em>.
        </p>
        <p>
          <strong>Курс прийому:</strong>&nbsp;2-3 місяці, після чого зробити
          перерву 1-2 місяці або перейти на Омега-3 із Тунця.
        </p>
      </div>
    </div>
    <div class="product__to-cart d-flex flex-column">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <div
          class="product__to-cart-in-package d-flex align-items-center gap-5"
        >
          <img src="~/assets/foil 1.svg" alt="" />
          <div>
            <h2>В упаковці:</h2>
            <p>120 капсул по 500мг</p>
            <p>1 місяць прийому</p>
          </div>
        </div>
        <div class="product__to-cart-price d-flex gap-4 align-items-center">
          <h2>963 ₴</h2>
          <h2>{{ currentPrice }} ₴</h2>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <div class="product__to-cart-count d-flex align-items-center">
          <button @click="decreaseCount" :disabled="count == 1">-</button>
          <input type="text" v-model="count" />
          <button @click="increaseCount">+</button>
        </div>
        <div class="product__to-cart-add">
          <button>До кошика</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const count = ref(1);
const currentPrice = computed(() => {
  return count.value * 489;
});
const increaseCount = () => {
  count.value = count.value + 1;
};
const decreaseCount = () => {
  count.value = count.value - 1;
};
</script>
<style scoped lang="scss">
@import "~/assets/css/variables.scss";
.product {
  &-header {
    color: $main-blue;
  }
  &__tab {
    &-buttons {
      border-bottom: 1px solid $light-blue;
    }
    &-button {
      font-size: 17px;
      color: $light-blue;
      transition: color 0.6s;
      &:hover {
        border-top: 1px solid $light-blue;
        color: $main-blue;
      }
      &.active {
        color: $main-blue;
        border-top: 1px solid $light-blue;
      }
    }
  }
  &-overview {
    margin-top: 32px;
    color: $main-blue;
  }
  &__to-cart {
    margin-top: 56px;
    &-in-package {
      & img {
        width: 40px;
        height: 40px;
      }
      font-size: 18px;
      line-height: 23px;
      & div p,
      h2 {
        margin: 0;
      }
      & div p:last-child {
        color: $light-blue;
      }
    }
    &-add {
      & button {
        border: none;
        outline: none;
        background: rgba(105, 197, 34, 1);
        color: #ffffff;
        border-radius: 40px;
      }
    }
    &-count {
      & button {
        border: none;
        outline: none;
        background: none;
        font-size: 40px;
        line-height: 7px;
        color: $light-blue;
        &:hover {
          color: $main-blue;
        }
      }
      & input {
        text-align: center;
        width: 46px;
        height: 46px;
        border: none;
        outline: none;
        border-radius: 7px;
      }
    }
    &-price {
      & h2 {
        &:first-child {
          position: relative;
          color: $light-blue;
          font-weight: 900;
          font-size: 28px;
          line-height: 36px;
          &:before {
            border-bottom: 3px solid $main-blue;
            position: absolute;
            content: "";
            width: 100%;
            height: 50%;
            transform: rotate(15deg);
          }
        }
        &:last-child {
          font-weight: 700;
          font-size: 40px;
          line-height: 51px;
        }
      }
    }
  }
}
.tab-pane {
  & td {
    width: 50%;
  }
}
</style>
