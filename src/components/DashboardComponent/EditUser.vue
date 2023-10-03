<template>
  <form
    @submit.prevent="saveChanges"
    class="d-flex justify-content-center align-items-center mt-5"
  >
    <div class="row container">
      <div class="form-group">
        <label for="">Firstname<span class="text-primary">*</span></label>
        <input
          type="text"
          class="form-control"
          v-model="editedUser.firstName"
        />
      </div>
      <div class="form-group">
        <label for="">Lastname<span class="text-primary">*</span></label>
        <input type="text" class="form-control" v-model="editedUser.lastName" />
      </div>
      <div class="form-group">
        <label for="">Username<span class="text-primary">*</span></label>
        <input type="text" class="form-control" v-model="editedUser.username" />
      </div>
      <div class="form-group">
        <label for="">Email<span class="text-primary">*</span></label>
        <input type="text" class="form-control" v-model="editedUser.email" />
      </div>
      <div class="form-group">
        <label for="gender">Gender<span class="text-primary">*</span></label>
        <select id="gender" class="form-control" v-model="editedUser.gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="d-grid gap-2 mt-4">
        <button class="btn btn-primary p-2 fw-bolder" type="submit">
          Save Change
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "EditUser",
  data() {
    return {
      editedUser: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        gender: "",
      },
    };
  },
  methods: {
    saveChanges() {
      const userId = this.$route.params.id;
      axios
        .put(`https://dummyjson.com/users/${userId}`, this.editedUser)
        .then((response) => {
          console.log(response.data);
          alert("Changes saved successfully.");
          this.$router.push({ name: "DataSource" });
        })
        .catch((error) => {
          console.error("Error saving changes:", error);
        });
    },
  },
  created() {
    const userId = this.$route.params.id;
    axios
      .get(`https://dummyjson.com/users/${userId}`)
      .then((response) => {
        this.editedUser = response.data;
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  },
};
</script>
