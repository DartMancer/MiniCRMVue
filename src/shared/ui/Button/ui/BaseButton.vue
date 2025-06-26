<script lang="ts" setup>
defineProps<{
  text: string;
  icon?: any;
  error?: boolean;
  fullW?: boolean;
  success?: boolean;
  primary?: boolean;
  disabled?: boolean;
  iconMode?: boolean;
}>();
</script>

<template>
  <a-button
    :class="[
      'base-btn',
      { success, error, disabled, 'icon-mode': iconMode, primary },
    ]"
    :style="{ width: fullW ? '100%' : 'fit-content' }"
    :disabled
  >
    <component :is="icon" />
    <span class="base-btn__text">{{ text }}</span>
  </a-button>
</template>

<style lang="scss" scoped>
.base-btn {
  height: fit-content;
  padding: 5px 20px;
  border: 1px solid;
  border-radius: 20px;
  box-shadow: var(--shadow);
  transition: 0.2s ease-in-out;

  &__text {
    transition: 0.2s ease-in-out;
  }

  &:active {
    box-shadow: var(--shadow);
    transform: scale(0.95);
  }

  &.success {
    border-color: var(--success-color);
    background-color: rgba($color: #5faf20, $alpha: 0.2);

    .base-btn__text {
      color: var(--success-color);
    }

    svg {
      stroke: var(--success-color);
      transition: 0.2s ease-in-out;
    }

    &:hover {
      border: 1px solid var(--hover-success-color);
      background-color: rgba($color: #5faf20, $alpha: 0.3);

      .base-btn__text {
        color: var(--hover-success-color);
      }

      svg {
        stroke: var(--hover-success-color);
      }
    }

    &:active {
      border-color: var(--hover-success-color);
      background-color: rgba($color: #5faf20, $alpha: 0.3);

      .base-btn__text {
        color: var(--hover-success-color);
      }

      svg {
        stroke: var(--hover-success-color);
      }
    }
  }

  &.error {
    border-color: var(--error-color);
    background-color: rgba($color: #ff7c7c, $alpha: 0.2);

    .base-btn__text {
      color: var(--error-color);
    }

    svg {
      stroke: var(--error-color);
      transition: 0.2s ease-in-out;
    }

    &:hover {
      border: 1px solid var(--hover-error-color);
      background-color: rgba($color: #ff7c7c, $alpha: 0.3);

      .base-btn__text {
        color: var(--hover-error-color);
      }

      svg {
        stroke: var(--hover-error-color);
      }
    }

    &:active {
      border-color: var(--hover-error-color);
      background-color: rgba($color: #ff7c7c, $alpha: 0.3);

      .base-btn__text {
        color: var(--hover-error-color);
      }

      svg {
        stroke: var(--hover-error-color);
      }
    }
  }

  &.disabled {
    border-color: rgba($color: #000000, $alpha: 0.3);
    background-color: rgba($color: #000000, $alpha: 0.05);

    .base-btn__text {
      color: rgba($color: #000000, $alpha: 0.5);
    }

    svg {
      stroke: rgba($color: #000000, $alpha: 0.5);
    }

    &:hover {
      border-color: rgba($color: #000000, $alpha: 0.3);
      background-color: rgba($color: #000000, $alpha: 0.05);

      .base-btn__text {
        color: rgba($color: #000000, $alpha: 0.5);
      }
    }

    &:active {
      border-color: rgba($color: #000000, $alpha: 0.3);
      background-color: rgba($color: #000000, $alpha: 0.05);

      .base-btn__text {
        color: rgba($color: #000000, $alpha: 0.5);
      }
    }
  }

  &.primary {
    border-color: rgba($color: #000000, $alpha: 0.7);
    background-color: var(--primary-color);

    .base-btn__text {
      color: rgba($color: #000000, $alpha: 0.7);
    }

    svg {
      stroke: rgba($color: #000000, $alpha: 0.7);
      transition: 0.2s ease-in-out;
    }

    &:hover {
      border-color: black;
      background-color: var(--hover-primary-color);

      .base-btn__text {
        color: black;
      }

      svg {
        stroke: black;
      }
    }

    &:active {
      border-color: black;
      background-color: var(--hover-primary-color);

      .base-btn__text {
        color: black;
      }

      svg {
        stroke: black;
      }
    }
  }

  &.icon-mode {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 34px;
    min-height: 34px;
    padding: 0;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
