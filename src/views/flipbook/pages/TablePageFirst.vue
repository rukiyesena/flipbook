<template>
  <div style="height: 100%;">
    <b-row style="height: 100%;">
      <topleftbanner :page="index" />

     <b-col  cols="12">
      <b-row style="height: 100%;">
        <b-col v-for="(category, index) in CategoryList" :key="index" cols="3" md="3" lg="3">
          
                <h3 style="color: rgb(73, 62, 144);     position: absolute;">{{ category.categoryName }}</h3>
                <img
                  :src="category.image"
                  alt="Category Image"
                  style="    width: 65%;
                  "
                  @click="handleClick(category)"
                />
             
        </b-col>
      </b-row>
  
     </b-col>
           

      <b-col cols="12" align-self="end">
        <bottomBanner2 :page="index" />
      </b-col>
    </b-row>

    <imageShow :popupResimSw="imagePopup" @closeSidebar="closeSidebar" :imgSrc="imgSrc" />
  </div>
</template>

<!-- ... rest of the script and style sections remain unchanged ... -->

<script>
import topleftbanner from '../components/topleftbanner.vue';
import topBanner2 from '../components/topBanner2.vue';
import rightBanner from '../components/rightBanner.vue';
import bottomBanner2 from '../components/bottomBanner2.vue';
import imageShow from './components/imageShow.vue';

export default {
  mounted() {
    const storedPages = localStorage.getItem("pages");
  if (storedPages) {
    this.pages = JSON.parse(storedPages);
  }

    const storedCategoryList = localStorage.getItem("CategoryList");
    if (storedCategoryList) {
      this.CategoryList = JSON.parse(storedCategoryList);
    }
  },
  props:{
    page: "", position: "", index: "", item: {  },
  },
  data() { return {    CategoryList:[],   selectedPageIndex: 0, // Eklenen değişken
    
 imgSrc: "", imagePopup: false } },
  components: { imageShow, topBanner2, topleftbanner, rightBanner, bottomBanner2 },
  methods: {

getCurrentPageIndex(category) {
  const filteredPages = this.pages.filter(page => page.categoryName === category.categoryName);

  if (filteredPages.length === 0) { 
    return -1;
  }

  const pageIndex = filteredPages[0].page;
  this.selectedPageIndex = pageIndex;
  console.log("Found index:", this.selectedPageIndex);
  return pageIndex;
},

handleClick(categoryItem) {
  const categoryCode = categoryItem.categoryCode;
  const categoryName = categoryItem.categoryName; 

  this.currentPageIndex = this.getCurrentPageIndex(categoryItem);

  // Otomatik olarak input alanına değeri yazdır
  const inputElement = document.getElementById("fb5-page-number");
  if (inputElement) {
    inputElement.value = this.selectedPageIndex;

    // Trigger the logic as if the "Enter" key was pressed
    setPage(this.selectedPageIndex);
  } else {
    console.error("Error: Input element with id 'fb5-page-number' not found.");
  }
},



    toggleBrowsingContent() {
      this.$refs.heroImage.classList.toggle("browsing-content");
    },
    imageShowBtn() {

      this.imagePopup = true
    },
    closeSidebar() {
      this.imagePopup = false

    }
  },
/*
  computed: {
    CategoryList: {
      get() {
        return JSON.parse(localStorage.getItem("CategoryList"))
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }

    },

  },*/
  watch: {
    page(val) {
      if (this.index == val - 2 || this.index == val - 1 || this.index == val) {

        try {
          let args = {
            page: this.index,
            kategori: this.item.category,
            pageCounts: "16",
            ilkKayit: this.item.ilkSayfa
          } 
          this.$store
            .dispatch("getDataCategoryListPerPage", args)
            .then(response => {
              console.log(response)
              this.CategoryList = response
          //    this.stockList = response
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
