<template>
  <div>
    <vs-popup type="filled" title="Ürün Resim" :active.sync="isSidebarActiveLocal">
      <img :src="imgSrc" style="width: 100%" />
      <!-- Display additional values with null checks -->
      <h4 style="color: black">{{ stockCode || '' }}</h4>
      <p style="color: black; margin: 0px" v-if="stockName">{{ stockName }}</p>

      <b-button class="bg-danger" style=" border-color:white;margin-top: 15px" size="sm" @click="addItemstoCard">
        Ekle
        <Icon icon="iconamoon:shopping-card-add" width="20" height="20" />
      </b-button>
    </vs-popup>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  props: ["popupResimSw", "imgSrc", "stockCode", "stockName"],
  components: { Icon },

  data() {
    return {
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
  this.isInCart(this.stockCode)
    ? this.$router.push("/apps/eCommerce/checkout").catch(() => {})
    : this.additemInCart({
        stockCode: this.stockCode,
        stockName: this.stockName,
        // Add other properties if needed
      });
},

    additemInCart(item) { 
      item['quantity'] = this.addQty
      this.$store.dispatch("eCommerce/additemInCart", item);
    },
  
    onResimGoster() {
      this.$emit("closeSidebar"); // Close any other sidebar if needed
      this.$emit("update:popupResimSw", true);
    },
  },
};
</script>
