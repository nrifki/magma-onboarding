<template>
  <FormKit type="button" :help="help" :label="label" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    help: String,
    label: String,
  },
})
export default class Button extends Vue {}
</script>
