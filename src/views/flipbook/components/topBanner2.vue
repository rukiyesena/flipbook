<template>
  <div style="text-align: center;">

    <img src="@/assets/images/logo/topleftban.png" alt="topBanner" style="width: 100%; padding-top: 20px" />
    <h2 style="position: absolute; right: 3%; top: 1%">{{ page }}</h2>

  </div>
</template>

<script>
export default {
  props: ["page"],

  methods: {
    topBannerRef() {

    },
  },
};
</script>
