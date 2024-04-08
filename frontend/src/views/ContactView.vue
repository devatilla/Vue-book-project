<template>
  <SectionHeader :title="title" :text="text" />
</template>

<script>
import SectionHeader from "@/component/SectionHeader.vue";
export default {
  name: "ContactView",
  components: { SectionHeader },
  data() {
    return {
      title: "Contact",
      text: "This is the Contact page",
    };
  },
};
</script>

<style scoped></style>
