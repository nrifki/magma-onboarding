<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <button
    :class="{
      'bg-gray-900 hover:bg-black': color === 'black',
      'bg-red-700 hover:bg-red-900': color === 'red',
    }"
    class="w-full rounded py-2.5 px-4 text-sm font-medium text-white"
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
  @Prop({ default: "black" }) color!: "black" | "red";
}
</script>
