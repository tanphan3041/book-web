<template>
   <div v-if="book" class="page">
      <h4>Hiệu chỉnh Liên hệ</h4>
      <BookForm :book="book" @submit:book="onUpdateBook" @delete:book="onDeleteBook" />
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
   props: {
      bookId: { type: String, required: true },
   },
   data() {
      return {
         book: null,
         message: '',
      };
   },
   methods: {
      async getBook(id) {
         try {
            this.book = await bookService.get(id);
         } catch (error) {
            console.log(error);
            // Redirect to NotFound page and keep URL intact
            this.$router.push({
               name: 'notfound',
               params: {
                  pathMatch: this.$route.path.split('/').slice(1)
               },
               query: this.$route.query,
               hash: this.$route.hash,
            });
         }
      },
      async onUpdateBook(book) {
         try {
            await bookService.update(book.id, book);
            this.message = 'Sách cập nhật thành công.';
         } catch (error) {
            console.log(error);
         }
      },
      async onDeleteBook(id) {
         if (confirm('Bạn muốn xóa sách này?')) {
            try {
               await bookService.delete(id);
               this.$router.push({ name: 'bookstore' });
            } catch (error) {
               console.log(error);
            }
         }
      },
   },
   created() {
      this.getBook(this.bookId);
      this.message = '';
   },
};
</script>