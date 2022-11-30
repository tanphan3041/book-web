import { createWebHistory, createRouter } from 'vue-router';
import BookStore from '@/views/BookStore.vue';
import HomePage from '@/views/HomePage.vue';
// import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
// import Renter from '@/views/HomePage.vue';



const routes = [
   {
      path: '/home',
      name: 'home',
      component: HomePage,
   },
   
   {
      path: '/bookstore',
      name: 'bookstore',
      component: BookStore,
   },

	{
		path: '/:pathMatch(.*)*',
		name: 'notfound',
		component: () => import('@/views/NotFound.vue'),
	},

   {
      path: '/books/:id',
      name: 'book.edit',
      component: () => import('@/views/BookEdit.vue'),
      props: (route) => ({ bookId: parseInt(route.params.id) })
   },

   {
      path: '/books',
      name: 'book.add',
      component: () => import('@/views/BookAdd.vue')
   },

   {
      path: '/renters',
      name: 'renter.add',
      component: () => import('@/views/RenterAdd.vue')
   },

   {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('@/views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('@/views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('@/views/BoardUser.vue')
    }
];

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
});

export default router;