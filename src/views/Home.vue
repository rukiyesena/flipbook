<!-- =========================================================================================
    File Name: DashboardEcommerce.vue
    Description: Dashboard - Ecommerce
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div>
    <div class="related-products text-center">
      <b-carousel id="carousel-1" v-model="slide" :interval="5000" controls indicators fade background="#ababab"
        img-width="924" img-height="380" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide v-for="data in bannerList" :key="data.objectId">
          <template #img>
            <img class="d-block img-fluid w-100" width="924" height="380" :src="sistemurl + data.RESIMADI"
              @click="routeToUrl(data.ACIKLAMA)" alt="image slot" />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <b-row>
      <b-col lg="6" style="margin-top: 15px">
        <vx-card title="DUYURULAR">
          <vs-table max-items="5" pagination :data="duyuruList">
            <template slot="thead">
              <vs-th sort-key="ACIKLAMA">AÇIKLAMA</vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr state="" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td>
                  {{ data[indextr].ACIKLAMA }}
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vx-card>
      </b-col>
      <b-col lg="6" style="margin-top: 15px">
        <vx-card title="HABERLER">
          <vs-table max-items="5" pagination :data="haberList">
            <template slot="thead">
              <vs-th sort-key="ACIKLAMA">AÇIKLAMA</vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr state="" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td>
                  {{ data[indextr].ACIKLAMA }}
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vx-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import { BCarousel, BCarouselSlide, BCardText } from "bootstrap-vue";
import Store from "../store/store";
import state from "../store/state";

import { Autoplay, Pagination, Navigation } from "swiper";
import { isMobile } from "mobile-device-detect";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { BImg } from "bootstrap-vue";
import userJson from "../../public/user.json";

export default {
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      dir: false,
      sistemurl: "",
      duyuruList: [],
      haberList: [],
      cariKod: "",

      bannerList: []
    };
  },

  components: {
    BCarousel,
    BCarouselSlide,
    BCardText,
    swiper,
    swiperSlide,
    BImg
  },

  methods: {
    routeToUrl(url) { 
      window.open(url);
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    isMobile: function () {
      return isMobile;
    },
    bannerListesi() {
      var vm = this;
      var vs = this.$vs;
      const soap = require("soap");
      let url = state.sistemAddress;

      const args = {
        token: Store.state.tokenId,
        TUR: "Banner",
        DURUM: "Aktif"
      };
      soap.createClient(url, function (err, client) {
        client.B2B_LS_PanelIslem(args, function (err, result) {
          try {
            vm.veriler = JSON.parse(result.B2B_LS_PanelIslemResult);
            vm.bannerList = vm.veriler;
          } catch (error) {
            console.log(result);
          }
        });
      });
    },
    haberlerList() {
      var vm = this;
      var vs = this.$vs;
      const soap = require("soap");
      let url = state.sistemAddress;

      const args = {
        token: Store.state.tokenId,
        TUR: "Haber",
        DURUM: "Aktif"
      };
      soap.createClient(url, function (err, client) {
        client.B2B_LS_PanelIslem(args, function (err, result) {
          try {
            vm.veriler = JSON.parse(result.B2B_LS_PanelIslemResult);
            vm.haberList = vm.veriler;
          } catch (error) {
            console.log(result);
          }

          /* if (result.B2B_LS_PanelIslemResult == "-1") {
            Store.dispatch("logout");
            //this.$store.dispatch('login', payload)
          }*/
        });
      });
    },
    duyuruListesi() {
      var vm = this;
      var vs = this.$vs;
      const soap = require("soap");
      let url = state.sistemAddress;

      const args = {
        token: Store.state.tokenId,
        TUR: "Duyuru",
        DURUM: "Aktif"
      };
      soap.createClient(url, function (err, client) {
        client.B2B_LS_PanelIslem(args, function (err, result) {
          if (
            result.B2B_LS_PanelIslemResult == "-1" &&
            userJson.musteriTanim == false
          ) {
            Store.dispatch("logout");
            //this.$store.dispatch('login', payload)
          }
          try {
            vm.veriler = JSON.parse(result.B2B_LS_PanelIslemResult);
            vm.duyuruList = vm.veriler;
          } catch (error) {
            console.log(result);
          }
          /* if (result.B2B_LS_PanelIslemResult == "-1") {
            Store.dispatch("logout");
            //this.$store.dispatch('login', payload)
          }*/
        });
      });
    }
  },
  created() {
    this.haberlerList();
    this.duyuruListesi();
    this.bannerListesi();
    this.sistemurl = userJson.tanimUrl;
  }
};
</script>

<style lang="scss">
.chat-card-log {
  height: 400px;

  .chat-sent-msg {
    background-color: #f2f4f7 !important;
  }
}
</style>
