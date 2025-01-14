<template>
  <div style="direction: rtl">
    <AdminDashboard />
  </div>
</template>

<script>
import AdminDashboard from "./views/Dashboard/AdminDashboard.vue";
export default {
  name: "App",
  components: {
    AdminDashboard,
  },
};
</script>
