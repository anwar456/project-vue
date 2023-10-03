<template>
  <nav
    class="navbar navbar-expand-lg fixed-top py-3"
    :class="{ 'navbar-scroll': scrolled }"
  >
    <div class="container-lg">
      <router-link class="navbar-brand" to="/">
        <img src="../../assets/image/Logo.png" alt="logo" class="logo-nav" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </ul>
        <div class="nav-btn d-grid gap-2 d-md-block">
          <router-link
            to="/signin"
            class="signin-button btn ms-2 me-2 px-3"
            type="button"
            >Sign In</router-link
          >
          <a
            href="#"
            class="signup-button btn btn-outline-primary rounded-pill px-4"
            type="button"
            >Sign Up</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
};
</script>
