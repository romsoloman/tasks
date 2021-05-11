<template>
  <section class="flex align-center days-list" :class="{ isMember: isMember }">
    <day-preview
      v-for="day in days"
      :key="day._id"
      :day="day"
      :isMember="isMember"
    />
  </section>
</template>

<script>
import dayPreview from "./day-preview.vue";
import days from "../data/days/days.json";
export default {
  components: { dayPreview },
  data() {
    return {
      days,
    };
  },
  props: {
    isMember: {
      type: Boolean,
    },
  },
};
</script>

<style>
</style>