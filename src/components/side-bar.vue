<template>
  <section class="flex column side-bar">
    <div class="flex align-center justify-center logo">
      <h1>שבוע.</h1>
    </div>
    <side-bar-list :sideBarItems="sideBarItems" />
    <div class="settings">
      <div class="flex align-center item-preview">
        <div class="title">
          <p>הגדרות</p>
        </div>
        <div class="icon">
          <i class="fas fa-cog"></i>
        </div>
      </div>
      <div class="flex align-center item-preview">
        <div class="title">
          <p>עזרה</p>
        </div>
        <div class="icon">
          <i class="far fa-question-circle"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sideBarItems from "../data/sideBarItems/sideBarItems.json";
import sideBarList from "./side-bar-list.vue";
export default {
  data() {
    return {
      sideBarItems,
    };
  },
  components: {
    sideBarList,
  },
};
</script>

<style>
</style>