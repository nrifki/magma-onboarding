<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div>
    <WelcomeScreen v-if="onboarding" />

    <LaunchIcon v-else />
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
import LaunchIcon from "@/components/dashboard/LaunchIcon.vue";
import WelcomeScreen from "@/components/modals/WelcomeScreen.vue";

@Options({
  components: {
    LaunchIcon,
    WelcomeScreen,
  },
})
export default class Welcome extends Vue {
  // --> METAS <--

  meta = setup(() =>
    useMeta(
      computed(() => ({
        title: "Welcome",
        meta: [
          {
            charset: "utf-8",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            vmid: "description",
            name: "description",
            content:
              "Where magic happens between your school ambassadors and your future students.",
          },
        ],
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
