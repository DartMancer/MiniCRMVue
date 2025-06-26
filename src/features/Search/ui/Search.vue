<script setup lang="ts">
import { Input } from "@/shared/ui/Other";
import { useSearch } from "../models";

const { value } = useSearch();
</script>

<template>
  <Input
    class="input"
    name="search"
    v-model:value="value"
    placeholder="Введите имя или Email, чтобы искать..."
  />
</template>

<style lang="scss" scoped>
:deep(.input) {
  padding: 10px 15px;
  border: none;
  font-size: 16px !important;
}
</style>
