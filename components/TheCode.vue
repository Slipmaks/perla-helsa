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
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  & h2 {
    margin-bottom: 0px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
  & img {
    max-width: 22px;
    margin: 0 13px;
  }
  @media (min-width: 1200px) {
    & h2 {
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
