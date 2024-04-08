<template>
  <SectionHeader :title="title" :text="text" />
</template>

<script>
import SectionHeader from "@/component/SectionHeader.vue";
export default {
  name: "HomeView",
  components: { SectionHeader },
  data() {
    return {
      title: "Home",
      text: "This is the Home page",
    };
  },
};
</script>

<style scoped></style>
