<template>
  <div class="container-fluid login-design">
    <div class="row">
      <div class="col-md-4 left-content" style="background: #f5f6fa">
        <div class="d-flex justify-content-start align-items-center p-3">
          <router-link to="/home">
            <img class="logo" src="../assets/image/Logo.png" alt="Logo" />
          </router-link>
        </div>
        <div
          class="text-center d-flex justify-content-center align-items-center flex-column"
        >
          <router-link to="/home">
            <img
              src="../assets/image/Group.png"
              alt="Image"
              class="image-group"
            />
          </router-link>
          <div class="text">
            <p class="mt-3 head">Service</p>
            <p class="content">
              An expert team help you to analyze your poltical power. An expert
              team
            </p>
          </div>
        </div>

        <div class="footer-login position-relative">
          <p class="position-absolute bottom-0 p-2">
            &copy; 2020 All Rights Reserved. PT Indonesia Indicator
          </p>
        </div>
      </div>

      <div
        class="col-md-8 d-flex justify-content-center align-items-center"
        style="height: 100vh"
      >
        <div class="col-md-6">
          <SigninForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SigninForm from "../components/SigninComponents/SigninForm.vue";

export default {
  components: {
    SigninForm,
  },
};
</script>
