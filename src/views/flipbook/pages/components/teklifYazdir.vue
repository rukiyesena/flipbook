<template>
  <div id="printMeTeklif" class="printMeTeklif" style="display: none;">
    <vs-table stripe :data="cartItems">
      
      <template slot="thead">
        
        <vs-th style="color: black; font-weight: bold;">
          Stok Kodu
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          Ürün Resmi
        </vs-th>
       <vs-th style="color: black; font-weight: bold;">
          Kalan Stok
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          Yükseklik
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
        <vs-th style="color: black; font-weight: bold;">
          Ebat
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          En
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          Toplam
        </vs-th>
      
      
      </template>

      <template slot-scope="{ data }">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].stockCode" style="color: black; font-weight: bold;">
            {{ data[indextr].stockCode }}
          </vs-td>
          <vs-td style="color: black; font-weight: bold;">
            <img :src="data[indextr].url_image" alt="Product Image" style="max-width: 350px; max-height: 200px;">
          </vs-td>
        
          <vs-td :data="data[indextr].stockCount" style="color: black; font-weight: bold;">
            {{ data[indextr].stockCount }}
          </vs-td>
          <vs-td :data="data[indextr].attr8_kalinlik" style="color: black; font-weight: bold;">
            {{ data[indextr].attr8_kalinlik }}
          </vs-td>
     

          <vs-td style="color: black; font-weight: bold;">
            <div>
              <input v-model="data[indextr].editedDescription" type="text" class="styled-input" />
            </div>
          </vs-td>
          
          
          <vs-td :data="data[indextr].stockPrice" style="color: black; font-weight: bold;">
            {{ data[indextr].stockPrice }}
          </vs-td>

          <vs-td :data="data[indextr].quantity" style="color: black; font-weight: bold;">
            {{ data[indextr].quantity }}
          </vs-td>
          <vs-td :data="data[indextr].attr3_boy" style="color: black; font-weight: bold;">
            {{ data[indextr].attr3_boy ? data[indextr].attr3_boy.replace('cm', '') + ' x ' : '' }}
            {{ data[indextr].attr2_en ? data[indextr].attr2_en.replace('cm', '') : '' }}
          </vs-td>
          
          
          <vs-td :data="data[indextr].descrpiton" style="color: black; font-weight: bold;">
            {{ data[indextr].attr3_boy }}
          </vs-td>
                          
       
          <vs-td style="color: black; font-weight: bold;">
            <div>
              <input type="text" class="styled-input" style="color: black; font-weight: bold;" />
            </div>
          </vs-td>

    
        </vs-tr>

     
      </template>
      
    </vs-table>
  </div>
</template>
<script>
export default {
  props: {
    cartItems: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    cartItems: {
      deep: true,
    },
  },
  methods: {
    yazdir() {
      if (this.cartItems && this.cartItems.length > 0) {
        this.$htmlToPaper("printMeTeklif");
      } else {
        console.warn("No data to print.");
      }
    },
  },
};
</script>
<style scoped>
.printMeTeklif {
  width: 200%;
  max-width: 335vw;
  border-collapse: collapse;
  margin: auto;
  display: none;
}
@media print {
  /* Display the component when in print mode */
  .teklif-yazdir {
    display: none;
  }
}

/* Your other styles... */
</style>