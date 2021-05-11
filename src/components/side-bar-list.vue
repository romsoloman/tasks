<template>
  <ul class="side-bar-list">
    <li v-for="(sideBarItem, idx) in sideBarItems" :key="idx">
      <side-bar-preview :sideBarItem="sideBarItem" />
    </li>
  </ul>
</template>

<script>
import sideBarPreview from "./side-bar-preview.vue";
export default {
  components: { sideBarPreview },
  props: {
    sideBarItems: {
      type: Array,
    },
  },
};
</script>

<style>
</style>