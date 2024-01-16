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
          Stok Kodu
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          Ürün Resmi
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          Ebat
        </vs-th>
      
      
        <vs-th style="color: black; font-weight: bold;">
          Açıklama
        </vs-th>
        <vs-th style="color: black; font-weight: bold;">
          Miktar
        </vs-th>
      
        <vs-th style="color: black; font-weight: bold;">
          Fiyat
        </vs-th>
     
 
      
        <vs-th style="color: black; font-weight: bold;">
          İskonto
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
        
          <vs-td :data="data[indextr].attr3_boy" style="color: black; font-weight: bold;">
            {{ data[indextr].attr3_boy ? data[indextr].attr3_boy.replace('cm', '') + ' x ' : '' }}
            {{ data[indextr].attr2_en ? data[indextr].attr2_en.replace('cm', '') : '' }}
          </vs-td>
          <vs-td style="color: black; font-weight: bold;">
            <div>
              <input v-model="data[indextr].editedDescription" type="text" class="styled-input" />
            </div>
          </vs-td>
          <vs-td :data="data[indextr].quantity" style="color: black; font-weight: bold;">
            {{ data[indextr].quantity }}
          </vs-td>
   
     
       
          
          <vs-td :data="data[indextr].stockPrice" style="color: black; font-weight: bold;">
            {{ data[indextr].stockPrice }}
          </vs-td>

          
          
       
          <vs-td style="color: black; font-weight: bold;">
            <div>
              <input v-model="data[indextr].editİskonto" type="text" class="styled-input" />
            </div>
          </vs-td>

                 
    
        </vs-tr>

        <b-col>
      
          <vs-button style="border-radius: 5px" type="gradient" color="primary" @click="teklifYazdir()">Teklif Yazdır</vs-button>

        </b-col>
      </template>
      
    </vs-table>

    <teklifYazdir ref="teklifYazdir" :cartItems="cartItems"></teklifYazdir>

  </div>
  
</template>

<script>
import teklifYazdir from './pages/components/teklifYazdir.vue'


export default {
  components: {
    teklifYazdir,
  },
  methods: {
    teklifYazdir() {
      this.$refs.teklifYazdir.yazdir();
    },

  
  },
  computed: {
    cartItems() {
      return this.$store.state.eCommerce.cartItems;
    },
  },
  
};
</script>
<style scoped>
/* Initially hide the component */
.teklifYazdir {
  display: none;
}

/* Display the component when in print mode */
@media print {
  .teklifYazdir {
    display: block !important;
  }
}

/* Your other styles... */
</style>