<template>
  <div class="text-center mb-5 mt-3">
    <h1 class="display-4 font-weigth-bolder">{{ title }}</h1>
    <p class="lead">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
