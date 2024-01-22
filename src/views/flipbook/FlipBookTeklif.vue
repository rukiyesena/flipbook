<template lang="html">
  <div class="teklif-form-container">
    <div class="header-section">
      <vs-table-container>
        <vs-card>
          <div class="card-header">
            <h3 style="color: rgb(202, 0, 0); font-weight: bold;">Teklif Formu</h3>
            <img :src="require('@/assets/images/logo/FFlogo.png')" alt="Logo" class="logoFirm" />
          </div>

          <div class="sender-address-container">
            <div class="sender-details">
              <h3>FATİH PROFİL SANAYİ VE TİCARET A.Ş.</h3>
              <h6><strong>ADRES::</strong> Organize Sanayi 1. Kısım Turan Bahadır Cad. No:15 Honaz/DENİZLİ</h6>
              <h6><strong>TELEFON:</strong> +90 258 269 16 64 </h6>
              <h6><strong>FAKS:</strong> +90 258 269 11 41  </h6>
              <h6><strong>E-POSTA:</strong> pazarlama@fatih.com.tr </h6>
              <h6><strong>VERGİ D.:</strong> Saraylar Vergi Dairesi  </h6>
              <h6><strong>VERGİ NO:</strong> 385 001 70 69 </h6>
            </div>
            
            

            <!-- Sağ taraftaki alan -->
            <div class="right-panel" style="margin-left: 854px; margin-top: -134px;">
              <h6>Yetkili: <input type="text" class="styled-input" style="color: black; font-weight: bold; width: 300px;" /></h6>

              <h6>Adres: <input type="text" class="styled-input" style="color: black; font-weight: bold; width: 300px;" /></h6>
                <h6> TELEFON: 
                <input type="number" class="styled-input" style="color: black; font-weight: bold; width: 300px;" /></h6>
              
                <h6>FAKS: <input type="number" class="styled-input" style="color: black; font-weight: bold; width: 300px;" /></h6>

                <h6>E-POSTA:
                  <input type="text" class="styled-input" style="color: black; font-weight: bold; width: 300px;" /></h6>

                <h6>VERGİ D.:
                  <input type="text" class="styled-input" style="color: black; font-weight: bold; width: 300px;" /></h6>
              
                <h6>VERGİ NO: 
                <input type="text" class="styled-input" style="color: black; font-weight: bold; width: 300px;" /></h6>
              </div>
          </div>


          <vs-table stripe :data="cartItems">

            <template slot="header">
        
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

              <vs-th style="color: black; font-weight: bold;">
                Tutar
              </vs-th>
              <vs-th style="color: black; font-weight: bold;">
                Termin
              </vs-th>
            </template>
      
            <template slot-scope="{ data }">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].stockCode" style="color: black; font-weight: bold;">
                  {{ data[indextr].stockCode }}
                </vs-td>
                <vs-td style="color: black; font-weight: bold;">
                  <img :src="data[indextr].url_image" alt="Product Image" style="max-width: 150px; max-height: 150px;">
                </vs-td>
              
                <vs-td :data="data[indextr].attr3_boy" style="color: black; font-weight: bold;">
                  {{ data[indextr].attr3_boy ? data[indextr].attr3_boy.replace('cm', '') + ' x ' : '' }}
                  {{ data[indextr].attr2_en ? data[indextr].attr2_en.replace('cm', '') : '' }}
                </vs-td>
                <vs-td style="color: black; font-weight: bold;">
                  <div>
                    <input type="text" class="styled-input" style="color: black; font-weight: bold;" />
                  </div>
                </vs-td>
                <vs-td :data="data[indextr].quantity" style="color: black; font-weight: bold;">
                  {{ data[indextr].quantity }}
                </vs-td>
         
                <vs-td :data="data[indextr].stockPrice" style="color: black; font-weight: bold;">
                  {{ data[indextr].stockPrice }}
                </vs-td>
      
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: black; font-weight: bold; font-size: 12px; height: 30px; width: 40px;" v-model="iskonto" @input="updateIskonto" />
                  </div>
                </vs-td>
                
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: black; font-weight: bold; font-size: 12px; height: 30px; width: 40px;" :value="tutarForItem(indextr)" disabled />
                  </div>
                </vs-td>
              </vs-tr>
      
              <b-col>
            
                <vs-td>
                  <div>
                    <input type="date" class="styled-input" style="color: black; font-weight: bold; font-size: 12px; height: 30px; width: 40px;" :value="termin(indextr)"  />
                  </div>
                </vs-td>
              </b-col>
              <b-col>
      
           
            </b-col>
      
            </template>          </vs-table>
            <div style="display: table; width: 100%;">
              <div class="additional-fields" style=" margin-left: 1112px;" >      
            
              <div>
                <vs-th style="color: black; font-weight: bold;">TOPLAM</vs-th>
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: black; font-weight: bold; height: 30px; width: 160px;" v-model="calculatedToplam" />
                  </div>
                </vs-td>
              </div>
              <br>
              <div>
                <vs-th style="color: black; font-weight: bold; ">KDV (%20) </vs-th>
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: black; font-weight: bold; height: 30px; width: 160px;" :value="kdvUygulanmisGenelToplam" />
                  </div>
                </vs-td>
              </div>
              <br>
              <div>
                <vs-th style="color: black; font-weight: bold;">  GENEL İSKONTO </vs-th>
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: rgb(2, 2, 2); font-weight: bold; height: 30px; width: 120px;" :value="genelİskonto"  />
                  </div>
                </vs-td>
              </div>
              <br>
              <div>
                <vs-th style="color: black; font-weight: bold;">GENEL TOPLAM</vs-th>
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: rgb(232, 0, 0); font-weight: bold; height: 30px; width: 120px;" :value="totalGenelToplam" disabled />
                  </div>
                </vs-td>
              </div>
             
            </div>
            
          </div>
<b-col> </b-col>
<div class="not-panel" style=" margin-top: -140px;">
  <h6> Not1: Siparişin onaylanması için bu form imzalanarak tarafımıza ulaştırılmalı ve ilgili ödeme gerçekleşmiş olmalıdır.</h6>
  <h6> Not2: Geçerlilik Süresi sonrasında onaylanan teklifler için fiyat, stok ve sevk tarihi bilgileri değişebilir.</h6>
  <h6> Not3: Üretim hataları dışında iade kabul edilmemektedir. | Firmamız e-Fatura mükellefidir.</h6>
  <h6>Not4: <input type="text" class="styled-input" style="color: black; font-weight: bold; width: 500px;" /></h6>
  <h6>Not5: <input type="text" class="styled-input" style="color: black; font-weight: bold; width: 500px;" /></h6>
  </div>



 
            


<br>
<br>

<br>

<br>

<div class="birinciAlan"  style="display: inline-flex;">
            
              <div>
                <vs-th style="color: black; font-weight: bold;">Geçerlilik Süresi</vs-th>
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: black; font-weight: bold; height: 30px; width: 160px;" v-model="gecerlilikSuresi" disabled />
                  </div>
                </vs-td>
              </div>
              <br>
              <div>
                <vs-th style="color: black; font-weight: bold; ">Sevk Tarihi </vs-th>
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: black; font-weight: bold; height: 30px; width: 160px;" :value="sevkTarihi" />
                  </div>
                </vs-td>
              </div>
              <br>
              <div>
                <vs-th style="color: black; font-weight: bold;">  Nakliye </vs-th>
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: rgb(255, 0, 0); font-weight: bold; height: 30px; width: 120px;" :value="nakliye"  />
                  </div>
                </vs-td>
              </div>
              <div>
                <vs-th style="color: black; font-weight: bold;">Ödeme Şekli</vs-th>
                <vs-td>
                  <div>
                    <input type="text" class="styled-input" style="color: rgb(232, 0, 0); font-weight: bold; height: 30px; width: 120px;" :value="odemeSekli" disabled />
                  </div>
                </vs-td>
              </div>
            </div>
            
            <div class="button-container" style="margin-left: 1292px; display: flex;">
              <vs-button style="border-radius: 5px; margin-right: 10px;" type="gradient" color="primary" @click="teklifYazdir()">Teklif Yazdır</vs-button>
              <vs-button style="border-radius: 5px;" type="gradient" color="success" @click="teklifKaydet()">Teklif Kaydet</vs-button>
            </div>
            
          </vs-card>
        </vs-table-container>
    
        <teklifYazdir ref="teklifYazdir" :cartItems="cartItems"></teklifYazdir>
      </div>
    </div>
  </template>


<script>
import teklifYazdir from './pages/components/teklifYazdir.vue'


export default {
  components: {
    teklifYazdir,
  },
  data() {
    return {
      gecerlilikSuresi: 1, // Default değeri burada 1 olarak ayarlanmıştır
      nakliye: "Nakliye DAHİL",
      odemeSekli: "PEŞİN",
      iskonto: 0,
      tutar: 0,
      kdvOrani: 20, // %20 KDV oranı
      genelToplamInput: 0,
    };
  },
  methods: {
    updateIskonto() {
      // İskonto değeri yüzde olarak girildiği varsayılarak düzenlenir
      this.iskonto = parseFloat(this.iskonto.replace(',', '.')) || 0;
    },
    tutarForItem(index) {
      const item = this.cartItems[index];
      if (item && item.stockPrice && item.quantity) {
        const stockPrice = parseFloat(item.stockPrice);
        const quantity = parseInt(item.quantity);
        if (!isNaN(stockPrice) && !isNaN(quantity)) {
          // İskonto yüzdesini kullanarak fiyatı düzenle
          const discountedPrice = stockPrice - (stockPrice * this.iskonto / 100);
          return discountedPrice * quantity;
        }
      }
      return 0;
    },
    teklifYazdir() {
      this.$refs.teklifYazdir.yazdir();
    },

  
  },
  computed: {
    cartItems() {
      return this.$store.state.eCommerce.cartItems;
    },
    calculatedToplam() {
      return this.cartItems.reduce((total, item, index) => {
        return total + this.tutarForItem(index);
      }, 0);
    },
    kdvUygulanmisGenelToplam() {
      const kdvOraniDecimal = this.kdvOrani / 100;
      const kdvliToplam = this.calculatedToplam * (1 + kdvOraniDecimal);
      return kdvliToplam.toFixed(2);
    },
    
  
  
  },
};
</script>
<style scoped>
/* Initially hide the component */
.teklifYazdir {
  display: none;
}
body {
  background-color: #ffffff; /* Set the desired color */
}
/* Display the component when in print mode */
@media print {
  .teklifYazdir {
    display: block !important;
  }
}

</style>