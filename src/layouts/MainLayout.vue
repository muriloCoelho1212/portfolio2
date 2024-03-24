<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-secondary"
      bordered
    >
      <q-toolbar>
        <q-toolbar-title> Murilo Coelho </q-toolbar-title>

        <div class="row q-gutter-x-md">
          <c-default-btn
            label="Projetos"
            dense
          />
          <c-default-btn
            label="Formação"
            dense
          />
          <q-separator
            vertical
            class="bg-white"
          />
          <c-default-btn
            icon="fa-brands fa-github"
            dense
          />
          <c-default-btn
            icon="fa-brands fa-linkedin"
            dense
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-primary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import CDefaultBtn from 'src/components/CDefaultBtn.vue';
</script>
