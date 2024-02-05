<template>
  <div>
    <vs-popup type="filled" title="Ürün Resim" :active.sync="isSidebarActiveLocal" style="text-align: center;">
      <img :src="imgSrc" style="max-width: 70%" />
      <!-- Display additional values with null checks -->
      <h4 style="color: black">{{ stockCode || '' }}</h4>

      <p style="color: black; margin: 0px" v-if="stockName">{{ stockName }}</p>

      <b-row>
        <b-col>
          <div class="flex items-center">
            <label for="itemQuantity" style="color: black; font-weight: bold;">Adet:</label>
            <vs-input v-model="item.quantity" id="itemQuantity" type="number" min="0" class="small-input"
              style="color: black; font-weight: bold;" />
          </div>
        </b-col>

        <b-col>
          <b-button class="bg-danger" style="border-color:white; margin-top: 6px" size="sm" @click="addItemstoCard">
            {{ $t('add') }}
            <Icon icon="iconamoon:shopping-card-add" width="20" height="20" />
          </b-button>
        </b-col>
      </b-row>
    </vs-popup>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  props: ["popupResimSw", "imgSrc", "stockCode", "stockName", "selectedValue"],
  components: { Icon },

  data() {
    return {
      item: {
        quantity: 1, // Set default quantity
        stockPrice: 0, // Set default stock price
        // Include other item properties as needed
      },
      popupResim: false,
    };
  },
  watch: {
    popupResimSw(val) {
      return val;
    },
  },
  computed: {
    isInCart() {
      return (itemId) => this.$store.getters["eCommerce/isInCart"](itemId);
    },
    isSidebarActiveLocal: {
      get() {
        return this.popupResimSw;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
        }
      },
    },
  },
  methods: {
    addItemstoCard() {
      const quantity = parseInt(this.item.quantity);
      let itemVal = {
        stockCode: this.stockCode,
        url_image: this.imgSrc,
        stockName: this.stockName,
        stockPrice: this.selectedValue.stockPrice,
        stockEn: this.selectedValue.attr2_en,
        stockBoy: this.selectedValue.attr3_boy,
        stockAgirlik: this.selectedValue.attr10_agirlik,
        quantity: quantity, // Corrected from this.quantity to quantity
        stockQty: this.selectedValue.stockCount

      }
      this.isInCart(this.stockCode)
        ? this.$store.dispatch("eCommerce/toggleItemInCart", itemVal)
        : '';
      this.additemInCart(itemVal)
      // Close the popup after adding the item
      this.isSidebarActiveLocal = false;


    },
    additemInCart(item) {
      // Adjust this logic according to your store structure and actions
      item["quantity"] = this.item.quantity;
      this.$store.dispatch("eCommerce/additemInCart", item);
    },
    onResimGoster() {
      this.$emit("closeSidebar"); // Close any other sidebar if needed
      this.$emit("update:popupResimSw", true);
    },
  },
};
</script>
