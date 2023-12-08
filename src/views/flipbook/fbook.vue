<template>
  <body>
    <div id="fb5-ajax" data-cat="your_book_name" data-template="true">
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
            <li id="pdf_scale">1</li> <!-- to live a pdf file (if you want to have a strong zoom - increase the value) -->
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
                  <h1> {{ item.component }}</h1>

                  <component :is="item.component" :key="item.ind"   /> 
                </div>
              </div>
            </div>


          </div>

        </div>

        <!-- BEGIN FOOTER -->
        <div id="fb5-footer">

          <div class="fb5-bcg-tools"></div>
          <a id="fb5-logo" target="_blank" href="user/flashmaniac.html?ref=flashmaniac">
            <img alt="" src="img/logo.png">

          </a>

          <div class="fb5-menu" id="fb5-center">
            <ul>

              <!-- icon_home -->
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
            </ul>
          </div>

          <div class="fb5-menu" id="fb5-right">
            <ul>
              <!-- icon page manager -->
              <li class="fb5-goto">
                <label for="fb5-page-number" id="fb5-label-page-number"></label>
                <input type="text" id="fb5-page-number" style="width: 25px;">
                <span id="fb5-page-number-two"></span>

              </li>
            </ul>
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
      <!-- END STRUCTURE HTML FLIPBOOK -->
    </div>
    <!-- end flipbook -->
  </body>
</template>
<script>
import FirstPage from './pages/FirstPage.vue';
import SecondPage from './pages/SecondPage.vue';
import ThirdPage from './pages/ThirdPage.vue';
import FourthPage from './pages/FourthPage.vue';
import FifthPage from './pages/FifthPage.vue';
import SixthPage from './pages/SixthPage.vue';
import EighthPage from './pages/EighthPage.vue';
import NinthPage from './pages/NinthPage.vue';

export default {
  mounted() {

    const plugin = document.createElement("script");

    plugin.setAttribute("src", "http://sistem.uzum.com.tr/flipbook-js/js/onload.js");
    // plugin.setAttribute("src", "https://demo.focuxtheme.com/magicbook/wp-content/plugins/magicbook-addon/assets/js/magicbook-addon.js");
    /*    plugin.setAttribute("src", "https://demo.focuxtheme.com/magicbook/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.8.1");
        plugin.setAttribute("src", "https://demo.focuxtheme.com/magicbook/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.8.1");
        plugin.setAttribute("src", "https://demo.focuxtheme.com/magicbook/wp-content/plugins/js_composer/assets/lib/bower/isotope/dist/isotope.pkgd.min.js?ver=6.7.0");
        plugin.setAttribute("src", "https://demo.focuxtheme.com/magicbook/wp-includes/js/hoverIntent.min.js?ver=1.10.2");
        plugin.setAttribute("src", "https://demo.focuxtheme.com/magicbook/wp-content/themes/magicbook/js/plugins.min.js");
        plugin.setAttribute("src", "https://demo.focuxtheme.com/magicbook/wp-content/themes/magicbook/js/custom-for-wp.js"); 
    
    */    //plugin.async = true;
    document.head.appendChild(plugin);
  },
  data() {
    return {
      stockList: [],
    }
  },
  computed: {
    pages() {
      console.log(this.$store.state.Pages)
      return this.$store.state.Pages
    },

  },
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage,
    EighthPage,
    NinthPage,
  },
  methods: {

  },
  created() {


    try {
      this.$store
        .dispatch("getDataStock")
        .then(response => {
          console.log(response)
          if (response == true) {
            this.stockList = this.$store.state.StockList;
            console.log(this.stockList)
          }
        });
    } catch (error) {
      console.log(error)
    }

  }
};
</script>
<style>
@import './css/style.css';
@import './css/font-awesome.min.css';
@import './css.css?family=Play:400,700';
@import './content.css';
@import './wp-content/plugins/magicbook-addon/assets/css/magicbook-addon.css';
@import './wp-includes/css/dist/block-library/style.min.css?ver=6.4.1';
@import './wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.8.1';
@import './wp-content/themes/magicbook/style.css';
@import './wp-content/themes/magicbook/css/magicbook.min.css';
@import './wp-content/themes/magicbook/font-awesome/css/font-awesome.min.css';
@import './wp-content/plugins/js_composer/assets/lib/flexslider/flexslider.min.css?ver=6.7.0';
@import './wp-content/themes/magicbook/js/vendors/colorbox/colorbox.css?ver=1.2';
@import './wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=6.7.0';


html,
body {
  margin: 0;
  padding: 0;
  overflow: auto !important;
}
</style>