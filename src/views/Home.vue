<template>
  <div class="flex min-h-screen items-center bg-gray-50">
    <WelcomeScreen v-if="onboarding" />
    <LaunchIcon v-else />
  </div>
</template>

<script lang="ts">
// NPM
import { computed } from "@vue/runtime-core";
import { setup, Options, Vue } from "vue-class-component";
import { useMeta } from "vue-meta";

// Components
import LaunchIcon from "@/components/dashboard/LaunchIcon.vue";
import WelcomeScreen from "@/components/modals/WelcomeScreen.vue";

@Options({
  components: {
    LaunchIcon,
    WelcomeScreen,
  },
})
export default class Home extends Vue {
  // --> METAS <--

  meta = setup(() =>
    useMeta(
      computed(() => ({
        title: "Magma Onboarding",
      }))
    )
  );

  // --> DATA <--

  newUser = true;

  // --> COMPUTED <--

  get onboarding(): boolean {
    return !!this.newUser;
  }
}
</script>
