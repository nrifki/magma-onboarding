<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <button
    class="w-full"
    :class="{
      'rounded bg-gray-900 py-2.5 px-4 text-sm font-medium text-white hover:bg-black':
        color === 'black',
      'rounded-lg border bg-gray-100 p-4 text-center  shadow-inner hover:bg-gray-200':
        color === 'grey',
      'rounded bg-red-700 py-2.5 px-4 text-sm font-medium text-white hover:bg-red-900':
        color === 'red',
    }"
    type="button"
  >
    <slot />
  </button>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class BaseButton extends Vue {
  @Prop({ default: "black" }) color!: "black" | "grey" | "red";
}
</script>
