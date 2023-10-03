<template>
  <div>
    <NavbarComponent />
    <section class="not-found">
      <div class="container">
        <div
          class="content-not-found row align-items-center justify-content-center"
        >
          <div class="col-md-6">
            <div class="content">
              <p class="heading-not-found">Ooops! <br />Page Not Found</p>
              <p class="text-not-found">
                This page doesn't exist or was removed <br />we suggest you back
                to home.
              </p>
            </div>
            <div class="button">
              <button class="btn btn-primary btn-lg rounded-pill px-4 mt-2">
                Learn More
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="image-not-found text-center mb-4">
              <img src="../assets/image/404.png" alt="404-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarComponent from "../components/LandingPageComponents/NavbarComponent.vue";

export default {
  name: "NotFound",
  components: {
    NavbarComponent,
  },
};
</script>
