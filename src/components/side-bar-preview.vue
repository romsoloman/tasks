<template>
  <div
    class="flex align-center item-preview"
    :class="{ 'is-active': sideBarItem.isActive }"
  >
    <div class="title">
      {{ sideBarItem.title }}
    </div>
    <div class="icon">
      <i :class="sideBarItem.icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sideBarItem: {
      type: Object,
    },
  },
};
</script>

<style>
</style>