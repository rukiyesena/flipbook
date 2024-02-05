<template>
  <div id="printMeTeklif" class="printMeTeklif" style="display: none;">
    <b-row>
      <b-col cols="12">
        <div class="card-header">
          <h3 style="color: rgb(202, 0, 0); font-weight: bold;">Teklif Formu</h3>
          <img :src="require('@/assets/images/logo/FFlogo.png')" alt="Logo" class="logoFirm" />
        </div>
      </b-col>
      <b-col>
        <div class="sender-details">
          <h3 style="font-family: sans-serif;">
            Türkiye'nin Ferforje Markası
          </h3>

          <h4 style="color: rgb(202, 0, 0); font-weight: bold;"> FATİH PROFİL SANAYİ VE TİCARET A.Ş.</h4>

          <b-row align-v="center" style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('address') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              Organize Sanayi 1. Kısım Turan Bahadır Cad. No:15 Honaz/DENİZLİ
            </b-col>
          </b-row>
          <b-row align-v="center" style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('shipPhone') + ':'" label-for="h-first-name"
                style="margin: 0px !important; padding: 0px !important; font-weight: bold;font-size: larger;">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              +90 258 269 16 64
            </b-col>
          </b-row>
          <b-row align-v="center" style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('fax') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              +90 258 269 11 41
            </b-col>
          </b-row>
          <b-row align-v="center" style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('Email') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              pazarlama@fatih.com.tr
            </b-col>
          </b-row>
          <b-row align-v="center" style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('taxOffice') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              Saraylar Vergi Dairesi
            </b-col>
          </b-row>
          <b-row align-v="center" style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('taxNumber') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              385 001 70 69
            </b-col>
          </b-row>


        </div>
      </b-col>
      <b-col>
        <div class="right-panel">
          <b-row align-v="center">
            <b-col cols="4" align-self="center">
              <b-form-group :label="$t('date') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; text-align: end; ">
              </b-form-group>
            </b-col>
            <b-col cols="8">
              <h6 style="margin: 0px">{{ getDate() }} </h6>
            </b-col>
          </b-row>
          <b-row align-v="center">
            <b-col cols="4" align-self="center">
              <b-form-group :label="$t('No') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; text-align: end;">
              </b-form-group>
            </b-col>
            <b-col cols="8">
              <h6 style="margin: 0px">0115ZK01-SEDEF ÇELİK KAPI-PARÇA </h6>
            </b-col>
          </b-row>
          <b-row style="margin: 0px !important; padding: 0px !important">

            <b-col cols="12" style="margin: 0px !important; padding: 0px !important">
              {{ offerItem.title }}
            </b-col>
          </b-row>
          <b-row style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('shipName') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important ">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              {{ offerItem.shipName }}
            </b-col>
          </b-row>

          <b-row style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('invoiceAddress') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important ">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              {{ offerItem.invoiceAddress }}
            </b-col>
          </b-row>
          <b-row style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('shipPhone') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important ">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              {{ offerItem.shipPhone }}
            </b-col>
          </b-row>
          <b-row style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('fax') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important ">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              {{ offerItem.fax }}
            </b-col>
          </b-row>
          <b-row style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('eMail') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important ">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              {{ offerItem.eMail }}
            </b-col>
          </b-row>
          <b-row style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('taxOffice') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important ">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              {{ offerItem.taxOffice }}
            </b-col>
          </b-row>
          <b-row style="margin: 0px !important; padding: 0px !important">
            <b-col cols="5" align-self="center" style="margin: 0px !important; padding: 0px !important">
              <b-form-group :label="$t('taxNumber') + ':'" label-for="h-first-name"
                style="font-weight: bold;font-size: larger; margin: 0px !important; padding: 0px !important ">
              </b-form-group>
            </b-col>
            <b-col cols="7" style="margin: 0px !important; padding: 0px !important">
              {{ offerItem.taxNumber }}
            </b-col>
          </b-row>

        </div>
      </b-col>

    </b-row>
    <table style="text-align: center; width:100%">
      <tr>
        <th sort-key="stokkodu" style="  text-align: center; border-bottom: 1px solid grey;  padding: 3px; ">
          {{ $t('Image') }}
        </th>
        <th sort-key="stokkodu" style="
                      text-align: center;
                      border-bottom: 1px solid grey;
                      padding: 3px;
                    ">
          {{ $t('StockCode') }}
        </th>

        <th style="
                      text-align: center;
                      border-bottom: 1px solid grey;
                      padding: 3px;
                    ">
          {{ $t('size') }}
        </th>
        <th style="
                      text-align: center;
                      border-bottom: 1px solid grey;
                      padding: 3px;
                    ">
          {{ $t('Description') }}
        </th>
        <th style="
                      text-align: center;
                      border-bottom: 1px solid grey;
                      padding: 3px;
                    ">
          {{ $t('Quantity') }}
        </th>
        <th style="
                      text-align: center;
                      border-bottom: 1px solid grey;
                      padding: 3px;
                    ">
          {{ $t('Price') }}
        </th>
        <th style="
                      text-align: center;
                      border-bottom: 1px solid grey;
                      padding: 3px;
                    ">
          {{ $t('discount') }}
        </th>
        <th style="
                      text-align: center;
                      border-bottom: 1px solid grey;
                      padding: 3px;
                    ">
          {{ $t('sum') }}
        </th>
        <th style="
                      text-align: center;
                      border-bottom: 1px solid grey;
                      padding: 3px;
                    ">
          {{ $t('deadline') }}
        </th>

      </tr>
      <tr :key="indextr" v-for="(tr, indextr) in  cartItems ">
        <td style="padding: 8px; border: 1px solid grey ">
          <img :src="tr.url_image" alt="Product Image" style="max-width: 50px; max-height: 200px;">
        </td>

        <td style="padding: 8px;  border: 1px solid grey">
          {{ tr["stockCode"] }}
        </td>

        <td style="padding: 8px;  border: 1px solid grey">
          {{ tr.stockBoy ? tr.stockBoy.replace('cm', '') + ' x ' : '' }}
          {{ tr.stockEn ? tr.stockEn.replace('cm', '') : '' }}
        </td>
        <td style="padding: 8px;  border: 1px solid grey">
          {{ tr["description"] }}
        </td>
        <td style="padding: 8px;  border: 1px solid grey">
          {{ tr["quantity"] }}
        </td>
        <td style="padding: 8px;  border: 1px solid grey">
          {{ tr["stockPrice"] }}
        </td>
        <td style="padding: 8px;  border: 1px solid grey">
          {{ tr["discountRateLine"] }}
        </td>
        <td style="padding: 8px;  border: 1px solid grey">
          {{ tr["quantity"] }}
        </td>
        <td style="padding: 8px;  border: 1px solid grey">
          {{ tr["termin"] }}
        </td>


      </tr>

    </table>

    <div class="not-panel" style="margin-top: 15px">

      <h6> {{ $t('note1') }} </h6>
      <h6> {{ $t('note2') }} </h6>
      <h6> {{ $t('note3') }} </h6>

      <div style="display: flex; align-items: center;">
        <h6>Not4: </h6>
        <vs-input type="text" class="styled-input" size="small"
          style="color: rgb(185, 0, 0); font-weight: bold; width: 650px;" />
      </div>

      <div style="display: flex; align-items: center;">
        <h6>Not5: </h6>
        <vs-input size="small" type="text" class="styled-input" style="color: black; font-weight: bold; width: 650px;" />
      </div>

    </div>

    <table style="border-top: 1px solid;margin-top: 15px " class="border-collapse">
      <tr>
        <td>
          <table style="text-align: center">

            <tr>
              <td style="padding: 8px; border: 1px solid; font-weight: 600">

                {{ $t('info1') }}

              </td>

              <td style="padding: 8px; border: 1px solid">
                {{ $t('info2') }}

              </td>
            </tr>
            <tr>


              <td style="padding: 8px; border: 1px solid">
                {{ $t('info3') }}

              </td>
            </tr>


          </table>
        </td>
      </tr>
      <br />
      <tr style="width:100%">
        <td>
          <table style="text-align: center; width:100%">

            <tr>
              <td style="padding: 8px; border: 1px solid; font-weight: 600">
                {{ $t('prepared') }}
              </td>

              <td style="padding: 8px; border: 1px solid">
                Zeki KARADAĞ
              </td>
              <td style="padding: 8px; border: 1px solid; font-weight: 600">
                {{ $t('approver') }}

              </td>
              <td style="padding: 8px; border: 1px solid">
                Zeki KARADAĞ
              </td>

              <td style="padding: 8px; border: 1px solid; font-weight: 600">
                {{ $t('approverCust') }}

              </td>
            </tr>
            <tr>


              <td style="padding: 8px; border: 1px solid; height: 75px; text-align: center;" colspan="2">
                <p style="margin-top: -33px;">{{ $t('signature') }} </p>
              </td>
              <td style="padding: 8px; border: 1px solid; height: 75px; text-align: center;" colspan="2">
                <p style="margin-top: -33px;">{{ $t('signature') }}</p>

              </td>
              <td style="padding: 8px; border: 1px solid; height: 75px; text-align: center;" colspan="2">
                <p style="margin-top: -33px;">{{ $t('signature') }}</p>

              </td>
            </tr>


          </table>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import moment from "moment";
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
    getDate() {
      return moment(String(Date())).format("DD.MM.YYYY")
    },
    yazdir() {
      console.log("innn")
      if (this.cartItems && this.cartItems.length > 0) {
        this.$htmlToPaper("printMeTeklif");
      } else {
        console.warn("No data to print.");
      }
    },
  },
  computed: {

    offerItem() {
      console.log(this.$store.state.offerItem)
      return this.$store.state.offerItem;
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