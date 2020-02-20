<template>
  <div class="px-4 md:px-0 md:mx-auto" style="max-width: 640px;">
    <profile-card />

    <default-global-layout />
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import ProfileCard from "../components/ProfileCard.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout, ProfileCard }
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>
