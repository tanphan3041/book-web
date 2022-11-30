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
            
            <router-link to="/" class="navbar-link px-2">
               <span class="text-dark">About</span>
            </router-link>
            
            <router-link to="/" class="navbar-link px-2">
               <span class="text-dark">Login</span>
            </router-link>
            
         </div>
        
         <div v-if="!currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
               <router-link to="/register" class="nav-link">
                  <font-awesome-icon icon="user-plus" />Sign Up
               </router-link>
            </li>
            <li class="nav-item">
               <router-link to="/login" class="nav-link">
                  <font-awesome-icon icon="sign-in-alt" />Login
               </router-link>
            </li>
         </div>
         
         <div v-if="currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
               <router-link to="/profile" class="nav-link">
                  <font-awesome-icon icon="user" />
                  {{ currentUser.username }}
               </router-link>
            </li>
            <li class="nav-item">
               <a class="nav-link" href @click.prevent="logOut">
                  <font-awesome-icon icon="sign-out-alt" />LogOut
               </a>
            </li>
         </div>
       
   </div>
</nav>
   
</template>

<script>
export default {
   computed: {
      currentUser() {
         return this.$store.state.auth.user;
      },
      showAdminBoard() {
         if (this.currentUser && this.currentUser.roles) {
            return this.currentUser.roles.includes('ROLE_ADMIN');
         }

         return false;
      },
      showModeratorBoard() {
         if (this.currentUser && this.currentUser.roles) {
            return this.currentUser.roles.includes('ROLE_MODERATOR');
         }

         return false;
      }
   },
   methods: {
      logOut() {
         this.$store.dispatch('auth/logout');
         this.$router.push('/login');
      }
   }
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
