<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <FormKit class="Input" type="text" :label="label" />
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Input extends Vue {
  @Prop() label!: string;
}
</script>
