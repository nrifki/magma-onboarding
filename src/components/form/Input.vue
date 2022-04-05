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
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    label: String,
  },
})
export default class Input extends Vue {}
</script>
