<script lang="ts" setup>
import { useLayout } from "./layouts";

const { layout } = useLayout();
</script>

<template>
  <a-config-provider>
    <a-app class="app">
      <Transition name="fade" mode="out-in">
        <component :is="layout">
          <router-view v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
              <component :is="Component" />
            </Transition>
          </router-view>
        </component>
      </Transition>
    </a-app>
  </a-config-provider>
</template>

<style lang="scss">
@import url("./style/custom.scss");
@import url("./style/style.scss");
@import url("./style/vars.scss");
@import url("./style/transition.scss");

.app {
  background-color: var(--background-color);
}
</style>
