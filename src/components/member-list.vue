<template>
  <ul class="member-list">
    <li v-for="member in members" :key="member._id">
      <member-preview :member="member" :tasks="tasks" />
    </li>
  </ul>
</template>

<script>
import memberPreview from "./member-preview.vue";
export default {
  props: {
    members: {
      type: Array,
    },
    tasks: {
      type: Array,
    },
  },
  components: { memberPreview },
};
</script>

<style>
</style>