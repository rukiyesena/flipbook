<template>
  <div style="text-align: center;">
    <b-row>
      <b-col style="text-align: center;">
        {{ page }}
        <img src="@/assets/images/logo/leftban.png" alt="topBanner" style="width: 60px; text-align: center;" />
      </b-col>
    </b-row>
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
