<template>
  <div class="flex member-preview">
    <div class="flex align-center member-info">
      <div class="member-details">
        <p class="member-name">{{ member.memberName }}</p>
        <p class="member-role">{{ member.role }}</p>
      </div>
      <img :src="member.imgUrl" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
    },
  },
};
</script>

<style>
</style>