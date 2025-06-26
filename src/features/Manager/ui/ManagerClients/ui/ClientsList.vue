<script lang="ts" setup>
import { Trash2 } from "lucide-vue-next";
import { Replace } from "lucide-vue-next";
import { ExternalLink } from "lucide-vue-next";
import { BaseButton } from "@/shared/ui/Button";
import { BaseContainer } from "@/shared/ui/Other";
import { useClientsList } from "../models";
import { useClientsStore } from "@/entities/clients";
import { useRouter } from "vue-router";

const { removeClient } = useClientsStore();
const { managerId } = defineProps<{ managerId: string }>();

const { clients } = useClientsList(managerId);
const router = useRouter();

const routeToClient = (clientId: string) => {
  router.push({ name: "client", params: { id: clientId } });
};
</script>

<template>
  <a-flex class="client-list-container" vertical>
    <BaseContainer v-for="client in clients" class="base-container" full-w>
      <a-flex gap="5" vertical>
        <span class="title">{{ client.name }}</span>
        <span class="email">{{ client.email }}</span>
      </a-flex>
      <a-flex class="client-actions">
        <BaseButton
          text=""
          :icon="ExternalLink"
          icon-mode
          success
          @click="routeToClient(client.id)"
        />
        <BaseButton text="" :icon="Replace" icon-mode disabled />
        <BaseButton
          text=""
          :icon="Trash2"
          icon-mode
          error
          @click="removeClient(client.id)"
        />
      </a-flex>
    </BaseContainer>
  </a-flex>
</template>

<style lang="scss" scoped>
.client-list-container {
  width: 100%;
  gap: 20px;
}

.base-container {
  justify-content: space-between;
  background-color: var(--background-color);
}

.client-actions {
  gap: 10px;
}

.title {
  font-size: 18px;
}

.email {
  font-size: 16px;
}
</style>
