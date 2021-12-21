<template>
  <div id="app" class="bg-gray-200">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/global/Header";
export default {
  components: {
    Header,
  },
};
</script>


<style>
</style>
