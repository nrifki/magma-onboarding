<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    class="dashboard mx-auto flex max-w-screen-sm flex-col items-center justify-center text-center"
  >
    <base-logo />

    <h1 class="mt-4 text-xl font-black uppercase text-green-900">MAGMA</h1>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { computed } from "@vue/runtime-core";
import { setup, Options, Vue } from "vue-class-component";
import { useMeta } from "vue-meta";

// Components
import BaseLogo from "@/components/base/BaseLogo.vue";

@Options({
  components: {
    BaseLogo,
  },
})
export default class LaunchIcon extends Vue {
  // --> METAS <--

  meta = setup(() =>
    useMeta(
      computed(() => ({
        title: "Dashboard",
      }))
    )
  );
}
</script>
