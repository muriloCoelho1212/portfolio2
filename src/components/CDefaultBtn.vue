<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      label?: string;
      icon?: string;
      tooltip?: string;
      dense?: boolean;
    }>(),
    {
      label: undefined,
      tooltip: undefined,
      icon: undefined,
      dense: false,
    },
  );

  const emit = defineEmits(['on-click']);
</script>

<template>
  <q-btn
    flat
    :label="props.label"
    :icon="props.icon"
    :dense="props.dense"
    @click="emit('on-click')"
  >
    <q-tooltip v-if="props.tooltip">{{ props.tooltip }}</q-tooltip>
  </q-btn>
</template>
