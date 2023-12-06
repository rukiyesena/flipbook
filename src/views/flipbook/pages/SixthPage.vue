<template>
  <div id="img_slider">
    <div id="big_image">
      <img :src="selectedImage" alt="test" />
    </div>
    <div id="small_image">
      <img v-for="image in images" :key="image" :src="image" @click="selectImage(image)" alt="test" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: 'https://b2bservis.buldans.com.tr/Uploads/8681653113556.jpg',
      images: [
        'https://b2bservis.buldans.com.tr/Uploads/8681653117127.jpg',
        'https://b2bservis.buldans.com.tr/Uploads/8681653113778.jpg',
        'https://b2bservis.buldans.com.tr/Uploads/8681653116793.jpg',
        'https://b2bservis.buldans.com.tr/Uploads/8681653123050.jpg',
      ],
    };
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image;
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
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
  border: none;
}

body {
  background: #333;
}

#big_image img {
  border-radius: 10px;
  width:1300px;
  height:950px;
  object-fit: cover;
}

#img_slider {
  text-align: center;
}

#small_image {
  height:150px;
}

#small_image img:first-child {
  border-radius: 10px 0 0 10px;
}

#small_image img {
  width:150px;
  height:150px;
  object-fit: cover;
}

#small_image img:last-child {
  border-radius: 0 10px 10px 0;
}
</style>