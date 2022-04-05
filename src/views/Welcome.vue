<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div class="welcome">
    <div
      class="mx-auto flex max-w-screen-sm flex-col items-center justify-center text-center text-base"
    >
      <img
        alt="Magma logo"
        class="welcome__logo h-32 w-32 select-none rounded-lg shadow-xl"
        src="/img/logo.png"
      />

      <h1 class="mt-8 text-xl font-bold uppercase">Welcome to Magma!</h1>

      <p class="mt-4 max-w-md">
        Where magic happens between your school ambassadors and your future
        students.
      </p>

      <p class="mt-4 max-w-md font-medium">Let's setup your dashboard!</p>

      <BasicInfos />
    </div>

    <!-- <LaunchIcon v-else /> -->
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
import BasicInfos from "@/components/onboarding/BasicInfos.vue";
import LaunchIcon from "@/components/dashboard/LaunchIcon.vue";

@Options({
  components: {
    BasicInfos,
    LaunchIcon,
  },
})
export default class Welcome extends Vue {
  // --> DATA <--

  newUser = true;

  // --> COMPUTED <--

  get onboarding(): boolean {
    return !!this.newUser;
  }

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
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style scoped>
.welcome__logo {
  animation: float 3.5s ease-in-out infinite;
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 20px 15px 0 rgba(0, 0, 0, 0.25);
    transform: translatey(-5px);
  }
  100% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
    transform: translatey(0px);
  }
}
</style>
