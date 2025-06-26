<script setup lang="ts">
import { ref } from "vue";
import { PanelTopOpen, PanelBottomOpen } from "lucide-vue-next";
import { BaseButton } from "@/shared/ui/Button";
import ButtonPopover from "./ButtonPopover.vue";

const open = ref<boolean>(false);

const toggle = () => (open.value = !open.value);
</script>

<template>
  <a-popover v-model:open="open" placement="bottomRight" trigger="click">
    <template #content>
      <ButtonPopover v-model:open="open" />
    </template>

    <BaseButton
      class="base-icon-btn"
      text=""
      :icon="open ? PanelBottomOpen : PanelTopOpen"
      primary
      iconMode
      @click="toggle"
    />
  </a-popover>
</template>

<style lang="scss" scoped>
.base-icon-btn {
  width: 53px !important;
  height: 53px !important;
  border-radius: 20px;

  :deep(svg) {
    width: 25px !important;
    height: 25px !important;
  }
}
</style>
