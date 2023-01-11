<template>
  <div class="container">
    <div class="product">
      <div class="product-info">
        <TheProductInfo />
      </div>
      <div class="product-slider">
        <TheSlider />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.product {
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: 24px;
  &-slider,
  &-info {
    width: 100%;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 1200px) {
  .product {
    flex-direction: row;
  }
}
</style>
