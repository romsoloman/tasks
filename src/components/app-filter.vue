<template>
  <form class="app-filter" @submit.stop="setFilter">
    <div class="flex search-input">
      <input type="text" placeholder="חפש" />
      <div class="search-icon">
        <i class="fas fa-search"></i>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        member: "",
      },
    };
  },
  methods: {
    setFilter() {
      console.log("this.filterBy", this.filterBy);
      this.$emit("filterBy", this.filterBy);
    },
  },
};
</script>

<style>
</style>