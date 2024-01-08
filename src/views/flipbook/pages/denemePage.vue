<template>

  <div id="hero-slides">
    <div id="header">
      <div id="logo"></div>
      <div id="menu">
        <div id="hamburger">
          <div class="slice"></div>
          <div class="slice"></div>
          <div class="slice"></div>
        </div>
      </div>
    </div>
    <div id="slides-cont">
      <div class="button" id="next"></div>
      <div class="button" id="prev"></div>
      <div id="slides">
        <div class="slide" style="background-image: url(https://alca.tv/static/u/ef5af971-fc46-4ee1-a589-980346478696_opt.png)">
          <div class="number">01</div>
          <div class="body">
            <div class="location">Shibuya, Japan</div>
            <div class="headline">Photo by Benjamin Hung</div><a href="https://unsplash.com/photos/EYmhcdGuYmI" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/522d6a86-0dcf-4554-8b22-7655d65a1f66_opt.png)">
          <div class="number">02</div>
          <div class="body">
            <div class="location">Mong Kok, Hong Kong</div>
            <div class="headline">Photo by Ryan Tang</div><a href="https://unsplash.com/photos/ANJHXftvvJ8" target="_blank">
              <div class="addItemstoCard">Ekle</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/9b5f71cb-34a3-4fb4-a3a6-0ce9557c0acd_opt.png)">
          <div class="number">03</div>
          <div class="body">
            <div class="location">Incheon, South Korea</div>
            <div class="headline">Photo by Steve Roe</div><a href="https://unsplash.com/photos/73aocAAt7rs" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/10cfd52d-e217-41e9-bb8b-ad43384a5e63_opt.png)">
          <div class="number">04</div>
          <div class="body">
            <div class="location">Wan Chai, Hong Kong</div>
            <div class="headline">Photo by Sean Foley</div><a href="https://unsplash.com/photos/aPDCEoW7B78" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/b9669f2a-17fc-47dc-b6b5-3f863004efa8_opt.png)">
          <div class="number">05</div>
          <div class="body">
            <div class="location">Shibuya-ku, Japan</div>
            <div class="headline">Photo by Alex Knight</div><a href="https://unsplash.com/photos/Akz00I_GGjU" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/31979576-5060-4513-aae2-b379b87e7fe6_opt.png)">
          <div class="number">06</div>
          <div class="body">
            <div class="location">Tokyo, Japan</div>
            <div class="headline">Photo by Benjamin Hung</div><a href="https://unsplash.com/photos/pTn26knnKVw" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
        <div class="slide" style="background-image: url(https://alca.tv/static/u/429b83b8-1ad4-4450-b0de-0a0c1073cf1e_opt.jpg)">
          <div class="number">07</div>
          <div class="body">
            <div class="location">Taipei City, Taiwan</div>
            <div class="headline">Photo by Jesus In Taiwan</div><a href="https://unsplash.com/photos/v63B_MUiFw8" target="_blank">
              <div class="link">View on Unsplash</div></a>
          </div>
        </div>
      </div>
      <div id="next-catch"></div>
      <div id="prev-catch"></div>
    </div>
    <div id="footer"><a href="https://dribbble.com/shots/3888265-Motion-Study" target="_blank">
        <div id="dribbble"></div></a></div>
  </div>
  </template>
  <script>
  export default {
    mounted() {
      let hero = document.getElementById('hero-slides');
      let menu = document.getElementById('menu');
      let slides = document.getElementById('slides');
      let dribbble = document.getElementById('dribbble');
      let next = ['next', 'next-catch'].map((n) => document.getElementById(n));
      let prev = ['prev', 'prev-catch'].map((n) => document.getElementById(n));
      let slideChildren = slides.children;
      let slideCount = slides.children.length;
      let currentlyDemoing = false;
      let currentPage = 0;
      let slidesPerPage = () =>
        window.innerWidth > 1700
          ? 4
          : window.innerWidth > 1200
          ? 3
          : 2;
      let maxPageCount = () => slideCount / slidesPerPage() - 1;
  
      function goToPage(pageNumber = 0) {
        currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
        console.log(currentPage);
        hero.style.setProperty('--page', currentPage);
      }
  
      function sleep(time) {
        return new Promise((res) => setTimeout(res, time));
      }
  
      function hoverSlide(index) {
        index in slideChildren &&
          slideChildren[index].classList.add('hover');
      }
  
      function unhoverSlide(index) {
        index in slideChildren &&
          slideChildren[index].classList.remove('hover');
      }
  
      async function demo() {
        if (currentlyDemoing) {
          return;
        }
        currentlyDemoing = true;
        if (currentPage !== 0) {
          goToPage(0);
          await sleep(800);
        }
        let slides = slidesPerPage();
        let pageSeq_ = { 2: [1, 2, 1], 3: [1, 2, 1 / 3], 4: [1, 1, 0] };
        let pageSeq = pageSeq_[slides] || pageSeq_[4];
        let slideSeq_ = { 2: [2, 4, 3], 3: [3, 6, 2], 4: [3, 6, 2] };
        let slideSeq = slideSeq_[slides] || slideSeq_[2];
        await sleep(300);
        goToPage(pageSeq[0]);
        await sleep(500);
        hoverSlide(slideSeq[0]);
        await sleep(1200);
        goToPage(pageSeq[1]);
        dribbble.classList.add('hover');
        unhoverSlide(slideSeq[0]);
        await sleep(500);
        hoverSlide(slideSeq[1]);
        await sleep(1200);
        goToPage(pageSeq[2]);
        unhoverSlide(slideSeq[1]);
        await sleep(300);
        hoverSlide(slideSeq[2]);
        await sleep(1600);
        goToPage(0);
        unhoverSlide(slideSeq[2]);
        dribbble.classList.remove('hover');
        currentlyDemoing = false;
      }
  
      next.forEach((n) => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage + 1)));
      prev.forEach((n) => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage - 1)));
      menu.addEventListener('click', demo);
  
      sleep(100).then(demo);
    },
  };
  </script>
  <style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,400,900,800i');
  
  $accent-color: hsl(204, 90%, 50%);
  $curve: cubic-bezier(0.7, 0, 0.3, 1);
  
  /* Your existing styles */
#hero-slides {
  --page: 0;
  height: 100vh;
  background: hsl(210, 23%, 19%);
  background: linear-gradient(90deg, hsl(210, 13%, 28%) 0%, hsl(210, 23%, 19%) 100%);
}


  body {
    --slides-per-page: 2;
    margin: 0;
    overflow: hidden;
    height: 100vh;
    font-family: 'Roboto Condensed', sans-serif;
    color: hsl(0, 0%, 100%);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  #hero-slides {
    --page: 0;
    height: 100vh;
    background: hsl(210, 23%, 19%);
    background: linear-gradient(90deg, hsl(210, 13%, 28%) 0%, hsl(210, 23%, 19%) 100%);
    
    #header {
      height: 12vh;
      line-height: 12vh;
      padding: 0 3vw;
      position: relative;
      
      #logo {
        font-size: 2.5vh;
        font-style: italic;
        
        &:before {
          content: 'The';
          text-transform: uppercase;
          font-weight: 100;
          margin-right: 0.4em;
        }
        &:after {
          content: 'Wall';
          text-transform: uppercase;
          font-weight: 800;
        }
      }
      #menu {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
        padding: 0 3vw;
        
        &:before {
          font-size: 1.75vh;
          content: 'Play Demo';
          margin-right: 0.5em;
          text-transform: uppercase;
        }
        #hamburger {
          display: inline-block;
          
          .slice {
            background: hsl(0, 0%, 100%);
            height: 0.2vh;
            width: 1vw;
            
            &:not(:last-child) {
              margin-bottom: 0.5vh;
            }
          }
        }
      }
    }
    #slides-cont {
      position: relative;
      // overflow: hidden;
      --button-height: 6vh;
      --button-spacing: 0.2vh;
      
      .button {
        width: 5vw;
        height: var(--button-height);
        background: $accent-color;
        // text-align: center;
        position: absolute;
        right: 5.375vw;
        top: 38vh;
        z-index: 100;
        cursor: pointer;
        
        &:before,
        &:after {
          line-height: var(--button-height);
          position: absolute;
          margin-left: -0.25vw;
          pointer-events: none;
          transform: scale(0.75, 1.5);
          transition: 125ms ease-in-out;
        }
        &:before {
          left: 50%;
        }
        &:after {
          opacity: 0;
        }
        &:hover {
          &:before,
          &:after {
            transition: 250ms ease-in-out;
          }
          &:before {
            opacity: 0;
          }
          &:after {
            left: 50% !important;
            opacity: 1;
          }
        }
      }
      #next {
        margin-top: calc(-1 * (var(--button-height) + var(--button-spacing)));
        
        &:before,
        &:after {
          content: '>';
        }
        &:after {
          left: 30%;
        }
        &:hover:before {
          left: 70%;
        }
      }
      #prev {
        margin-top: var(--button-spacing);
        opacity: calc(var(--page) + 0.5);
        transition: 500ms opacity;
        
        &:before,
        &:after {
          content: '<';
        }
        &:after {
          left: 70%;
        }
        &:hover:before {
          left: 30%;
        }
      }
      #next-catch,
      #prev-catch {
        width: 10vw;
        height: 76vh;
        position: absolute;
        top: 0;
        z-index: 90;
      }
      #next-catch {
        right: 0;
      }
      #prev-catch {
        left: 0;
      }
    }
    #slides {
      --slides-height: 76vh;
      width: auto;
      height: var(--slides-height);
      padding: 0 10vw;
      font-size: 0;
      white-space: nowrap;
      position: absolute;
      transform: translate3D(calc(var(--page) * -80vw), 0, 0);
      transition: 1500ms transform $curve;
      
      .slide {
        display: inline-block;
        vertical-align: top;
        font-size: 1.5vw;
        width: 24em;
        height: var(--slides-height);
        margin: 0 1.333em;
        background: hsl(210, 23%, 8%);
        color: white;
        background-size: cover;
        background-position: center;
        white-space: normal;
        word-break: break-word;
        position: relative;
        
        &:before {
          content: '';
          display: block;
          background: linear-gradient(180deg, hsla(209, 11%, 38%, 0) 0%, hsla(209, 36%, 20%, 0.7) 100%);
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .number {
          position: absolute;
          top: 2em;
          left: 2em;
          filter: drop-shadow(0 2px 1px hsla(0, 0%, 0%, 0.5));
          
          &,
          &:before,
          &:after {
            vertical-align: middle;
          }
          &:before,
          &:after {
            display: inline-block;
            content: '';
            height: 0.133em;
            margin-top: -0.2em;
            background: hsl(0, 0%, 100%);
          }
          &:before {
            width: 0;
            margin-left: 0;
          }
          &:after {
            width: 3em;
            margin-left: 1em;
          }
        }
        .body {
          position: absolute;
          bottom: 2em;
          left: 2em;
          right: 2em;
        }
        .location,
        .headline {
          position: relative;
          bottom: 0;
          cursor: default;
        }
        &:before,
        .number:before,
        .number:after,
        .location,
        .headline,
        .link {
          transition: 375ms $curve;
        }
        .location {
          font-weight: 100;
          margin-bottom: 1.5em;
          transition-delay: 60ms;
        }
        .headline {
          font-size: 2.667em;
          font-weight: 900;
          transition-delay: 50ms;
        }
        .link {
          display: inline-block;
          background: $accent-color;
          padding: 0.5em 1.25em;
          font-size: 1.33em;
          opacity: 0;
          position: absolute;
          bottom: -2em;
          pointer-events: none;
          transition-delay: 25ms;
        }
        &.hover,
        &:hover {
          &:before {
            opacity: 1;
          }
          &:before,
          .number:before,
          .number:after,
          .location,
          .headline,
          .link {
            transition: 500ms $curve;
          }
          .number:before {
            width: 3em;
            margin-right: 1em;
          }
          .number:after {
            width: 0;
            margin-right: 0;
          }
          .location {
            transition-delay: 0;
            bottom: 4em;
          }
          .headline {
            transition-delay: 100ms;
            bottom: 1.5em;
          }
          .link {
            bottom: 0;
            opacity: 1;
            transition-delay: 250ms;
            pointer-events: auto;
          }
        }
      }
    }
    #footer {
      height: 12vh;
      font-size: 1vh;
      
  // 		#page-counter {
        
  // 		}
      #dribbble {
        border-radius: 2vh;
        position: absolute;
        bottom: 4vh;
        right: 4vh;
        transition: 300ms $curve;
        padding-left: 1.5vh;
        
        &:before,
        &:after {
          vertical-align: middle;
          transition: inherit;
        }
        &:before {
          display: inline;
          content: 'View original Dribbble';
          font-size: 2vh;
          opacity: 0;
          transform: translate3D(-200px, 0, 0);
        }
        &:after {
          content: '';
          display: inline-block;
          width: 4vh;
          height: 4vh;
          margin-left: 1vh;
          background-image: url(https://alca.tv/static/u/82fde61b-28ef-4f17-976e-8f1abb5a1165.png);
          background-size: contain;
          background-position: center;
        }
        &.hover,
        &:hover {
          background: hsl(337, 78%, 61%);
          
          &:before {
            opacity: 1;
            transform: translate3D(0, 0, 0);
            transition-delay: 50ms;
          }
          &:after {
            filter: saturate(0%) contrast(200%) brightness(200%) invert(100%);
          }
        }
      }
    }
  }
  
  @media (min-width: 1200px) and (max-width: 1699px) {
    body {
      --slides-per-page: 3;
    }
    #hero-slides #slides .slide {
      font-size: 1vw;
    }
  }
  
  @media (min-width: 1700px) {
    body {
      --slide-per-age: 4;
    }
    #hero-slides #slides .slide {
      font-size: 0.75vw;
    }
  }
  </style>