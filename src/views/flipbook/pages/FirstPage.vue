<template>
  <b-container fluid style="height: 100%;">

    <div style="height: 100%;">
      <b-row style="height: 100%;">
        <b-col cols="12" align-self="start">
          <topleftbanner :page="index" :header="item.categoryName" />

        </b-col>

        <b-col cols="12" align-self="start" style="height: 90%;">
          <b-row v-for="(row, rowIndex) in stockListChunks" :key="rowIndex" align-v="stretch">
            <b-col v-for="(value, columnIndex) in row.stList" :key="columnIndex" :cols="columnWidth(value, row)"
              style="min-height: 390px;" :style="value.stockCode == searchedValue && value.stockCode != '' ? 'background-color: yellow;' : ''">
              <div style=" border: black 0.1px solid; height: 100%;">
                <b-row>
                  <b-col>
                    <AddtoCard :data="value"
                      :indexItem="'tooltip-target-' + index + '-' + (rowIndex * 4 + columnIndex)" />
                  </b-col>
                  <b-col cols="9">

                    <h4 style="text-align: end;  font-weight: bold; color: rgb(3, 14, 215) !important" class="mr-3">
                      {{ value.stockCode }} </h4>

                  </b-col>
                </b-row>


                <b-row v-on:click="showImageDetails(value)">
                  <b-col style="text-align: -webkit-center;"
                    :id="'tooltip-target-' + index + '-' + (rowIndex * 4 + columnIndex)" v-b-tooltip.hover>

                    <img loading="lazy" decoding="async"
                      :style="row.lngh == '3' ? 'max-height: 205px;' : row.lngh == '2' ? 'max-height: 415px;' : 'max-height: 1010px;'"
                      style="  height: auto; object-fit: cover; object-position: center;  " :src="value.url_image"
                      class="attachment-portfolio_thumbnail size-portfolio_thumbnail wp-post-image" alt="" />
                    <div style="position: relative; " class="ml-3 mr-3">
                      <b-row>

                        <b-col>
                          <h4 style="color: red !important;">
                            {{ value.stockCount !== undefined && value.stockCount !== "" ?
                              parseInt(value.stockCount) + ' Ad.' : '0 Ad.' }}
                          </h4>
                        </b-col>

                        <b-col>
                          <h4 style="font-size: 24px; color: red !important; text-align: end;">{{ value.stockPrice
                          }} TL</h4>


                        </b-col>
                      </b-row>
                      <b-row>

                        <b-col align-h="end">

                          <span style="font-size: 27px; color: black; margin:0px" v-if="value.attr1_cins">
                            {{ value.attr1_cins.replace('cm', '') }} /
                          </span>
                          <span style="font-size: 27px; color: black; margin:0px" v-if="value.attr2_en">
                            {{ value.attr2_en.replace('cm', '') }} x {{ value.attr3_boy }}
                          </span>


                        </b-col>
                      </b-row>

                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>

        </b-col>


        <b-col cols="12" align-self="end">
          <bottomBanner2 :page="index" />
        </b-col>
      </b-row>

      <imageShow :popupResimSw="imagePopup" @closeSidebar="closeSidebar" :imgSrc="imgSrc" :stockCode="stockCode"
        :stockName="stockName" />

    </div>
  </b-container>
</template>

<script>
import topleftbanner from '../components/topleftbanner.vue';
import topBanner2 from '../components/topBanner2.vue';
import rightBanner from '../components/rightBanner.vue';
import bottomBanner2 from '../components/bottomBanner2.vue';
import imageShow from './components/imageShow.vue';
import AddtoCard from './components/AddtoCard.vue';

export default {
  props: {

    page: "", position: "", index: "", item: {}, searchedValue: ""
  },
  data() {
    return {
      isCartOpen: false, // Sepetin açık veya kapalı olduğunu izleyen durum
      url_image: "",
      imgSrc: "",
      stockList: [],
      imagePopup: false,
      stockCode: "", // Add this line
      attr4_motif: "",
      stockName: "", // Add this line
    };
  },
  components: { AddtoCard, imageShow, topBanner2, topleftbanner, rightBanner, bottomBanner2 },
  methods: {
    openCart() {
      this.isCartOpen = true;
    },
    showImageDetails(value) {
      this.imgSrc = value.url_image;
      this.stockCode = value.stockCode;
      this.selectedValue = value;

      this.stockName = value.stockName;
      this.imageShowBtn();
    },
    imageShowBtn() {
      this.imagePopup = true;
    },
    closeSidebar() {
      this.imagePopup = false;
    },


    columnWidth(value, row) {
      const totalItems = this.stockList.length;
      const itemsPerRow = 3;

      // Eğer resim sayısı 9 ise, sütunları eşit genişlet
      if (totalItems === 9) {
        return '3'; // 3 sütunu da eşit genişlet
      }
      // Eğer resim sayısı 8 ise ve bu resimlerden biri ikinci sıradaysa,
      // sütunları genişlet
      if (totalItems === 8) {

        return '3'; // Son iki sütunu genişlet

      }
      if (totalItems === 7) {

        return '3'; // Son iki sütunu genişlet

      }

      if (totalItems === 4) {
        return '6'; // 3 sütunu da eşit genişlet
      }


      // Eğer resim sayısı 11 ise ve bu resimlerden biri bu sıradaysa,
      // son sütunu genişlet


      return ''; // Normal durumda sütun genişliği 3
    },

    getPortfolioContainerStyle(value) {
      const totalItems = this.stockList.length;

      if (totalItems === 9) {
        // Apply the common style for all rows
        return {
          width: '76%',
        };
      }
      if (totalItems === 4) {
        // Apply the common style for all rows
        return {
          width: 'calc(125% - 100px)', // Adjust the width as needed

        };
      }


      if (totalItems === 2) {
        // Apply the common style for all rows
        return {
          width: '248%',
        };
      }


      if (totalItems === 10) {
        const columnIndex = this.stockList.indexOf(value);
        const lastRowStart = totalItems - 3;

        if (columnIndex >= lastRowStart) {
          if (columnIndex === lastRowStart || columnIndex === lastRowStart + 1) {
            return {
              width: '100%',
            };
          } else if (columnIndex === lastRowStart + 2) {
            return {
              width: '200%',
            };
          }
        }
      }

      if (totalItems === 11) {
        const columnIndex = this.stockList.indexOf(value);
        const lastRowStart = totalItems - 3;

        if (columnIndex >= lastRowStart) {
          return {
            width: '100%',
          };
        }
      }

      // Default style
      return {
        width: '100%',
      };
    },



    toggleBrowsingContent() {
      this.$refs.heroImage.classList.toggle("browsing-content");
    },
    imageShowBtn() {
      this.imagePopup = true;
    },
    closeSidebar() {
      this.imagePopup = false;
    }
  },
  computed: {
    stockListChunks() {
      const totalItems = this.stockList.length;
      let chunkSize = 4;

      if (totalItems === 9) {
        chunkSize = 3;
      } else if (totalItems === 6) {
        chunkSize = 2;
      } else if (totalItems === 8) {
        chunkSize = 4;
      } else if (totalItems === 7) {
        chunkSize = 4;
      } else if (totalItems === 11) {
        chunkSize = 4;
      } else if (totalItems === 10) {
        chunkSize = 4;
      } else if (totalItems === 4) {
        chunkSize = 2; // Adjust this value based on your layout

      } else if (totalItems === 5) {
        chunkSize = 3;
      } else if (totalItems === 3) {
        chunkSize = 2;
      } else if (totalItems === 2) {

        chunkSize = 1;
      }


      const remainder = totalItems % chunkSize;
      const chunks = [];
      let start = 0;

      // Add rows with full chunkSize items
      for (let i = 0; i < totalItems - remainder; i += chunkSize) {
        chunks.push(this.stockList.slice(i, i + chunkSize));
        start = i + chunkSize;
      }

      // Add the remaining items in a separate row if there is a remainder
      if (remainder > 0) {
        chunks.push(this.stockList.slice(start, totalItems));
      }

      chunks.forEach((val, index) => {
        chunks[index] = {
          stList: val,
          lngh: chunks.length
        }
      });
      return chunks;
    },
  },


  watch: {
    page(val) { 
      if (this.index == val - 1 || this.index == val) {

        try {
          let args = {
            page: this.index,
            kategori: this.item.category,
            pageCounts: "12",
            ilkKayit: this.item.ilkSayfa
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
.main-wrapper {
  position: relative;
  width: 200vw;
  height: 200vh;
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
  width: 53%;
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
  width: 53%;
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
  width: 53%;
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
  width: 53%;
  background-color: white;
  tion: all 0.25s ease;

  .main-wrapper .scroll-content .sc-row .content-article .article-image {
    width: 53%;
    max-width: 88%;
    /* Ya da istediğiniz genişlik değeri */
    height: auto;
    /* Otomatik yükseklik ayarı */
    object-fit: cover;
    object-position: center;
    transform: scale(1);
    transition: all 0.25s ease;
  }

}
</style>
