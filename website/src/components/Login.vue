<template>
<div class="login__page">
<div class="login">
  <h1 class="login__tittle">Korea Bijou</h1>
  <div class="login__email">
    <input v-model="username" type="text" placeholder="Телефон, имя пользователя или эл.адрес">
    <div v-for="(msg, ind) in fieldError.username" :key="ind" class="login__error">
      {{msg}}
    </div>
  </div>
  <div class="login__pswd">
    <input v-model="pswd" type="text" placeholder="Пароль">
  </div>
  <div class="login__btn">
    <button @click="login">Войти</button>
  </div>
  <div class="accountRegister">
    У вас ещё нет аккаунта?
    <router-link to="/auth/register" class="accountRegister__link">
      Зарегистрироваться
    </router-link>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>
