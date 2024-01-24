<template>
  <div>
    <vs-popup type="filled" title="Ürün Resim" :active.sync="isSidebarActiveLocal">
      <img :src="imgSrc" style="width: 100%" />
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
            Ekle
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
      console.log(this.selectedValue);
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

      this.isInCart(this.stockCode)
        ? this.$router.push("/apps/eCommerce/checkout").catch(() => {})
        : this.additemInCart({
            stockCode: this.stockCode,
            url_image: this.imgSrc,
            stockName: this.stockName,
            quantity: quantity, // Corrected from this.quantity to quantity
          });

      // Close the popup after adding the item
      this.isSidebarActiveLocal = false;

      // Emit an event to notify the parent component
      this.$emit("itemAddedToCard");
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
