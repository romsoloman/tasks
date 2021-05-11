<template>
  <div class="flex column align-center justify-center day-preview">
    <div v-if="!isMember">
      <p class="day-name">{{ day.name }}</p>
      <p class="day-number">{{ day.number }}</p>
    </div>
    <div v-else class="day"></div>
  </div>
</template>

<script>
export default {
  props: {
    day: {
      type: Object,
    },
    isMember: {
      type: Boolean,
    },
  },
};
</script>

<style>
</style>