<template>
  <div style="height: 100%;">
    <b-row style="height: 100%;">

      <topleftbanner :page="index" />

      <div class="page">

        <header class="header"></header>

        <div class="main-wrapper">


          <div class='scroll-content'>
            <div class='sc-row'>
              <div class='content-article' v-for="(value, indexItem) in stockList" :key="indexItem"
                :id="'tooltip-target-' + index + '-' + indexItem" v-b-tooltip.hover>
                <AddtoCard :data="value" :indexItem="'tooltip-target-' + index + '-' + indexItem" />
                <div class='article-number'>{{ indexItem }}</div>
                <div class='article-info'>
                  <div class='ai-label ' style="color: black">{{ value.stockCode }}</div>
                  <div class='ai-desc ' style="color: black">{{ value.stockName }}</div>
                  <div class='ai-footer '>
                    <div class='aif-comments' style="color: black"><span class='amount'>
                        {{ value.attr1_cins }} - </span>{{ value.attr2_en }}
                    </div>
                    <div class='aif-divider'>

                    </div>
                    <div class='aif-shares' style="color: black"><span class='amount'>{{
                      parseFloat(value.stockPrice).toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
                <b-row>

                  <b-col style="text-align: center;" v-on:click="imageShowBtn">
                    <img :src="'data:image/png;base64,' + value.images" style="max-height: 200px;" />
                  </b-col>


                </b-row>

              </div>

            </div>

          </div>
        </div>
      </div>
      <b-col cols="12" align-self="end">
        <bottomBanner2 :page="index" />

      </b-col>
    </b-row>
    <imageShow :popupResimSw="imagePopup" />
  </div>
</template>
<script>
import topBanner2 from '../components/topBanner2.vue';
import topleftbanner from '../components/topleftbanner.vue';

import bottomBanner2 from '../components/bottomBanner2.vue';
import leftBanner from '../components/leftBanner.vue';
import AddtoCard from './components/AddtoCard.vue';
import imageShow from './components/imageShow.vue';
export default {
  props: ["page", "position", "index"],
  data() { return { stockList: [], imagePopup: false } },
  components: { AddtoCard, imageShow, topleftbanner, topBanner2, bottomBanner2, leftBanner },
  methods: {
    imageShowBtn() {
      console.log("this.imagePopup")
      console.log(this.imagePopup)

      this.imagePopup = true
    },

    toggleBrowsingContent() {
      this.$refs.heroImage.classList.toggle("browsing-content");
    },
  },

  watch: {
    page(val) {
      if (this.index == val - 2 || this.index == val - 1) {
        console.log("First " + this.index)

        try {
          let args = {
            page: this.index
          }
          this.$store
            .dispatch("getDataStock", args)
            .then(response => {
              this.stockList = response

            });
        } catch (error) {
          console.log(error)
        }
      }


    }
  }

};
</script>


<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Oxygen:400,300,700);
@import url(https://fonts.googleapis.com/css?family=Cormorant+Garamond);
@import 'https://fonts.googleapis.com/css?family=Lato:300,400,700';

html {
  font: 400 1em/1.4 'Lato', sans-serif;
  color: #333;
  -webkit-font-smoothing: antialiased;
}

h1 {
  margin: 0 0 16rem;
  text-transform: uppercase;
  text-align: center;
  font-size: calc(55vh + 55vw);
}

.jumbo {
  display: block;
  margin: -0.25em 0 0;
  line-height: 0.875;
  font-weight: 300;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/5175/photo-1452117774045-dfd7a5e9718c.jpeg");
  background-repeat: no-repeat;
  background-size: 0.39em auto;
  background-position: 53% 87.5%;
}

.sign {
  display: block;
  font-size: 0.125em;
  margin: -3.2em 0 0;
}

.sign__text {
  background-color: #333;
  color: #fff;
  display: inline-block;
  padding: 0 0.3em 0.1em;
  line-height: 1;
  position: relative;
  margin: 0 0 0.45em;
}

.sign__text::before {
  content: '';
  position: absolute;
  bottom: 0.08em;
  border-top: 0.04em solid;
  left: 0.2em;
  right: 0.2em;
}

.subjumbo {
  display: block;
  text-decoration: underline;
  font-size: 0.03em;
  text-shadow: 0.07em 0.05em 0 #fff;
}

.section p {
  line-height: 1.5;
}

@media (min-width: 48em) {
  .section p {
    column-count: 2;
    column-gap: 1em;
    line-height: 1.33;
  }
}

.section__title {
  text-align: center;
  font-size: 1.15em;
}

.section__innertitle {
  text-transform: uppercase;
  font-weight: 400;
  border-bottom: 0.15em solid;
}

a {
  color: tomato;
}

html {
  background: #fff;
}

body {
  margin: 0;
}

@media (min-width: 48em) {
  body {
    padding: 1em;
  }
}

.page {
  padding: 1em;
  margin: 1em;
  border: 1px solid;
  /* max-width: 44em;*/
}

@media (min-width: 48em) {
  .page {
    padding: 3em 5em;
    margin-right: auto;
    margin-left: auto;
  }
}

.footer {
  margin-top: 3em;
  text-align: center;
}

.ca-1 {
  background: url(https://farm1.staticflickr.com/571/21101592188_f5da31c3f5_o.jpg) no-repeat center center;
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
  /* width: 100vw;
  height: 100vh;*/
  overflow: hidden;
}

.main-wrapper .hero-image {
  z-index: 3;
  position: relative;
  width: 100%;
  height: 100%;
  background: url(https://c1.staticflickr.com/1/632/211https://akn-ayb.a-cdn.akinoncdn.com/products/2023/06/12/76139/762f8709-82a6-4e88-9649-36f66eab486d_size780x780_quality60_cropCenter.jpg36101110_1dde1c1a7e_o.jpg) no-repeat center center fixed;
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
  // position: absolute;
  // top: 40%;
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
  width: 10%;
  height: 360px;
  overflow: hidden;
  position: relative;
}

.main-wrapper .scroll-content .sc-row .content-article:after {
  content: "";
  display: block;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
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
  font-size: 20px !important;
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
