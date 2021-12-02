<template>
<div>
  <div class="header">
    <div>
      <img class="header__search_img" src="../assets/search.png" alt="">
    </div>
    <div class="header__search">
      <div class="header__input">

        <div class="q-pa-md" style="max-width: 200px">
          <q-input
            color="black"
            filled
            v-model="model"
            label="Поиск по каталогу"
            bottom-slots
            hint=""
          />
        </div>
      </div>
    </div>
    <div class="header__name">
      <span class="header__tittle">Korea Bijou</span>
    </div>
    <div class="header__icons">
      <img v-on:click="changeComponent" class="header__icons1" src="../assets/person.png" alt="">
      <img  class="header__icons2" src="../assets/bag2.png" alt="">
      <h1 class="header__lang">RU|EN</h1>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Bracelet"
}
</script>

<style scoped>

</style>
