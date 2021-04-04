<template>
  <div class="Page">
    <div class="loading" v-if="!page"></div>
    <div class="page-container">
      <h1 v-if="page" class="page-title">{{ page.title }}</h1>
      <VueTrix v-model="page.body" placeholder="Enter content" localStorage />
    </div>
  </div>
</template>

<script>
import Layout from "@/layouts/default.vue";
import VueTrix from "vue-trix";

import { getPageById } from "@/mockData";

export default {
  components: {
    VueTrix,
  },
  data() {
    return {
      editor: Object,
      page: null,
    };
  },
  methods: {
    async fetchPage() {
      this.page = null;
      const id = this.$route.params.slug;
      this.page = await getPageById(id);
    },
  },
  mounted() {
    this.fetchPage();
  },
  watch: {
    $route: "fetchPage",
  },
  created() {
    this.$emit("update:layout", Layout);
  },
};
</script>

<style lang="scss">
.Page {
  @apply flex;

  .page-container {
    @apply w-4/5 mx-auto mt-24;
  }

  .page-title {
    @apply mb-8;
  }

  .page-content {
    line-height: 1.5;

    h1 {
      @apply mb-4;
    }

    h2 {
      @apply mb-4;
    }

    p {
      @apply p-1;
    }

    ul {
      > li {
        @apply p-1;
      }
    }
  }
}
</style>
