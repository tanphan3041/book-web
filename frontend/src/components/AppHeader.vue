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
    

    
         <div class="d-flex me-auto">

           
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
        
       
   </div>
</nav>
   
</template>

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
