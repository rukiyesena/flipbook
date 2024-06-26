/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import navbarSearchAndPinList from "@/layouts/components/navbar/navbarSearchAndPinList"
import themeConfig from "@/../themeConfig.js"
import colors from "@/../themeConfig.js"

// /////////////////////////////////////////////
// Helper
// /////////////////////////////////////////////

// *From Auth - Data will be received from auth provider
const userDefaults = {
  uid: 0,          // From Auth
  displayName: "", // From Auth
  photoURL: '',
  status: "",
  userRole: ""
}


// Check if device is touch device
// This is used to remove perfect scrollbar from touch devices
// Using Dynamic components
const is_touch_device = () => {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function (query) {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}


// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
  PageSize: "",
  selectedPageIndex: 0,
  CrudToOfferList: [],
  Pages: "",
  StockList: [],
  CategoryList: [],
  StockListLeft: [],
  StockListRight: [],
  AppActiveUser: userDefaults,
  email: '',
  B2BfirmaAdi: '',
  adres: '',
  tel1: '',
  logoUrl: '',
  bodyOverlay: false,
  isVerticalNavMenuActive: true,
  is_touch_device: is_touch_device(),
  mainLayoutType: themeConfig.mainLayoutType || "vertical",
  navbarSearchAndPinList: navbarSearchAndPinList,
  reduceButton: themeConfig.sidebarCollapsed,
  verticalNavMenuWidth: "default",
  verticalNavMenuItemsMin: false,
  scrollY: 0,
  starredPages: navbarSearchAndPinList["pages"].data.filter((page) => page.is_bookmarked),
  theme: themeConfig.theme || "light",
  themePrimaryColor: colors.primary,
  tokenId: "",
  UserId: "",
  ROL: "",
  offerItem: [],
  shipName: '',
  invoiceAddress: '',
  shipAddress: '',
  taxOffice: '',
  fax: '',
  taxNumber: '',
  shipPhone: '',
  STOCKPRICETYPEID: "",

  imgurl: "",


  //serviceAddress          :"http://localhost:8580/webServis/genelServis.asmx?WSDL",
  //serviceAddress          :"http://localhost:8580/sistem.asmx?WSDL",
  //sistemAddress           :"http://localhost:8580/sistem.asmx?WSDL",
  // grupKod                 :"INT",
  // printAddress            :"http://192.168.1.100:85/faturaMikro/fatura.aspx?Id=",
  islemTipi: "1",

  // Can be used to get current window with
  // Note: Above breakpoint state is for internal use of sidebar & navbar component
  windowWidth: null,
}

export default state
