<template>
   <div class="page">
      <h4>Thêm Sách</h4>
      <BookForm :book="onAddBook" @submit:book="onAddBook" />
      <p>{{ message }}</p>
   </div>
</template>

<script>
import BookForm from '@/components/BookForm.vue';
import { bookService } from '@/services/book.service';
export default {
   components: {
      BookForm,
   },
   data() {
      return {
         book: null,
         message: '',
      };
   },
   methods: {
      async onAddBook(book) {
         try {
            await bookService.create(book)
            this.message = 'Sách được thêm thành công.';
         } catch (error) {
            console.log(error);
         }
      },
   },
   //   created() {
   //      this.onAddBook(this.book);
   //      this.message = '';
   //   },
};
</script>