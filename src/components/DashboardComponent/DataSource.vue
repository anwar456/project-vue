<template>
  <div class="container-fluid p-4">
    <div class="heading-dashboard">User Management</div>

    <div class="row mt-5 mb-4">
      <div class="col-md-6">
        <div class="form-group">
          <input
            type="text"
            placeholder="Search User Management"
            class="form-control"
            v-model="searchTerm"
            @input="performSearch"
          />
        </div>
      </div>

      <div class="col-md-6 d-flex justify-content-end">
        <div class="button-datasource">
          <button
            class="btn btn-primary px-4 py-2 fw-normal"
            data-bs-toggle="modal"
            data-bs-target="#addUserModal"
          >
            Add User
          </button>
        </div>
      </div>
    </div>

    <!-- modal add user -->
    <div
      class="modal fade"
      id="addUserModal"
      tabindex="-1"
      aria-labelledby="addUserModal"
      aria-hidden="true"
      @hidden="clearNewuser"
    >
      <div class="modal-dialog modal-md modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header position-relative">
            <div class="modal-title" id="addUserModal">
              <h1 class="fs-5" style="font-weight: 600">User Management</h1>
              <p style="color: #8697a8; font-size: 13px">
                If you need more info, please check Project Guidelines.
              </p>
            </div>
            <button
              type="button"
              class="btn-close position-absolute"
              style="right: 20px; top: 20px"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form id="login">
              <div class="row">
                <div class="col-12 form-group mb-2">
                  <label for=""
                    >Firs Name<span class="text-primary">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="newUser.firstName"
                  />
                  <p class="text-danger" v-if="!newUser.firstName && showError">
                    First Name is required.
                  </p>
                </div>
                <div class="col-12 form-group mb-2">
                  <label for=""
                    >Last Name<span class="text-primary">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="newUser.lastName"
                  />
                  <p class="text-danger" v-if="!newUser.lastName && showError">
                    Last Name is required.
                  </p>
                </div>
                <div class="col-12 form-group mb-2">
                  <label for=""
                    >Username<span class="text-primary">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="newUser.username"
                  />
                  <p class="text-danger" v-if="!newUser.username && showError">
                    Username is required.
                  </p>
                </div>
                <div class="col-12 form-group mb-2">
                  <label for="">Email<span class="text-primary">*</span></label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="newUser.email"
                  />
                  <p class="text-danger" v-if="!newUser.email && showError">
                    Email is required.
                  </p>
                </div>
                <div class="col-12 form-group mb-2">
                  <label for=""
                    >Gender<span class="text-primary">*</span></label
                  >
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="newUser.gender"
                  >
                    <option selected disabled>Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <p class="text-danger" v-if="!newUser.gender && showError">
                    Gender is required.
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light px-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary px-3"
              @click="
                showError = true;
                addUser();
              "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal add user -->

    <div class="table-responsive col-lg-12 mt-3">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isLoading">
            <td colspan="5" class="text-center mt-3">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </td>
          </tr>
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td>
              <img :src="user.image" alt="" class="rounded-pill" width="50" />
              {{ user.firstName }}
              {{ user.lastName }}
            </td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.gender }}</td>
            <td>
              <div class="dropdown">
                <div
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </div>
                <ul class="dropdown-menu">
                  <li>
                    <router-link
                      class="dropdown-item"
                      :to="'/edituser/' + user.id"
                      style="cursor: pointer"
                      ><i class="bi bi-pencil"></i> Edit</router-link
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="deleteUser(user.id)"
                      ><i class="bi bi-trash"></i> Delete</a
                    >
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr v-if="paginatedUsers.length === 0 && !isLoading">
            <td colspan="5" class="text-center mt-3">No users found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row mt-3">
      <div class="col-md-6 showing-of">
        <div>Showing {{ endIndex }} of {{ users.length }} Users</div>
      </div>

      <div class="col-md-6 d-flex justify-content-end">
        <nav aria-label="Page navigation" class="pagination-section">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button class="page-link" @click="prevPage">
                <i class="bi bi-caret-left"></i>
              </button>
            </li>
            <li
              class="page-item"
              v-for="page in pages"
              :key="page"
              :class="{ active: currentPage === page }"
            >
              <button class="page-link" @click="gotoPage(page)">
                {{ page }}
              </button>
            </li>
            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPages }"
            >
              <button class="page-link" @click="nextPage">
                <i class="bi bi-caret-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "DataSource",
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      searchTerm: "",
      newUser: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        gender: "",
      },
      message: "",
      showError: false,
    };
  },
  computed: {
    ...mapState(["isLoading"]),
    users() {
      return this.$store.getters.getUsers;
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    endIndex() {
      const end = this.startIndex + this.itemsPerPage;
      return end < this.users.length ? end : this.users.length;
    },
    paginatedUsers() {
      return this.filteredUsers.slice(this.startIndex, this.endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    },
    pages() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
    filteredUsers() {
      const searchTerm = this.searchTerm.toLowerCase();
      return this.users.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(searchTerm) ||
          user.lastName.toLowerCase().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm)
        );
      });
    },
  },

  methods: {
    gotoPage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    addUser() {
      if (
        !this.newUser.firstName ||
        !this.newUser.lastName ||
        !this.newUser.username ||
        !this.newUser.email ||
        !this.newUser.gender
      ) {
        return;
      } else {
        axios
          .post("https://dummyjson.com/users/add", this.newUser)
          .then((response) => {
            console.log(response.data);
            this.newUser = {
              firstName: "",
              lastName: "",
              username: "",
              email: "",
              gender: "",
            };
            alert("Add data success");
            this.showError = false;
          })
          .catch((error) => {
            console.log("error add user", error);
          });
      }

      this.showError = true;
    },
    editUser(user) {
      this.$router.push({ name: "EditUser", params: { id: user.id } });
    },
    deleteUser(id) {
      const confirmed = window.confirm(
        `Apakah Anda yakin ingin menghapus pengguna dengan ID ${id}?`
      );
      if (confirmed) {
        axios
          .delete(`https://dummyjson.com/users/${id}`)
          .then((response) => {
            console.log(response.data);
            alert("Pengguna berhasil dihapus.");
            this.$store.dispatch("fetchUsers");
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    },
    performSearch() {
      this.currentPage = 1;
    },
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
