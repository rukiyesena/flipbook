<template>
  <div>
    <vs-popup :active.sync="offerPopupVisible" title="Teklif Kaydet">

      <b-input-group prepend="Ad" class="mt-3">
        <b-form-input v-model="shipName">
          <b-avatar rounded="sm"></b-avatar>
        </b-form-input>
      </b-input-group>
      <b-input-group prepend="Soyad" class="mt-3">
        <b-form-input v-model="shipSurname">
          <b-avatar rounded="sm"></b-avatar>
        </b-form-input>
      </b-input-group>
      <b-input-group prepend="Mail Adres" class="mt-3">
        <b-form-input v-model="eMail">
          <b-avatar rounded="sm"></b-avatar>
        </b-form-input>
      </b-input-group>
      <b-input-group prepend="Telefon" class="mt-3">
        <b-form-input v-model="shipPhone">
          <b-avatar rounded="sm"></b-avatar>
        </b-form-input>
      </b-input-group>
      <b-input-group prepend="Adres" class="mt-3">
        <b-form-input v-model="address">
          <b-avatar rounded="sm"></b-avatar>
        </b-form-input>
      </b-input-group>
      <b-input-group prepend="Faks" class="mt-3">
        <b-form-input v-model="shipPhone">
          <b-avatar rounded="sm"></b-avatar>
        </b-form-input>
      </b-input-group>
      <b-input-group prepend="Vergi-D." class="mt-3">
        <b-form-input v-model="taxOffice">
          <b-avatar rounded="sm"></b-avatar>
        </b-form-input>
      </b-input-group>
      <b-input-group prepend="Vergi No" class="mt-3">
        <b-form-input v-model="taxNumber">
          <b-avatar rounded="sm"></b-avatar>
        </b-form-input>
      </b-input-group>
      <br>
      <div>
        <vs-button @click="getTeklifOnayList">Teklif Kaydet</vs-button>
      </div>
    </vs-popup>
  
 
  <div v-if="pages.length > 0">

      <div id="fb5-ajax" data-cat="katalog" data-template="true">
        <!-- BACKGROUND FLIPBOOK -->
        <div class="fb5-bcg-book"></div>
        <!-- BEGIN STRUCTURE HTML FLIPBOOK -->

        <div class="fb5" id="fb5">

          <!-- CONFIGURATION BOOK -->
          <section id="config">
            <ul>
              <li id="page_width">1500</li> <!-- width for page -->
              <li id="page_height">1298</li> <!-- height for page -->
              <li id="gotopage_width">25</li> <!-- width for field input goto page -->
              <li id="zoom_double_click">1</li> <!-- value zoom after double click -->
              <li id="zoom_step">0.1</li> <!-- zoom step ( if click icon zoomIn or zoomOut -->
              <li id="toolbar_visible">true</li> <!-- enabled/disabled toolbar -->
              <li id="tooltip_visible">true</li> <!-- enabled/disabled tooltip for icon -->
              <li id="deeplinking_enabled">true</li> <!-- enabled/disabled deeplinking -->
              <li id="lazy_loading_pages">false</li> <!-- enabled/disabled lazy loading for pages in flipbook -->
              <li id="lazy_loading_thumbs">false</li> <!-- enabled/disabled lazdy loading for thumbs -->
              <li id="double_click_enabled">true</li> <!-- enabled/disabled double click mouse for flipbook -->
              <li id="rtl">false</li> <!-- enabled/disabled 'right to left' for eastern countries -->
              <li id="pdf_url"></li> <!-- pathway to a pdf file ( the file will be read live ) -->
              <li id="pdf_scale">1</li>
              <!-- to live a pdf file (if you want to have a strong zoom - increase the value) -->
              <li id="page_mode">double</li> <!-- value to 'single', 'double', or 'auto' -->
              <li id="sound_sheet">img/turning_page.mp3</li> <!-- sound for sheet -->
            </ul>
          </section>
          <!-- BACK BUTTON -->
          <a href="https://www.uzum.com.tr/" id="fb5-button-back">&lt; Geri Dön </a>
          <div id="fb5-container-book">

            <!-- deep linking -->
            <section id="fb5-deeplinking">
              <ul>
                <li v-for="(item, index) in pages" :key="index" :data-address="'page' + index + 1" :data-page="index + 1">
                </li>

              </ul>
            </section>
            <!--  ABOUT -->
            <section id="fb5-about">
            </section>
            <!--  LINKS -->
            <section id="links">
            </section>
            <!--  PAGES -->
            <div id="fb5-book">
              <!--  page 1 -->
              <div v-for="(item, index) in pages" :key="index">
                <div class="fb5-cont-page-book">
                  <div class="fb5-gradient-page"></div>
                  <canvas id="canv1"></canvas>
                  <div class="fb5-page-book">
                    <component :is="item.component" :key="item.ind" :index="item.ind" :page="currentValue"
                      :position="item.position" :item="item" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- BEGIN FOOTER -->

          <div id="fb5-footer">

            <div class="fb5-bcg-tools"></div>
            <a id="fb5-logo" target="_blank" href="#/seventh">
              <img alt="" src="img/logo.png">

            </a>

            <div class="fb5-menu" id="fb5-center">
              <ul>

                <!-- icon_home -->
                <li>

                </li>

                <!-- icon download -->
                <li>
                  <a title="show home page" class="fb5-home"><i class="fa fa-home"></i></a>
                </li> <!-- icon download -->
                <li>
                  <a title="download pdf" class="fb5-download" href="img/file.zip"><i class="fa fa-download"></i></a>
                </li> <!-- icon arrow left -->
                <li>
                  <a title="prev page" class="fb5-arrow-left"><i class="fa fa-chevron-left"></i>
                  </a>
                </li> <!-- icon arrow right -->
                <li>
                  <a title="next page" class="fb5-arrow-right"><i class="fa fa-chevron-right"></i>
                  </a>
                </li> <!-- icon_zoom_in -->
                <li>
                  <a title="zoom in" class="fb5-zoom-in"><i class="fa fa-search-plus"></i></a>
                </li>
                <!-- icon_zoom_out -->
                <li>
                  <a title="zoom out" class="fb5-zoom-out"><i class="fa fa-search-minus"></i></a>
                </li> <!-- icon_zoom_auto -->
                <li>
                  <a title="zoom auto" class="fb5-zoom-auto"><i class="fa fa-search"></i></a>
                </li> <!-- icon_allpages -->
                <li>
                  <a title="show all pages" class="fb5-show-all"><i class="fa fa-list"></i></a>
                </li> <!-- icon fullscreen -->
                <li>
                  <a title="full/normal screen" class="fb5-fullscreen"><i class="fa fa-expand"></i></a>
                </li>
                <li>
                  <cart-drop-down />
                </li>
              </ul>
            </div>
            <div class="fb5-menu" id="fb5-right" style="width: 200px">
              <b-row>
                <b-col>
                  <ul>
                    <!-- icon page manager -->
                    <li class="fb5-goto">
                      <label for="fb5-page-number" id="fb5-label-page-number"></label>
                      <input type="text" id="fb5-page-number" style="width: 25px;" @input="handlePageInputChange">
                      <span id="fb5-page-number-two"></span>
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </div>
          </div>
          <!-- END FOOTER -->
          <!-- BEGIN ALL PAGES -->
          <div id="fb5-all-pages" class="fb5-overlay">
            <section class="fb5-container-pages">
              <div id="fb5-menu-holder">
                <ul id="fb5-slider">
                  <!-- thumb 1 -->
                  <li class="1">

                  </li>

                  <!-- thumb 2 -->
                  <li class="2">
                    <img alt="" data-src="pages/2_.jpg">
                  </li> <!-- thumb 3 -->
                  <li class="3">
                    <!-- img -->
                    <img alt="" data-src="pages/3_.jpg">

                  </li> <!-- thumb 4 -->
                  <li class="4">
                    <!-- img -->
                    <img alt="" data-src="pages/4_.jpg">

                  </li> <!-- thumb 5 -->
                  <li class="5">
                    <!-- img -->
                    <img alt="" data-src="pages/5_.jpg">

                  </li>

                  <!-- thumb 6 and 7 -->
                  <li class="6">
                    <!-- img -->
                    <img alt="" data-src="pages/6_7_.jpg">

                  </li> <!-- thumb 8 and 9 -->
                  <li class="8">
                    <!-- img -->
                    <img alt="" data-src="pages/8_9_.jpg">

                  </li> <!-- thumb 10 -->
                  <li class="10">
                    <!-- img -->
                    <img alt="" data-src="pages/10_.jpg">

                  </li>

                  <!-- thumb 11 -->
                  <li class="11">
                    <!-- img -->
                    <img alt="" data-src="pages/11_.jpg">

                  </li> <!-- thumb 12 -->
                  <li class="12">
                    <!-- img -->
                    <img alt="" data-src="pages/12_.jpg">

                  </li>
                  <li class="13">
                    <!-- img -->

                  </li>
                </ul>

              </div>

            </section>

          </div>
          <!-- END ALL PAGES --> <!-- BEGIN SOUND FOR SHEET  -->
          <audio preload="auto" id="sound_sheet"></audio>
          <!-- END SOUND FOR SHEET --> <!-- BEGIN CLOSE LIGHTBOX  -->
          <div id="fb5-close-lightbox">
            <i class="fa fa-times pull-right"></i>
          </div>
          <!-- END CLOSE LIGHTBOX -->
        </div>


      </div>
    </div>
  </div>


  <!-- end flipbook -->
</template>
<script>
import FirstPage from './pages/FirstPage.vue';
import SecondPage from './pages/SecondPage.vue';
import ThirdPage from './pages/ThirdPage.vue';
import FourthPage from './pages/FourthPage.vue';
import FifthPage from './pages/FifthPage.vue';
import SixthPage from './pages/SixthPage.vue';
import SeventhPage from './pages/SeventhPage.vue';
import EntryPage from "./pages/EntryPage.vue"
import EighthPage from './pages/EighthPage.vue';
import NinthPage from './pages/NinthPage.vue';
import TablePageFirst from './pages/TablePageFirst.vue';
import TablePageSecond from './pages/TablePageSecond.vue';
import CartDropDown from '../../layouts/components/navbar/components/CartDropDown.vue'
import { Icon } from "@iconify/vue2";
import TeklifOnayMail from './TeklifOnayMail.vue';
import FlipBookTeklif from './FlipBookTeklif.vue';

export default {
  mounted() {
    this.$root.$on("teklifOnay", () => {
      this.openOfferPopup();
    });
    console.log(this.pages)
    if (this.pages == "") {
      location.reload();
      this.pages = JSON.parse(localStorage.getItem("pages"))
      console.log(this.pages)
    }
    setInterval(() => {
      const el = document.getElementById('fb5-page-number');
      if (el) {
        this.previousValue = this.currentValue;
        this.currentValue = el.value;
        if (this.previousValue !== this.currentValue) {
        }
      }
    }, 500); // Örneğin, her 1 saniyede bir kontrol edebilirsiniz
    const plugin = document.createElement("script");

    plugin.setAttribute("src", "http://sistem.uzum.com.tr/flipbook-js/js/onload.js");


    document.head.appendChild(plugin);
  },

  beforeDestroy() {
    this.$root.$off("teklifOnay");
  },
  data() {
    return {
      shipName: "",
      taxNumber: "",
      taxOffice: "",
      taxOffice: "",
      address: "",
      shipSurname: "",
      shipPhone: "",
      eMail: "",
      offerPopupVisible: false,
      
      selectedPageIndex: 0,

      previousValue: null,
      currentValue: null,
      selectedPage: "",
    }
  },
  computed: {
    pages: {
      get() {
        return JSON.parse(localStorage.getItem("pages"))
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }

    },

  },

  components: {
    CartDropDown,
    Icon,
    TablePageSecond,
    EntryPage,
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage,
    SeventhPage,
    EighthPage,
    NinthPage,
    TablePageFirst,
    FlipBookTeklif,
    TeklifOnayMail
  },
  methods: {
    openOfferPopup() {
      this.offerPopupVisible = true;
    },
    getTeklifOnayList() {
      
  console.log('Adres:', this.shipAddress);
  const arg = {
    // Define the properties needed for GetCrudToOfferList
    quantity: this.quantityLine,
    // ... other properties ...
  };

  const stockCodes = this.$store.state.eCommerce.cartItems.map(item => item.stockCode);
  this.$store.commit('setShipName', this.shipName);
this.$store.commit('setShipAddress', this.shipAddress);
this.$store.commit('setShipPhone', this.shipPhone);
  this.$store.dispatch('GetOfferNumber')
    .then((offerNumberResponse) => {
      const { offerNumber } = offerNumberResponse;

      console.log('Offer Number Response', offerNumberResponse);

   
      return Promise.all(promises);
    })
    .then((crudResponses) => {
      console.log('All CRUD Responses', crudResponses);
      const { offerNumber } = crudResponses[0];
      this.$router.push(`/flipbook/Teklif/Onay/${offerNumber}`);
    })
    .catch((error) => {
      console.error('Error', error);
    });
    this.offerPopupVisible = false;

},

    updateSelectedPageIndex(newPageIndex) {
      console.log("Received new page index:", newPageIndex);
      this.selectedPageIndex = newPageIndex;
    },
    handlePageInputChange(inputValue) {
      console.log("dsd")
      setPage($('#fb5-page-number').val());
      const pageNumber = parseInt(inputValue);
      if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= this.pages.length) {
        this.selectedPageIndex = pageNumber - 1;
        this.navigateToSelectedPage();
      }
    },
    navigateToSelectedPage() {
      this.$emit('changePage', this.selectedPageIndex);
    },
    openKatalogPopup() {
      this.Katalog();
    },


  },

};
</script>
<style>
@import './css/style.css';
@import './css/font-awesome.min.css';
@import './css.css?family=Play:400,700';
@import './content.css';


html,
body {
  margin: 0;
  padding: 0;
  overflow: auto !important;
  @import './wp-content/plugins/magicbook-addon/assets/css/magicbook-addon.css';
  @import './wp-includes/css/dist/block-library/style.min.css?ver=6.4.1';
  @import './wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.8.1';
  @import './wp-content/themes/magicbook/style.css';
  @import './wp-content/themes/magicbook/css/magicbook.min.css';
  @import './wp-content/themes/magicbook/font-awesome/css/font-awesome.min.css';
  @import './wp-content/plugins/js_composer/assets/lib/flexslider/flexslider.min.css?ver=6.7.0';
  @import './wp-content/themes/magicbook/js/vendors/colorbox/colorbox.css?ver=1.2';
  @import './wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=6.7.0';

}
</style>