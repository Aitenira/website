<template>
<div class="cooperation">
<div class="cooperation__terms">
<h1 class="cooperation__name">Условия сотрудничества</h1>
  <p class="cooperation__list">В перечень услуг входит:<br></p>
<p class="cooperation__list-details">
  •консультация <br>
  •поиска товара <br>
  •предоставление каталога <br>
  •выкуп товара <br>
  •упаковка и отправка товара <br>
</p>



<div class="cooperation__text">
  <p class="cooperation__price">
    Минимальная сумма закупа от 500$.<br>
    Комиссия за работу 10% от суммы закупа.<br>
    Минимальное количество единиц за 1 украшения 1-2 шт.<br>
  </p>

</div>

  <div class="cooperation__list2">
    <h1 class="cooperation__stages">Этапы сотрудничества</h1> <br>
<p class="cooperation__stages-description">
  • Знакомство, ознакомление  с каталогом и условиями. <br>
  • Выбор товара. <br>
  Вы выбираете понравившиеся модели и отправляете мне фото в мессенджеры, указывая количество единиц и цвет. <br>
  • Формирование заказа. <br>
  • Предоплата в размере 80% от планируемой суммы закупа. <br>
  • Процесс закупа. <br>
  • Время закупа обговаривается заранее, для того, чтобы вы были на связи. Во время закупа я отправляю дополнительно фотки/видео изделий вблизи. <br>
  • Сбор заказа 1-2 дня.  В случае отсутствия или задержки какого-либо товара, он меняется по согласованию с вами. <br>
  • Проверка товара на брак <br>
  • Подсчёт окончательной суммы ( учитывается комиссия за работу и доставка) <br>
  • Отправка товара в вашу страну. <br>
</p>
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
  name: "Termsofcoop"
}
</script>

<style scoped>

</style>
