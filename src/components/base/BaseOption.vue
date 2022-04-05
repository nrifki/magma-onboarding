<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    class="flex cursor-pointer flex-col items-center rounded-lg border bg-gray-100 p-4 text-center shadow-inner hover:bg-gray-200"
  >
    <slot />
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { Vue } from "vue-class-component";

export default class BaseOption extends Vue {}
</script>
