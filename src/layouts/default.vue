<template>
  <div class="Layout-default">
    <Sidebar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
.Layout-default {
  @apply flex;
}
</style>
