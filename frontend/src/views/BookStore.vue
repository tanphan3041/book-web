<template>
   <div class="page row">
      <div class="col-md-12">
         <InputSearch v-model="searchText" />
      </div>
   </div>

      <!-- <div class="mt-3">
         <div class="col-md-6 col-lg-6">
         </div>
         <h4>
            Danh sách tác phẩm
            
         </h4>

         <BookList v-if="filteredBooksCount > 0" :books="filteredBooks" v-model:activeIndex="activeIndex" />
         <p v-else>
            Không có tác phẩm nào.
         </p>
         <div class="mt-3 row justify-content-around align-items-center">
            <button class="btn btn-sm btn-primary" @click="refreshList()">
               <i class="fas fa-redo" /> Làm mới
            </button>

            <router-link :to="{
               name: 'book.add'
            }">
               <button class="btn btn-sm btn-success">
                  <i class="fas fa-plus" /> Thêm mới
               </button>
            </router-link>

            <button class="btn btn-sm btn-danger" @click="onDeleteBooks">
               <i class="fas fa-trash" /> Xóa tất cả
            </button>
         </div>
      </div>
      <div class="mt-3 col-md-6">
         <div v-if="activeBook">
            <h4>
               Thông tin sách
               <i class="fas fa-book" />
            </h4>
            <BookCard :book="activeBook" />
            <router-link :to="{
               name: 'book.edit',
               params: { id: activeBook.id },
            }">
               <span class="mt-2 badge badge-warning">
                  <i class="fas fa-edit" /> Hiệu chỉnh</span>
            </router-link>

         </div>
      </div> -->

      <div class="container p-2 mt-4">
         <div class="row d-flex justify-content-center">
            <div class="col-md-8">
               <div class="row">
                  <BookList v-if="filteredBooksCount > 0" :books="filteredBooks" v-model:activeIndex="activeIndex" />
                  <p v-else>
                     Không có tác phẩm nào.
                  </p>
               </div>
            </div>
         </div>
      </div>
     
</template>

<script >
import BookCard from '@/components/BookCard.vue';
import InputSearch from '@/components/InputSearch.vue';
import BookList from '@/components/BookList.vue';
import { bookService } from '@/services/book.service';
export default {
   components: {
      // eslint-disable-next-line vue/no-unused-components
      BookCard,
      InputSearch,
      BookList,
   },
   // The full code will be presented below
   data() {
      return {
         books: [],
         activeIndex: -1,
         searchText: '',
      };
   },
   watch: {
      // Monitor changes on searchText.
      // Release the currently selected book.
      searchText() {
         this.activeIndex = -1;
      },
   },
   computed: {
      // Map books to strings for searching.
      booksAsStrings() {
         return this.books.map((book) => {
            const { name, author, address, favorite, img } = book;
            return [name, author, address, favorite, img].join('');
         });
      },
      // Return books filtered by the search box.
      filteredBooks() {
         if (!this.searchText) return this.books;
         return this.books.filter((book, index) =>
            this.booksAsStrings[index].includes(this.searchText)
         );
      },
      activeBook() {
         if (this.activeIndex < 0) return null;
         return this.filteredBooks[this.activeIndex];
      },
      filteredBooksCount() {
         return this.filteredBooks.length;
      },
   },
   methods: {
      async retrieveBooks() {
         try {
            const booksList = await bookService.getMany();
            this.books = booksList.sort((current, next) =>
               current.name.localeCompare(next.name)
            );
         } catch (error) {
            console.log(error);
         }
      },

      refreshList() {
         this.retrieveBooks();
         this.activeIndex = -1;
      },

      async onDeleteBooks() {
         if (confirm('Bạn muốn xóa tất cả sách?')) {
            try {
               await bookService.deleteMany();
               this.refreshList();
            } catch (error) {
               console.log(error);
            }
         }
      },

      goToAddBook() {
         this.$router.push({ name: 'book.add' });
      },
   },
   mounted() {
      this.refreshList();
   },
};
</script>

<style scoped>
.page {
   text-align: left;
   max-width: 750px;
}
</style>
