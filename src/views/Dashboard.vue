<template>
  <div class="Dashboard">
    <h1>Dashboard</h1>
  </div>
</template>

<script>
import Layout from "@/layouts/default.vue";

export default {
  name: "Dashboard",
  created() {
    this.$emit("update:layout", Layout);
  },
};
</script>

<style lang="scss">
.Dashboard {
  @apply flex;
}
</style>
