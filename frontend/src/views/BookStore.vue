<template>
   <div class="page row">
      <div class="col-md-12">
         <InputSearch v-model="searchText" />
      </div>
   </div>

      <div class="mt-3">
         <h4 class="text-center">
            Danh sách tác phẩm
            
         </h4>
      </div>

         <div class="my-3 d-flex justify-content-evenly">
               <!-- refresh -->
               <button class="btn btn-primary" @click="refreshList()">
                  <i class="fas fa-redo" /> Làm mới
               </button>

               <!-- add -->
               <router-link :to="{
               name: 'book.add'
               }">
                  <button class="btn btn-success">
                     <i class="fas fa-plus" /> Thêm mới
                  </button>
               </router-link>
               

               <!-- delete -->
               <button class="btn  btn-danger" @click="onDeleteBooks">
                  <i class="fas fa-trash" /> Xóa tất cả
               </button>
         </div>
     
         <div class="row">
            <div class="col-md-8">
                  <BookList v-if="filteredBooksCount > 0" :books="filteredBooks" v-model:activeIndex="activeIndex" />
                  <p v-else>
                     Không có tác phẩm nào.
                  </p>
            </div>

           
            <div class="col-md-4">
                
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
                           <span class="btn btn-warning">
                              <i class="fas fa-edit" /> Hiệu chỉnh</span>
                        </router-link>

                     </div>
                 
            </div>
         </div>
      <!-- </div> -->
     
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
            const { name, author, address, favorite } = book;
            return [name, author, address, favorite].join('');
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

      //			goToAddBook() {
      //				this.$router.push({ name: 'book.add' });
      //			},
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

<!-- fkjpdjhflisdfilsdp commit -->