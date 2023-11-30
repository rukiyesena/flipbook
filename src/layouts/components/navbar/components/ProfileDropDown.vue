<template>
  <div
    class="the-navbar__user-meta flex items-center"
    v-if="activeUserInfo.displayName"
  >
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <div class="text-right leading-tight sm:block">
        
        <p class="font-semibold" v-if="activeUserInfo.displayName != 'null'">
          {{ activeUserInfo.displayName }} {{ activeUserInfo.companyName }}
        </p>
        <span class="">Bakiye: {{ parseCurrency(bakiye) }}</span>
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="
              flex
              py-2
              px-4
              cursor-pointer
              hover:bg-primary hover:text-white
            "
            @click="logout"
          >
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Çıkış</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import userJson from "../../../../../public/user.json";
import Store from "../../../../store/store";
import state from "../../../../store/state";
import moment from "moment";
export default {
  data() {
    return { bakiye: 0.0 };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  methods: {
    parseCurrency(gelen) {
      var parsedgelen = parseFloat(gelen);
      return parsedgelen.toLocaleString("tr-TR", {
        style: "currency",
        currency: "TRY",
      });
    },
    getLastSixMonth() {
      var d = new Date();
      d.setMonth(d.getMonth() - 6);
      return d.toLocaleDateString();
    },
    getNow() {
      const today = new Date();
      const date =
        today.getDate() +
        "." +
        (today.getMonth() + 1) +
        "." +
        today.getFullYear();

      const dateTime = date;
      return dateTime;
    },
    bankStatement() {
      var vm = this;
      var bitis, baslangic;
      const soap = require("soap");
      const url = state.sistemAddress;

      baslangic = vm.getLastSixMonth();

      bitis = vm.getNow();

      const args = {
        cariKod: state.UserId,
        token: Store.state.tokenId,
        bastarih: "",
        bittarih: "",
      };
      soap.createClient(url, function (err, client) {
        client.cariEkstreB2B(args, function (err, result) {
            if (result.cariEkstreB2BResult == "-1" && userJson.musteriTanim == false) {
            Store.dispatch("logout");
            //this.$store.dispatch('login', payload)
          }
          try {
            vm.veriler = JSON.parse(result.cariEkstreB2BResult);

            //  alert(vm.veriler[0].BAKIYE);
            /* Store.state.account.bankStatementList = vm.veriler[0];*/
            //  vm.bakiye = vm.veriler[0].BAKIYE;
            var itemLocate = vm.veriler[vm.veriler.length - 1];
            vm.bakiye = itemLocate.BAKIYE;
            if (typeof itemLocate.BAKIYE == "undefined") {
              vm.bakiye = itemLocate.Toplam;
            }
    
            //commit("ADD_ITEM_BANK_STATEMENT", vm.veriler);
          } catch (error) {
            console.log(result);
          }
        });
      });
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  created() {

  //  this.bankStatement();
  },
};
</script>
