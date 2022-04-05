<template>
  <div
    class="mx-auto flex h-64 w-64 -translate-y-1/4 transform cursor-pointer flex-col items-center justify-center rounded-lg shadow-xl"
  >
    <img
      alt="Magma Logo"
      class="h-32 w-32 select-none rounded-lg shadow-xl"
      src="/img/logo.png"
    />

    <h1 class="mt-4 text-xl font-black uppercase text-green-900">MAGMA</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class LaunchIcon extends Vue {}
</script>
