<script setup lang="ts">
import { PasswordInput } from "@/shared/ui/Other";
import { MailInput } from "@/widgets/MailInput";
import { useLoginForm, validateRules } from "../models";

const { formState, loading, onFinish, onFinishFailed, routeReg } =
  useLoginForm();
</script>

<template>
  <a-form
    v-model:model="formState"
    class="login-form"
    layout="vertical"
    :rules="validateRules"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-flex class="login-form-items">
      <MailInput
        v-model:value="formState.email"
        name="email"
        label="Почта"
        placeholder="Укажите Вашу почту"
        form
      />
      <PasswordInput
        v-model:value="formState.password"
        name="password"
        label="Пароль"
        placeholder="Укажите Ваш пароль"
        form
      />

      <a-flex vertical>
        <span class="have-account">Ещё нет своего аккаунта?</span>
        <a-button type="text" @click="routeReg">
          <span class="reg">Зарегистрироваться</span>
        </a-button>
      </a-flex>
    </a-flex>

    <a-button class="action-btn" html-type="submit" :loading="loading">
      <span class="action-btn__text">Войти</span>
    </a-button>
  </a-form>
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
}

.login-form-items {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.have-account {
  font-size: 12px;
  text-align: center;
}

.reg {
  text-decoration: underline;
}

.action-btn {
  width: 100%;
  height: fit-content;
  padding: 5px 20px;
  border-radius: 20px;
  border-color: #5faf20;
  background-color: rgba($color: #5faf20, $alpha: 0.2);

  &__text {
    font-size: 14px;
    color: #5faf20;
  }

  &:hover {
    border-color: #5faf20;
    background-color: rgba($color: #5faf20, $alpha: 0.3);
  }
}
</style>
