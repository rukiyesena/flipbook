<!-- =========================================================================================
    File Name: Main.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div class="layout--main" :class="[
		layoutTypeClass,
		navbarClasses,
		footerClasses,
		{ 'no-scroll': isAppPage },
	]">
		<v-nav-menu :navMenuItems="navMenuItems" title="Vuexy" parent=".layout--main" />

		<div id="content-area" :class="[contentAreaClass, { 'show-overlay': bodyOverlay }]">
			<div id="content-overlay" />

			<!-- Navbar -->
			<template v-if="mainLayoutType === 'horizontal' && windowWidth >= 1200">
				<the-navbar-horizontal :navbarType="navbarType" :class="[
					{ 'text-white': isNavbarDark && !isThemeDark },
					{ 'text-base': !isNavbarDark && isThemeDark },
				]" />

				<div style="height: 62px" v-if="navbarType === 'static'"></div>

				<h-nav-menu :class="[
					{ 'text-white': isNavbarDark && !isThemeDark },
					{ 'text-base': !isNavbarDark && isThemeDark },
				]" :navMenuItems="navMenuItems" />
			</template>

			<template v-else>
				<the-navbar-vertical :navbarColor="navbarColor" :class="[
					{ 'text-white': isNavbarDark && !isThemeDark },
					{ 'text-base': !isNavbarDark && isThemeDark },
				]" />
			</template>
			<!-- /Navbar -->

			<div class="content-wrapper">
				<div class="router-view">
					<div class="router-content">
						<transition :name="routerTransition">
							<div v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
								class="router-header flex flex-wrap items-center mb-6">
								<div class="content-area__heading" :class="{
									'pr-4 border-0 md:border-r border-solid border-grey-light':
										$route.meta.breadcrumb,
								}">
									<h2 class="mb-1">{{ routeTitle }}</h2>
								</div>

								<!-- BREADCRUMB -->
								<vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb" :route="$route"
									:isRTL="$vs.rtl" />

								<!-- DROPDOWN -->
							</div>
						</transition>
						<div class="content-area__content">
							<go-top style="
                  width: 50px !important;
                  height: 50px !important;
                  bottom: calc(20px) !important;
                  border-radius: 5% !important;
                "></go-top>
							<transition :name="routerTransition" mode="out-in">
								<router-view @changeRouteTitle="changeRouteTitle" @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)
									" />
							</transition>
						</div>
					</div>
				</div>
			</div>
			<the-footer />
		</div>
	</div>
</template>


<script>
//global components
import userJson from "../../../public/user.json";
import BackToTop from "vue-backtotop";
import HNavMenu from "@/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue";
import navMenuItemsJsAdmin from "@/layouts/components/vertical-nav-menu/navMenuItemsAdmin.js";
import navMenuItemsJs from "@/layouts/components/vertical-nav-menu/navMenuItems.js";
import router from "../../router"

import TheNavbarHorizontal from "@/layouts/components/navbar/TheNavbarHorizontal.vue";
import TheNavbarVertical from "@/layouts/components/navbar/TheNavbarVertical.vue";
import TheFooter from "@/layouts/components/TheFooter.vue";
import themeConfig from "@/../themeConfig.js";
import VNavMenu from "@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue";
import Store from "../../store/store";
import state from "../../store/state";
import GoTop from "@inotom/vue-go-top";
export default {
	components: {
		BackToTop,
		HNavMenu,
		TheFooter,
		TheNavbarHorizontal,
		TheNavbarVertical,
		VNavMenu,
		GoTop,
	},
	data() {
		return {
			subCategoriesControl: userJson.subCategories,
			categoryList: [],
			footerType: themeConfig.footerType || "static",
			hideScrollToTop: themeConfig.hideScrollToTop,
			isNavbarDark: false,
			navbarColor: themeConfig.navbarColor || "#fff",
			navbarType: themeConfig.navbarType || "floating",
			navMenuItems: [],
			routerTransition: themeConfig.routerTransition || "none",
			routeTitle: this.$route.meta.pageTitle,
		};
	},
	watch: {
		$route() {
			this.routeTitle = this.$route.meta.pageTitle;
		},
		isThemeDark(val) {
			const color = this.navbarColor == "#fff" && val ? "#10163a" : "#fff";
			this.updateNavbarColor(color);
		},
		"$store.state.mainLayoutType"(val) {
			this.setNavMenuVisibility(val);
		},
		categories() { 
		}
	},
	computed: {
		categories() {
			return this.$store.state.eCommerce.CategoryList
		},
		bodyOverlay() {
			return this.$store.state.bodyOverlay;
		},
		contentAreaClass() {
			if (this.mainLayoutType === "vertical") {
				if (this.verticalNavMenuWidth == "default")
					return "content-area-reduced";
				else if (this.verticalNavMenuWidth == "reduced")
					return "content-area-lg";
				else return "content-area-full";
			}
			// else if(this.mainLayoutType === "boxed") return "content-area-reduced"
			else return "content-area-full";
		},
		footerClasses() {
			return {
				"footer-hidden": this.footerType == "hidden",
				"footer-sticky": this.footerType == "sticky",
				"footer-static": this.footerType == "static",
			};
		},
		isAppPage() {
			return this.$route.meta.no_scroll;
		},
		isThemeDark() {
			return this.$store.state.theme == "dark";
		},
		layoutTypeClass() {
			return `main-${this.mainLayoutType}`;
		},
		mainLayoutType() {
			return this.$store.state.mainLayoutType;
		},
		navbarClasses() {
			return {
				"navbar-hidden": this.navbarType == "hidden",
				"navbar-sticky": this.navbarType == "sticky",
				"navbar-static": this.navbarType == "static",
				"navbar-floating": this.navbarType == "floating",
			};
		},
		verticalNavMenuWidth() {
			return this.$store.state.verticalNavMenuWidth;
		},
		windowWidth() {
			return this.$store.state.windowWidth;
		},
	},

	methods: {
		StringToXML(oString) {
			//code for IE
			if (window.ActiveXObject) {
				var oXML = new ActiveXObject("Microsoft.XMLDOM");
				oXML.loadXML(oString);
				return oXML;
			}
			// code for Chrome, Safari, Firefox, Opera, etc.
			else {
				return new DOMParser().parseFromString(oString, "text/xml");
			}
		},
		scrollToTop() {
			window.scrollTo(0, 0);
		},
		xml2json(xml) {
			try {
				var obj = {};

				if (xml.children.length > 0) {
					for (var i = 0; i < xml.children.length; i++) {
						var item = xml.children.item(i);
						var nodeName = item.nodeName;

						if (typeof obj[nodeName] == "undefined") {
							obj[nodeName] = this.xml2json(item);
						} else {
							if (typeof obj[nodeName].push == "undefined") {
								var old = obj[nodeName];

								obj[nodeName] = [];
								obj[nodeName].push(old);
							}
							obj[nodeName].push(this.xml2json(item));
						}
					}
				} else {
					obj = xml.textContent;
				}
				return obj;
			} catch (e) {
				console.log(e.message);
			}
		},
		 
		menuloadserkan() {
			//  alert(this.$store.state.ROL);
			const vm = this;
			vm.navMenuItems = []
			vm.navMenuItems = navMenuItemsJs;
			console.log(this.$store.state.ROL)
			if (this.$store.state.ROL == "ADMIN") {
				vm.navMenuItems = navMenuItemsJsAdmin

			}
			console.log(vm.navMenuItems)
		},
		changeRouteTitle(title) {
			this.routeTitle = title;
		},
		updateNavbarColor(val) {
			this.navbarColor = val;
			if (val == "#fff") this.isNavbarDark = false;
			else this.isNavbarDark = true;
		},
		setNavMenuVisibility(layoutType) {
			if (
				(layoutType === "horizontal" && this.windowWidth >= 1200) ||
				(layoutType === "vertical" && this.windowWidth < 1200)
			) {
				this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", false);
				this.$store.dispatch("updateVerticalNavMenuWidth", "no-nav-menu");
			} else {
				this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
			}
		},
	},
	created() {


		document.documentElement.style.setProperty(
			"--main-bg-color",
			userJson.themeColor
		);
		this.menuloadserkan();
		const color =
			this.navbarColor == "#fff" && this.isThemeDark
				? "#10163a"
				: this.navbarColor;
		this.updateNavbarColor(color);
		this.setNavMenuVisibility(this.$store.state.mainLayoutType);
	},
};
</script>
<style lang="scss">
:root {
	/* default value */
	--main-bg-color: brown;
}

.vue-go-top[data-v-0c20a6ee] {
	background-color: var(--main-bg-color) !important;
}
</style>
