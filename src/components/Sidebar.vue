<template>
  <div class="Sidebar">
    <h1 class="header">
      <span class="username">{{ user.name }}</span>
      <span>'s Pages</span>
    </h1>
    <ul class="page-list">
      <li class="list-item" v-for="pageId in pages.allIds" :key="pageId">
        <router-link :to="`/pages/${pageId}`">
          <div class="page-link-content">
            <span class="page-title">{{ pages.byId[pageId].title }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      pages: (state) => state.pages,
    }),
  },
};
</script>

<style lang="scss">
.Sidebar {
  @apply w-64 h-screen fixed;
  @apply bg-grey-lighter;

  .header {
    @apply p-2;
    @apply text-base font-semibold;
  }

  .page-list {
    @apply p-0 mt-4;

    list-style-type: none;
  }

  .list-item {
    a {
      @apply min-w-full;
      @apply text-black;
      text-decoration: none;

      &.router-link-active {
        @apply font-bold;

        .page-link-content {
          @apply bg-grey-light;
        }
      }
    }
  }

  .page-link-content {
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
