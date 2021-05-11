<template>
  <div class="task-preview" :style="task.style">
    <div class="flex align-center task-hour">
      <p v-if="task.isZoom" class="is-zoom">
        <i class="fas fa-video"></i>
      </p>
      <p>{{ task.taskTime }}</p>
    </div>
    <div class="task-title">
      <p>{{ task.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
    },
  },
};
</script>

<style>
</style>