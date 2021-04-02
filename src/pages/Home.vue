<template>
  <div class="Home">
    <h1>Home</h1>
  </div>
</template>

<script>
import Layout from '@/layouts/default'

export default {
  name: 'Home',
  created () {
    this.$emit('update:layout', Layout)
  }
}
</script>

<style>

</style>
