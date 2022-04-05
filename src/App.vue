<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content} | Magma` : `Magma` }}
    </template>
  </metainfo>

  <div class="app">
    <router-view />
  </div>
</template>
