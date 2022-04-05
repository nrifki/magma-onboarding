<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    class="dashboard mx-auto flex max-w-screen-sm flex-col items-center text-center"
  >
    <base-logo class="mt-20" />

    <h1 class="mt-4 text-xl font-black uppercase text-green-900">MAGMA</h1>

    <div class="mx-auto w-10">
      <ConfettiExplosion :duration="3000" :force="0.3" :particleCount="200" />
    </div>
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
import ConfettiExplosion from "vue-confetti-explosion";

@Options({
  components: {
    BaseLogo,
    ConfettiExplosion,
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
