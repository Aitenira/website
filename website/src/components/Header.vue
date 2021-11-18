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
      <img class="" src="../assets/main.jpeg" alt="">
  <div>
    <p class="main__tittle_list2">Кольца</p>
    <img  class="main__tittle-list-img" src="../assets/bij3.jpeg" alt="">
  </div>
      <div>
        <p class="main__tittle_list3">Тренды сезона</p>
        <img class="main__tittle-list-img" src="../assets/bij6.jpeg" alt="">
      </div>
    </div>


    <div class="main__image-list2">
<!--      <p class="main-imgs-tittle">Каждый день счастливые обладательницы находят в себе женственность,силу ,харизму в-->
<!--        <a href="">PaperMoon</a> </p>-->
      <a  class="main-imgs-tittle" href="">PaperMoon</a>

      <div class="main__column-img1">
<!--        <p class="main-imgs-tittle">Каждый день счастливые обладательницы находят в себя женственность,силу ,харизму в-->
<!--          <a href="">PaperMoon</a> </p>-->
        <img class="main-imgs1" src="../assets/lookbook3.jpeg" alt="">
      </div>
      <div>
        <img  class="main-imgs" src="../assets/lookbook2.jpeg" alt="">
      </div>
      <div>
        <img   class="main-imgs" src="../assets/lookbook1.jpeg" alt="">

      </div>
    </div>

  </div>

<!--  <div class="products">-->
<!--    <div class="products__list">-->
<!--      <p class="products__list-tittle">Best Sellers</p>-->
<!--    </div>-->
<!--<div class="products__list-images">-->
<!--  <img class="products__list-img1" src="../assets/bearsbij.jpeg" alt="">-->

<!--  <div class="products__list-block">-->
<!--    <p class="products__list-block-tittle">Подвеска Мишки гамми с фианитами</p>-->
<!--    <p class="products__list-price">5000₩/5$</p>-->

<!--  </div>-->

<!--<div class="">-->
<!--  <img  class="products__list-img2" src="../assets/ear2.jpeg" alt="">-->
<!--  <p class="products__list-descr">Серьги,которые украсят любой образ</p>-->
<!--  <p class="products__list-subtittle">3500₩</p>-->
<!--</div>-->

<!--   <div>-->
<!--     <img class="products__list-img2" src="../assets/necklack.png" alt="">-->
<!--     <p>Браслетс цирконами, покрытие 24к</p>-->
<!--     <p> 35000₩/30$ </p>-->
<!--   </div>-->
<!--  <div>-->
<!--    <img  class="products__list-img3" src="../assets/suspension.png" alt="">-->
<!--    <p>Подвеска. Покрытие 14к</p>-->
<!--    <p>5000₩/4,23$</p>-->
<!--  </div>-->
<!--  <div>-->
<!--    <img class="products__list-img4" src="../assets/rings3.jpeg" alt="">-->
<!--    <p>Кольцо слева 11000₩/9.30$</p>-->
<!--    <p>Кольцо справа 5500₩/4.65$</p>-->

<!--  </div>-->

<!--</div>-->
<!--  </div>-->

  <div class="q-pa-md">


    <q-carousel
      v-model="slide"
      swipeable
      animated
      :control-type="controlType"
      control-color="black"
      navigation
      padding
      arrows
      height="300px"
      class="text-purple rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">

        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">

        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>



  <div class="footer">
<div class="footer__container">
<div class="footer__menu">
<!--  <div>-->
<!--    <h1>Информация</h1>-->

<!--  </div>-->

  <ul class="footer__menu-list">
    <h1 class="footer__menu-list-tittle">Информация</h1>

    <li class="footer__menu-item">
    <a class="footer__menu-link" href="">Доставка</a>
  </li>

    <li>
    <a class="footer__menu-link" href="">О нас</a>
  </li>
  <li class="footer__menu-item">
    <a class="footer__menu-link" href="">Частые вопросы</a>
  </li>

  </ul>


  <ul class="footer__menu-list2">

    <li class="footer__menu-item">
      <a class="footer__menu-link" href="">Условия сотрудничества</a>
    </li>

      <li class="footer__menu-item">
        <a class="footer__menu-link" href="">Способы хранения бижутерии</a>
      </li>

     <li class="footer__menu-item">
          <a class="footer__menu-link" href="">Как с нами связаться?</a>
        </li>
  </ul>
  <ul class="footer__menu-list2">

    <li class="footer__menu-item">
      <a class="footer__menu-link" href="">Как оформлять заказ</a>
    </li>

    <li class="footer__menu-item">
      <a class="footer__menu-link" href="">Отзывы</a>
    </li>

    <li class="footer__menu-item">
      <a class="footer__menu-link" href="">Оплата</a>

    </li>

  </ul>



</div>

</div>
    <div class="footer__social-links">
      <img class="footer__icons" src="../assets/visalogo.png" alt="">

      <img class="footer__icons" src="../assets/iconinst.png" alt="">
      <img class="footer__icons" src="../assets/iconwhatsapp.png" alt="">
      <img class="footer__icons" src="../assets/telegramicon.png" alt="">
    </div>

  </div>
</div>

</template>

<script>
import {defineComponent} from 'vue'
import { ref, watch } from 'vue'
export default ({
  name: "Header",

  setup () {
    return {


      slide: ref('style'),
      tittle: 'Серьги,которые украсят любой образ',
      description:'3500₩/3$',
      pic:'../assets/ear2.jpeg'
    }
  }
  // setup () {
  //   return {
  //     slide: ref(1)
  //   }
  // },
  // data(){
  //   return{
  //
  //   }
  // }
})

</script>

<style scoped>

</style>
