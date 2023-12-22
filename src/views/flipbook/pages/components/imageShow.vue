<template>
  <div>
    <vs-popup type="filled" title="Ürün Resim" :active.sync="isSidebarActiveLocal">
      <img :src="imgSrc" style="width: 100%" />
    </vs-popup>
  </div>
</template>
<script>
export default {
  props: ["popupResimSw", "imgSrc"],
  data() {
    return {  
      popupResim: false,
    };
  },
  watch: {
    popupResimSw(val) { 
      return val
    }
  },
  computed: {

    isSidebarActiveLocal: {
      get() {
        return this.popupResimSw
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
  },
  methods: {
    onResimGoster() {
      this.popupResim = true;
    },
  }
};
</script>