/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const mutations = {


  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////

  // Vertical NavMenu
  CATEGORY_LIST(state, item) {
    state.CategoryList = item

  },
  CrudTo_OfferList(state, item) {
    state.CrudToOfferList = item

  },
  offerItem(state, value) {
    console.log(value)
    localStorage.setItem("offerItem", JSON.stringify(value));
    state.offerItem = value;
  },
  setShipName(state, value) {
    state.shipName = value;
  },
  setEmail(state, value) {
    state.eMail = value;
  },
  setİnvoiceAddres(state, value) {
    state.invoiceAddress = value;
  },
  setTaxOffice(state, value) {
    state.taxOffice = value;
  },
  setFaks(state, value) {
    state.fax = value;
  },
  setShipAddress(state, value) {
    state.shipAddress = value;
  },
  setShipPhone(state, value) {
    state.shipPhone = value;
  },
  setTaxNumber(state, value) {
    state.taxNumber = value;
  },
  updateName(state, newName) {
    console.log('New Name:', newName);
    state.name = newName;
  },

  PAGES(state, pages) {
    state.Pages = pages;


  },
  updateCartItemDescription(state, { index, editedDescription }) {
    state.eCommerce.cartItems[index].editedDescription = editedDescription;
  },
  updateSelectedPageIndex(state, newIndex) {
    state.selectedPageIndex = newIndex;
  },

  STOCK_LIST(state, item) {
    state.StockList = item

  },
  STOCK_LIST_LEFT(state, item) {
    state.StockListLeft = item

  },
  STOCK_LIST_RIGHT(state, item) {
    state.StockListRight = item

  },
  PAGES(state, item) {
    state.Pages = item
  },
  TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state, value) {
    state.isVerticalNavMenuActive = value
  },
  TOGGLE_REDUCE_BUTTON(state, val) {
    state.reduceButton = val
  },
  UPDATE_MAIN_LAYOUT_TYPE(state, val) {
    state.mainLayoutType = val
  },
  UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN(state, val) {
    state.verticalNavMenuItemsMin = val
  },
  UPDATE_VERTICAL_NAV_MENU_WIDTH(state, width) {
    state.verticalNavMenuWidth = width
  },


  // VxAutoSuggest

  UPDATE_STARRED_PAGE(state, payload) {

    // find item index in search list state
    const index = state.navbarSearchAndPinList["pages"].data.findIndex((item) => item.url == payload.url)

    // update the main list
    state.navbarSearchAndPinList["pages"].data[index].is_bookmarked = payload.val

    // if val is true add it to starred else remove
    if (payload.val) {
      state.starredPages.push(state.navbarSearchAndPinList["pages"].data[index])
    }
    else {
      // find item index from starred pages
      const index = state.starredPages.findIndex((item) => item.url == payload.url)

      // remove item using index
      state.starredPages.splice(index, 1)
    }
  },

  // Navbar-Vertical

  ARRANGE_STARRED_PAGES_LIMITED(state, list) {
    const starredPagesMore = state.starredPages.slice(10)
    state.starredPages = list.concat(starredPagesMore)
  },
  ARRANGE_STARRED_PAGES_MORE(state, list) {
    let downToUp = false
    let lastItemInStarredLimited = state.starredPages[10]
    const starredPagesLimited = state.starredPages.slice(0, 10)
    state.starredPages = starredPagesLimited.concat(list)

    state.starredPages.slice(0, 10).map((i) => {
      if (list.indexOf(i) > -1) downToUp = true
    })

    if (!downToUp) {
      state.starredPages.splice(10, 0, lastItemInStarredLimited)
    }
  },


  // ////////////////////////////////////////////
  // UI
  // ////////////////////////////////////////////

  TOGGLE_CONTENT_OVERLAY(state, val) { state.bodyOverlay = val },
  UPDATE_PRIMARY_COLOR(state, val) { state.themePrimaryColor = val },
  UPDATE_THEME(state, val) { state.theme = val },
  UPDATE_WINDOW_WIDTH(state, width) { state.windowWidth = width },
  UPDATE_WINDOW_SCROLL_Y(state, val) { state.scrollY = val },


  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  // Updates user info in state and localstorage
  UPDATE_USER_INFO(state, payload) {

    // Get Data localStorage
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser

    for (const property of Object.keys(payload)) {

      if (payload[property] != null) {
        // If some of user property is null - user default property defined in state.AppActiveUser
        state.AppActiveUser[property] = payload[property]

        // Update key in localStorage
        userInfo[property] = payload[property]
      }


    }
    // Store data in localStorage
    // localStorage.setItem("userInfo", JSON.stringify(userInfo))
  },
  setToken(state, data) {

    state.isCurrActive = false;
    state.tokenId = data.tokenId
    state.AppActiveUser.displayName = data.B2BfirmaAdi //+' ( '+data.adSoyad+' )'
    state.AppActiveUser.photoURL = require("@/assets/images/portrait/small/avatar-s-11.jpg"), // From Auth
      state.AppActiveUser.status = 'online'
    state.AppActiveUser.userRole = 'admin'
    state.AppActiveUser.uid = data.id
    state.AppActiveUser.uid = data.id
    state.UserId = data.id
    state.email = data.email
    state.logoUrl = data.logoUrl
    state.MusteriId = data.musteriId
    state.B2BfirmaAdi = data.B2BfirmaAdi
    state.plasiyer = data.plasiyer
    state.ROL = data.ROL
    state.imgurl = data.imgurl
    state.adres = data.adres
    state.tel1 = data.tel1
    state.sistemAddress = data.servisAdresi
    state.servisAdresi = data.servisAdresi
    state.serviceAddress = data.servisAdresi
    state.printAddress = data.printAddress
    state.grupKod = data.grupKod
    state.genelData = data
    state.STOCKPRICETYPEID = data.STOCKPRICETYPEID
  },
  clearToken(state) {
    state.email = ''
    state.tokenId = ''
    state.UserId = ''
    state.MusteriId = ''
    state.B2BfirmaAdi = ''
    state.plasiyer = ''
    state.servisAdresi = ''
    state.printAddress = ''
    state.STOCKPRICETYPEID = ''
    state.grupKod = ''
    state.AppActiveUser.displayName = ''
    state.AppActiveUser.photoURL = ''
    state.AppActiveUser.status = ''
    state.AppActiveUser.userRole = ''
    state.AppActiveUser.uid = ''
    state.AppActiveUser.uid = ''
    localStorage.removeItem('tokenId')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('servisAdresi')
    localStorage.removeItem('id')
    localStorage.removeItem('B2BfirmaAdi')
    localStorage.removeItem('email')
    localStorage.removeItem('adres')
    localStorage.removeItem('tel1')
    localStorage.removeItem('logoUrl')
    localStorage.removeItem('ROL')
    localStorage.removeItem('imgurl')

  }
}

export default mutations

