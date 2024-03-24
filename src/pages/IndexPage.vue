<template>
  <q-page></q-page>
</template>

<script setup lang="ts">
  import MostUsedLanguagesService from 'src/services/MostUsedLanguagesService';
  import { onMounted } from 'vue';

  onMounted(() => {
    MostUsedLanguagesService.getMostUsedLanguages();
  });
</script>
