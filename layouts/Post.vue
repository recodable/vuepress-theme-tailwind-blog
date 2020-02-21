<template>
  <div>
    <div class="mt-8 mb-8">
      <div v-if="$frontmatter.cover" class="mb-4">
        <img :src="coverUrl" alt="Cover image" />
        <span v-if="coverCredit" class="italic text-sm text-gray-700">
          Photo by
          <a :href="coverCredit.url" :alt="coverCredit.name" class="highlight">
            {{ coverCredit.name }}
          </a>
        </span>
      </div>
      <h1 class="text-4xl font-bold leading-tight">{{ $frontmatter.title }}</h1>
      <p class="text-gray-600">{{ format($frontmatter.date) }}</p>
    </div>

    <Content />

    <div class="mt-8">
      <simple-newsletter />
    </div>

    <div class="mt-8">
      <profile-card />
    </div>
  </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";
import { format, compareAsc } from "date-fns";
import SimpleNewsletter from "vuepress-plugin-mailchimp/src/components/SimpleNewsletter";

export default {
  components: { ProfileCard, SimpleNewsletter },
  computed: {
    coverUrl() {
      return this.$frontmatter.cover.url;
    },
    coverCredit() {
      return this.$frontmatter.cover.credit;
    }
  },
  methods: {
    format(date) {
      return format(new Date(date), this.$themeConfig.dateFormat);
    }
  }
};
</script>
