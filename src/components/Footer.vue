<template>
  <section class="footer-section">
    <div class="bg-shape left-center">
      <img src="@/assets/footer/bg-geometric-1.png" alt="" />
    </div>
    <!-- <div class="bg-shape left-top">
      <img src="@/assets/footer/bg-geometric-3.png" alt="" />
    </div> -->
    <div class="bg-shape right-bottom">
      <img src="@/assets/footer/bg-geometric-2.png" alt="" />
    </div>

    <div class="footer-inner">
      <div class="">
        <div class="footer-grid">
          <div class="brand">
            <img class="brand-logo" src="@/assets/footer/footer-logo.png" alt="" />
            <p class="brand-copy">
              Delivers professional helicopter and drone services for film, TV, surveying and 3D mapping. Safety-first
              operations, experienced pilots and tailored aerial solutions.
            </p>
          </div>


          <div class="links">
            <h4 class="col-title">Quick Links</h4>
            <span class="col-underline"></span>
            <ul class="list">
              <li>
                <img src="@/assets/footer/arrow-icon.png" alt="" />
                <a href="#about">About</a>
              </li>
              <li>
                <img src="@/assets/footer/arrow-icon.png" alt="" />
                <a href="#services">Fleet</a>
              </li>
              <li>
                <img src="@/assets/footer/arrow-icon.png" alt="" />
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <img src="@/assets/footer/arrow-icon.png" alt="" />
                <a href="#">FAQs</a>
              </li>
              <li>
                <img src="@/assets/footer/arrow-icon.png" alt="" />
                <a href="#getintouch">Contact</a>
              </li>
            </ul>
          </div>

          <div class="services">
            <h4 class="col-title">Services</h4>
            <span class="col-underline"></span>
            <ul class="list">
              <li><img src="@/assets/footer/arrow-icon.png" alt="" /> <a href="#services">Helicopter Rental & Charter</a></li>
              <li><img src="@/assets/footer/arrow-icon.png" alt="" /> <a href="#services">Aerial Filming & Photography</a></li>
              <li><img src="@/assets/footer/arrow-icon.png" alt="" /> <a href="#services">Surveying & Inspection</a></li>
              <li><img src="@/assets/footer/arrow-icon.png" alt="" /> <a href="#services">3D Mapping & Modelling</a></li>
            </ul>
          </div>

          <div class="contact">
            <h4 class="col-title">Contact Us</h4>
            <span class="col-underline"></span>
            <ul class="contact-list">
              <li>
                <img src="@/assets/footer/mail-icon.png" alt="" />
                <span><p><a href="mailto:hello@website.com">hello@website.com</a></p></span>
              </li>
              <li><img src="@/assets/footer/location-icon.png" alt="" /><span>838 Cantt Sialkot, ENG</span></li>
              <li>
                <img src="@/assets/footer/phone-icon.png" alt="" />
                <span><a href="tel:+025421234560">+02 5421234560</a></span>
              </li>
            </ul>
          </div>
        </div>

        <div class="panel-divider"></div>
        <div class="bottom-bar">
          <p class="copyright">Copyright © 2025 Delta All Rights Reserved.</p>
          <p class="credit">Design and Developed by</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.footer-section {
  position: relative;
  background: #0f0f0f;
  overflow: hidden;
  min-height: 60vh;
}

.footer-inner {
  position: relative;
  max-width: 1320px;
  margin: 0 auto;
  padding: 120px 60px 60px;
  margin-top: 30px;
  min-height: 500px;
  z-index: 2;
}

.footer-panel {
  position: relative;
  background: #131313;
  border-top: 2px solid #d9b200;
  border-bottom: 2px solid #1a1a1a;
  padding: 60px 48px 24px;
  clip-path: polygon(0 6%, 100% 0, 100% 100%, 0 100%);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
}

.brand-logo {
  width: 160px;
  height: auto;
  display: block;
  margin-bottom: 16px;
}

.brand-copy {
  color: #d1d1d1;
  font-family: Manrope, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 22px;
  max-width: 440px;
}

.col-title {
  color: #fff;
  font-family: Oswald, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.2;
  margin: 0 0 8px;
}

.col-underline {
  display: block;
  width: 36px;
  height: 4px;
  background: #d9b200;
  margin-bottom: 18px;
}

.list,
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

.list li,
.contact-list li {
  display: grid;
  grid-template-columns: 18px 1fr;
  align-items: start;
  gap: 12px;
  color: #eaeaea;
  font-family: Manrope, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 15px;
}

.list li img,
.contact-list li img {
  width: 14px;
  height: 14px;
}

.links a,
.services a,
.contact-list a {
  color: #eaeaea;
  text-decoration: none;
}

.links a:hover,
.services a:hover,
.contact-list a:hover,
.links a:visited,
.services a:visited,
.contact-list a:visited {
  color: #eaeaea;
  text-decoration: none;
}

.panel-divider {
  height: 3px;
  width: 100%;
  margin-top: 80px;

  /* Yellow center with faded sides */
  background: linear-gradient(to right,
      rgba(217, 178, 0, 0),
      /* fade from transparent */
      #d9b200,
      /* solid yellow */
      rgba(217, 178, 0, 0)
      /* fade to transparent */
    );
}

.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5rem 0 2rem;
  color: #d1d1d1;
  font-family: Manrope, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  margin-top: 30px; 
}

.copyright {
  margin: 0;
}

.credit {
  margin: 0;
}

.bg-shape {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

/* Floating animation for background shapes */
@keyframes floatUpDown {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-25px);
  }
}

.left-center {
  left: 1px;
  top: -3%;
  width: 200px;
  animation: floatUpDown 4s ease-in-out infinite;
}

.right-bottom {
  right: -110px;
  bottom: -70px;
  width: 450px;
  transform: rotate(-15deg);
  animation: floatUpDown 4s ease-in-out infinite 1s;
}

.bg-shape img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.left-top {
  left: 300px;
  top: -500px;
  width: 220px;
  transform: rotate(-79deg) scaleY(-1);
}

@media (max-width: 1100px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .footer-inner {
    padding: 90px 20px 40px;
    min-height: 460px;
  }

  .footer-panel {
    padding: 48px 20px 16px;
    clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 100%);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .left-center {
    display: none;
    animation: none;
  }

  .right-bottom {
    animation: floatUpDown 4s ease-in-out infinite 1s;
  }

  .left-top {
    width: 360px;
    left: -160px;
    top: -80px;
  }

  .right-bottom {
    width: 360px;
    right: -160px;
    bottom: -120px;
  }
}

@media (max-width: 480px) {
  .footer-inner {
    top: -150px;
    padding: 3rem 8% 2.5rem;
    min-height: auto;
    margin-top: 120px;
    margin-bottom: 80px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .brand-logo {
    width: 120px;
  }

  .brand-copy {
    font-size: 16px;
    line-height: 20px;
    max-width: 100%;
  }

  .col-title {
    font-size: 18px;
  }

  .col-underline {
    width: 28px;
    height: 3px;
    margin-bottom: 14px;
  }

  .list,
  .contact-list {
    gap: 12px;
  }

  .list li,
  .contact-list li {
    grid-template-columns: 16px 1fr;
    font-size: 15px;
  }

  .list li img,
  .contact-list li img {
    width: 12px;
    height: 12px;
  }

  .panel-divider {
    margin-top: 20px;
  }

  .bottom-bar {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 0;
    font-size: 14px;
    text-align: center;
  }

  /* Keep columns centered headings, but left-align lists for readability */
  .links,
  .services,
  .contact {
    text-align: center;
    display: grid;
    justify-items: center;
  }

  .links .col-underline,
  .services .col-underline,
  .contact .col-underline {
    margin-left: auto;
    margin-right: auto;
  }

  .list,
  .contact-list {
    justify-items: start;
  }

  .list li,
  .contact-list li {
    text-align: left;
    display: grid;
    grid-template-columns: 16px 1fr;
    align-items: center;
    /* vertically center icon and text */
    gap: 10px;
  }

  .list li img,
  .contact-list li img {
    align-self: center;
  }

  .left-top {
    left: 300px;
    top: -500px;
    width: 220px;
    transform: rotate(-79deg) scaleY(-1);
  }

}
</style>
