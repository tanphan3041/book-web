<template>
   <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
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
   </nav>
</template>
