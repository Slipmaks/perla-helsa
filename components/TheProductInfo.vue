<template>
  <div class="product-header d-flex align-items-center justify-center">
    <h1 style="font-weight: 700">
      Омега-3
      <i style="font-weight: 400; font-family: ''Piazzolla' serif">Тріска</i>
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
  </div>
</template>
<style scoped lang="scss">
.product {
  &-header {
    color: #00284f;
  }
  &__tab {
    &-buttons {
      border-bottom: 1px solid rgba(0, 40, 79, 0.3);
    }
    &-button {
      font-size: 17px;

      &:hover {
        border-top: 1px solid rgba(0, 40, 79, 0.3);
      }
      &.active {
        border-top: 1px solid rgba(0, 40, 79, 0.3);
      }
    }
  }
  &-overview {
    margin-top: 32px;
    color: #00284f;
  }
}
.tab-pane {
  & td {
    width: 50%;
  }
}
</style>
