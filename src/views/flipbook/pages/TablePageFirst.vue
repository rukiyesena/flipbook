<template>
  <div style="height: 100%;">
    <b-row style="height: 100%;">
      <topBanner2 :page="page" />

      <div data-slug="portfolios">
        <div class="  bb-custom-side" style="width: 100%;">
          <div class="content-wrapper">
            <b-row>
              <b-col>
                <div id="portfolio-container-oBTIBx9p91" class="portfolio-container" style="width: 100%;">
                  <div class="portfolio-item illustrator"
                    style="width: 9% !important; height: 350px; border: black 1px solid;"
                    v-for="(value, index) in stockList" :key="index">
                    <b-row>
                      <b-col style="text-align: -webkit-center;">
                        <img loading="lazy" decoding="async" style="width: auto; "
                          :src="'data:image/png;base64,' + value.images"
                          class="attachment-portfolio_thumbnail size-portfolio_thumbnail wp-post-image" alt="">
                        <div class="mask">
                          <a href="https://demo.focuxtheme.com/magicbook/portfolio/relaxing-with-coffee/" target="_blank"
                            rel="portfolio" class="fancybox ajax">
                            <h4>{{ value.stockCode }}</h4>
                            <p>{{ value.stockName }}</p>
                          </a>
                          <a href="https://demo.focuxtheme.com/magicbook/portfolio/relaxing-with-coffee/" target="_blank"
                            class="more ajax"><i class="fa fa-info-circle"></i><span>Read
                              more</span></a>
                        </div>
                      </b-col>
                    </b-row>

                  </div>

                </div>
              </b-col>


            </b-row>


          </div>
        </div>
      </div>
      <b-col cols="12" align-self="end">
        <bottomrightBanner :page="page" />

      </b-col>
    </b-row>



  </div>
</template>
<script>
import topleftbanner from '../components/topleftbanner.vue';
import topBanner2 from '../components/topBanner2.vue';
import rightBanner from '../components/rightBanner.vue';
import bottomrightBanner from '../components/bottomrightBanner.vue';

export default {
  props: ["page"],

  components: { topBanner2, topleftbanner, rightBanner, bottomrightBanner },
  methods: {
    toggleBrowsingContent() {
      this.$refs.heroImage.classList.toggle("browsing-content");
    },
  },
  computed: {
    stockList() {
      return this.$store.state.StockList
    }
  },

};
</script>


<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Oxygen:400,300,700);

.ca-1 {
  background: url("https://farm1.staticflickr.com/571/21101592188_f5da31c3f5_o.jpg") no-repeat center center;
}

.ca-2 {
  background: url("https://watermark.lovepik.com/photo/20211210/large/lovepik-summer-watermelon-picture_501768510.jpg") no-repeat center center;
}

.ca-3 {
  background: url("https://watermark.lovepik.com/photo/20211210/large/lovepik-summer-watermelon-picture_501768510.jpg") no-repeat center center;
}

.ca-4 {
  background: url("https://watermark.lovepik.com/photo/20211210/large/lovepik-summer-watermelon-picture_501768510.jpg") no-repeat center center;
}

.ca-5 {
  background: url("https://farm6.staticflickr.com/5692/21342201074_aef835df8d_k.jpg") no-repeat center center;
}

.ca-6 {
  background: url("https://watermark.lovepik.com/photo/20211210/large/lovepik-summer-watermelon-picture_501768510.jpg") no-repeat center center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clear-after:after,
.main-wrapper .scroll-content .sc-row .content-article .article-info .ai-footer:after,
.main-wrapper .scroll-content .sc-row:after,
.main-wrapper .hero-image .hero-content .hc-footer:after {
  content: "";
  display: block;
  clear: both;
}

body {
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: Oxygen;
  color: white;
}

.main-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.main-wrapper .hero-image {
  z-index: 3;
  position: relative;
  width: 100%;
  height: 100%;
  background: url("https://c1.staticflickr.com/1/632/21136101110_1dde1c1a7e_o.jpg");
  background-size: cover;
  box-shadow: 0 5px 60px 10px rgba(0, 0, 0, 0.75);
  transition: all 0.5s ease;
}

.main-wrapper .hero-image.browsing-content {
  height: 40%;
  background-position: center -150px;
}

.main-wrapper .hero-image.browsing-content:after {
  opacity: 1;
  height: 100%;
}

.main-wrapper .hero-image.browsing-content .hcft-icon.closed {
  opacity: 0 !important;
}

.main-wrapper .hero-image.browsing-content .hcft-icon.opened {
  opacity: 1 !important;
}

.main-wrapper .hero-image:after {
  content: "";
  display: block;
  position: absolute;
  background: linear-gradient(0deg, black, rgba(0, 0, 0, 0));
  height: 50%;
  width: 100%;
  bottom: 0;
  left: 0;
  opacity: 0.65;
  transition: all 0.5s ease;
}

.main-wrapper .hero-image .hero-content {
  position: absolute;
  z-index: 4;
  width: 100%;
  padding: 40px;
  bottom: 0;
}

.main-wrapper .hero-image .hero-content .hc-label {
  font-size: 44px;
  text-transform: uppercase;
  font-weight: 700;
}

.main-wrapper .hero-image .hero-content .hc-desc {
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 300;
}

.main-wrapper .hero-image .hero-content .hc-footer {
  margin-top: calc(40px / 1.5);
  line-height: 32px;
  font-size: 14px;
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-divider {
  float: left;
  margin: 7px 10px;
  height: 18px;
  width: 1px;
  background-color: white;
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-comments,
.main-wrapper .hero-image .hero-content .hc-footer .hcf-shares {
  float: left;
  text-transform: uppercase;
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-comments .amount,
.main-wrapper .hero-image .hero-content .hc-footer .hcf-shares .amount {
  margin-right: 5px;
  font-weight: 700;
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-toggle {
  float: right;
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-toggle .hcft-label {
  float: left;
  line-height: 32px;
  margin-right: 10px;
  text-transform: uppercase;
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-toggle .hcft-icon-holder {
  float: left;
  position: relative;
  width: 32px;
  height: 32px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.25);
  transition: background-color 0.25s ease;
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-toggle .hcft-icon-holder:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-toggle .hcft-icon-holder .hcft-icon {
  cursor: pointer;
  line-height: 32px;
  width: 32px;
  left: 0;
  position: absolute;
  font-size: 14px;
  transition: all 0.5s ease;
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-toggle .hcft-icon-holder .hcft-icon.closed {
  opacity: 1;
}

.main-wrapper .hero-image .hero-content .hc-footer .hcf-toggle .hcft-icon-holder .hcft-icon.opened {
  opacity: 0;
}

.main-wrapper .scroll-content {
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  overflow: auto;
  height: calc(100% - 40%);
}

.main-wrapper .scroll-content .sc-row {
  z-index: 1;
}

.main-wrapper .scroll-content .sc-row .content-article {
  float: left;
  cursor: pointer;
  width: 50%;
  height: 360px;
  overflow: hidden;
  position: relative;
}

.main-wrapper .scroll-content .sc-row .content-article:after {
  content: "";
  display: block;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.1));
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  opacity: 1;
  transition: opacity 0.25s ease;
}

.main-wrapper .scroll-content .sc-row .content-article:hover:after {
  opacity: 0;
}

.main-wrapper .scroll-content .sc-row .content-article:hover .article-image {
  transform: scale(1.1) !important;
}

.main-wrapper .scroll-content .sc-row .content-article .article-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  transform: scale(1);
  transition: all 0.25s ease;
}

.main-wrapper .scroll-content .sc-row .content-article .article-number {
  z-index: 2;
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
}

.main-wrapper .scroll-content .sc-row .content-article .article-info {
  z-index: 2;
  position: absolute;
  bottom: 0;
  padding: 40px;
  text-transform: uppercase;
}

.main-wrapper .scroll-content .sc-row .content-article .article-info .ai-label {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: calc(40px / 4);
}

.main-wrapper .scroll-content .sc-row .content-article .article-info .ai-desc {
  font-size: 16px;
  font-weight: 300;
}

.main-wrapper .scroll-content .sc-row .content-article .article-info .ai-footer {
  line-height: 20px;
  margin-top: calc(40px / 4);
}

.main-wrapper .scroll-content .sc-row .content-article .article-info .ai-footer .aif-comments,
.main-wrapper .scroll-content .sc-row .content-article .article-info .ai-footer .aif-shares {
  float: left;
  font-size: 14px;
}

.main-wrapper .scroll-content .sc-row .content-article .article-info .ai-footer .aif-comments .amount,
.main-wrapper .scroll-content .sc-row .content-article .article-info .ai-footer .aif-shares .amount {
  font-weight: 700;
  margin-right: 5px;
}

.main-wrapper .scroll-content .sc-row .content-article .article-info .ai-footer .aif-divider {
  float: left;
  height: 14px;
  margin: 3px 10px;
  width: 1px;
  background-color: white;
}
</style>
