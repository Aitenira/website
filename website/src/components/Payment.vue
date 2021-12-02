<template>
<div class="payment">
     <div class="payment__methods">
<h1 class="payment__tittle">Способы оплаты</h1>
       <p class="payment__description" >Закуп товара производится по предоплате в размере 80% от планируемой суммы закупа.  Предоплата является гарантией того, что товар будет оплачен полностью. В случае отказа от заказа на любом этапе, предоплата не возвращается!<br>
         Перевод можно осуществить на карту Сбербанк, Тинькофф или через платежную систему Paysend по курсу на момент оплаты. <br>

       </p>
       <h1 class="payment__text">Если будут интересующие Вас вопросы, Мы всегда на связи.
       </h1>
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
            <router-link  class="footer__menu-link" to="/payment">Способы  оплаты</router-link>

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
  name: "Payment"
}
</script>

<style scoped>

</style>
