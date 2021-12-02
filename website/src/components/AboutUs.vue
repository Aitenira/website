<template>
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
  <div class="aboutus">
<div class="aboutus__main">
<div class="aboutus__main-column">
  <img  class="aboutus__main-column-img" src="../assets/imageofowner.jpeg" alt="">

  <div class="aboutus__meeting">

    <p class="aboutus__meeting-tittle">Привет! Меня зовут Тана.<br>
      Добро пожаловать в Korea Bijou!</p>
<!--    <h1 class="aboutus__meeting-tittle">Добро пожаловать в Korea Bijou!</h1>-->
  </div>


</div>
  <div class="aboutus__main-column2">
    <p class=" aboutus__main-column2-description" >Живу в Сеуле уже больше года, изучаю язык, культуру и путешествую по стране.<br>
   <br>   Я всегда любила украшения и одежду,и мое пристрастие  не отнять, тем более после переезда в Сеул, ведь этот город рай для шоппинга. <br>

      <br>Мне очень важна моя репутация и я стремлюсь создать максимально комфортные  условия сотрудничества,  поэтому  после первой закупки, клиенты сразу просят оформить следующий заказ. <br>

      <br>Я люблю работать оперативно, закуп происходит каждый день, как только заказ будет сформирован и проверен на брак, на следующий день происходит отправка.<br>

    </p>
    <img src="../assets/imageofowner2.jpeg" alt="">
  </div>
  <div class="aboutus__main-column3">
    <img src="../assets/imageofowner3.jpeg" alt="">
    <p class="aboutus__main-column2-description">
      Иногда люди боятся заказывать онлайн,склоняясь на то,что может не понравится товар,если увидеть его вживую,<br>

      со мной этот "стереотип" ломает все рамки и люди смело доверяют мне.<br>

      Я работаю в сфере шоппинга больше года. Каждый день я в поисках новых образов для моих любимых клиентов. Еще в мои школьные годы,

      я увлекалась индустрией моды. <br>

      Я всегда с удовольствием помогу вам с выбором и буду рада вам помочь. <br>
      <router-link class="aboutus__reviews" to="/reviews">Здесь вы можете увидеть отзывы моих клиентов.</router-link>

    </p>
  </div>
  <div>

<!--    <img src="../assets/aboutus-bijou.jpeg" alt="">-->
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
              <router-link  class="footer__menu-link" to="/questionandanswers">Частые вопросы и ответы</router-link>
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
export default {
  name: "AboutUs"
}
</script>

<style scoped>

</style>
