import { createWebHistory, createRouter } from 'vue-router';
import BookStore from '@/views/BookStore.vue';
import HomePage from '@/views/HomePage.vue';


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
];

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
});

export default router;