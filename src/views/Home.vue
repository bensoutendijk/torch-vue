<template>
  <div class="Home">
    <h1>{{ user.name }}</h1>
  </div>
</template>

<script>
import Layout from '@/layouts/default'
import { mapState } from 'vuex'

export default {
  name: 'Home',
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

<style>

</style>
