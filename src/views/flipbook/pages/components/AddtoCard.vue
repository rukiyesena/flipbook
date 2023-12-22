<template>
  <div>
    <b-tooltip :target="indexItem" triggers="hover" placement="bottom">
      {{ data.stockCode }}
      <b-row style="margin-top: 15px">
        <b-col>Adet: </b-col>
        <b-col>
          <b-form-input v-model="addQty" id="smallInput" @keyup.enter="addItemstoCard" size="sm" />
        </b-col>
      </b-row>
      <b-button class="bg-danger" style=" border-color:white;margin-top: 15px" size="sm" @click="addItemstoCard">
        Ekle
        <Icon icon="iconamoon:shopping-card-add" width="20" height="20" />
      </b-button>
    </b-tooltip>

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
<style lang="scss" >
.tooltip-inner {
  background-color: #888 !important;
}
</style>