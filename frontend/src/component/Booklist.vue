<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-xl-3 mb-5" v-for="book in books" :key="book.id">
      <RouterLink :to="`/books/${book.id}`">
        <BookItem :book="book" />
      </RouterLink>
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
