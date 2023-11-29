<script>
import AppCard from "./appCard.vue";

export default { components: { AppCard } };
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col">
          <AppCard />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  background-color: aqua;
  height: 60vh;
  width: 100%;
}
</style>
