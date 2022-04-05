<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <img
    alt="Magma logo"
    class="base-logo h-32 w-32 select-none rounded-lg shadow-xl"
    src="/img/logo.png"
  />
</template>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style>
.base-logo {
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
