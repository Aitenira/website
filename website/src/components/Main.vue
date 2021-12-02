<template>
<div>
  <div class="header">
    <div class="header__search">
      <div style="display: flex">
        <img class="header__search_img" src="../assets/search.png" alt="">
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
<!--      <img v-on:click="changeComponent" class="header__icons1" src="../assets/person.png" alt="">-->
      <img @click="$event"  class="header__icons2" src="../assets/bag2.png" alt="">
      <h1 class="header__lang">RU|EN</h1>

    </div>
  </div>



  <div>
   <div class="header__menu-section-list">
     <div class="q-pa-md">
       <div class="q-gutter-md">

         <q-btn color="black" label="Каталог">
           <q-menu>
             <q-list style="min-width: 100px">
               <q-item clickable v-close-popup>
                 <router-link class="catalog-links" to="/earrings">Серьги</router-link>
               </q-item>
               <q-item clickable v-close-popup>
                 <router-link  class="catalog-links" to="/necklace">Украшения на шею</router-link>

               </q-item>
               <q-separator />
               <q-item clickable v-close-popup>
                 <router-link  class="catalog-links" to="/rings">Кольца</router-link>

               </q-item>
               <q-item clickable v-close-popup>
                 <router-link  class="catalog-links" to="/bracelet">Браслеты</router-link>
               </q-item>
               <q-item clickable v-close-popup>
                 <router-link  class="catalog-links" to="/silver">Серебро</router-link>

               </q-item>
               <q-separator />

               <q-item clickable v-close-popup>
                 <router-link class="catalog-links"  to="/clothes">PaperMoon</router-link>

               </q-item>
             </q-list>
           </q-menu>
         </q-btn>
       </div>
     </div>

     <div class="header__menu-item">
       <router-link  class="header-menu__link" to="/silver">Cеребро</router-link>
     </div>
     <div class="header__menu-item">
       <router-link  class="header-menu__link" to="/termsofcooperation">Условия сотрудничества</router-link>
     </div>
     <div class="header__menu-item">
       <router-link  class="header-menu__link" to="/delivery">Доставка</router-link>
     </div>

   </div>
  </div>

  <div class="main">
    <div class="main__photo" >
      <h1 class="main__tittle">Вдохновение за мгновение</h1>
      <img class="main__photo-sub" src="https://lavzjewellery.ru/upload/iblock/76e/k57hdshjwkyavihxlnzbs6fh7h3tgw8i/1.jpg" alt="">
    </div>
    <div class="main__images">
      <div class="main__image-list">
        <router-link  class="main__tittle-list" to="/rings">Серьги</router-link>
          <img  class="main__list-imgs" src="../assets/ear2.jpeg" alt="">

      </div>

      <div class="main__image-list">
        <router-link  class="main__tittle-list2" to="/necklace">Кулоны и медальоны</router-link>
          <img  class="main__list-imgs" src="../assets/necklack.png" alt="">
      </div>
      <div class="main__image-list">
        <router-link  class="main__tittle-list3" to="/rings">Кольца</router-link>
          <img  class="main__list-imgs" src="../assets/rings.jpeg" alt="">
      </div>

    </div>

    <div class="main__image-list2">

      <router-link to="/clothes" class="main__imgs-tittle">PaperMoon</router-link>
      <div class="main__column-img1">

        <img class="main-imgs1" src="../assets/papermoon4.jpeg" alt="">
      </div>
      <div class="main__column-img1">
        <img  class="main-imgs1" src="../assets/papermoon5.jpeg" alt="">
      </div>
      <div class="main__column-img1">
        <img class="main-imgs1" src="../assets/lookbook2.jpeg" alt="">

      </div>
    </div>

  </div>

  <div class="instagram">

     <div class="instagram__block">
<div class="instagram__tittle">
  <div class="instagram__image">
    <img src="../assets/iconinst.png" alt="">

  </div>
  <p class="instagram__tittle-name">@korea__bijou</p>
</div>
     </div>

    <div class="instagram__block2">
      <div class="instagram__list1">
        <img class="instagram__icons" src="../assets/iconinst.png" alt="">
        <img class="instagram__list-imgs" src ="../assets/bracelets-ins.jpeg" alt="">
      </div>
      <div class="instagram__list1">
        <img  class="instagram__icons" src="../assets/iconinst.png" alt="">

        <img class="instagram__list-imgs" src ="../assets/rings2-inst.jpeg" alt="">
      </div>
      <div class="instagram__list1">
        <img  class="instagram__icons" src="../assets/iconinst.png" alt="">

        <img class="instagram__list-imgs" src ="../assets/necklace-inst.jpeg" alt="">
      </div>
      <div class="instagram__list1">
        <img  class="instagram__icons" src="../assets/iconinst.png" alt="">

        <img class="instagram__list-imgs"  src ="../assets/rings-inst.jpeg" alt="">
      </div>
    </div>

<div class="instagram__btn">
  <button>
    Shop the look
  </button>
</div>

  </div>


<div class="featurerow">
<div class="featurerow__list">
  <img src="../assets/aboutus_featurerow.jpeg" alt="">
</div>
  <div class="featurerow__block">
<router-link to="/aboutus" class="featurerow__block-title" >
  About Korea Bijou
</router-link>
    <div>
      <p class="featurerow__block-description">
        Korea Bijou-интернет магазин,лежащий на основе изысканности,минимализма. <br>
        Мы предлагаем нашим клиентам высококачественную одежду и бижутерию,идеально
        подходящие к повседневным и вечерним образам. <br>
        <router-link class="featurerow__block-description-link" to="/aboutus">Подробнее про интернет-магазин и основателя.</router-link>

      </p>
    </div>
  </div>
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
      <router-link  class="footer__menu-link" to="/delivery">Доставка</router-link>
  </li>

    <li>
      <router-link  class="footer__menu-link" to="/aboutus">О нас</router-link>
  </li>
  <li class="footer__menu-item">
    <router-link  class="footer__menu-link" to="/questionsandaswers">Частые вопросы и ответы</router-link>
  </li>

  </ul>


  <ul class="footer__menu-list2">

    <li class="footer__menu-item">
      <router-link  class="footer__menu-link" to="/termsofcooperation">Условия сотрудничества</router-link>
    </li>

      <li class="footer__menu-item">
        <router-link  class="footer__menu-link" to="/payment">Способы оплаты</router-link>

      </li>

     <li class="footer__menu-item">
       <router-link  class="footer__menu-link" to="/connectionwithus">Как с нами связаться?</router-link>
        </li>
  </ul>
  <ul class="footer__menu-list2">

    <li class="footer__menu-item">
      <router-link  class="footer__menu-link" to="/howtoorder">Как оформлять заказ</router-link>
    </li>

    <li class="footer__menu-item">
      <router-link  class="footer__menu-link" to="/reviews">Отзывы</router-link>
    </li>

<!--    <li class="footer__menu-item">-->
<!--      <a class="footer__menu-link" href="">Оплата</a>-->

<!--    </li>-->

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
import { ref } from 'vue'
export default ({
  name: "Main",
  created() {
    this.$store.dispatch("example/getProducts");
    console.log('this.$store.dispatch("example/getProducts")',this.$store.dispatch("example/getProducts"))

  },

  setup () {
    return {
      slide: ref(1)
    }
  }

})

</script>

<style scoped>
.text-h2{
text-shadow: 0 0 #9C27B0;
  color: #fefefe;
  font-size: 23px;
  font-family: 'Playfair Display, sans-serif';

}
.catalog-links{
  text-decoration: none;
      color: #000;
  transition: all .5s;
  border-bottom: 0.5px solid transparent;
}
.q-pa-md{
  margin-left: 10px;
}
</style>
