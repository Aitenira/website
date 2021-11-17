<template>
<div>
<div class="registration">
  <h1 class="registration__exit">Вход</h1>
  <div class="registration__btn">
    <button>Введите свою почту</button>
  </div>
  <div class="registration__line"></div>
  <div class="registration__input" v-for="(inp, ind) in registerInputs" :key="ind">
    <input type="text" :placeholder="inp.placeholder">
  </div>
  <div class="registration__btn">
    <button v-on:click="changeComponent">Регистрация</button>
  </div>
  <p class="registration__privacy">Регистрируясь, вы принимаете наши <b>Условия, Политику использования данных и
    Политику в отношении файлов cookie.</b></p>
</div>

  <div class="account-login">
    <span>Есть аккаунт?</span>
    <router-link to="/auth" class="account-login-link">Вход</router-link>
  </div>
</div>

</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>
