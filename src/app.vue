<template>
  <div id="app">
    <task-app />
  </div>
</template>

<script>
import taskApp from "./views/task-app.vue";
export default {
  name: "app",
  components: { taskApp },
  created() {
    if (this.$route.name !== "schedule") {
      this.$router.push({ name: "schedule" });
    }
  },
};
</script>

