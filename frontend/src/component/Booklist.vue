<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-xl-3 mb-4" v-for="book in books" :key="book.id">
      <BookItem :book="book" />
    </div>
  </div>
</template>

<script>
import BookItem from "./BookItem.vue";
export default {
  name: "Booklist",
  components: { BookItem },
  props: {
    books: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style></style>
