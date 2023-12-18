<template>
  <div>
    <LogoTop />
    <div class="video-section">
      <iframe id="video"
        src="https://streamable.com/e/i9jjys?autoplay=1&amp;nocontrols=1&amp;mute=0%22%20width=%22100%%22%20height=%22100%%22%20allowfullscreen=%22%22%20allow=%22autoplay%22%20src=%22https://streamable.com/e/i9jjys?autoplay=1&amp;nocontrols=1&amp;mute=0"
        style="width: 100%; height: 800px;" frameborder="0" webkitallowfullscreen mozallowfullscreen
        allowfullscreen></iframe>
    </div>
  </div>
</template>
<script>
import LogoTop from '../components/LogoTop.vue';

export default {
  components: { LogoTop }
}
</script>