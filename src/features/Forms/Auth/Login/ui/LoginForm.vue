<script setup lang="ts">
import { PasswordInput } from "@/shared/ui/Other";
import { BaseButton } from "@/shared/ui/Button";
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

    <BaseButton
      text="Войти"
      html-type="submit"
      :loading="loading"
      success
      full-w
    />
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
  border-color: var(--success-color);
  background-color: rgba($color: #5faf20, $alpha: 0.2);

  &__text {
    font-size: 14px;
    color: var(--success-color);
  }

  &:hover {
    border-color: var(--success-color);
    background-color: rgba($color: #5faf20, $alpha: 0.3);
  }
}
</style>
