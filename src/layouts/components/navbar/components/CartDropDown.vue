<template>
  <!-- CART DROPDOWN -->

  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <feather-icon icon="ShoppingCartIcon" class="cursor-pointer ml-4 mr-6 mt-1" :badge="cartItems.length" />
    <vs-dropdown-menu class="cart-dropdown vx-navbar-dropdown" :class="{ 'dropdown-custom': cartItems.length }">
      <!-- IF CART HAVE ITEMS: HEADER -->
      <template v-if="cartItems.length">
        <div class="notification-header text-center p-5 bg-primary text-white">
          <p class="opacity-75">
            {{ $t("inCard") }} {{ cartItems.length }} {{ $t("inCardCont") }}
          </p>
        </div>

        <!-- CART ITEMS -->
        <component :is="scrollbarTag" ref="mainSidebarPs" class="scroll-area--cart-items-dropdowm p-0 mb-10"
          :settings="settings" :key="$vs.rtl">


          <ul class="bordered-items">
            <li v-for="(item, index) in cartItems" :key="index" class="vx-row no-gutter cart-item cursor-pointer">
              <!-- IMG COL -->
              <div class="
              vx-col
              w-1/5
              item-img-container
              bg-white
              flex
              items-center
              justify-center
            ">
                <img :src="item.url_image" alt="item" class="cart-dropdown-item-img p-4" style="max-height: 75px;"
                  @click="navigate_to_detail_view(item)" />
              </div>

              <!-- INFO COL -->
              <div class="vx-col w-4/5 pr-4 pl-2 py-4 flex flex-col justify-center">
                <span class="font-medium block cart-item-title truncate" @click="navigate_to_detail_view(item)"
                  style="color: black; font-weight: bold;">
                  {{ item.stockCode }}
                </span>
                <small class="truncate mb-2">{{ item.description }}</small>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium">{{ item.quantity }} <small>x</small> {{ item.stockPrice }} TL</span>
                  <div>
                    <b-row align-v="center">
                      <b-col>
                        <label for="itemQuantity" style="color: black; font-weight: bold;">Adet:</label>

                      </b-col>
                      <b-col>
                        <vs-input size="small" v-model="item.quantity" id="itemQuantity" type="number" min="0" class="small-input"
                          style="color: black; font-weight: bold;" />
                      </b-col>
                    </b-row>

                  </div>

                  <feather-icon icon="XIcon" svgClasses="h-4 w-4 cursor-pointer text-danger" class="hover:text-danger"
                    @click.stop="removeItemFromCart(item)" />
                </div>
              </div>
            </li>
          </ul>
        </component>
        <div class="
            checkout-footer
            fixed
            bottom-0
            rounded-b-lg
            text-primary
            font-semibold
            w-full
            p-2
            text-center
            border border-b-0 border-l-0 border-r-0 border-solid
            d-theme-border-grey-light
            cursor-pointer
          " @click="$router.push().catch(() => { })">
          <div
            class="checkout-footer fixed bottom-0 rounded-b-lg text-primary font-semibold w-full p-2 text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer"
            @click="openOfferPopup">
            <span class="flex items-center justify-center">
              <feather-icon icon="ShoppingCartIcon" svgClasses="h-4 w-4" />
              <span class="ml-2" style="color: black; font-weight: bold;">{{ $t("showOffer") }}</span>
            </span>
          </div>

        </div>


      </template>

      <!-- IF CART IS EMPTY -->
      <template v-else>
        <p class="p-4">Sepetiniz boş.</p>
      </template>
    </vs-dropdown-menu>
    <!-- <ListCard ref="cardList" /> -->

  </vs-dropdown>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Store from "../../../../store/store";
import state from "../../../../store/state";
import userJson from "../../../../../public/user.json";

export default {
  components: {
    VuePerfectScrollbar,
  },
  data() {
    return {
      offerPrice: 0,

      cartList: [],
      sistemurl: "",
      productPrice: 0.0,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },

  computed: {
    // CART DROPDOWN
    cartItems() {
      console.log(this.$store.state.eCommerce.cartItems)
      if (this.$store.state.eCommerce.cartItems != null)
        if (this.$store.state.eCommerce.cartItems.length > 0) {

          this.cartList = this.$store.state.eCommerce.cartItems.slice().reverse();
          return this.$store.state.eCommerce.cartItems.slice().reverse();
        } else return 0;
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },

  },
  methods: {


    openOfferPopup() {

      this.$root.$emit("teklifOnay");

    },

    navigate_to_detail_view(event) {
      if (userJson.varyant == "true") {


        this.$router
          .push({
            name: "ecommerce-item-detail-view",
            params: { item_id: event.STOCKNO },
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$router
          .push({
            shipName: "ecommerce-item-detail-view",
            params: { item_id: event.BARKOD },
          })
          .catch(() => { });
      }
    },
    errorFind(err) {
      console.log(err);
    },
    removeItemFromCart(item) {
      const index = this.$store.state.eCommerce.cartItems.findIndex(cartItem => cartItem === item);

      if (index !== -1) {
        this.$store.dispatch("eCommerce/removeItemInCard", item)
          .then((response) => {
            if (response === "ok") {
              // If needed, perform additional actions after successful removal
              // this.$refs.cardList.listCardItems();
            }
          });
      }
    }


  },
  created() {
    this.sistemurl = userJson.resimUrl;
    //   this.$refs.cardList.listCardItems();
  },
};
</script>

<style scoped>
.small-input {
  width: 50px !important;
  margin-right: 10px;
}
</style>
