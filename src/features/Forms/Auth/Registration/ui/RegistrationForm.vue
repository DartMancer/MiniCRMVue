<script setup lang="ts">
import { BaseButton } from "@/shared/ui/Button";
import { Input, PasswordInput } from "@/shared/ui/Other";
import { MailInput } from "@/widgets/MailInput";
import { useRegForm, validateRules } from "../models";

const {
  formState,
  loading,
  regPlaceholders,
  onFinish,
  onFinishFailed,
  routeLogin,
} = useRegForm();
</script>

<template>
  <a-form
    v-model:model="formState"
    class="reg-form"
    layout="vertical"
    :rules="validateRules"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-flex class="reg-form-items">
      <Input
        ref="nameInput"
        v-model:value="formState.name"
        name="name"
        label="Имя"
        :placeholder="regPlaceholders.name"
        form
      />
      <MailInput
        v-model:value="formState.email"
        name="email"
        label="Почта"
        :placeholder="regPlaceholders.email"
        form
      />
      <PasswordInput
        v-model:value="formState.password"
        name="password"
        label="Пароль"
        :placeholder="regPlaceholders.password"
        form
      />

      <a-flex class="login-container" vertical>
        <span class="have-account">Уже есть аккаунт?</span>
        <a-button type="text" @click="routeLogin">
          <span class="login">Войти</span>
        </a-button>
      </a-flex>
    </a-flex>

    <BaseButton
      text="Зарегистрироваться"
      html-type="submit"
      :loading="loading"
      success
      full-w
    />
  </a-form>
</template>

<style lang="scss" scoped>
.reg-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
}

.reg-form-items {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.have-account {
  font-size: 12px;
  text-align: center;
}

.login {
  text-decoration: underline;
}
</style>
