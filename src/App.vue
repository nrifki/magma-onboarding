<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content} | Magma` : `Magma` }}
    </template>
  </metainfo>

  <div
    class="app absolute inset-0 min-h-full overflow-auto bg-gray-100 py-12 px-10"
  >
    <router-view />
  </div>
</template>
