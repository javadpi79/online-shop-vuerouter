<template>
  <responsive-header></responsive-header>
  <div class="wrapper default">
    <c-header></c-header>

    <router-view />

    <c-footer></c-footer>
  </div>
</template>
<script setup>
import CFooter from "../components/CFooter.vue";
import CHeader from "../components/CHeader.vue";
import ResponsiveHeader from "../components/ResponsiveHeader.vue";
</script>

<style></style>
