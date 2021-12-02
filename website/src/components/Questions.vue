<template>
  <div class="reviews">
    <div class="reviews__block">
      <h1 class="reviews__tittle">Вопросы и ответы</h1>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-pa-md__tittle" label="-Какое минимальное количество на изделие ?">
        <q-menu persistent auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section class="section__description">Минимальное количество в среднем от 3 единиц. Зависит от магазина и производителей. </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn  class="q-pa-md__tittle" label="-Задерживаются сроки доставки товара?">
        <q-menu persistent auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section class="section__description" >В предпраздничные дни в виду высокого загруженности логистических компаний возможна задержка с доставкой товаров.  </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-pa-md__tittle" label="-Где я могу посмотреть весь ассортимент? ">
        <q-menu persistent auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section class="section__description" >Полный ассортимент вы можете посмотреть на сайте, на Яндекс диске, а также все новинки напрямую из оптовых рынков выкладываем в наш телеграмм-канал.</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-pa-md__tittle" label="-Занимаетесь ли вы закупом фурнитуры для бижутерии? ">
        <q-menu persistent auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section class="section__description" >Нет, к сожалению, фурнитуру для бижутерии не закупаем. </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-pa-md__tittle" label="-Возможно ли закупка по видеосвязи?">
        <q-menu persistent auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section v >Все детали онлайн сопровождения по оптового рынку обговариваются персонально.</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-pa-md__tittle" label="-Не темнеет ли бижутерия?">
        <q-menu persistent auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section class="section__description" >Любая бижутерия,даже самая дорогая, может потемнеть, если держать ее на прямом солнечном свете, купаться в украшениях, подвергать контакту с активными веществами (духами, средствами по уходу).</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-pa-md__tittle" label="-Что рекомендовать Клиентам по уходу за бижутерией?">
        <q-menu persistent auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section class="section__description" >При соблюдении этих правил покрытие сохранится, а украшения долго будут радовать Клиентов.
                Избегайте контакта с водой, духами, средствами по уходу, прямыми солнечными лучами. С бижутерией не стоит плавать, принимать душ, мыть посуду и т.д.
               При необходимости можно почистить изделие в ювелирном магазине.</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
<p class="reviews__link">
  Если не нашли ответ на свой вопрос,можете задать его по указанным
  <router-link style="color: darkred;" to="/connectionwithus">контактам</router-link>
</p>
  </div>
</template>

<script>

export default {
  name: "Questions",

  }

</script>

<style scoped>
.reviews{
  display: flex;
  flex-direction: column;

}
.reviews__tittle{
  margin-left: 25px;
  font-size: 60px;
  font-family: 'Source Sans Pro',sans-serif;
}
.q-pa-md__tittle{
  font-size: 17px;
  color: #3a3a3a;
  text-transform: none;
}
.section__description{
  color: #332525;
  text-transform: none;
  font-family: 'Open Sans', sans-serif;
}
.reviews__link{
  margin-left: 12px;
  font-size: 21px;
  font-family: 'Source Sans Pro',sans-serif;
}
</style>
