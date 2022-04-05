<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <FormKit class="File" type="file" accept=".png,.jpg,.svg" :label="label" />
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class File extends Vue {
  @Prop() label!: string;
}
</script>
