<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      tooltip?: string;
    }>(),
    {
      tooltip: undefined,
    },
  );
</script>

<template>
  <q-tooltip class="tooltip">
    {{ props.tooltip }}
  </q-tooltip>
</template>

<style lang="scss">
  .tooltip {
    font-size: 14px !important;
    background: #00000030;
  }
</style>
