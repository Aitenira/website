<template>
<div>
  <div class="header">
    <div class="header__search">
      <img class="header__search_img" src="../assets/search.png" alt="">
      <div class="header__input">
        <div class="q-pa-md" style="max-width: 300px">
          <q-input
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
  <div class="q-pa-md">
    <div class="q-gutter-md">

      <q-btn class="btn-color" label="Каталог">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Серьги</q-item-section>
              <q-item-section>Каффы</q-item-section>
              <q-item-section>Серьги-кольца</q-item-section>
              <q-item-section>Клипсы</q-item-section>
              <q-item-section style="margin-right:19px">Серьги с кристаллами</q-item-section>
              <q-item-section>Яркие серьги</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Кольца</q-item-section>
              <q-item-section style="margin-right:57px">Кольца печатки</q-item-section>
              <q-item-section>Наборы колец</q-item-section>

            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Колье</q-item-section>
              <q-item-section>Колье-цепи</q-item-section>
              <q-item-section>Чокеры</q-item-section>
              <q-item-section>Кулоны и медальоны</q-item-section>


            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Браслеты</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Серебро</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Papermoon</q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-menu>
      </q-btn>
    </div>

  </div>
  <div>
    <ul class="header__menu-section-list">
      <li class="header__menu-item">
        <a class="header-menu__link" href="">Новинки</a>
      </li>
      <li class="header__menu-item">
        <a class="header-menu__link" href="">Золото и серебро</a>
      </li>
      <li class="header__menu-item">
        <a  class="header-menu__link" href="">Условия сотрудничества</a>
      </li>
      <li class="header__menu-item">
        <a  class="header-menu__link" href="">Доставка</a>
      </li>
    </ul>
  </div>

  <div class="main">
    <div class="main__photo" >
      <h1 class="main__tittle">Вдохновение за мгновение</h1>
      <img class="main__photo-sub" src="https://lavzjewellery.ru/upload/iblock/00a/4gjjo73f8r0x57sr6q92nb13275b1z1z/1-GIF.gif
" alt="">
    </div>
    <div class="main__image-list">
      <p class="main__tittle-list">Короли акцентов</p>
      <img class="main__image-sub" src="../assets/main.jpeg" alt="">
      <p class="main__tittle_list2">Кольца</p>
      <img src="../assets/bij3.jpeg" alt="">
      <p class="main__tittle_list3">Тренды сезона</p>
      <img src="../assets/bij6.jpeg" alt="">
    </div>
  </div>

  <div class="products">
    <div class="products__list">
      <p class="products__list-tittle">Best Sellers</p>
    </div>
<div class="products__list-images">
  <div class="products__list-block">
    <p class="products__list-block-tittle">Подвеска Мишки гамми с фианитами</p>
    <p class="products__list-price">5000₩/5$</p>

  </div>
<div class="">
  <img class="products__list-img1" src="../assets/bearsbij.jpeg" alt="">
  <p class="products__list-descr">Серьги,которые украсят любой образ</p>
  <p class="products__list-subtittle">3500₩</p>
</div>
  <div>
    <img  class="products__list-img2" src="../assets/ear2.jpeg" alt="">
    <p></p>
    <p></p>
  </div>
   <div>
     <img class="products__list-img2" src="../assets/pendats.jpeg" alt="">
     <p></p>
     <p></p>
   </div>
  <div>
    <img  class="products__list-img3" src="../assets/pendast2.jpeg" alt="">
    <p></p>
    <p></p>
  </div>
  <div>
    <img class="products__list-img4" src="../assets/rings3.jpeg" alt="">
    <p></p>
    <p></p>

  </div>

</div>
  </div>


  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="../assets/pendast2.jpeg" />
          <q-img class="rounded-borders col-6 full-height" src="../assets/pendats.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="footer">
<div class="footer__container">
<div class="footer__menu">
<ul class="footer__menu-list">
  <li class="footer__menu-item">
    <a class="footer__menu-link" href="">Доставка и оплата</a>
  </li>
  <li>
    <a class="footer__menu-link" href="">О нас</a>
  </li>
  <li class="footer__menu-item">
    <a class="footer__menu-link" href="">Частые вопросы</a>
  </li>
</ul>

</div>
</div>

  </div>
</div>

</template>

<script>
import {defineComponent} from 'vue'

export default ({
  name: "Header",
  // setup () {
  //   return {
  //     slide: ref(1)
  //   }
  // }
})

</script>

<style scoped>

</style>
