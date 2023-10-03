<template>
  <form id="login">
    <div class="row">
      <p class="head-login">Welcome to logo ipsum</p>
      <p class="text-login">
        Don't have an account? <a href="#" class="text-primary">Signup</a>
      </p>
      <div class="col-12 form-group">
        <label for="">Username<span class="text-primary">*</span></label>
        <input
          v-model="username"
          type="text"
          class="form-control form-control-lg"
        />
        <p class="text-danger" v-if="!username && showError">
          Username is required.
        </p>
      </div>
      <div class="col-12 form-group">
        <label for="">Password<span class="text-primary">*</span></label>
        <input
          v-model="password"
          type="password"
          class="form-control form-control-lg"
        />
        <p class="text-danger" v-if="!password && showError">
          Password is required.
        </p>
      </div>
      <div class="col-12 form-group mt-3">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label" for="invalidCheck">
          <p class="text-check">Remember me</p>
        </label>
      </div>
      <div class="col-12 form-group">
        <div class="d-grid gap-2">
          <button
            @click="
              showError = true;
              login();
            "
            class="btn btn-primary p-2 fw-bolder"
            type="button"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showError: false,
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        return;
      }

      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      this.$router.push("/dashboard");

      this.showError = true;
    },
  },
};
</script>
