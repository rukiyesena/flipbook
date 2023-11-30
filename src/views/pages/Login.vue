<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div
    :class=" loginTanim!=true ?
      'h-screen flex w-full bg-img vx-row no-gutter items-center justify-center' : ''
    "
    id="page-login"
  >
    <vue-title :title="titleBaslik"></vue-title>
    <div :class=" loginTanim!=true ?
      'vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4' : ''
    " >
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2" >
              <img v-bind:src="loginLogo" alt="login" class="mx-auto" />
              <!--   <img src="../../assets/images/logo/buldanslogo.png" alt="login" class="mx-auto" />-->
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Bayi Satış Ekranı Giriş</h4>
                </div>

                <div>
                  <vs-input
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Kullanıcı Adı"
                    v-model="email"
                    class="w-full"
                  />

                  <b-row>
                    <b-col cols="10" style="padding-right: 0px !important"
                      ><vs-input
                        v-if="showPassword"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Şifre"
                        v-model="password"
                        class="w-full mt-6"
                        @keyup.enter="onSubmit()"/>
                      <vs-input
                        v-else
                        type="password"
                        name="password"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Şifre"
                        v-model="password"
                        class="w-full mt-6"
                        @keyup.enter="onSubmit()"
                    /></b-col>
                    <b-col style="padding-left: 0px !important">
                      <div class="control">
                        <button
                          class=" mt-6 button"
                          style="    border: none;"
                          @click="toggleShow"
                        >
                          <span class=" icon is-small is-right">
                            <vs-button
                              v-if="showPassword"
                              radius
                              type="flat"
                              icon="visibility"
                            ></vs-button>
                            <vs-button
                              v-else
                              radius
                              type="flat"
                              icon="visibility_off"
                            ></vs-button>
                          </span>
                        </button>
                      </div>
                    </b-col>
                  </b-row>

                  <br />
                  <vs-button type=""></vs-button>
                  <vs-button class="float-right" @click="onSubmit"
                    >Giriş</vs-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import Store from "../../store/store";
import state from "../../store/state";
import userJson from "../../../public/user.json";

export default {
  props:["loginTanim"],
  data() {
    return {
      showPassword: false,
      titleBaslik: userJson.title,
      loginLogo: "",
      email: "",
      password: "",
      bayikodu: "",
      checkbox_remember_me: false
    };
  },

  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    }
  },

  created() { 
    this.loginLogo = userJson.userLogo;
    //  console.log(this.loginLogo)
    //  console.log(process.env.VUE_APP_ROOT_API)
  },
  methods: {
    toggleShow() {
      console.log(this.showPassword);
      this.showPassword = !this.showPassword;
      console.log(this.showPassword);
    },
    onSubmit() {
      if (this.email == "" && this.password == "")
        this.$vs.notify({
          title: "Hata",
          text: "Boş alanlar mevcut",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "danger"
        });
      else {
        this.$vs.loading();
        const payload = {
          checkbox_remember_me: this.checkbox_remember_me,
          vs: this.$vs,
          userDetails: {
            email: this.email,
            password: this.password,
            bayikodu: this.bayikodu
          }
        };
        console.log(this.loginTanim)
        if (this.loginTanim == true) {
          this.$store
            .dispatch("loginTanim", payload)
            .then(() => {
              this.$vs.loading.close();
            })
            .catch(error => {
              this.$vs.loading.close();
              this.$vs.notify({
                title: "Error",
                text: error.message,
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "danger"
              });
            });
        } else {
          this.$store
            .dispatch("login", payload)
            .then(() => {
              this.$vs.loading.close();
            })
            .catch(error => {
              this.$vs.loading.close();
              this.$vs.notify({
                title: "Error",
                text: error.message,
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "danger"
              });
            });
        }
      
      
      }
    }
  }
};
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
