<template>
  <div class="container">
    <div class="delivery-main">
      <div class="d-flex gap-4">
        <img src="~/assets/free delivery.svg" alt="" />
        <p>
          Безкоштовна доставка <br />
          від 1800 грн
        </p>
      </div>
      <div class="d-flex gap-4">
        <img src="~/assets/delivery 16.svg" alt="" />
        <p>
          Відправки в день оформлення <br />
          замовлення до 16:00
        </p>
      </div>
      <div class="d-flex gap-4">
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
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 64px;
  padding: 20px 56px;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.81) 0%,
    rgba(255, 255, 255, 0.54) 100%
  );
  border-radius: 15px;
  & p {
    margin: 0;
  }
}
</style>
