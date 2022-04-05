<template>
  <FormKit class="TextField" type="text" :label="label" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    label: String,
  },
})
export default class TextField extends Vue {}
</script>
