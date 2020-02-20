<template>
  <div class="my-8">
    <router-link to="/" class="flex">
      <img
        v-if="$themeConfig.profile"
        class="rounded-full w-12 h-12 mr-4"
        :src="$themeConfig.profile"
      />

      <div>
        <h2 class="text-xl font-bold">{{ $themeConfig.name }}</h2>
        <p>
          {{ $themeConfig.description }}
        </p>
      </div>
    </router-link>

    <social-link-list
      v-if="$themeConfig.socialLinks && $themeConfig.socialLinks.length"
      :links="$themeConfig.socialLinks"
    />
  </div>
</template>

<script>
import SocialLinkList from "./SocialLinkList.vue";

export default {
  components: { SocialLinkList }
};
</script>
