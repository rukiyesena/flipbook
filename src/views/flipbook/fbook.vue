<template>
  <div>
    <vs-popup :active.sync="offerPopupVisible" :title="$t('saveQuote')">
      <b-row>
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('title')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="title" type="text" name="title" v-validate="'required'" />
          <span class="text-danger text-sm" v-show="errors.has('title')">{{ errors.first('title')
          }}</span>
        </b-col>
      </b-row>
      <b-row style="margin-top:8px">
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('shipName')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="shipName" type="text" name="shipName" v-validate="'required'" />
          <span class="text-danger text-sm" v-show="errors.has('shipName')">{{ errors.first('shipName')
          }}</span>
        </b-col>
      </b-row>
      <b-row style="margin-top:8px">
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('shipSurname')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="shipSurname" type="text" name="shipSurname" v-validate="'required'" />
          <span class="text-danger text-sm" v-show="errors.has('shipSurname')">{{ errors.first('shipSurname')
          }}</span>
        </b-col>
      </b-row>
      <b-row style="margin-top:8px">
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('Email')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="eMail" type="text" name="eMail" v-validate="'required|email'" />
          <span class="text-danger text-sm" v-show="errors.has('eMail')">{{ errors.first('eMail')
          }}</span>
        </b-col>
      </b-row>
      <b-row style="margin-top:8px">
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('shipPhone')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="shipPhone" type="text" name="shipPhone" v-validate="'required'" />
          <span class="text-danger text-sm" v-show="errors.has('shipPhone')">{{ errors.first('shipPhone')
          }}</span>
        </b-col>
      </b-row>
      <b-row style="margin-top:8px">
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('shipAddress')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="shipAddress" type="text" name="shipAddress" v-validate="'required'" />
          <span class="text-danger text-sm" v-show="errors.has('shipAddress')">{{ errors.first('shipAddress')
          }}</span>
        </b-col>
      </b-row>
      <b-row style="margin-top:8px">
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('invoiceAddress')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="invoiceAddress" type="text" name="invoiceAddress" v-validate="'required'" />
          <span class="text-danger text-sm" v-show="errors.has('invoiceAddress')">{{ errors.first('invoiceAddress')
          }}</span>
        </b-col>
      </b-row>
      <div>
        <b-form-checkbox v-model="selected" size="md" style="color: red;">{{ $t("tsAddress") }}</b-form-checkbox>
      </div>

      <b-row style="margin-top:8px">
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('fax')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="fax" type="text" name="fax" v-validate="'required'" />
          <span class="text-danger text-sm" v-show="errors.has('fax')">{{ errors.first('fax')
          }}</span>
        </b-col>
      </b-row>
      <b-row style="margin-top:8px">
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('taxOffice')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="taxOffice" type="text" name="taxOffice" v-validate="'required'" />
          <span class="text-danger text-sm" v-show="errors.has('taxOffice')">{{ errors.first('taxOffice')
          }}</span>
        </b-col>
      </b-row>
      <b-row style="margin-top:8px">
        <b-col cols="4" align-self="center">
          <b-form-group :label="'* ' + $t('taxNumber')" label-for="h-first-name">
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <vs-input size="small" v-model="taxNumber" type="text" name="taxNumber" v-validate="'required'" />
          <span class="text-danger text-sm" v-show="errors.has('taxNumber')">{{ errors.first('taxNumber')
          }}</span>
        </b-col>
      </b-row>


      <br>
      <div>
        <vs-button @click="getTeklifOnayList" :disabled="hasInvalidFields">{{ $t('saveQuote') }}</vs-button>
        <vs-button @click="getTeklifOnayList" :disabled="hasInvalidFields">{{ $t('saveQuote') }}</vs-button>
      </div>
    </vs-popup>

    <div v-if="pages">

      <div v-if="pages.length > 0" id="fb5-ajax" data-cat="katalog" data-template="true">
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
                      :position="item.position" :item="item" :searchedValue="searched" />
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
                <li class="mr-8">
                  <b-row align-v="end">
                    <b-col style="    text-align: center;">
                      <Icon icon="wpf:search" width="21" height="21" color="#FFFFFF" />
                    </b-col>
                    <b-col cols="9">
                      <vs-input size="small" v-model="searched" type="text" name="customerStockNo" class="w-full"
                        style="border: none !important;   border-radius: 5px; background: darkgrey;     color: white;"
                        @keyup.enter="filterStockList" />
                    </b-col>

                  </b-row>

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
                <li>
                  <vs-button color="primary" type="filled" @click="getProductInfo">{{ $t('materialInfo') }}</vs-button>
                </li>
                <li>
                  <i18n />
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
                  <li class="mr-8">


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
        <vs-popup type="filled" :title="$t('materialInfo')" :active.sync="imageShow">
          <img :src="imgSrc" style="width: 100%" />
        </vs-popup>

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
import I18n from '../../layouts/components/navbar/components/I18n.vue'
import { Icon } from "@iconify/vue2";
import TeklifOnayMail from './TeklifOnayMail.vue';
import FlipBookTeklif from './FlipBookTeklif.vue';
import { Validator } from "vee-validate";


export default {
  mounted() {
    this.$root.$on("teklifOnay", () => {
      this.openOfferPopup();
    });
    if (this.pages == "") {
      location.reload();
      this.pages = JSON.parse(localStorage.getItem("pages"))
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
      title: "",
      imgSrc: "http://sistem.uzum.com.tr/img/ozellikler-tr.jpg",
      imageShow: false,
      searched: "",
      shipAddress: "",
      invoiceAddress: "", // Add this line
      selected: [],
      options: [{ text: 'Evet', value: 'sameAsShipping' }],
      fieldValidity: {
        shipName: true,
        // ... add other fields here ...
      },
      shipName: "",
      taxNumber: "",
      fax: "",
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
    offerItem: {
      get() {
        return JSON.parse(localStorage.getItem("offerItem"))
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }

    },
    hasInvalidFields() {
      return Object.values(this.fieldValidity).some((validity) => !validity);
    },
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
    I18n,
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
    getProductInfo() {
      this.imgSrc = "http://sistem.uzum.com.tr/img/ozellikler-tr.jpg"
      this.imageShow = true
    },
    getCurrentPageIndex(category) {

      const filteredPages = this.pages.filter(page => page.category === category);

      if (filteredPages.length === 0) {
        return -1;
      }

      const pageIndex = filteredPages[0].page;
      this.selectedPageIndex = pageIndex;
      return pageIndex;
    },
    filterStockList() {
      try {
        let args = {
          pageCounts: "120000",
          ilkKayit: 0,
          stockCode: this.searched
        }
        this.$store
          .dispatch("getDataStock", args)
          .then(response => {
            this.currentPageIndex = this.getCurrentPageIndex(response[0].category);
            let setPageValue = parseInt(this.currentPageIndex) + parseInt(response[0].stockRowNumber)

            // Otomatik olarak input alanına değeri yazdır
            const inputElement = document.getElementById("fb5-page-number");
            if (inputElement) {
              inputElement.value = setPageValue;

              // Trigger the logic as if the "Enter" key was pressed
              setPage(setPageValue);
            } else {
              console.error("Error: Input element with id 'fb5-page-number' not found.");
            }
          });
      } catch (error) {
        console.log(error)
      }
    },
    isFieldValid(fieldName) {
      return this.fieldValidity[fieldName];
    },
    // Function to clear error for a field
    clearError(fieldName) {
      this.fieldValidity[fieldName] = true;
    },
    openOfferPopup() {
      console.log(this.offerItem)
      if (this.offerItem) {
        this.shipName = this.offerItem.shipName
        this.taxNumber = this.offerItem.taxNumber
        this.fax = this.offerItem.fax
        this.taxOffice = this.offerItem.taxOffice
        this.address = this.offerItem.address
        this.shipSurname = this.offerItem.shipSurname
        this.shipPhone = this.offerItem.shipPhone
        this.eMail = this.offerItem.eMail
        this.invoiceAddress = this.offerItem.invoiceAddress;
        this.shipAddress = this.offerItem.shipAddress;
        this.title = this.offerItem.title
      }

      this.offerPopupVisible = true;
    },
    getTeklifOnayList() {
      // Trigger validation
      this.$validator.validateAll().then((result) => {
        if (result) {

          const arg = {
            quantity: this.quantityLine,
          };

          const stockCodes = this.$store.state.eCommerce.cartItems.map(item => item.stockCode);
          let offerItemLocal = {
            title: this.title,
            shipName: this.shipName,
            shipSurname: this.shipSurname,
            eMail: this.eMail,
            invoiceAddress: this.invoiceAddress,
            taxOffice: this.taxOffice,
            fax: this.fax,
            shipAddress: this.shipAddress,
            shipPhone: this.shipPhone,
            taxNumber: this.taxNumber,
            title: this.title,
          }
          console.log(offerItemLocal)
          this.$store.commit('offerItem', offerItemLocal); 
          this.$store.dispatch('GetOfferNumber')
            .then((offerNumberResponse) => {
              const { offerNumber } = offerNumberResponse;


              this.$router.push(`/flipbook/Teklif/Onay/${offerNumber}/false`);
            })
            .catch((error) => {
              console.error('Error', error);
            });

          this.offerPopupVisible = false;
        } else {
          // Validation failed, display error messages
          console.log('Validation failed. Please check the form for errors.');
        }
      });
    },
    updateSelectedPageIndex(newPageIndex) {
      this.selectedPageIndex = newPageIndex;
    },
    handlePageInputChange(inputValue) {
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
  watch: {
    selected(newValues) {
      if (newValues.includes(true)) {
        this.invoiceAddress = this.shipAddress;
      } else {
        this.invoiceAddress = "";
      }
    },
    shipAddress(newShipAddress) {
      if (this.selected.includes(true)) {
        this.invoiceAddress = newShipAddress;
      }
    },
  },

  created() {
    // this.locale = this.$i18n.locale == 'en' ? 'en-US' : this.$i18n.locale;
    const dict = {
      custom: {
        title: {
          required: this.$t('requireTitle')
        },
        shipName: {
          required: this.$t('requireName'),
        },
        shipSurname: {
          required: this.$t('requireSurname'),
        },
        eMail: {
          required: this.$t('requireMail'),
        },
        shipAddress: {
          required: this.$t('requireShipaddress'),
        },
        shipPhone: {
          required: this.$t('requireshipPhone'),
        },
        taxNumber: {
          required: this.$t('requiretaxNumber'),
        },
        taxOffice: {
          required: this.$t('requiretaxOffice'),
        },
        fax: {
          required: this.$t('requirefax'),
        },
      }
    };

    Validator.localize("en", dict);
  },



};
</script>
<style>
.input-size {
  width: 80%;
  /* Set your desired width here */
}

@import './css/style.css';
@import './css/font-awesome.min.css';
@import './css.css?family=Play:400,700';
@import './content.css';

.vs-button {
  -webkit-transition: all .2s ease !important;
  transition: all .2s ease !important;
  padding: 5px !important;
  border: 0 !important;
  border-radius: 6px !important;
  cursor: pointer !important;
  position: relative !important;
  overflow: hidden !important;
  color: #fff !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow: auto !important;
  @import './wp-content/plugins/magicbook-addon/assets/css/magicbook-addon.css';
  @import './wp-includes/css/dist/block-library/style.min.css?ver=6.4.1';
  @import './wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.8.1';

}
</style>