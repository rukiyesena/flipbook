<template>
  <div>
  
      <b-button class="bg-danger" style=" border-color:rgb(0, 0, 0);margin-top: 15px" size="sm" @click="addItemstoCard">
        
        <Icon icon="iconamoon:shopping-card-add"  style="    background-color:rgba(234, 0, 47, 0.795) " width="62" height="42" />
      </b-button>

  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";

export default {
  props: ["data", "indexItem"],
  data() {
    return {
      addQty: 1,
      popupResim: false,
    };
  },
  methods: {
    addItemstoCard() {
      console.log(this.data)

      this.isInCart(this.data.stockCode)
        ? this.$router.push("/apps/eCommerce/checkout").catch(() => { })
        : this.additemInCart(this.data);

    },
    additemInCart(item) { 
      item['quantity'] = this.addQty
      this.$store.dispatch("eCommerce/additemInCart", item);
    },
  },
  components: { Icon },
  computed: {
    isInCart() {
      return (itemId) => this.$store.getters["eCommerce/isInCart"](itemId);
    },
  }
};
</script>

<style lang="scss">
  .bg-danger {
    background-color: #dc3545 !important;
    border-color: #000 !important;
  }
</style>
