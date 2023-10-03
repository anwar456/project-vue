<template>
  <div class="dashboard">
    <div class="d-flex" id="wrapper" :class="{ toggled: isSidebarOpen }">
      <!-- Sidebar -->
      <div id="sidebar-wrapper">
        <div class="list-group list-group-flush my-3">
          <div class="logo p-3">
            <img src="../assets/image/logo-bw.png" alt="" />
          </div>
          <div class="menu-list-first">
            <router-link to="/dashboard"
              ><i class="bi bi-speedometer"></i> Dashboard</router-link
            >
          </div>
          <div class="menu-component">
            <p>DATA</p>
          </div>
          <div class="menu-list">
            <a href="#"><i class="bi bi-ui-radios-grid"></i> Visualization</a>
            <a href="#"><i class="bi bi-archive"></i> Case</a>
            <a href="#"><i class="bi bi-hdd-stack"></i> Data Set</a>
            <router-link to="/dashboard/datasource"
              ><i class="bi bi-database"></i> Data Source</router-link
            >
            <a href="#"><i class="bi bi-wifi"></i> Connection</a>
          </div>
          <div class="menu-component">
            <p>ASSETS</p>
          </div>
          <div class="menu-list">
            <a href="#"><i class="bi bi-eye"></i> Icon</a>
            <a href="#"><i class="bi bi-image"></i> Image</a>
          </div>
          <div class="menu-component">
            <p>AUTHORIZATION</p>
          </div>
          <div class="menu-list">
            <a href="#"><i class="bi bi-person"></i> Account</a>
            <a href="#"><i class="bi bi-shield-check"></i> Role</a>
            <a href="#"
              ><i class="bi bi-layout-text-window-reverse"></i> Workspace</a
            >
          </div>
        </div>
      </div>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand navbar-light bg-light p-3">
          <div class="container">
            <div class="d-flex align-items-center">
              <img
                src="../assets/image/u_subject.svg"
                alt=""
                id="menu-toggle"
                @click="toggleSidebar"
              />
            </div>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-moon"></i></a>
                </li>
                <li class="nav-item dropdown">
                  <div
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      v-if="user"
                      :src="user.image"
                      alt="user-photo"
                      class="user-photo"
                    />
                    {{ user ? user.username : "" }}
                  </div>
                  <ul class="dropdown-menu dropdown-menu-end mt-3" v-if="user">
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-person-circle"></i> Profile</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        @click="logout"
                        style="cursor: pointer"
                        ><i class="bi bi-box-arrow-left"></i> Sign Out</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <!-- main content -->
        <div class="main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/signin");
    },
  },
  computed: {
    user() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<!-- <script>
export default {
  name: "DashboardView",
  computed: {
    user() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/signin");
    },
  },
};
</script> -->
