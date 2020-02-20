<template>
  <div>
    <ul>
      <li
        v-for="page in $pagination.pages"
        :key="page.path"
        class="py-8 border-t"
      >
        <h2 class="text-2xl font-bold text-blue-600">
          <router-link :to="page.path">{{ page.title }}</router-link>
        </h2>
        <p class="text-gray-600">{{ format(page.frontmatter.date) }}</p>
      </li>
    </ul>

    <div>
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
        Prev
      </router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
        Next
      </router-link>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  methods: {
    format(date) {
      return format(new Date(date), "MMMM DD, YYYY");
    }
  }
};
</script>
