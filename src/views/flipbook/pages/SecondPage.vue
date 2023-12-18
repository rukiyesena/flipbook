<template>
  <!-- <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> -->

<body>
  <header id="header">
    <div class="logo-section">
      <img id="header-img" class="site-logo" src="https://images2.imgbox.com/27/ac/VlF6wjCv_o.png" alt="company-logo">
    </div>
    <nav id="nav-bar" class="navigation-bar">
      <ul style="list-style:none;" class="navigation">
        <li><a class="nav-link" href="#norm">Norm</a></li>
        <li><a class="nav-link" href="#story">Our Story</a></li>
        <li><a class="nav-link" href="#designs">Designs</a></li>
        <li><a class="nav-link" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <div class="container">
      <section id="norm" class="cover-sect">
        <div class="title-text">
          <h1>NORM</h1>
          <p>~ THE INTERIOR STANDARD ~</p>
        </div>
        <div class="box-feature">
          <img class="cover-image" src="https://images2.imgbox.com/75/2b/xlGEMbdX_o.jpg" alt="Living room sample"/>
        </div>
      </section>
      
      <!--       ........ -->
      <section id="story" class="story-sect">
        <div class="section-text">
          <h2>Our Story</h2>
          <p>Furnishing your home can be quite overwhelming at times, at least that's how it was for us. <br><br>Norm was born to help others going through the maze that is interior design.<br><br>We decided to curate interior design modern trends, inspirations, tips and tricks from the vast interior collective to help you bring your home to life.</p>
        </div>
        <div class="box-feature">
          <img src="https://roohome.com/wp-content/uploads/2016/10/scandinavian-small-apartment-interior.jpg" />
        </div>
      </section>
      
      <!--       ........ -->
      <section id="designs" class="samples">
        <div class="section-text">
          <h2>Featured</h2>
          <p>Take a look at some of our featured picks that have made editorial debuts</p>
        </div>
        <div class="featured">
          <div class="cont">
            <figure>
              <img src="https://images2.imgbox.com/78/40/AXaX0dGj_o.jpg" alt="modern style living room">
              <figcaption>
                <a href="https://pixabay.com/users/jarmoluk-143740/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2094702">Image by Michal Jarmoluk from Pixabay</a>
              </figcaption>
            </figure>
          </div>
          
          <div class="cont">
            <figure>
              <img src="https://images2.imgbox.com/61/65/spezPzqR_o.jpg" alt="Grey sofa in minimalist living room">
              <figcaption>
                <a href="https://pixabay.com/users/StockSnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2593570">Image by StockSnap from Pixabay</a> 
              </figcaption>
            </figure>
          </div>
          
          <div class="cont">
            <figure>
              <img src="https://images2.imgbox.com/08/37/9tQMXva6_o.jpg" alt="Living Room Modern Interior">
              <figcaption>
                <a href="https://pixabay.com/users/miapirttila-4257077/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1978362">Image by miapirttila from Pixabay</a>
              </figcaption>
            </figure>
          </div>
          
        </div>
        <div class="video-section">
          </div>
      </section>
      
      
      <!--       ........ -->
      <section id="contact" class="contact-section">
        <div class="section-text">
          <h2>Get in touch</h2>
          <p>We would love to hear from you! <br><br>If you would like to receive our monthly catalogue subscribe by filling in the form with your name and email address</p>
        </div>
        <div class="contact-info">
          <div class="form-box">
            <form id="form" class="contact-form" action="https://www.freecodecamp.com/email-submit">
              <label for="name" class="form-entry">Name <br>
                <input name="name" id="name" type="text" class="txt-box" placeholder="&nbsp&nbsp;Enter name" required><br>
              </label>
              <label for="email" class="form-entry">Email <br>
                <input name="email" id="email" type="email" class="txt-box" placeholder="&nbsp&nbsp;Enter email" required><br>
              </label>
              <label for="message" class="form-entry">Message<br>
                <textarea name="message" id="message" type="textarea" class="txt-box" placeholder="&nbsp;Optional"></textarea><br>
              </label><br>
              <input class="btn" id="submit" type="submit" value="Submit">
            </form>
          </div>
        </div>
      
      </section>
    </div>
  
  </main>
  <footer class="footer-section">
    <div class="footer-info">
      <ul style="list-style:none;">
        <li><span>Privacy</span></li>
        <li><span>Terms</span></li>
        <li><span>Contact</span></li>
      </ul>
    </div>
    <span class="personal-info">Created by Lulet<br>Reach out on twitter @luizoutlets</span>
    <span>Copyright 2019</span>
  </footer>
  
</body>

</template>
  
<style>
@import url('https://fonts.googleapis.com/css?family=Lora');

* {
  margin: auto;
}

body{
  display: flex;
  flex-direction: column;
  font-family:'Lora', serif;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 1.2vw;
}

@keyframes fade-in{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


h1 {
  padding-bottom: 30px;
  padding-left: 0.5em;
  text-align: center;
  font-size: 5vw;
  letter-spacing: 0.5em;
}

h2 {
  font-size: 2.8vw;
  padding-bottom: 15px;
  text-transform: uppercase;
}


header {
  position: fixed;
  display: flex;
  flex-direction: row;
  background : #030f12;
  color: white;
  width: 100%;
  max-height: max-content;
  min-height: 1em;
  padding-top: 1%;
  padding-bottom: 1%;
  text-transform: uppercase;
  z-index: 1;
}


.logo-section {
  width: 10%;
  margin-left: initial;
}

.site-logo{
  margin-left: 0.8em;
  max-width: 60%;
}

.navigation-bar{
  width: 70%;
  flex-grow: 2%;
  margin-inline-end: initial;
}

a {
  color: grey;
  text-decoration: none;
}

header a, footer a {
  color: white;
  text-decoration: none;
}

ul {
  display: flex;
  flex-direction: row; 
}

.container {
  display: grid;
  grid-template-columns: 100%;
  padding: 0px;
  padding-top: 1em;
  width: 100%;
}

section {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10% 0;
}

section div {
  width: 50%;
  margin: 0 auto;
}

section h2{
  text-align: center;
}

.cover-sect {
  margin-top: 0px;
  padding: 5% 0;
  background-opacity: 0.5;
}

.title-text {
  width: 40%;
  text-align: center;
  color: black;
  margin: auto;
  padding: 0 20px;
  animation: fade-in;
  animation-duration: 8s;
}

.story-sect{
  display: flex;
  flex-direction: row-reverse;
  background-color: #030f12;
  color: #fff;
}


.box-feature{
  width: 60%;
  max-height: auto;
}

.box-feature img{
  width: 100%;
}

.box-feature .cover-image{
  animation: fade-in;
  animation-duration: 5s;
}

.section-text h2 {
  text-align: center; 
}

.section-text p {
  text-align: justify;
  margin: auto 2.5em;
  line-height: 1.8em;
}

.samples {
  flex-direction: column;
  text-align: center;
}

.featured {
  width: 90%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 5%;
  margin: 20px auto;
}

.cont {
  width: 100%;
  color: black;  
}

.cont img{
  max-width: 100%;
  max-height: auto;
}

#video {
  max-width: -webkit-fill-available;
}

.contact-section {
  background: #030f12;
  color: #fff;
}

.contact-section p{
  padding-right: 2em;
  padding-left: 3em;
}

.form-box {
  padding-top: 1em;
}

form .form-entry{
  display: block;
  padding: 0.8em 0;
}

form .txt-box {
  margin-top: 0.3em;
  width: 100%;
  padding: 0.7em 0;
  border-radius: 2px;
  border: 2px transparent;
}

form .btn {
  text-align: center;
  background-color: #e6e8e8;
  color: #000;
  font-weight: 700;
  letter-spacing: inherit;
  border: 2px solid #eaeaea;
  box-shadow: 0px 0px 10px 1px #29393e;
  border-radius: 2px;
  padding: 0.7em; 
}

.btn:hover{
  cursor: pointer;
  background: black;
  color: white;
}


.footer-section {
  display: flex;
  flex-direction: row-reverse;
  height: 5em;
  width: 100%;
  color: #fff;
  background-color: #1d2c2f;
  text-transform: uppercase;
}

.footer-section div{
  margin-right: 2em;
}

.footer-section span{
  text-align: center;
  margin-left: 2em;
}

.footer-section .personal-info{
  margin-left: 15em;
}

@media all and (max-width: 768px){
  section div {
    width: 80%;
    padding-top: 2em;
    padding-bottom: 2em;
  }
  
  .story-sect, .sample, .contact-section, .featured{
    display: flex;
    flex-direction: column;
  }
  
  .featured {
    width: 80%;
    margin: 0 auto;
  }
  
  .section-text h2 {
    text-align: center; 
  }

  .section-text p {
    text-align: justify;
    margin-right: 10%;
    margin-left: 10%;
    font-size:2.0vw;
  }  
}
</style>