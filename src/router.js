/*=========================================================================================
	File Name: router.js
	Description: Routes for vue-router. Lazy loading is enabled.
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import Store from './store/store'
Vue.use(Router)
import userJson from "../public/user.json"
const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior() {
		return { x: 0, y: 0 }
	},
	routes: [

		{
			// =============================================================================
			// MAIN LAYOUT ROUTES
			// =============================================================================
			path: '',
			component: () => import('./layouts/main/Main.vue'),
			children: [
				{
					path: '/',
					beforeEnter(to, from, next) {

						next("flipbook/FlipBook");

					},
				},


				// =============================================================================
				// Theme Routes
				// =============================================================================
				{
					path: '/home',
					name: 'home',
					component: () => import('@/views/Home.vue'),

					meta: {

						requiresAuth: true,
						//pageTitle: 'Hızlı Satış',
						rule: 'editor'
					}, beforeEnter(to, from, next) {
						if (userJson.entry) {
							next("entry");
						} else {
							next();
						}
					},
				},

				{
					path: '/page2',
					name: 'page-2',
					component: () => import('./views/Page2.vue'),

				},
			],
		},
		// =============================================================================
		// FULL PAGE LAYOUTS
		// =============================================================================
		{
			path: '',
			component: () => import('@/layouts/full-page/FullPage.vue'),
			children: [
				// =============================================================================
				// PAGES
				// =============================================================================
				{
					path: '/login',
					name: 'page-login',
					component: () => import('@/views/pages/Login.vue')
					, beforeEnter(to, from, next) {
						if (userJson.entry) {
							next("entry");
						} else {
							next();
						}
					},
				},
				{
					path: '/entry',
					name: 'page-entry',
					component: () => import('@/views/pages/Entry.vue'),
				},
				{
					path: "/flipbook/FlipBook",
					name: "FlipBook",
					component: () => import("@/views/flipbook/FlipBook.vue"),

				},
				{
					path: '/flipbook/Teklif/Onay/:offerNumber',
					name: "TeklifOnay",
					component: () => import("@/views/flipbook/FlipBookTeklif.vue"),
					props: true, // To pass route params as props to the component


				},

				{
					path: "/flipbook/Teklif/Onay/Musteri",
					name: "FlipBookTeklif",
					component: () => import("@/views/flipbook/FlipBookTeklifMusteri.vue"),

				},
				
				{
					path: '/pages/error-404',
					name: 'page-error-404',
					component: () => import('@/views/pages/Error404.vue')
					, beforeEnter(to, from, next) {
						if (userJson.entry) {
							next("entry");
						} else {
							next();
						}
					},
				},
			]
		},
		// Redirect to 404 page, if no match found
		{
			path: '*',
			redirect: '/pages/error-404'
		}
	],
})

router.afterEach(() => {
	// Remove initial loading
	const appLoading = document.getElementById('loading-bg')
	if (appLoading) {
		appLoading.style.display = "none";
	}
})

export default router
