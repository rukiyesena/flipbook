<template>
  <div id="center">
    <section id="section__example">
      <div class="container">
        <div class="images-container">
          <div id="image-wrapper-0">
            <div id="image-0-shadow"></div>
            <img alt="Title1" src="https://b2bservis.buldans.com.tr/Uploads/8681653121414.jpg">
          </div>
          <div id="image-wrapper-1">
            <div id="image-1-shadow"></div>
            <img alt="Title2" src="https://b2bservis.buldans.com.tr/Uploads/8681653117127.jpg">
          </div>
          <div id="image-wrapper-2">
            <div id="image-2-shadow"></div>
            <img alt="Title3" src="https://b2bservis.buldans.com.tr/Uploads/8681653116793.jpg">
          </div>
          <div id="image-wrapper-3">
            <div id="image-3-shadow"></div>
            <img alt="Title4" src="https://b2bservis.buldans.com.tr/Uploads/8681653113105.jpg">
          </div>
          <div id="image-wrapper-4">
            <div id="image-4-shadow"></div>
            <img alt="Title5" src="https://b2bservis.buldans.com.tr/Uploads/8681653113556.jpg">
          </div>
        </div>
        <div class="description-container">
          <div class="description active">
            <h3>Title 1</h3>
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam.</span>
          </div>
          <div class="description">
            <h3>Title 2</h3>
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span>
          </div>
          <div class="description">
            <h3>Title 3</h3>
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam.</span>
          </div>
          <div class="description">
            <h3>Title 4</h3>
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore.</span>
          </div>
          <div class="description">
            <h3>Title 5</h3>
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</span>
          </div>
        </div>
        <div class="btn-restart">Restart</div>
      </div>
    </section>
  </div>
</template>

<script>
window.addEventListener('load', function () {

  (function initHeight() {
    $("section#section__example .description-container").css(
      "height",
      $("section#section__example .description-container .description").innerHeight()
    );
  })();

  const imgContainer = document.querySelector(".images-container");
  const animated = document.querySelector("#image-wrapper-4");
  const images = `.images-container > div[id*="image-wrapper"]`;

  animated.addEventListener("animationend", () => {

    imgContainer.style.pointerEvents = "all";

    setTimeout(function () {
      $(images).css("transition", "all .3s");
    }, 20);

    $(images).hover(function () {

      $(images).css("opacity", ".3");
      $(this).css("opacity", "1");


      $("#section__example .description.active").removeClass(
        "active"
      );

      let nthPicture = $(this).index();
      $("#section__example .description")
        .eq(nthPicture)
        .addClass("active");
    });

    $(images).mouseleave(function () {
      $(images).css("opacity", "1");
    });

  });

  $(images).each(function () {
    $(this).css("display", "block");

    this.addEventListener("animationend", () => {
      $(this).css("opacity", "1");
    });
  });


  document.querySelector('.btn-restart').addEventListener('click', function () {

    $(images).css('opacity', '0');
    $(images).css('display', 'none');
    $(images).css("transition", '');
    imgContainer.style.pointerEvents = "none";

    setTimeout(function () {
      $(images).css('display', 'block');
    }, 20);
  });

});
</script>
  

<style scoped lang="scss">
html {
  font-size: 16px;
}

body {
  background-image: url("https://i.imgur.com/THFGnKY.jpg");
  background-size: cover;
}

#center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-restart {
  align-self: end;
  justify-self: center;
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background: #20A9FF73;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all .2s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: rgba(117, 201, 255, 0.78);
  }
}

#section__example {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 16px;

  .container {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    height: 36em;
    width: 60rem;
  }

  .description-container {
    position: absolute;
    bottom: 0;
    width: 35%;

    .description {
      color: #626161;
      position: absolute;
      filter: opacity(0);
      transition: all 0.3s ease;
      font-size: 1.3125rem;

      &.active {
        filter: opacity(1);
        transition: all 0.3s ease;
      }

      h3 {
        margin-bottom: 1.5rem;
        font-weight: 600;
        color: #263858;
      }
    }
  }


  .images-container {
    display: flex;
    position: relative;
    width: 150%;
    pointer-events: none;
    font-size: 16px;

    $translateX: 45%;
    $translateY: 35%;
    $shadowInitial: translateX(-37%) translateY(45%) rotateY(50deg) rotateX(80deg);

    @for $i from 0 through 5 {
      // 0,6 --> 0,8 --> 1,0 --> 1,2 --> 1,4 sek
      $duration: (
        $i * 2s + 6s) / 10;
      $animDelay: (
        $i * 6s)/100; //($i * 0.2s) + 0.4s;
      $picEndPosition: translateX($translateX * $i) translateY($translateY * $i
      );

    #image-wrapper-#{$i} {
      display: none;
      position: absolute;
      width: 30em;
      height: auto;
      top: 0;
      left: 0;
      z-index: $i;
      opacity: 0;
      transform: #{$picEndPosition};

      animation: image-#{$i} #{$duration} cubic-bezier(0.22, 1, 0.36, 1); //;
      animation-delay: #{$animDelay};

      img {
        position: relative;
        width: 100%;
        z-index: $i;
        border: 2px solid #919191;
      }

      #image-#{$i}-shadow {
        content: "";
        position: absolute;
        transition: all 0.3s;
        width: 100%;
        height: 100%;
        filter: blur(5px) opacity(0);
        background: linear-gradient(0deg, rgba(133, 133, 133, 0.76) 0%, rgba(255, 255, 255, 0) 100%);
        z-index: $i - 1;
        transform: translateX(-8%) translateY(40%) rotateY(14deg) rotateX(80deg);

        animation: image-#{$i}-shadow #{$duration} cubic-bezier(0.22, 1, 0.36, 1);
        animation-delay: #{$animDelay};
      }

      &:hover {
        transition: all 0.3s;
        transform: translateX($translateX * $i) translateY(($translateY * $i)-10%);

        #image-#{$i}-shadow {
          content: "";
          position: absolute;
          transition: all 0.3s;
          width: 100%;
          height: 100%;
          filter: blur(20px) opacity(1);
          background: linear-gradient(0deg, rgba(133, 133, 133, 0.33) 0%, rgba(255, 255, 255, 0) 100%);
          z-index: $i - 1;
          transform: #{$shadowInitial};
        }
      }
    }

    @keyframes image-#{$i} {
      from {
        opacity: 0;
        transform: translateX($translateX * ($i - 1)) translateY($translateY * ($i - 1) - 10%);
      }

      to {
        opacity: 1;
        transform: #{$picEndPosition};
      }
    }

    @keyframes image-#{$i}-shadow {
      from {
        filter: blur(20px) opacity(1);
        transform: #{$shadowInitial};
      }

      to {
        filter: blur(20px) opacity(0);
        transform: translateX(-8%) translateY(40%) rotateY(14deg) rotateX(80deg);
      }
    }
  }
}
}</style>