/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [

 
  {
    icon: "UserIcon",
    name: "Hesabım",
    slug: "",
    submenu: [
      {
        icon: "UserIcon",
        name: "Hesap Ekstresi",
        slug: "",
        url: "/account/BankStatement",
      },
      {
        icon: "UserIcon",
        name: "Sipariş Listesi",
        slug: "",
        url: "/account/OrderList",
      },

    ],
    url: "",
  },

  
  {
    icon: "InfoIcon",
    name: "Hakkımızda",
    slug: "",
    submenu: [
      {
        icon: "UserIcon",
        name: "Teslimat ve İade Bildirimi",
        slug: "",
        url: "/aboutus/DeliveryNotice",
      },
      {
        icon: "UserIcon",
        name: "Gizlilik Politikası",
        slug: "",
        url: "/aboutus/PrivacyNotice",
      },
      {
        icon: "UserIcon",
        name: "Mesafeli Satış Sözleşmesi",
        slug: "",
        url: "/aboutus/DistanceSalesContract",
      },
      {
        icon: "UserIcon",
        name: "Ön Bilgilendirme Formu",
        slug: "",
        url: "/aboutus/PreliminaryInformationForm",
      },

    ],
    url: "",
  },

]
