<template>
  <div style="text-align: center;">
    <b-row style="width: 70%;position: absolute;">
      <b-col>
        <h2 style="position: absolute; left: 3%; top: 1%">{{ page }}</h2>
      </b-col>
      <b-col>
        <h1 style="font-weight: bold;">{{ header }}</h1>
      </b-col>
    </b-row>
    <img src="@/assets/images/logo/toprightban.png" alt="topBanner" style="width: 100%; padding-top: 20px" />
  </div>
</template>

<script>
export default {
  props: ["page", "header"],

  methods: {
    topBannerRef() {

    },
  },
  watch: {
    page(val) {
      console.log(val)
    }
  }
};
</script>
