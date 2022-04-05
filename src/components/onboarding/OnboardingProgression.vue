<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    class="fixed right-0 top-0 bottom-0 mr-6 hidden w-32 select-none flex-col justify-center text-right md:flex"
  >
    <div class="grid grid-cols-1 gap-4">
      <div v-for="view in views" :key="view" class="flex items-center">
        <span
          :class="{
            'text-green-700	': current === view,
            'text-gray-800': current !== view,
          }"
          class="mr-3 flex-1 text-xs font-bold uppercase"
        >
          {{ view }}
        </span>

        <span
          :class="{
            'bg-green-700': current === view,
            'bg-gray-800': current !== view,
          }"
          class="h-2 w-2 rounded-full"
        ></span>
      </div>
    </div>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class OnboardingProgression extends Vue {
  @Prop() current!: string;
  @Prop() views!: string[];
}
</script>
