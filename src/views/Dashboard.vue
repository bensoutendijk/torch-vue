<template>
  <div class="Dashboard">
    <h1>{{ user.name }}</h1>
  </div>
</template>

<script>
import Layout from '@/layouts/default.vue'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  created () {
    this.$emit('update:layout', Layout)
  }
}
</script>

<style lang="scss">
.Dashboard {
  @apply flex;
}
</style>
