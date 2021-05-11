<template>
  <section class="main-container task-app">
    <side-bar />
    <div class="task-preview-app">
      <app-header />
      <router-view />
    </div>
  </section>
</template>

<script>
import sideBar from "../components/side-bar.vue";
import appHeader from "../components/app-header.vue";

export default {
  components: { sideBar, appHeader },
};
</script>

<style>
</style>