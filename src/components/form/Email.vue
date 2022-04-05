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
// NPM
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Email extends Vue {
  @Prop() label!: string;
}
</script>
