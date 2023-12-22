<template>
  <b-row style="height: 100%;">
    <topleftbanner :page="index" />
    <b-col cols="6">
      <div id="big_image" style="border: black 1px solid; text-align: center;">
        <img :src="selectedImage" alt="test" style="max-height: 500px; width: auto;" />
      </div>
    </b-col>
    <b-col>
      <div id="img_slider">

        <div>
          <b-row>
            <b-col v-for="(value, index) in stockList" :key="index" cols="2"
              style="border: black 1px solid; text-align: center;"
              @click="selectedImage = 'data:image/png;base64,' + value.images">
              <img style="max-height: 200px; width: auto;" :src="'data:image/png;base64,' + value.images" alt="test" />
            </b-col>
          </b-row>

        </div>
      </div>
    </b-col>
    <b-col cols="12" align-self="end">
      <bottomBanner2 :page="index" />

    </b-col>
  </b-row>
</template>

<script>
import topleftbanner from '../components/topleftbanner.vue';
import bottomBanner2 from '../components/bottomBanner2.vue';

export default {
  props: ["page", "position", "index"],
  data() { return { stockList: [] } },
  components: { topleftbanner, bottomBanner2 },
  data() {
    return {
      selectedImage: ""

    };
  },
  methods: {
    errorImage(e) {
      if (e.type == "error") e.target.src = "https://int.kamyonyedekparca.com/img/404picture.jpg"
    },

  },
  mounted() {
    this.$nextTick(() => {
      $('#small_image img').on('click', () => {
        const url = $(this).attr('src');
        $('#big_image img').attr('src', url);
      });
    });
  },
  watch: {
    page(val) {
      if (this.index == val - 2 || this.index == val - 1) {
        try {
          let args = {
            page: this.index
          }
          this.$store
            .dispatch("getDataStock", args)
            .then(response => {
              this.stockList = response
            });
        } catch (error) {
          console.log(error)
        }
      }


    }

  },
  computed: {

  },
};
</script>


<style scoped lang="scss">
#big_image img {
  border-radius: 10px;
  width: 1300px;
  height: 950px;
  object-fit: cover;
}

#img_slider {
  text-align: center;
}

#small_image {
  height: 150px;
}

#small_image img:first-child {
  border-radius: 10px 0 0 10px;
}

#small_image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

#small_image img:last-child {
  border-radius: 0 10px 10px 0;
}
</style>