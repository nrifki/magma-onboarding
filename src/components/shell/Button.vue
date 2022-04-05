<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <FormKit :help="help" :label="label" type="button" />
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Button extends Vue {
  @Prop() help?: string;
  @Prop() label!: string;
}
</script>
