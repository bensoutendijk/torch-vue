<template>
  <div class="Sidebar">
    <h1 class="header">
      <span class="username">{{ user.name }}</span>
      <span>'s Pages</span>
    </h1>
    <ul class="page-list">
      <li class="list-item" v-for="page in pages" :key="page.id">
        <span class="page-title">{{ page.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      pages: [
        { id: 1, title: "Getting Started" },
        { id: 2, title: "This Is A Long Title Lorem Ipsum Dolor" },
      ],
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
};
</script>

<style lang="scss">
.Sidebar {
  @apply w-64 min-h-screen;
  @apply bg-grey-lighter;

  .header {
    @apply p-2;
  }

  .page-list {
    @apply p-0 mt-4;

    list-style-type: none;
  }

  .list-item {
    @apply p-1 pl-2;

    &:hover {
      @apply bg-grey-light;
    }

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
