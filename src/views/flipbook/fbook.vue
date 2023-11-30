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
            <li id="page_width">918</li> <!-- width for page -->
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
        <a href="http://www.page-flip.info/newspaper_wp" id="fb5-button-back">&lt; Back </a>
        <div id="fb5-container-book">
          <!-- deep linking -->
          <section id="fb5-deeplinking">
            <ul>
              <li data-address="page1" data-page="1"></li>
              <li data-address="page2" data-page="2"></li>
              <li data-address="page3" data-page="3"></li>
              <li data-address="page4" data-page="4"></li>
              <li data-address="page5" data-page="5"></li>
              <li data-address="page6" data-page="6"></li>
              <li data-address="page7" data-page="7"></li>
              <li data-address="page8" data-page="8"></li>
              <li data-address="page9" data-page="9"></li>
              <li data-address="page10" data-page="10"></li>
              <li data-address="page11" data-page="11"></li>
              <li data-address="page12" data-page="12"></li>
              <li data-address="page13" data-page="13"></li>

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
            <div data-background-image="pages/1.jpg">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv1"></canvas>
                <div class="fb5-page-book">

                </div>
              </div>
            </div>

            <!--  page 2 -->
            <div data-background-image="pages/2.jpg">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv2"></canvas>
                <div class="fb5-page-book">
portfoios
                  <div class="bb-item" data-slug="portfolios">
                    <div class="vc_col-sm-6 bb-custom-side">
                      <div class="content-wrapper">
                        <div class="container">
                          <div
                            class="vc_separator wpb_content_element big vc_separator_align_left vc_sep_width_100 vc_sep_double vc_sep_pos_align_right vc_sep_color_grey vc_separator-has-text">
                            <span class="vc_sep_holder vc_sep_holder_l"><span class="vc_sep_line"></span></span>
                            <h4>Portfolios</h4><span class="vc_sep_holder vc_sep_holder_r"><span
                                class="vc_sep_line"></span></span>
                          </div>
                          <ul id="portfolio-filter-oBTIBx9p91" class="portfolio-filters">
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".audio">Audio</li>
                            <li data-filter=".illustrator">Illustrator</li>
                            <li data-filter=".video">Video</li>
                          </ul>
                          <div id="portfolio-container-oBTIBx9p91" class="portfolio-container">
                            <div class="portfolio-item illustrator">
                              <img loading="lazy" decoding="async" width="493" height="476"
                                src="https://demo.focuxtheme.com/magicbook/wp-content/uploads/sites/10/2016/10/013e4a5544265d0000019ae9c632c1.jpg"
                                class="attachment-portfolio_thumbnail size-portfolio_thumbnail wp-post-image" alt="">
                              <div class="mask">
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/relaxing-with-coffee/"
                                  target="_blank" rel="portfolio" class="fancybox ajax">
                                  <h4>Relaxing With Coffee</h4>
                                  <p>Consectetur adipiscing elit. Integer commodo tristique odio, quis fringilla ligu...
                                  </p>
                                </a>
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/relaxing-with-coffee/"
                                  target="_blank" class="more ajax"><i class="fa fa-info-circle"></i><span>Read
                                    more</span></a>
                              </div>
                            </div>
                            <div class="portfolio-item video">
                              <img loading="lazy" decoding="async" width="582" height="800"
                                src="https://demo.focuxtheme.com/magicbook/wp-content/uploads/sites/10/2016/10/about.jpg"
                                class="attachment-portfolio_thumbnail size-portfolio_thumbnail wp-post-image" alt="">
                              <div class="mask">
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/white-paint/" target="_blank"
                                  rel="portfolio" class="fancybox ajax" >
                                  <h4>White Paint</h4>
                                  <p>Consectetur adipiscing elit. Integer commodo tristique odio, quis fringilla ligu...
                                  </p>
                                </a>
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/white-paint/" target="_blank"
                                  class="more ajax"><i class="fa fa-info-circle"></i><span>Read more</span></a>
                              </div>
                            </div>
                            <div class="portfolio-item illustrator">
                              <img loading="lazy" decoding="async" width="492" height="771"
                                src="https://demo.focuxtheme.com/magicbook/wp-content/uploads/sites/10/2016/10/01a1ea554b31d2000001bf726e9dd8.jpg"
                                class="attachment-portfolio_thumbnail size-portfolio_thumbnail wp-post-image" alt="">
                              <div class="mask">
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/night-sky/" target="_blank"
                                  rel="portfolio" class="fancybox ajax">
                                  <h4>Night Sky</h4>
                                  <p>Consectetur adipiscing elit. Integer commodo tristique odio, quis fringilla ligu...
                                  </p>
                                </a>
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/night-sky/" target="_blank"
                                  class="more ajax"><i class="fa fa-info-circle"></i><span>Read more</span></a>
                              </div>
                            </div>
                            <div class="portfolio-item audio">
                              <img loading="lazy" decoding="async" width="476" height="498"
                                src="https://demo.focuxtheme.com/magicbook/wp-content/uploads/sites/10/2016/10/01e07f5544265e0000019ae9fe25f5.jpg"
                                class="attachment-portfolio_thumbnail size-portfolio_thumbnail wp-post-image" alt="">
                              <div class="mask">
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/cavalier/" target="_blank"
                                  rel="portfolio" class="fancybox ajax" >
                                  <h4>Cavalier</h4>
                                  <p>Consectetur adipiscing elit. Integer commodo tristique odio, quis fringilla ligu...
                                  </p>
                                </a>
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/cavalier/" target="_blank"
                                  class="more ajax"><i class="fa fa-info-circle"></i><span>Read more</span></a>
                              </div>
                            </div>
                            <div class="portfolio-item video">
                              <img loading="lazy" decoding="async" width="439" height="459"
                                src="https://demo.focuxtheme.com/magicbook/wp-content/uploads/sites/10/2016/10/0184f95544265e0000019ae9cd96d0.jpg"
                                class="attachment-portfolio_thumbnail size-portfolio_thumbnail wp-post-image" alt="">
                              <div class="mask">
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/world-of-tomorrow/"
                                  target="_blank" rel="portfolio" class="fancybox ajax" >
                                  <h4>World Of Tomorrow</h4>
                                  <p>Consectetur adipiscing elit. Integer commodo tristique odio, quis fringilla ligu...
                                  </p>
                                </a>
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/world-of-tomorrow/"
                                  target="_blank" class="more ajax"><i class="fa fa-info-circle"></i><span>Read
                                    more</span></a>
                              </div>
                            </div>
                            <div class="portfolio-item illustrator">
                              <img loading="lazy" decoding="async" width="445" height="460"
                                src="https://demo.focuxtheme.com/magicbook/wp-content/uploads/sites/10/2016/10/01f4df5544265e0000019ae9a846bc.jpg"
                                class="attachment-portfolio_thumbnail size-portfolio_thumbnail wp-post-image" alt="">
                              <div class="mask">
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/practise/" target="_blank"
                                  rel="portfolio" class="fancybox ajax">
                                  <h4>Practise</h4>
                                  <p>Consectetur adipiscing elit. Integer commodo tristique odio, quis fringilla ligu...
                                  </p>
                                </a>
                                <a href="https://demo.focuxtheme.com/magicbook/portfolio/practise/" target="_blank"
                                  class="more ajax"><i class="fa fa-info-circle"></i><span>Read more</span></a>
                              </div>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                    </div>

                    <div class="vc_col-sm-6 bb-custom-side">
                      <div class="content-wrapper">
                        <div class="container">

                          <div class="wpb_single_image wpb_content_element vc_align_left   cover">

                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey"><img loading="lazy"
                                  decoding="async" width="614" height="766"
                                  src="https://demo.focuxtheme.com/magicbook/wp-content/uploads/sites/10/2016/10/portfolio-cover.jpg"
                                  class="vc_single_image-img attachment-full" alt=""></div>
                            </figure>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <!--  page 3 -->
            <div data-background-image="pages/3.jpg">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv3"></canvas> <!-- description for page from WYSWIG -->
                <div class="fb5-page-book">

                </div>
              </div>

            </div>
            <!--  page 4 -->
            <div data-background-image="pages/4.jpg">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv4"></canvas>
                <div class="fb5-page-book">

                </div>
              </div>

            </div>
            <!--  page 5 -->
            <div data-background-image="pages/5.jpg">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv5"></canvas>
                <div class="fb5-page-book">

                </div>
              </div>
            </div>
            <!--  page 6 -->
            <div data-background-image="pages/6_7.jpg" class="fb5-double fb5-first">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv6"></canvas>
                <div class="fb5-page-book">

                </div>
              </div>


            </div>
            <!--  page 7 -->
            <div data-background-image="pages/6_7.jpg" class="fb5-double fb5-second">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv7"></canvas>
                <div class="fb5-page-book">
                </div>
              </div>
            </div>
            <!--  page 8 -->
            <div data-background-image="pages/8_9.jpg" class="fb5-double fb5-first">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv8"></canvas>
                <div class="fb5-page-book">
                </div>
              </div>
            </div>
            <!--  page 9 -->
            <div data-background-image="pages/8_9.jpg" class="fb5-double fb5-second">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv9"></canvas>
                <div class="fb5-page-book">
                </div>
              </div>
            </div>
            <!--  page 10 -->
            <div data-background-image="pages/10.jpg">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv10"></canvas>
                <div class="fb5-page-book">
                </div>
              </div>
            </div>
            <!--  page 11 -->
            <div data-background-image="pages/11.jpg">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv11"></canvas>
                <div class="fb5-page-book">
                </div>
              </div>
            </div>
            <!--  page 12 -->
            <div data-background-image="pages/12.jpg">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv12"></canvas>
                <div class="fb5-page-book">
                </div>
              </div>
            </div>
            <div data-background-image="pages/12.jpg">
              <div class="fb5-cont-page-book">
                <div class="fb5-gradient-page"></div>
                <canvas id="canv13"></canvas>
                <div class="fb5-page-book">
                  13. sayfaaaaaaskgjlkzdrngjşıejkgkelrgfni
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
}</style>