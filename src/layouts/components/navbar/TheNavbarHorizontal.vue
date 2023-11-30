<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="relative">
    <div class="vx-navbar-wrapper navbar-full p-0">


      <vs-navbar
        class="navbar-custom navbar-skelton"
        :class="navbarClasses"
        :style="navbarStyle"
        :color="navbarColor"
      >
        <router-link
          style="margin-right: auto"
          tag="div"
          to="/home"
          class="vx-logo cursor-pointer flex items-left"
        >
          <b-row align-v="end">
            <b-col style="padding-right: 0px"
              ><img
                style="height: 50px"
                v-bind:src="logoUrl"
                alt="algolia-logo"
            /></b-col>
            <b-col style="padding-left: 0px"
              ><span class="vx-logo-text text-primary" style="font-size: 25px"
                >B2B</span
              ></b-col
            >
          </b-row>

          <!--   <img
            style="height: 50px"
            src="../../../assets/images/logo/buldanslogo.png"
            alt="algolia-logo"
          /> -->
        </router-link>
        <cart-drop-down  />
        <!--mx-auto   <search-bar />

      <notification-drop-down />-->

        <profile-drop-down />
      </vs-navbar>
    </div>
  </div>
</template>

<script>
import Bookmarks from "./components/Bookmarks.vue";
import SearchBar from "./components/SearchBar.vue";
//import NotificationDropDown from "./components/NotificationDropDown.vue"
import ProfileDropDown from "./components/ProfileDropDown.vue";
import Logo from "../Logo.vue";
import CartDropDown from "./components/CartDropDown.vue";
import userJson from "../../../../public/user.json";
import Store from "../../../store/store";
import state from "../../../store/state";
export default {
  data() {
    return { logoUrl: "", ROL: "", varyantlimi: userJson.varyant };
  },
  name: "the-navbar-horizontal",
  props: {
    logo: { type: String },
    navbarType: {
      type: String,
      required: true,
    },
  },
  created() {
   
    
    this.logoUrl = userJson.userLogo;

    this.ROL = state.ROL;
    if (typeof this.ROL == "undefined" || this.ROL == "") {
      this.ROL = "MUSTERI";
    }
    if (this.varyantlimi == "true") this.ROL = "MUSTERI";
  },
  components: {
    CartDropDown,
    Logo,
    Bookmarks,
    SearchBar,
    // NotificationDropDown,
    ProfileDropDown,
  },
  computed: {
    navbarColor() {
      let color = "#fff";
      if (this.navbarType === "sticky") color = "#f7f7f7";
      else if (this.navbarType === "static") {
        if (this.scrollY < 50) {
          color = "#f7f7f7";
        }
      }

      this.isThemedark === "dark"
        ? color === "#fff"
          ? (color = "#10163a")
          : (color = "#262c49")
        : null;

      return color;
    },
    isThemedark() {
      return this.$store.state.theme;
    },
    navbarStyle() {
      return this.navbarType === "static"
        ? { transition: "all .25s ease-in-out" }
        : {};
    },
    navbarClasses() {
      return this.scrollY > 5 && this.navbarType === "static"
        ? null
        : "d-theme-dark-light-bg shadow-none";
    },
    scrollY() {
      return this.$store.state.scrollY;
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    },
  },
};
</script>

