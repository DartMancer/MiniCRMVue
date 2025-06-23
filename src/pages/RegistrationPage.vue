<script setup lang="ts">
import { RegistrationForm } from "@/features/Forms/Auth/Registration";
</script>

<template>
  <a-flex class="reg-page" align="center" gap="50" vertical>
    <span class="title">Регистрация</span>
    <RegistrationForm />
  </a-flex>
</template>

<style lang="scss" scoped>
.reg-page {
  max-width: 320px;
  width: 100%;
}

.title {
  font-size: 30px;
}
</style>
