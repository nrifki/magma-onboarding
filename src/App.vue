<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}
    </template>
  </metainfo>

  <div class="app">
    <router-view />
  </div>
</template>
