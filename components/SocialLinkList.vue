<template>
  <div class="mt-3">
    <fragment v-for="(link, index) in links" :key="link.url">
      <a :href="link.url" :alt="`My ${link.name}`" target="_blank">
        {{ link.name }}
      </a>
      <span v-if="links.length > index + 1" class="mx-2">/</span>
    </fragment>
  </div>
</template>

<script>
export default {
  props: {
    links: Array
  }
};
</script>
