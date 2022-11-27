<template>
   <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">Ứng dụng Quản lý mượng sách</a>
      <div class="mr-auto navbar-nav">
         <li class="nav-item">
            <router-link :to="{ name: 'booklist' }" class="nav-link">
               Tác phẩm
               <i class="fas fa-address-book" />
            </router-link>
         </li>
      </div>
   </nav>
</template>
