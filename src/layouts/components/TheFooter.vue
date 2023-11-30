<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div style="">

    <footer class="" :class="classes" style="background-color: #E4E5E7;">
      
      <div style="padding: 50px">
        <b-row align-h="center">
          <b-col lg="4" sm="12" align-self="start">
            <b-row>
              <b-col>
                <img style="max-width: 300px;" v-bind:src="logoUrl" alt="algolia-logo" />
              </b-col>
            </b-row>
            
            <blockquote style=" margin: 0px !important; border-top: 2px solid #303e47; width: fit-content;">

              <b-row align-h="left" style="margin-top: 25px">
                <b-col cols="2">
                  <Icon icon="mdi:linkedin" width="40" height="40" :color="themeColor" />
                </b-col>
                <b-col cols="2">
                  <Icon icon="ic:baseline-whatsapp" width="40" height="40" :color="themeColor" />
                </b-col>
                <b-col cols="2">
                  <Icon icon="ic:baseline-facebook" width="40" height="40" :color="themeColor" />
                </b-col>
                <b-col cols="2">
                  <Icon icon="mdi:instagram" width="40" height="40" :color="themeColor" />
                </b-col>
              </b-row>
            </blockquote>
            <b-row style="margin-top: 25px" align-h="start">
              <b-col cols="1">
                <Icon icon="gis:position" width="30" height="30" :color="themeColor" />
              </b-col>
              <b-col align-self="end">
                <h5>{{ address }}</h5>
              </b-col>
            </b-row>
            <b-row style="margin-top: 25px" align-h="start">
              <b-col cols="1">
                <Icon icon="ic:baseline-phone" width="30" height="30" :color="themeColor" />
              </b-col>
              <b-col align-self="end">
                <h5>{{ phone }}</h5>
              </b-col>
            </b-row>

          </b-col>

          <b-col lg="3" sm="12" v-for="(item, index) in navSitemapItems" :key="index" >
            <vs-list>
              <div>

                <vs-list-header :title="item.name"></vs-list-header>
                <div v-if="item.submenu" v-for="(item2, index2) in item.submenu" :key="index2">
                  <div @click="goToPage(item2.url)">
                    <vs-list-item :title="item2.name"></vs-list-item>
                  </div>
                </div>


              </div>
            </vs-list>

          </b-col>
        </b-row>
        <b-row v-if="pos == 'iyzico'" style="    margin-top: 25px;" align-h="end">
          <b-col></b-col>
          <b-col lg="4" sm="12"><img src="https://murattekstil.com.tr/img/logo_band_colored@1X.png" alt="iyzico"></b-col>

        </b-row>
        <span class="md:flex hidden items-center">
          <span>{{ footerTitle }}
            <strong><a :href="footerTel">{{ acceptNumber(footerTel) }}</a></strong></span>
        </span>
      </div>

    </footer>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import userJson from "../../../public/user.json";
import navSitemapItems from "@/layouts/components/vertical-nav-menu/navSitemapItems.js";
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String,
    },
  },
  components: { Icon },
  data() {
    return {
      themeColor: userJson.themeColor,
      address: userJson.address,
      phone: userJson.phone,
      footerTitle: "",
      footerTel: "",
      pos: "",
      logoUrl: "",
      navSitemapItems: ""
    };
  },
  created() {
    this.footerTitle = userJson.footerBaslik;
    this.footerTel = userJson.footerTel;
    this.pos = userJson.pos;
    this.logoUrl = userJson.userLogo;
    this.navSitemapItems = navSitemapItems 
  },
  methods: {
    goToPage(path) {
      console.log(path)
      this.$router.push(path).catch(() => { })
    },
    acceptNumber(gelen) {
      return gelen
        .replace(/\D/g, "")
        .replace(/^(\d{1})(\d{3})(\d{3})(\d{4})/g, "$1 ($2) $3 $4")
        .replace(/^(\d{1})(\d{3})(\d{3})(\d*)/g, "$1 ($2) $3 $4")
        .replace(/^(\d{1})(\d{3})(\d{1,3})/g, "$1 ($2) $3")
        .replace(/^(\d{1})(\d{1,3})/g, "$1 ($2")
        .substring(0, 16)
        .trim();
    },
  },
};
</script>
