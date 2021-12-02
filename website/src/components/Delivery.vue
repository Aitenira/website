<template>
<div class="delivery">
<div class="delivery__methods">
  <div>
    <h1 class="delivery__tittle"> Доставка <br>  </h1>

    <p class="delivery__subtittle">Доставка осуществляется авиапутем.<br></p>
  </div>


  <div class="delivery__list">
    <p class="delivery__subscription"> Доставка в Россию только ЕМС: <br>
      Сроки доставки от 10-14 дней.<br>
      Доставка курьером до дома.<br>
      ‌‌Стоимость доставки зависит от общего веса коробки : чем больше вес, тем выгоднее цена за 1 кг <br>


    </p>
    <p class="delivery__subscription"> Доставка в Казастан карго и Емс <br>
      Тарифы на ЕМС практически такие как в Россию. <br>
      Карго: Минимальный вес посылки 5 кг. <br>
      Стоимость за 1 кг. 13$. <br>
      Сроки доставки 5-8 дней. <br>

    </p>
    <p class="delivery__subscription"> Доставка в Кыргызстан Карго:<br>
      Отправка каждую среду. <br>
      Стоимость за 1 кг-13$.<br>
      Минимальный вес посылки 1 кг.<br>
      Сроки доставки 7 дней. <br>

    </p>

  </div>


</div>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__menu">
    <div>
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

    </div>

<div>
  <ul class="footer__menu-list2">

    <li class="footer__menu-item">
      <router-link  class="footer__menu-link" to="/termsofcooperation">Условия сотрудничества</router-link>
    </li>

    <li class="footer__menu-item">
      <router-link  class="footer__menu-link" to="/payment">Способы  оплаты</router-link>

    </li>

    <li class="footer__menu-item">
      <router-link  class="footer__menu-link" to="/connectionwithus">Как с нами связаться?</router-link>
    </li>
  </ul>

</div>

<div>
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



    <div class="footer__social-links">
      <img class="footer__icons" src="../assets/visalogo.png" alt="">

      <img class="footer__icons" src="../assets/iconinst.png" alt="">
      <img class="footer__icons" src="../assets/iconwhatsapp.png" alt="">
      <img class="footer__icons" src="../assets/telegramicon.png" alt="">
    </div>

  </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Delivery"
}
</script>

<style scoped>

</style>
