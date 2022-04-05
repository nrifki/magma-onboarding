<template>
  <div class="flex min-h-screen items-center bg-gray-50">
    <WelcomeScreen v-if="onboarding" />
    <LaunchIcon v-else />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import LaunchIcon from "@/components/dashboard/LaunchIcon.vue";
import WelcomeScreen from "@/components/modals/WelcomeScreen.vue";

@Options({
  components: {
    LaunchIcon,
    WelcomeScreen,
  },
})
export default class Home extends Vue {
  // --> DATA <--

  newUser = true;

  // --> COMPUTED <--

  get onboarding(): boolean {
    if (this.newUser) {
      return true;
    } else {
      return false;
    }
  }
}
</script>
