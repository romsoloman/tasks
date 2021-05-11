<template>
  <section class="schedule">
    <topic-header topic="לוח זמנים" />
    <header class="schedule-head">
      <day-list />
      <div class="flex align-center justify-between member-panel">
        <i class="fas fa-user-plus"></i>
        <p>משתמשים</p>
      </div>
    </header>
    <main class="schedule-main">
      <calendar :members="members" :days="days" />
      <member-list :members="members" />
    </main>
  </section>
</template>
<script>
import calendar from "./calendar.vue";
import dayList from "./day-list.vue";
import memberList from "./member-list.vue";
import topicHeader from "./topic-header.vue";
import days from "../data/days/days.json";

export default {
  data() {
    return {
      days,
    };
  },
  computed: {
    members() {
      return this.$store.getters.members;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadMembers" });
  },
  components: {
    topicHeader,
    memberList,
    dayList,
    calendar,
  },
};
</script>

