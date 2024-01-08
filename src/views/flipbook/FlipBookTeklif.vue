<template lang="html">
  <div>
    <vs-table stripe :data="cartItems">
      <template slot="header">
        <h3 style="color: black; font-weight: bold;">
          Sepet Ürünleri
        </h3>
      </template>
      <template slot="thead">
        <vs-th style="color: black; font-weight: bold;">
          Ürün Adı
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          Açıklama
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          Fiyat
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          Adet
        </vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].stockName" style="color: black; font-weight: bold;">
            {{ data[indextr].stockName }}
          </vs-td>

          <vs-td :data="data[indextr].description" style="color: black; font-weight: bold;">
            {{ data[indextr].description }}
          </vs-td>

          <vs-td :data="data[indextr].stockPrice" style="color: black; font-weight: bold;">
            {{ data[indextr].stockPrice }}
          </vs-td>

          <vs-td :data="data[indextr].quantity" style="color: black; font-weight: bold;">
            {{ data[indextr].quantity }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.eCommerce.cartItems;
    },
  },
};
</script>
