<template lang="html">
  <div class="teklif-form-container">
    <div class="header-section">
      <b-row>
        <b-col cols="11">
          <vs-card>
            <div style="margin: 15px;">
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

                    <h3 style="color: rgb(202, 0, 0); font-weight: bold;"> FATİH PROFİL SANAYİ VE TİCARET A.Ş.</h3>
                    <b-row align-v="center" style="margin-top:8px">
                      <b-col cols="3" align-self="center">
                        <b-form-group :label="$t('address') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger;">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <h6 style="margin: 0px"> Organize Sanayi 1. Kısım Turan Bahadır Cad. No:15 Honaz/DENİZLİ</h6>
                      </b-col>
                    </b-row>
                    <b-row align-v="center" style="margin-top:8px">
                      <b-col cols="3" align-self="center">
                        <b-form-group :label="$t('shipPhone') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger;">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <h6 style="margin: 0px"> +90 258 269 16 64 </h6>
                      </b-col>
                    </b-row>
                    <b-row align-v="center" style="margin-top:8px">
                      <b-col cols="3" align-self="center">
                        <b-form-group :label="$t('fax') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger;">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <h6 style="margin: 0px"> +90 258 269 11 41 </h6>
                      </b-col>
                    </b-row>
                    <b-row align-v="center" style="margin-top:8px">
                      <b-col cols="3" align-self="center">
                        <b-form-group :label="$t('Email') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger;">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <h6 style="margin: 0px">pazarlama@fatih.com.tr </h6>
                      </b-col>
                    </b-row>
                    <b-row align-v="center" style="margin-top:8px">
                      <b-col cols="3" align-self="center">
                        <b-form-group :label="$t('taxOffice') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger;">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <h6 style="margin: 0px">Saraylar Vergi Dairesi </h6>
                      </b-col>
                    </b-row>
                    <b-row align-v="center" style="margin-top:8px">
                      <b-col cols="3" align-self="center">
                        <b-form-group :label="$t('taxNumber') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger;">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <h6 style="margin: 0px">385 001 70 69</h6>
                      </b-col>
                    </b-row>


                  </div>
                </b-col>
                <b-col>
                  <div class="right-panel">
                    <b-row align-v="center" style="margin-top:8px">
                      <b-col cols="4" align-self="center">
                        <b-form-group :label="$t('date') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger; text-align: end;">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <h6 style="margin: 0px">{{ getDate() }} </h6>
                      </b-col>
                    </b-row>
                    <b-row align-v="center" style="margin-top:8px">
                      <b-col cols="4" align-self="center">
                        <b-form-group :label="$t('No') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger; text-align: end;">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <h6 v-if="isDone == 'true'" style="margin: 0px">{{ offerNumber }} </h6>
                      </b-col>
                    </b-row>
                    <b-row style="margin-top:8px">

                      <b-col cols="12">
                        <vs-input size="small" v-model="title" class="w-full" type="text" name="title"
                          @input="setInputOffer" v-validate="'required'" />
                        <span class="text-danger text-sm" v-show="errors.has('title')">{{ errors.first('title')
                        }}</span>
                      </b-col>
                    </b-row>
                    <b-row style="margin-top:8px">
                      <b-col cols="4" align-self="center">
                        <b-form-group :label="'* ' + $t('shipName') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger; ">
                        </b-form-group>
                      </b-col>
                      <b-col cols="4">
                        <vs-input size="small" v-model="shipName" type="text" name="title" v-validate="'required'"
                          @input="setInputOffer" class="w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('title')">{{ errors.first('title')
                        }}</span>
                      </b-col>
                      <b-col cols="4">
                        <vs-input size="small" v-model="shipSurname" type="text" name="title" v-validate="'required'"
                          @input="setInputOffer" class="w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('title')">{{ errors.first('title')
                        }}</span>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col cols="4" align-self="center">
                        <b-form-group :label="'* ' + $t('invoiceAddress') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger; ">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <vs-input size="small" v-model="invoiceAddress" type="text" name="invoiceAddress"
                          @input="setInputOffer" v-validate="'required'" class="w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('invoiceAddress')">{{
                          errors.first('invoiceAddress')
                        }}</span>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="4" align-self="center">
                        <b-form-group :label="'* ' + $t('shipPhone') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger; ">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <vs-input size="small" v-model="shipPhone" type="text" name="shipPhone" v-validate="'required'"
                          @input="setInputOffer" class="w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('shipPhone')">{{ errors.first('shipPhone')
                        }}</span>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="4" align-self="center">
                        <b-form-group :label="'* ' + $t('fax') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger; ">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <vs-input size="small" v-model="fax" type="text" name="fax" v-validate="'required'"
                          @input="setInputOffer" class="w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('fax')">{{ errors.first('fax')
                        }}</span>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="4" align-self="center">
                        <b-form-group :label="'* ' + $t('eMail') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger; ">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <vs-input size="small" v-model="eMail" type="text" name="eMail" v-validate="'required|email'"
                          @input="setInputOffer" class="w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('eMail')">{{ errors.first('eMail')
                        }}</span>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="4" align-self="center">
                        <b-form-group :label="'* ' + $t('taxOffice') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger; ">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <vs-input size="small" v-model="taxOffice" type="text" name="taxOffice" v-validate="'required'"
                          @input="setInputOffer" />
                        <span class="text-danger text-sm" v-show="errors.has('taxOffice')">{{ errors.first('taxOffice')
                        }}</span>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="4" align-self="center">
                        <b-form-group :label="'* ' + $t('taxNumber') + ':'" label-for="h-first-name"
                          style="font-weight: bold;font-size: larger; ">
                        </b-form-group>
                      </b-col>
                      <b-col cols="8">
                        <vs-input size="small" v-model="taxNumber" type="text" name="taxNumber" v-validate="'required'"
                          @input="setInputOffer" />
                        <span class="text-danger text-sm" v-show="errors.has('taxNumber')">{{ errors.first('taxNumber')
                        }}</span>
                      </b-col>
                    </b-row>

                  </div>
                </b-col>

              </b-row>



              <vs-table stripe :data="cartItemsLocal" style="margin-top: 15px">
                <template slot="header">

                </template>

                <template slot="thead">
                  <vs-th style="color: black; font-weight: bold;">
                    {{ $t('Image') }}
                  </vs-th>
                  <vs-th style="color: black; font-weight: bold;">
                    {{ $t('StockCode') }}
                  </vs-th>

                  <vs-th style="color: black; font-weight: bold;">
                    {{ $t('size') }}
                  </vs-th>


                  <vs-th style="color: black; font-weight: bold;">
                    {{ $t('Description') }}
                  </vs-th>
                  <vs-th style="color: black; font-weight: bold;">
                    {{ $t('Quantity') }}
                  </vs-th>

                  <vs-th style="color: black; font-weight: bold;">
                    {{ $t('Price') }}
                  </vs-th>


                  <vs-th style="color: black; font-weight: bold;">
                    {{ $t('sum') }}
                  </vs-th>
                  <vs-th style="color: black; font-weight: bold;">
                    {{ $t('deadline') }}
                  </vs-th>
                </template>

                <template slot-scope="{ data }">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td style="color: black; font-weight: bold;">
                      <img :src="tr.url_image" alt="Product Image" style="max-width: 75px; max-height: 150px;">
                    </vs-td>
                    <vs-td :data="tr.stockCode" style="color: black; font-weight: bold;">
                      {{ tr.stockCode }}
                    </vs-td>


                    <vs-td :data="tr.stockEn" style="color: black; font-weight: bold;">
                      {{ tr.stockBoy ? tr.stockBoy.replace('cm', '') + ' x ' : '' }}
                      {{ tr.stockEn ? tr.stockEn.replace('cm', '') : '' }}
                    </vs-td>
                    <vs-td :data="tr.description" style="color: black; font-weight: bold;">
                      <vs-textarea size="small" v-model="tr.description" type="text" style="width: 150px;" />

                    </vs-td>
                    <vs-td :data="tr.quantity" style="color: black; font-weight: bold;">
                      <b-row>
                        <div v-if="parseInt(tr.quantity) > parseInt(tr.stockQty)">
                          <vs-chip color="danger"
                            v-b-tooltip.hover.bottom="new Intl.NumberFormat().format(parseInt(tr.stockQty)) + ' adet'">
                            Ön Sipariş
                          </vs-chip>
                        </div>
                        <div v-else>
                          <vs-chip color="success"
                            v-b-tooltip.hover.bottom="new Intl.NumberFormat().format(parseInt(tr.stockQty)) + ' adet'">
                            Hazır
                          </vs-chip>
                        </div>
                      </b-row>

                      <vs-input size="small" v-model="tr.quantity" type="text" @input="setCartItems(indextr, tr)"
                        style="font-size: inherit; color: black; font-weight: bold;  width: 75px;"
                        :name="'quantity_' + indextr" v-validate="'required'" />
                      <span class="text-danger text-sm" v-show="errors.has('quantity_' + indextr)">{{
                        errors.first('quantity_' + indextr)
                      }}</span>

                    </vs-td>



                    <vs-td :data="tr.stockPrice" style="color: black; font-weight: bold;">
                      {{ new Intl.NumberFormat("tr-TR",
                        { style: "currency", currency: "TRY" }).format(parseFloat(tr.stockPrice)) }}


                    </vs-td>

                    <vs-td>
                      <div>
                        {{ new Intl.NumberFormat("tr-TR",
                          { style: "currency", currency: "TRY" }).format(parseFloat(tutarForItem(indextr))) }}


                      </div>
                    </vs-td>
                    <vs-td>
                      <div>

                        {{ tr.termin }}
                      </div>
                    </vs-td>
                  </vs-tr>


                </template> </vs-table>
              <b-row style="margin-top: 15px;">
                <b-col cols="5">
                  <b-row>
                    <b-col cols="5" align-self="center">
                      <b-form-group :label="'* ' + $t('validFor') + ':'" label-for="h-first-name"
                        style="font-weight: bold;font-size: larger; ">
                      </b-form-group>
                    </b-col>
                    <b-col cols="7">
                      <vs-input size="small" v-model="gecerlilikSuresi" type="text" name="validFor" disabled
                        v-validate="'required'" />
                      <span class="text-danger text-sm" v-show="errors.has('validFor')">{{ errors.first('validFor')
                      }}</span>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="5" align-self="center">
                      <b-form-group :label="'* ' + $t('sevkTarihi') + ':'" label-for="h-first-name"
                        style="font-weight: bold;font-size: larger; ">
                      </b-form-group>
                    </b-col>
                    <b-col cols="7">
                      <b-form-datepicker id="baslangic" v-model="sevkTarihi" size="sm" placeholder="-" name="sevkTarihi"
                        disabled v-validate="'required'" style=" width: 200px;" :date-format-options="{
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric'
                        }" />
                      <span class="text-danger text-sm" v-show="errors.has('sevkTarihi')">{{ errors.first('sevkTarihi')
                      }}</span>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="5" align-self="center">
                      <b-form-group :label="'* ' + $t('nakliye') + ':'" label-for="h-first-name"
                        style="font-weight: bold;font-size: larger; ">
                      </b-form-group>
                    </b-col>
                    <b-col cols="7">
                      <vs-input size="small" v-model="nakliye" type="text" name="nakliye" v-validate="'required'"
                        disabled />
                      <span class="text-danger text-sm" v-show="errors.has('nakliye')">{{ errors.first('nakliye')
                      }}</span>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="5" align-self="center">
                      <b-form-group :label="'* ' + $t('paymentType') + ':'" label-for="h-first-name"
                        style="font-weight: bold;font-size: larger; ">
                      </b-form-group>
                    </b-col>
                    <b-col cols="7">
                      <vs-input size="small" v-model="paymentType" type="text" name="paymentType" disabled
                        v-validate="'required'" />
                      <span class="text-danger text-sm" v-show="errors.has('paymentType')">{{ errors.first('paymentType')
                      }}</span>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row>
                    <b-col>
                      {{ $t('Weight') }}
                    </b-col>
                  </b-row>
                  <vs-divider style="margin-bottom: 5px;margin-top: 5px;"></vs-divider>
                  <b-row>
                    <b-col>
                      {{ $t('shipAddress') }}
                    </b-col>
                  </b-row>
                  <b-row>

                    <vs-textarea size="small" v-model="shipAddress" type="text" name="shipAddress" @input="setInputOffer"
                      v-validate="'required'" />
                    <span class="text-danger text-sm" v-show="errors.has('shipAddress')">{{ errors.first('shipAddress')
                    }}</span>

                  </b-row>
                </b-col>
                <b-col cols="4">
                  <b-row align-h="end">
                    <b-col cols="3" align-self="center">
                      <b-form-group label-for="h-first-name" style="font-weight: bold;font-size: larger; ">
                      </b-form-group>
                    </b-col>
                    <b-col cols="7">
                      <vs-input size="small" v-model="calculatedToplam" type="text" name="calculatedToplam" disabled
                        v-validate="'required'" />
                      <span class="text-danger text-sm" v-show="errors.has('calculatedToplam')">{{
                        errors.first('calculatedToplam')
                      }}</span>
                    </b-col>
                  </b-row>
                  <b-row align-h="end">
                    <b-col cols="3" align-self="center">
                      <b-form-group label-for="h-first-name" style="font-weight: bold;font-size: larger; ">
                      </b-form-group>
                    </b-col>
                    <b-col cols="7">
                      <vs-input size="small" v-model="kdvUygulanmisGenelToplam" type="text" disabled
                        name="kdvUygulanmisGenelToplam" v-validate="'required'" />
                      <span class="text-danger text-sm" v-show="errors.has('kdvUygulanmisGenelToplam')">{{
                        errors.first('kdvUygulanmisGenelToplam')
                      }}</span>
                    </b-col>
                  </b-row>
                  <b-row align-h="end">
                    <b-col cols="3" align-self="center">
                      <b-form-group :label="'* ' + $t('Vat') + ':'" label-for="h-first-name"
                        style="font-weight: bold;font-size: larger; ">
                      </b-form-group>
                    </b-col>
                    <b-col cols="7">
                      <vs-input size="small" v-model="totalDiscountRate" type="text" name="totalDiscountRate" disabled
                        v-validate="'required'" />
                      <span class="text-danger text-sm" v-show="errors.has('totalDiscountRate')">{{
                        errors.first('totalDiscountRate')
                      }}</span>
                    </b-col>
                  </b-row>
                  <b-row align-h="end">
                    <b-col cols="3" align-self="center">
                      <b-form-group :label="'* ' + $t('sum') + ':'" label-for="h-first-name"
                        style="font-weight: bold;font-size: larger; ">
                      </b-form-group>
                    </b-col>
                    <b-col cols="7">
                      <vs-input size="small" v-model="totalGenelToplam" type="text" name="totalGenelToplam" disabled
                        v-validate="'required'" />
                      <span class="text-danger text-sm" v-show="errors.has('totalGenelToplam')">{{
                        errors.first('totalGenelToplam')
                      }}</span>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>




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
                  <vs-input size="small" type="text" class="styled-input"
                    style="color: black; font-weight: bold; width: 650px;" />
                </div>

              </div>

              <table border="1" style="border-top: 1px solid;margin-top: 15px " class="border-collapse">
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


              <div class="button-container" style="margin-top: 15px">
                <vs-button style="border-radius: 5px;" type="gradient" color="primary" @click="teklifYazdir()">
                  {{ $t('print') }}</vs-button>
                <vs-button style="border-radius: 5px;" type="gradient" color="success" @click="teklifKaydet()">
                  {{ $t('saveQuote') }} </vs-button>
                <vs-button v-if="isDone == 'true'" style="border-radius: 5px;" type="gradient" color="danger" @click="teklifGonder()">Teklif
                  Onayla</vs-button>
              </div>
            </div>


          </vs-card>
        </b-col>
        <b-col>
          <i18n />
        </b-col>
      </b-row>

      <TeklifOnayMail ref="teklifOnayMailRef" />

    </div>
  </div>
</template>


<script>
import teklifYazdir from './pages/components/teklifYazdir.vue'
import TeklifOnayMail from './TeklifOnayMail.vue';
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import { Validator } from "vee-validate";
import I18n from '../../layouts/components/navbar/components/I18n.vue'

export default {

  components: {
    I18n,
    teklifYazdir,
    Datepicker,
    TeklifOnayMail,
  },
  data() {
    return {
      cartItemsLocal: [],
      offerNumber: "",
      totalDiscountRate: 0,
      sevkTarihi: "",
      paymentType: "Peşin",
      fax: "",
      title: "",
      shipName: "",
      eMail: "",
      taxNumber: "",
      taxOffice: "",
      invoiceAddress: "",
      shipAddress: "",
      shipPhone: "",
      description: "",
      taxOffice: "",
      gecerlilikSuresi: 1, // Default değeri burada 1 olarak ayarlanmıştır
      nakliye: "Nakliye DAHİL",
      odemeSekli: "PEŞİN",
      discountRateLine: 0,
      tutar: 0,
      kdvOrani: 20, // %20 KDV oranı
      genelToplamInput: 0,
    };
  },
  methods: {
    sortByStockCode(items) {
      return items.sort((a, b) => {
        const stockCodeA = a.stockCode.toUpperCase(); // Büyük/küçük harf duyarlı sıralama
        const stockCodeB = b.stockCode.toUpperCase();

        if (stockCodeA < stockCodeB) {
          return -1;
        }
        if (stockCodeA > stockCodeB) {
          return 1;
        }
        return 0;
      });
    },
    setCartItems(index, tr) { 
      this.isInCart(tr.stockCode)
        ? this.$store.dispatch("eCommerce/updateItem", tr)
        : '';  
    },
    setInputOffer() {
      if (this.$route.params.onay == "false") {


        let offerItemLocal = {
          sevkTarihi: this.sevkTarihi,
          paymentType: this.paymentType,
          description: this.description,
          gecerlilikSuresi: this.gecerlilikSuresi,
          nakliye: this.nakliye,
          odemeSekli: this.odemeSekli,
          title: this.title,
          shipName: this.shipName,
          shipSurname: this.shipSurname,
          eMail: this.eMail,
          invoiceAddress: this.invoiceAddress,
          taxOffice: this.taxOffice,
          fax: this.fax,
          shipAddress: this.shipAddress,
          shipPhone: this.shipPhone,
          taxNumber: this.taxNumber,
          title: this.title,
        }
        this.$store.commit('offerItem', offerItemLocal);
      }
    },
    getDate() {
      return moment(String(Date())).format("DD.MM.YYYY")
    },
    updateIskonto(indextr, event) {
      this.$store.commit('setDiscountRateLine', { index: indextr, value: parseFloat(event.target.value.replace(',', '.')) || 0 });
    },
    tutarForItem(index) {
      const item = this.cartItems[index];
      if (item && item.stockPrice && item.quantity) {
        const stockPrice = parseFloat(item.stockPrice);
        const quantity = parseInt(item.quantity);
        const discountRate = parseFloat(this.cartItems[index].discountRateLine) || 0;

        // Calculate the discounted price
        const discountedPrice = stockPrice - (stockPrice * discountRate / 100);

        return discountedPrice * quantity;
      }
      return 0;
    },

    teklifYazdir() {
      this.$refs.teklifYazdir.yazdir();
    },
    teklifGonder() {
      var vm = this;

      const stockCodes = vm.$store.state.eCommerce.cartItems.map(item => item.stockCode);

      vm.$store.dispatch('GetOfferNumber')
        .then((offerNumberResponse) => {
          const { offerNumber } = offerNumberResponse;
          const detail = {
            shipName: vm.shipName,
            address: vm.address,
            taxNumber: vm.taxNumber,
            taxOffice: vm.taxOffice,
            shipSurname: vm.shipSurname,
            eMail: vm.eMail,
            shipPhone: vm.shipPhone
          }
          vm.$refs.teklifOnayMailRef.getItems(offerNumber.replace(/"/g, ""), detail);
          setTimeout(function () {
            const args = {
              receiver: "rukiye@uzum.com.tr, evrim@uzum.com.tr",
              message: vm.$refs.teklifOnayMailRef.$el.innerHTML,
              subject: "Teklif Onay İşlemi"
            };
            vm.$store.dispatch('sendMail', args)
              .then((response) => {

                const promises = stockCodes.map((stockCode) => {
                  return vm.$store.dispatch('GetCrudToOfferList', {
                    shipName: detail.shipName,
                    shipSurname: detail.shipSurname,
                    address: vm.address,
                    taxNumber: vm.taxNumber,
                    taxOffice: vm.taxOffice,
                    eMail: detail.eMail,
                    shipPhone: detail.shipPhone,
                    offerNumber: offerNumber.replace(/"/g, ""),
                    islem: "insert",
                    stockCode
                  });
                });

                return Promise.all(promises);
              })
          }, 2000);


        })
      /*   .then((crudResponses) => {
           const { offerNumber } = crudResponses[0];
           //   vm.$router.push(`/flipbook/Teklif/Onay/${offerNumber}`);
         })
 
         .catch((error) => {
           console.error('Error', error);
         });*/
    },
    teklifKaydet() {

      const arg = {
        // Define the properties needed for GetCrudToOfferList
        quantity: this.quantityLine,
        // ... other properties ...
      };

      const stockCodes = this.$store.state.eCommerce.cartItems.map(item => item.stockCode);

      this.$store.dispatch('GetOfferNumber')
        .then((offerNumberResponse) => {
          const { offerNumber } = offerNumberResponse;


          const promises = stockCodes.map((stockCode) => {
            return this.$store.dispatch('GetCrudToOfferList', {
              shipName: this.shipName,
              shipPhone: this.shipPhone,
              offerNumber: offerNumber.replace(/"/g, ""),
              stockCode,
              shipAddress: this.shipAddress,
              barcode: this.barcode,
              deadline: this.deadline,
              description: this.description,
              taxNumber: this.taxNumber,
              taxOffice: this.taxOffice,
              discountRateLine: this.discountRateLine,
              paymentType: this.paymentType,
              quantityLine: arg.quantity,
              isDue: this.isDue,
            });
          });

          return Promise.all(promises);
        })
        .then((crudResponses) => {
          const { offerNumber } = crudResponses[0];
          const cleanedOfferNumber = offerNumber.replace(/"/g, ""); // Çift tırnakları kaldır
        //  this.$router.replace(`/flipbook/Teklif/Onay/${cleanedOfferNumber}`);
        })


        .catch((error) => {
          console.error('Error', error);
        });
    },
  },

  created() {
    /* try {
 
       this.$store
         .dispatch("fetchExchangeRates")
         .then(response => {
           console.log(response)
         });
     } catch (error) {
       console.log(error)
     }*/
    this.offerNumber = this.$route.params.offerNumber
    if (this.$route.params.onay == "true") {
      let args = {
        offerNumber: offerNumber.replace(/"/g, ""),
        isDue: "list",
      }
      this.$store
        .dispatch("getDataStock", args)
        .then(response => {
          var vs = this.$vs;
          this.stockList = response
          vs.loading.close(`#loading-${this.index}` + " > .con-vs-loading");
        });
    }



    const dict = {
      custom: {
        valid: {
          required: this.$t('valid')
        },
        title: {
          required: this.$t('requireTitle')
        },
        shipName: {
          required: this.$t('requireName'),
        },
        shipSurname: {
          required: this.$t('requireSurname'),
        },
        eMail: {
          required: this.$t('requireMail'),
        },
        shipAddress: {
          required: this.$t('requireShipaddress'),
        },
        shipPhone: {
          required: this.$t('requireshipPhone'),
        },
        taxNumber: {
          required: this.$t('requiretaxNumber'),
        },
        taxOffice: {
          required: this.$t('requiretaxOffice'),
        },
        fax: {
          required: this.$t('requirefax'),
        },
      }
    };

    Validator.localize("en", dict);
  },

  computed: {
    isInCart() {
      return (itemId) => this.$store.getters["eCommerce/isInCart"](itemId);
    },
    offerItem: {
      get() {
        return this.$store.state.offerItem;
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }

    },

    quantityLine() {
      const totalQuantity = this.cartItems.reduce((total, item) => total + parseInt(item.quantity), 0);
      return totalQuantity;
    },
    cartItems: {
      get() {
        return this.$store.state.eCommerce.cartItems;
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }

    },
    calculatedToplam() {
      return this.cartItems.reduce((total, item, index) => {
        return total + this.tutarForItem(index);
      }, 0);
    },
    kdvUygulanmisGenelToplam() {
      const kdvOraniDecimal = 20 / 100; // Use the fixed VAT rate of 20%
      const kdvliToplam = this.calculatedToplam * (kdvOraniDecimal);
      return kdvliToplam.toFixed(2);
    },
    totalGenelToplam() {
      // Calculate totalGenelToplam by summing kdvUygulanmisGenelToplam and calculatedToplam
      const totalAfterDiscount = parseFloat(this.kdvUygulanmisGenelToplam) + parseFloat(this.calculatedToplam);
      return totalAfterDiscount.toFixed(2);
    },



  },
  mounted() {
    console.log(this.cartItems)
    if (this.cartItems.length > 0) {

      this.cartItemsLocal = this.cartItems
    }
    if (this.$route.params.onay == "false") {
      this.sevkTarihi = "";
      this.paymentType = "Peşin";
      this.shipName = this.offerItem.shipName;
      this.eMail = this.offerItem.eMail;
      this.taxNumber = this.offerItem.taxNumber;
      this.shipPhone = this.offerItem.shipPhone;
      this.shipAddress = this.offerItem.shipAddress;
      this.invoiceAddress = this.offerItem.invoiceAddress;
      this.title = this.offerItem.title;
      this.description = "";
      this.taxOffice = this.offerItem.taxOffice;
      this.gecerlilikSuresi = 1; // Default değeri burada 1 olarak ayarlanmıştır
      this.nakliye = "Nakliye DAHİL";
      this.odemeSekli = "PEŞİN";
      this.fax = this.offerItem.fax;
    }
  },
  watch: {
    offerItem(val) {
      return val
    },
    cartItems(val) {
      console.log(val)
      return val
    }
  }
};
</script>
<style scoped>
[dir] .vs-con-table .vs-con-tbody {
  min-height: 750px;
}

/* Initially hide the component */
.teklifYazdir {
  display: none;
}

body {
  background-color: #ffffff;
  /* Set the desired color */
}

/* Display the component when in print mode */
@media print {
  .teklifYazdir {
    display: block !important;
  }
}
</style>