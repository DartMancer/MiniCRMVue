<script setup lang="ts">
import { ref } from "vue";
import { Input, PasswordInput, Select } from "@/shared/ui/Other";
import { MailInput } from "@/widgets/MailInput";
import { useRegForm, validateRules } from "../model";

const { formState, loading, options, onFinish, onFinishFailed, routeLogin } =
  useRegForm();

const nameInput = ref<HTMLInputElement | null>(null);

const focusOnFirstInput = () => {
  nameInput.value?.focus();
};

defineExpose({ focusOnFirstInput });
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
        placeholder="Укажите Ваше имя"
        form
      />
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
      <Select
        v-model:value="formState.role"
        :options="options"
        name="role"
        label="Роль"
        placeholder="Выберите роль"
        form
      />

      <a-flex class="login-container" vertical>
        <span class="have-account">Уже есть аккаунт?</span>
        <a-button type="text" @click="routeLogin">
          <span class="login">Войти</span>
        </a-button>
      </a-flex>
    </a-flex>

    <a-button class="action-btn" html-type="submit" :loading="loading">
      <span class="action-btn__text">Зарегистрироваться</span>
    </a-button>
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
