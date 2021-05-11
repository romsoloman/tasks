<template>
  <section class="calendar">
    <div class="flex days" v-for="member in members" :key="member._id">
      <div class="day" v-for="day in days" :key="day._id">
        <div
          class="flex column day-preview-tasks"
          v-for="task in member.tasks"
          :key="task.id"
        >
          <task-preview :task="task" v-if="task.day === day.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import taskPreview from "./task-preview.vue";
export default {
  components: { taskPreview },
  props: {
    members: {
      type: Array,
    },
    days: {
      type: Array,
    },
  },
};
</script>

<style>
</style>