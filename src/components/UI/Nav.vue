<template>
  <nav class="navbar">
    <img
      class="navbar-logo"
      src="https://api.builder.io/api/v1/image/assets/TEMP/4a29e3443cdf0359763cb1de98787f1a6ad707a2?width=368"
      alt="Delta Helicopters"
    />

    <div class="nav-center">
      <a href="#home">Home</a>
      <a href="#fleet">Fleet</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact Us</a>
    </div>

    <img
      class="navbar-user-icon"
      src="https://api.builder.io/api/v1/image/assets/TEMP/355cb9a24372485e7e886319e8b89ccc41d77dea?width=58"
      alt="User Account"
    />
  </nav>
</template>
<style scoped>
  .navbar {
    position: fixed;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 6%;
    gap: 2rem;
  }

  .navbar-logo {
    width: 140px;
    height: auto;
    flex-shrink: 0;
  }

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    flex: 1;
  }

  .nav-center a {
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s ease;
    white-space: nowrap;
  }

  .nav-center a:hover {
    color: #dcc62d;
  }

  .navbar-user-icon {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .navbar {
      flex-wrap: wrap;
      padding: 1rem 4%;
      gap: 1rem;
    }

    .navbar-logo {
      width: 110px;
    }

    .nav-center {
      flex-basis: 100%;
      order: 3;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .nav-center a {
      font-size: 14px;
    }

    .navbar-user-icon {
      width: 28px;
      height: 28px;
    }

    .hero-section {
      padding: 0 4%;
    }

    .title-box {
      margin-bottom: 0.5rem;
    }

    .hero-title {
      font-size: 32px;
      letter-spacing: 1px;
    }

    .bracket {
      font-size: 50px;
    }

    .hero-subtitle {
      font-size: 18px;
    }

    .hero-description {
      font-size: 14px;
    }

    .btn-book-now {
      width: 100%;
      max-width: 280px;
      height: 50px;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      padding: 0.8rem 3%;
    }

    .navbar-logo {
      width: 90px;
    }

    .nav-center {
      gap: 1rem;
    }

    .nav-center a {
      font-size: 12px;
    }

    .hero-section {
      padding: 0 3%;
    }

    .hero-title {
      font-size: 26px;
      line-height: 1.2;
    }

    .bracket {
      font-size: 40px;
    }

    .hero-subtitle {
      font-size: 16px;
    }

    .hero-description {
      font-size: 13px;
      line-height: 1.5;
    }

    .btn-book-now {
      width: 100%;
      height: 48px;
      font-size: 15px;
    }
  }
</style>
