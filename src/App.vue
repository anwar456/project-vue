<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
};
</script>
