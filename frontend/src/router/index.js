import { createWebHistory, createRouter } from 'vue-router';
import BookStore from '@/views/BookStore.vue';
import HomePage from '@/views/HomePage.vue';
// import Renter from '@/views/HomePage.vue';
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
// lazy-loaded
const Profile = () => import("@/components/Profile.vue")
const BoardAdmin = () => import("@/components/BoardAdmin.vue")
const BoardModerator = () => import("@/components/BoardModerator.vue")
const BoardUser = () => import("@/components/BoardUser.vue")


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
      path: "/login",
      component: Login,
   },
   {
      path: "/register",
      component: Register,
   },
   {
      path: "/profile",
      name: "profile",
      // lazy-loaded
      component: Profile,
   },
   {
      path: "/admin",
      name: "admin",
      // lazy-loaded
      component: BoardAdmin,
   },
   {
      path: "/mod",
      name: "moderator",
      // lazy-loaded
      component: BoardModerator,
   },
   {
      path: "/user",
      name: "user",
      // lazy-loaded
      component: BoardUser,
   },
];

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
});

export default router;