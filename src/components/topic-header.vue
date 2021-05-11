<template>
  <header class="flex justify-between align-center topic-header">
    <h1>{{ topic }}</h1>
    <div class="flex align-center time-info">
      <div class="flex align-center month-info">
        <i class="far fa-calendar-alt"></i>
        <div class="mm--yy">
          <span>מאי</span>
          <span>2021</span>
        </div>
      </div>
      <div class="flex align-center dd--mm--yy">
        <div class="flex align-center justify-center week btn-active">
          <p>שבוע</p>
        </div>
        <div class="flex align-center justify-center month">
          <p>חודש</p>
        </div>
        <div class="flex align-center justify-center year">
          <p>שנה</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    topic: {
      type: String,
    },
  },
};
</script>

<style>
</style>