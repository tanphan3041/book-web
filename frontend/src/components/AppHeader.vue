<template>
   <!-- <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a href="/" class="navbar-brand">Quản lý mượng sách</a>
      <div class="mr-auto navbar-nav">
         <li class="nav-item">
            <router-link :to="{ name: 'bookstore' }" class="nav-link">
               Tác phẩm
               <i class="fa-sharp fa-solid fa-book"></i>
            </router-link>
         </li>
         <li class="nav-item">
            <router-link :to="{ name: '' }" class="nav-link">
               Danh mục mượn
               <i class="fa-solid fa-bookmark"></i>
            </router-link>
         </li>
      </div>
      <div class="ml-auto navbar-nav">
         <li class="nav-item" >
            <router-link :to="{ name: '' }" class="nav-link">
               Đăng nhập
               <i class="fa-solid fa-user"></i>
            </router-link>
         </li>
      </div>
   </nav> -->

<nav class="navbar navbar-expand-lg bg-light">
   <div class="container">
     
         <router-link to="/home" class="nav-brand">
            <img src="@/img/LOGO.png" alt="Logo" class="logo" />
            <span class="text-dark">BookRent</span>
         </router-link>
    

    
         <div class="d-flex navbar-expand-sm mr-auto">

           
            <router-link to="/home" class="navbar-link px-2">
               <span class="text-dark">Home</span>
            </router-link>

            <router-link to="/bookstore" class="navbar-link px-2">
               <span class="text-dark">Book</span>
            </router-link>
            
            <router-link to="/book.add" class="navbar-link px-2">
               <span class="text-dark">About</span>
            </router-link>
            
            <router-link to="/login" class="navbar-link px-2">
               <span class="text-dark">Login</span>
            </router-link>
            
            <!-- <router-link :to="{
               name: 'book.add'
            }">
               <button class="btn btn-sm btn-success">
                  <i class="fas fa-plus" /> Thêm mới
               </button>
            </router-link> -->
         </div>
        


   </div>
</nav>
   
</template>

<script>
import BookCard from '@/components/BookCard.vue';
import { bookService } from '@/services/book.service';
export default {
   components: {
      // eslint-disable-next-line vue/no-unused-components
      BookCard,
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

.nav-brand{
   text-decoration: none;
}

.logo{
   height: 100px;
   width: 100px;
}

.navbar-link{
   text-decoration: none;
}
</style>
