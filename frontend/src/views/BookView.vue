<template>
  <SectionHeader :title="title" :text="text" />

  <Booklist :books="books" />
</template>

<script>
import Booklist from "../component/Booklist.vue";
import SectionHeader from "../component/SectionHeader.vue";
import books from "@/db";
export default {
  components: { SectionHeader, Booklist },
  name: "BookView",
  data() {
    return {
      title: "Books",
      text: "This is the Books page",
      books: books,
    };
  },
};
</script>

<style scoped></style>
