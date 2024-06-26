/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import router from "../router";
import axios from "axios";
import xml2js from "xml2js";
import userJson from "../../public/user.json";
import state from "./state.js";
import store from "./store";
const actions = {
  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////

  // Vertical NavMenu
  updateVerticalNavMenuWidth({ commit }, width) {
    commit("UPDATE_VERTICAL_NAV_MENU_WIDTH", width);
  },

  // VxAutoSuggest
  updateStarredPage({ commit }, payload) {
    commit("UPDATE_STARRED_PAGE", payload);
  },

  // The Navbar
  arrangeStarredPagesLimited({ commit }, list) {
    commit("ARRANGE_STARRED_PAGES_LIMITED", list);
  },
  arrangeStarredPagesMore({ commit }, list) {
    commit("ARRANGE_STARRED_PAGES_MORE", list);
  },

  // /////////////////////////////////////////////
  // UI
  // /////////////////////////////////////////////

  toggleContentOverlay({ commit }) {
    commit("TOGGLE_CONTENT_OVERLAY");
  },
  updateTheme({ commit }, val) {
    commit("UPDATE_THEME", val);
  },

  fetchExchangeRates() {
    // TCMB'nin günlük döviz kuru XML verisi endpoint'i
    const apiUrl = 'https://www.tcmb.gov.tr/kurlar/today.xml';

    // axios ile XML verisi çekme
    axios.get(apiUrl, { responseType: 'document' })
      .then(response => {
        console.log(response)
        // XML verisini JSON'a dönüştürme işlemi
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, 'text/xml');

        // XML'den döviz kuru verilerini çıkartma
        const currencies = xmlDoc.querySelectorAll('Currency');
        currencies.forEach(currency => {
          const currencyName = currency.querySelector('CurrencyName').textContent;
          const forexBuying = currency.querySelector('ForexBuying').textContent;

          this.exchangeRates.push({ CurrencyName: currencyName, ForexBuying: forexBuying });
        });
      })
      .catch(error => {
        console.error('Döviz kuru alınamadı:', error);
      });
  },

  // /////////////////////////////////////////////
  // User/Account
  getDataCategoryList({ commit, dispatch, state }, arg) {


    let pageAct = arg.page == "" ? 1 : arg.page;

    const soap = require("soap");
    const url = userJson.userService;

    return new Promise((resolve, reject) => {
      try {
        let args = {
          token: state.tokenId,
          page: pageAct
        };
        soap.createClient(url, function (err, client) {
          client.CategoryList(args, function (err, result) {
            let veriler = JSON.parse(result.CategoryListResult);

            // Log the retrieved data 

            // Commit CATEGORY_LIST
            commit("CATEGORY_LIST", veriler);
            localStorage.setItem("CategoryList", JSON.stringify(veriler));

            // Create pages
            let pages = [{
              "ind": "1",
              "component": "EntryPage",
              "title": "Giriş Sayfa",
              "position": "right",

            },

            ];

            let pageInd = 2
            let currentPageIndex = 2;

            const kategoriNo = veriler[0].categoryCountPage;

            // Kategori değiştiğinde sayfa değişimi

            for (let i = 0; i < kategoriNo; i++) {
              const startIndex = i * 16;

              pages.push({
                "ind": pageInd,
                "component": "TablePageFirst",
                "title": "Kategori Sayfa",
                "position": i % 2 === 0 ? "left" : "right",
                "ilkSayfa": startIndex,
                "page": currentPageIndex
              });

              currentPageIndex += 1;
              pageInd++;
            }

            veriler.forEach((category, categoryIndex) => {
              const sayfaSayisi = category.sayfaSayisi;

              // Kategori değiştiğinde sayfa değişimi

              for (let i = 0; i < sayfaSayisi; i++) {
                const startIndex = i * 12;

                pages.push({
                  "ind": pageInd,
                  "component": "FirstPage",
                  "title": "stok Sayfa",
                  "position": i % 2 === 0 ? "left" : "right",
                  "ilkSayfa": startIndex,
                  "category": category.categoryCode,
                  "categoryName": category.categoryName,
                  "page": currentPageIndex
                });

                pageInd++;
              }
              currentPageIndex += sayfaSayisi;

            }); 
            localStorage.setItem("pages", JSON.stringify(pages));
            commit("PAGES", pages);

            resolve(true);
          });
        });
      } catch (error) {
        resolve(false);
        console.log('Error:', error);
      }
    });
  },
  GetOfferNumber({ commit, dispatch, state }, arg) {
    const soap = require("soap");
    const url = userJson.userService;
    return new Promise((resolve, reject) => {
      try {
        soap.createClient(url, function (err, client) {
          if (err) {
            reject(err);
            return;
          }

          client.GetOfferNumber(function (err, result) {
            if (err) {
              reject(err);
              return;
            }

            try {
              if (result === undefined || result.GetOfferNumberResult === undefined) {
                reject(new Error("GetOfferNumber response or its property is undefined"));
                return;
              }

              let offerNumber = result.GetOfferNumberResult;

              // Çift tırnakları kaldır
              offerNumber = offerNumber.replace(/"/g, "");

              resolve({ offerNumber });
            } catch (error) {
              reject(error);
              console.log(error);
            }
          });

          client.GetOfferNumber(function (err, result) {
            console.log('SOAP Response:', result);
          });

        });
      } catch (error) {
        reject(error);
        console.log(error);
      }
    });
  },

  sendMail({ commit, dispatch, state }, arg) {
    const soap = require("soap");
    const url = userJson.userService;
    return new Promise((resolve, reject) => {
      try {
        soap.createClient(url, function (err, client) {

          client.sendMail(arg, function (err, result) {

            try {
              if (result === undefined || result.sendMailResult === undefined) {
                reject(new Error("sendMail response or its property is undefined"));
                return;
              }
              resolve(result);
            } catch (error) {
              reject(error);
              console.log(error);
            }
          });
        });
      } catch (error) {
        reject(error);
        console.log(error);
      }
    });
  },
  GetCrudToOfferList({ commit, dispatch, state }, arg) { 
    const soap = require("soap");
    const url = userJson.userService;
    try {
      let args = {
        token: state.tokenId,
        offerNumber: arg.offerNumber,
        barcode: arg.stockCode,
        description: arg.description,
        isDue: arg.islem,
        eMail: arg.eMail,
        invoiceAddress: arg.invoiceAddress,
        shipCityCode: arg.shipCityCode,
        taxOffice: arg.taxOffice,
        taxNumber: arg.taxNumber,
        shipAddress: arg.shipAddress,
        quantityLine: arg.quantityLine,
        transportType: arg.transportType,
        shipDate: arg.shipDate,
        validityDuration: arg.validityDuration,
        deadline: arg.deadline,
        shipName: arg.shipName,
        shipPhone: arg.shipPhone,
        surname: arg.surname,
        priceLine: 0.0,
        paymentType: arg.paymentType,
        orderStatus: arg.orderStatus,
        address: arg.address,
        vatRateLine: arg.vatRateLine,
        totalDiscountRate: 0.0,
        discountRateLine: 0.0,
        shipDistrictCode: arg.shipDistrictCode,
        shipSurname: arg.shipSurname,
      };
 

      return new Promise((resolve, reject) => {
        try {
          soap.createClient(url, function (err, client) {
            client.CrudToOfferList(args, function (err, result) {
              console.log('SOAP Response:', result);  // Log the entire response

              try {
                let veriler = JSON.parse(result.CrudToOfferListResult);
                commit("CrudTo_OfferList", { veriler, offerNumber: veriler });
                resolve({ veriler, offerNumber: veriler });
              } catch (error) {
                reject(error);
                console.log(error);
              }
            });
          });
        } catch (error) {
          resolve(false);
          console.log(error);
        }
      });


    } catch (error) {
      console.log(error);
    }
  },


  getDataCategoryListPerPage({ commit, dispatch, state }, arg) {
    let pageAct = arg.page == "" ? 1 : arg.page
    const soap = require("soap");
    const url = userJson.userService;
    try {
      let args = {
        token: state.tokenId,
        page: pageAct,
        kategori: arg.kategori,
        pageCounts: "16",
        ilkKayit: arg.ilkKayit
      };
      return new Promise((resolve, reject) => {
        try {
          soap.createClient(url, function (err, client) {
            client.CategoryList(args, function (err, result) {
              let veriler = JSON.parse(result.CategoryListResult);
              resolve(veriler)
            });
          });
        } catch (error) {
          resolve(false);
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  getDataStock({ commit, dispatch }, arg) {
    let pageAct = arg.page == "" ? 1 : arg.page
    const soap = require("soap");
    const url = userJson.userService;
    try {
      let args = {
        token: state.tokenId,
        page: pageAct,
        kategori: arg.kategori,
        pageCounts: "12",
        ilkKayit: arg.ilkKayit,
        stockCode: arg.stockCode
      };
      return new Promise((resolve, reject) => {
        try {
          soap.createClient(url, function (err, client) {
            client.StockList(args, function (err, result) {
              let veriler = JSON.parse(result.StockListResult);
              commit("STOCK_LIST_RIGHT", veriler);
              resolve(veriler)
            });
          });
        } catch (error) {
          resolve(false);
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  getDataStockVaryant({ commit, dispatch }, isAct) {
    const soap = require("soap");
    const url = userJson.userService;
    try {
      let args = {
        token: state.tokenId,
        ARANAN: "",
        ILKKAYIT: "0",
        SONKAYIT: "50000",
        KATEGORI: "",
        ACTID: ""
      };
      if (isAct == true) {
        args = {
          token: state.tokenId,
          ARANAN: "",
          ILKKAYIT: "0",
          SONKAYIT: "50000",
          KATEGORI: "",
          ACTID: state.STOCKPRICETYPEID
        };
      }
      return new Promise((resolve, reject) => {
        try {
          soap.createClient(url, function (err, client) {
            client.B2B_LS_STOCKVARYANTLI(args, function (err, result) {
              if (
                result.B2B_LS_STOCKVARYANTLIResult == "-1" &&
                userJson.musteriTanim == false
              ) {
                dispatch("logout");
              }
              let veriler = JSON.parse(result.B2B_LS_STOCKVARYANTLIResult);
              if (userJson.varyant == "true")
                commit("eCommerce/STOCK_LIST_VARYANT", veriler);
            });
          });
          resolve(true);
        } catch (error) {
          resolve(false);
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  getDataCategory({ commit, dispatch }) {
    const soap = require("soap");
    const url = userJson.userService;
    try {
      const args = {
        token: state.tokenId
      };
      return new Promise((resolve, reject) => {
        try {
          soap.createClient(url, function (err, client) {
            client.B2B_LS_CATEGORY(args, function (err, result) {
              if (
                result.B2B_LS_CATEGORYResult == "-1" &&
                userJson.musteriTanim == false
              ) {
                dispatch("logout");
              }
              let veriler = JSON.parse(result.B2B_LS_CATEGORYResult);
              commit("eCommerce/CATEGORY_LIST", veriler);
            });
          });
          resolve(true);
        } catch (error) {
          resolve(false);
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  getDataSepet({ commit, dispatch }) {
    const soap = require("soap");
    const url = userJson.userService;
    try {
      let args = {};
      var degerKontrol = state.eCommerce.adminSepetKontrol;
      if (state.ROL == "ADMIN" && degerKontrol == "true")
        args = {
          token: state.tokenId,
          CARIKOD: state.eCommerce.CASIKOD,
          ONAY: state.eCommerce.secilenOnayDurum,
          ROL: state.ROL
        };
      else if (state.ROL == "ADMIN")
        args = {
          token: state.tokenId,
          CARIKOD: state.UserId,
          ONAY: "",
          ROL: state.ROL
        };
      else if (state.ROL != "ADMIN")
        args = {
          token: state.tokenId,
          CARIKOD: state.UserId,
          ONAY: "",
          ROL: state.ROL
        };
      return new Promise((resolve, reject) => {
        try {
          soap.createClient(url, function (err, client) {
            client.B2B_LS_SEPET(args, function (err, result) {
              if (
                result.B2B_LS_SEPETResult == "-1" &&
                userJson.musteriTanim == false
              ) {
                dispatch("logout");
              }
              let veriler = JSON.parse(result.B2B_LS_SEPETResult);
              if (veriler.length > 0) {
                commit("eCommerce/LIST_CARD_ITEMS", veriler);
                let totalPrc = 0.0;
                let totalVat = 0.0;
                if (veriler != -1) {
                  veriler.forEach((val, index) => {
                    totalPrc += veriler[index].TUTAR;
                    totalVat += veriler[index].KDVTUTAR;
                  });
                  commit("eCommerce/TOTAL_VAT", totalVat.toFixed(2));
                  commit("eCommerce/TOTAL_PRICE_VAT", totalPrc.toFixed(2));
                  commit("eCommerce/TOTAL_PRICE", totalPrc + totalVat);

                  let iskontoRate = veriler[0].iskonto1;

                  if (iskontoRate != "") {
                    let iskontoRateHesaplanan = (totalPrc * iskontoRate) / 100;
                    let iskontoValidate = true;
                    commit("eCommerce/ISKONTO_VALIDATE", iskontoValidate);
                    commit("eCommerce/ISKONTO_TUTAR", iskontoRateHesaplanan);
                  }
                }
              }
            });
          });

          resolve(true);
        } catch (error) {
          resolve(false);

          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  tokenKontrol({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      try {
        var vm = this;
        const soap = require("soap");
        const url = userJson.userService;
        const args = {
          token: state.tokenId
        };
        soap.createClient(url, function (err, client) {
          client.tokenKontrolB2B(args, function (err, result) {
            dispatch("getDataCategory").then(response => { });
            if (result.tokenKontrolB2BResult == "-1") {
              dispatch("getDataStock").then(response => { });

              commit("clearToken");
              resolve(result.tokenKontrolB2BResult);
            } else {
              dispatch("getDataStock", true).then(response => { });

              dispatch("getDataSepet").then(response => { });
            }
            try {
              vm.veriler = JSON.parse(result.tokenKontrolB2BResult);
              resolve(result);
            } catch (error) {
              console.log(result);
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  },
  //giriş yapmadan ürünlerin görünmesi için geliştirildi
  loginTanim({ commit, dispatch }, payload) {
    var vm = this;
    var vs = payload.vs;
    const soap = require("soap");
    const data = [];
    const url = userJson.userService;
    const args = {
      token: payload.userDetails.bayikodu,
      EMAIL: payload.userDetails.email,
      PASS: payload.userDetails.password
    };
    soap.createClient(url, function (err, client) {
      client.B2B_LOGINACT(args, function (err, result) {
        vm.veriler = JSON.parse(result.B2B_LOGINACTResult);
        if (vm.veriler == "-1" || vm.veriler == "") {
          vs.notify({
            title: "Hatalı Giriş",
            text: "Şifre veya kullanıcı adı yanlış olabilir",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger"
          });
        } else {
          vs.notify({
            title: "Giriş Başarılı",
            text: "Lütfen Bekleyin Yönlendirileceksiniz.",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success"
          });
          var rand = function () {
            return Math.random()
              .toString(36)
              .substr(2); // remove `0.`
          };

          data["servisAdresi"] = userJson.userService; //userJson.userService;
          data["id"] = vm.veriler[0].CARI_KOD;
          data["B2BfirmaAdi"] = vm.veriler[0].CARI_UNVAN;
          data["tokenId"] = vm.veriler[0].token;
          data["email"] = payload.userDetails.email;
          data["adres"] = vm.veriler[0].adres;
          data["tel1"] = vm.veriler[0].tel1;
          data["logoUrl"] = userJson.userLogo;
          data["ROL"] = vm.veriler[0].ROL; // "ADMIN"//
          data["imgurl"] = userJson.resimUrl;
          data["STOCKPRICETYPEID"] = vm.veriler[0].STOCKPRICETYPEID;
          commit("setToken", data);
          localStorage.setItem("servisAdresi", data["servisAdresi"]);
          localStorage.setItem("id", data["id"]);
          localStorage.setItem("B2BfirmaAdi", data["B2BfirmaAdi"]);
          localStorage.setItem("tokenId", data["tokenId"]);
          localStorage.setItem("email", data["email"]);
          localStorage.setItem("adres", data["adres"]);
          localStorage.setItem("tel1", data["tel1"]);
          localStorage.setItem("logoUrl", data["logoUrl"]);
          localStorage.setItem("ROL", data["ROL"]);
          localStorage.setItem("imgurl", data["imgurl"]);
          localStorage.setItem("STOCKPRICETYPEID", data["STOCKPRICETYPEID"]);
          localStorage.setItem("userInfo", result.B2B_LOGINACTResult);
          dispatch("tokenKontrol");
        }
        router.push("/home");
        window.location.reload(true);
      });
    });
  },
  login({ commit, dispatch }, payload) {
    var vm = this;
    var vs = payload.vs;
    const soap = require("soap");
    const data = [];
    const url = userJson.userService;
    const args = {
      token: payload.userDetails.bayikodu,
      EMAIL: payload.userDetails.email,
      PASS: payload.userDetails.password
    };
    try {
      soap.createClient(url, function (err, client) {
        client.B2B_LOGINACT(args, function (err, result) {
          vm.veriler = JSON.parse(result.B2B_LOGINACTResult);
          if (vm.veriler == "-1" || vm.veriler == "") {
            vs.notify({
              title: "Hatalı Giriş",
              text: "Şifre veya kullanıcı adı yanlış olabilir",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "danger"
            });
          } else {
            vs.notify({
              title: "Giriş Başarılı",
              text: "Lütfen Bekleyin Yönlendirileceksiniz.",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "success"
            });
            var rand = function () {
              return Math.random()
                .toString(36)
                .substr(2); // remove `0.`
            };
            data["servisAdresi"] = userJson.userService;
            data["id"] = vm.veriler[0].CARI_KOD;
            data["B2BfirmaAdi"] = vm.veriler[0].CARI_UNVAN;
            data["tokenId"] = vm.veriler[0].token;
            data["email"] = payload.userDetails.email;
            data["adres"] = vm.veriler[0].adres;
            data["tel1"] = vm.veriler[0].tel1;
            data["logoUrl"] = userJson.userLogo;
            data["ROL"] = vm.veriler[0].ROL; // "ADMIN"//
            data["imgurl"] = userJson.resimUrl;
            data["STOCKPRICETYPEID"] = vm.veriler[0].STOCKPRICETYPEID;
            commit("setToken", data);
            localStorage.setItem("servisAdresi", data["servisAdresi"]);
            localStorage.setItem("id", data["id"]);
            localStorage.setItem("B2BfirmaAdi", data["B2BfirmaAdi"]);
            localStorage.setItem("tokenId", data["tokenId"]);
            localStorage.setItem("email", data["email"]);
            localStorage.setItem("adres", data["adres"]);
            localStorage.setItem("tel1", data["tel1"]);
            localStorage.setItem("logoUrl", data["logoUrl"]);
            localStorage.setItem("ROL", data["ROL"]);
            localStorage.setItem("imgurl", data["imgurl"]);
            localStorage.setItem("STOCKPRICETYPEID", data["STOCKPRICETYPEID"]);
            localStorage.setItem("userInfo", result.B2B_LOGINACTResult);
            dispatch("tokenKontrol");
          }
          router.push("/home");
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  logout({ commit }) {
    commit("clearToken");
    router.push("/login").catch(err => {
      console.log("err" + err);
    });
  }
};

export default actions;
