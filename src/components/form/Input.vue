<template>
  <FormKit class="Input" type="text" :label="label" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    label: String,
  },
})
export default class Input extends Vue {}
</script>

<style scoped>
.Input {
}
</style>
