<template>
  <FormKit class="File" type="file" accept=".png,.jpg,.svg" :label="label" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    label: String,
  },
})
export default class File extends Vue {}
</script>

<style scoped>
.File {
}
</style>
