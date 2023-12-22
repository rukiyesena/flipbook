<template>
  <div style="text-align: center;">
    <h2 style="position: absolute; left: 3%; top: 1%">{{ page }}</h2>

    <img src="@/assets/images/logo/toprightban.png" alt="topBanner" style="width: 100%; padding-top: 20px" />
  </div>
</template>

<script>
export default {
  props: ["page"],

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
