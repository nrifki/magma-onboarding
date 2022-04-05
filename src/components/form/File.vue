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
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    label: String,
  },
})
export default class File extends Vue {}
</script>
