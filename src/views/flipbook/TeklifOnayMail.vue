<template>
  <div id="invoice-page">
    <div id="printMe2">
      <vx-card id="invoice-container">
        <table style="width: 100%" class="border-collapse">
          <tr>
            <td>
              <h6 style="text-align: center; font-size: 18px">
                Fatih Ferforje Teklif Onay Sistemi
              </h6>
              <h6>Onay Bekleyen İşlem Detayı</h6>
            </td>
          </tr>
        </table>

        <table border="1" style="border-top: 1px solid" class="border-collapse">
          <tr>
            <td>
              <table style="text-align: center">

                <tr>
                  <td style="padding: 8px; border: 1px solid; font-weight: 600">
                    Teklif No
                  </td>

                  <td style="padding: 8px; border: 1px solid">
                    {{ fisNo }}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px; border: 1px solid; font-weight: 600">
                    Teklif Tarihi
                  </td>

                  <td style="padding: 8px; border: 1px solid">
                    {{ FTARIH }}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px; border: 1px solid; font-weight: 600">
                    Müşteri
                  </td>

                  <td style="padding: 8px; border: 1px solid">
                    {{ musteri }}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid; font-weight: 600">
                    Müşteri Mail
                  </td>

                  <td style="padding: 8px; border: 1px solid">
                    {{ mail }}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px; border: 1px solid; font-weight: 600">
                    Müşteri Telefon
                  </td>

                  <td style="padding: 8px; border: 1px solid">
                    {{ telefon }}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px; border: 1px solid; font-weight: 600">
                    Dosya
                  </td>

                  <td style="padding: 8px; border: 1px solid">
                    {{ dosya }}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <br />
        </table>

        <br />
      </vx-card>
    </div>
  </div>
</template>
<script>

import moment from "moment";
export default {
  data() {
    return {
      islem: "",
      fisNo: "",
      musteri: "",
      iadeSekli: "",
      iadeSebep: "",
      aciklama: "",
      gonderen: "",
      dosya: "",
      FTARIH: "",
      MASRAF: "",
      mail: "",
      telefon: "",
    };
  },

  methods: {
    getItems(islem, detail) {

      this.fisNo = islem;
      const today = new Date();
      var TRANSDATE = moment(String(today)).format("DD.MM.YYYY");
      this.FTARIH = TRANSDATE;

      this.musteri = detail.shipName + " " + detail.shipSurname
      this.mail = detail.eMail
      this.telefon = detail.shipPhone
      this.dosya =
        "http://katalog.uzum.com.tr/flipbook/Teklif/Onay/" + islem;

    },



  }
};
</script>
