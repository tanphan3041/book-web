import { createWebHistory, createRouter } from 'vue-router';
import BookStore from '@/views/BookStore.vue';

const routes = [
   {
      path: '/',
      name: 'bookstore',
      component: BookStore,
   },

	{
		path: '/:pathMatch(.*)*',
		name: 'notfound',
		component: () => import('@/views/NotFound.vue'),
	},
   {
      path: '/books/:sid',
      name: 'book.edit',
      component: () => import('@/views/BookEdit.vue'),
      props: (route) => ({ bookId: parseInt(route.params.sid) })
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
