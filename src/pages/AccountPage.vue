<script setup lang="ts">
import { AccountBody } from "@/widgets/Account";
import { AccountHeader } from "@/widgets/Header";
</script>

<template>
  <a-flex class="account-page" gap="20" vertical>
    <AccountHeader />

    <AccountBody />
  </a-flex>
</template>

<style lang="scss" scoped>
.account-page {
  width: 100%;
}
</style>
