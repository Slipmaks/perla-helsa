<template>
  <div class="code-background">
    <img src="~/assets/drugs.svg" alt="" />
    <h2>Безкоштовна досавка від 1800 грн</h2>
    <img src="~/assets/drugs.svg" alt="" />
  </div>
</template>
<style scoped lang="scss">
.code-background {
  background: rgba(153, 175, 255, 1);
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  & h2 {
    margin: 0;
    color: white;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
  & img {
    width: 14px;
    height: 14px;
    margin: 0 13px;
  }
}
@media (min-width: 768px) {
  .code-background {
    height: 30px;
    & h2 {
      font-size: 14px;
      line-height: 20px;
    }
    & img {
      width: 15px;
      height: 15px;
    }
  }
}
@media (min-width: 1200px) {
  .code-background {
    height: 44px;
    & h2 {
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
