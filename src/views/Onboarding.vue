<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    class="onboarding mx-auto flex max-w-screen-sm flex-col items-center justify-center text-center"
  >
    <BaseLogo />

    <h1 class="mt-8 text-xl font-bold uppercase">Welcome to Magma!</h1>

    <p class="mt-2 max-w-md">
      Where magic happens between your school ambassadors and your future
      students.
    </p>

    <OnboardingForm class="mt-6" />
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
import OnboardingForm from "@/components/onboarding/OnboardingForm.vue";

@Options({
  components: {
    BaseLogo,
    OnboardingForm,
  },
})
export default class Onboarding extends Vue {
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
