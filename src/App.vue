<!-- =========================================================================================
	File Name: App.vue
	Description: Main vue file - APP
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
	<div id="app" :class="vueAppClasses">
		<router-view @setAppClasses="setAppClasses" />
	</div>
</template>

<script>
import themeConfig from "@/../themeConfig.js";
import userJson from "../public/user.json";

export default {
	data() {
		return {
			vueAppClasses: [],
			xmlItems: []
		};
	},
	watch: {
		"$store.state.theme"(val) {
			this.toggleClassInBody(val);
		},
		"$vs.rtl"(val) {
			document.documentElement.setAttribute("dir", val ? "rtl" : "ltr");
		}
	},
	methods: {
		toggleClassInBody(className) {
			if (className == "dark") {
				if (document.body.className.match("theme-semi-dark"))
					document.body.classList.remove("theme-semi-dark");
				document.body.classList.add("theme-dark");
			} else if (className == "semi-dark") {
				if (document.body.className.match("theme-dark"))
					document.body.classList.remove("theme-dark");
				document.body.classList.add("theme-semi-dark");
			} else {
				if (document.body.className.match("theme-dark"))
					document.body.classList.remove("theme-dark");
				if (document.body.className.match("theme-semi-dark"))
					document.body.classList.remove("theme-semi-dark");
			}
		},
		setAppClasses(classesStr) {
			this.vueAppClasses.push(classesStr);
		},
		handleWindowResize() {
			this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);

			// Set --vh property
			document.documentElement.style.setProperty(
				"--vh",
				`${window.innerHeight * 0.01}px`
			);
		},
		handleScroll() {
			this.$store.commit("UPDATE_WINDOW_SCROLL_Y", window.scrollY);
		},
		parseXML(data) {
			return new Promise(resolve => {
				var k = "";
				var arr = [],
					parser = new xml2js.Parser({
						trim: true,
						explicitArray: true
					});
				parser.parseString(data, function (err, result) {
					var obj = result.Employee;
					for (k in obj.emp) {
						var item = obj.emp[k];
						arr.push({
							id: item.id[0],
							name: item.name[0],
							email: item.email[0]
						});
					}
					resolve(arr);
				});
			});
		}
	},

	mounted() {
		this.toggleClassInBody(themeConfig.theme);
		this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);

		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	},
	created() {

		// this.$store.dispatch("initAuth");
		let dir = this.$vs.rtl ? "rtl" : "ltr";
		document.documentElement.setAttribute("dir", dir);

		window.addEventListener("resize", this.handleWindowResize);
		window.addEventListener("scroll", this.handleScroll);
		try {
    let args = {
      page: 0
    };

			this.$store.dispatch("getDataCategoryList", args)
				.then(response => {
					if (response === true) { 
						 
					}
				})
				.catch(error => {
					console.error("Error fetching category list:", error);
				});
		} catch (error) {
			console.log(error);
		}

		const data = [];
		data["servisAdresi"] = userJson.userService;


		data["id"] = localStorage.getItem("id");
		data["B2BfirmaAdi"] = localStorage.getItem("B2BfirmaAdi");
		data["tokenId"] = localStorage.getItem("tokenId");
		data["email"] = localStorage.getItem("email");
		data["adres"] = localStorage.getItem("adres");
		data["tel1"] = localStorage.getItem("tel1");
		data["logoUrl"] = localStorage.getItem("logoUrl");
		data["ROL"] = localStorage.getItem("ROL");
		data["imgurl"] = localStorage.getItem("imgurl");
		data["STOCKPRICETYPEID"] = localStorage.getItem("STOCKPRICETYPEID");

		localStorage.setItem("servisAdresi", data["servisAdresi"]);
		localStorage.setItem("id", localStorage.getItem("id"));
		localStorage.setItem("B2BfirmaAdi", localStorage.getItem("B2BfirmaAdi"));
		localStorage.setItem("tokenId", localStorage.getItem("tokenId"));
		localStorage.setItem("email", localStorage.getItem("email"));
		localStorage.setItem("adres", localStorage.getItem("adres"));
		localStorage.setItem("tel1", localStorage.getItem("tel1"));
		localStorage.setItem("logoUrl", localStorage.getItem("logoUrl"));
		localStorage.setItem("ROL", localStorage.getItem("ROL"));
		localStorage.setItem("imgurl", localStorage.getItem("imgurl"));
		localStorage.setItem("STOCKPRICETYPEID", localStorage.getItem("STOCKPRICETYPEID"));
 

		this.$store.commit("setToken", data);
/*
		this.$store
			.dispatch("tokenKontrol")
			.then(response => {
				if (response == "-1") {
					data["isCurrActive"] = false;
				} else {
					data["isCurrActive"] = true;
				}
			});*/

	},
	destroyed() {
		window.removeEventListener("resize", this.handleWindowResize);
		window.removeEventListener("scroll", this.handleScroll);
	}
};
</script>
