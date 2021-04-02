<template>
  <div class="Sidebar">
    <h1><span class="username">{{ user.name }}</span><span>'s Pages</span></h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
}
</script>

<style lang="scss">
.Sidebar {
  @apply w-64 min-h-screen;
  @apply p-2;
  @apply bg-grey-lighter;
}
</style>
