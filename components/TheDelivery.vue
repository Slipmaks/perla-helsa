<template>
  <div class="container">
    <div class="delivery-main">
      <div class="delivery-main__content">
        <img src="~/assets/free delivery.svg" alt="" />
        <p>
          Безкоштовна доставка <br />
          від 1800 грн
        </p>
      </div>
      <div class="delivery-main__content">
        <img src="~/assets/delivery 16.svg" alt="" />
        <p>
          Відправки в день оформлення <br />
          замовлення до 16:00
        </p>
      </div>
      <div class="delivery-main__content">
        <img src="~/assets/cash return.svg" alt="" />
        <p>
          Гарантія повернення <br />
          грошових коштів
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.delivery-main {
  margin-bottom: 110px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 26px;
  justify-content: space-between;
  margin-top: 32px;
  padding: 33px 33px;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.81) 0%,
    rgba(255, 255, 255, 0.54) 100%
  );
  border-radius: 15px;
  & p {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }
  &__content {
    display: flex;
    flex-direction: row;
    gap: 54px;
    & img {
      width: 54px;
      height: 54px;
    }
  }
}
@media (min-width: 768px) {
  .delivery-main {
    margin-bottom: 150px;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    &__content {
      flex-direction: column;
      gap: 24px;
    }
  }
}
@media (min-width: 1200px) {
  .delivery-main {
    margin-bottom: 200px;
    justify-content: space-between;
    &__content {
      flex-direction: row;
      gap: 24px;
    }
  }
}
</style>
