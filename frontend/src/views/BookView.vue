<template>
  <SectionHeader :title="title" :text="text" />

  <Booklist :books="paginatedBooks" />
  <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-changed="updatePage" />
</template>

<script>
import Booklist from "../component/Booklist.vue";
import SectionHeader from "../component/SectionHeader.vue";
import books from "@/db";
import Pagination from "../component/Pagination.vue";
export default {
  components: { SectionHeader, Booklist, Pagination },
  name: "BookView",
  data() {
    return {
      title: "Books",
      text: "This is the Books page",
      books: books,
      currentPage: 1,
      itemsPerPage: 4,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.books.length / this.itemsPerPage);
    },
    paginatedBooks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.books.slice(start, end);
    },
  },
  methods: {
    updatePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped></style>
