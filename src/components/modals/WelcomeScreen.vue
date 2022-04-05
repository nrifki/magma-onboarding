<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    class="welcome-screen mx-auto flex max-w-screen-sm flex-col items-center justify-center text-center text-base"
  >
    <img
      alt="Magma logo"
      class="welcome-screen__logo h-32 w-32 select-none rounded-lg shadow-xl"
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
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BasicInfos from "@/components/onboarding/BasicInfos.vue";

@Options({
  components: {
    BasicInfos,
  },
})
export default class WelcomeScreen extends Vue {}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style scoped>
.welcome-screen__logo {
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
