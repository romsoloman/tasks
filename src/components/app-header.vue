<template>
  <header class="flex justify-between align-center app-header">
    <div class="flex align-center justify-center preferences">
      <div class="profile-img">
        <img
          src="https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.6435-9/175446147_10214885281966200_3950749891291495408_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8_ZhZdAxFY8AX-SkHhT&_nc_ht=scontent.fsdv2-1.fna&oh=5c50e3f92c997ceda8b37d526560bbff&oe=60BE74BB"
          alt=""
        />
      </div>
      <i class="far fa-bell"></i>
      <div class="dark-mode">
        <i class="far fa-moon"></i>
      </div>
    </div>
    <app-filter />
  </header>
</template>
<script>
import appFilter from "./app-filter.vue";
export default {
  components: { appFilter },
};
</script>

<style>
</style>
