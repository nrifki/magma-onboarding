<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <FormKit
    class="Email"
    type="email"
    validation="required|email"
    validation-visibility="live"
    placeholder="example@email.com"
    :label="label"
  />
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    label: String,
  },
})
export default class Email extends Vue {}
</script>
