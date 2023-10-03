<template>
  <div class="container-fluid p-4">
    <div class="indicator">
      <p>
        <i class="bi bi-house"></i> > <span class="statistic">Statistik</span> >
        <span class="wilayah">Wilayah</span>
      </p>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="card-content">
          <p>Jumlah Penduduk</p>
          <div class="card-dashboard">
            <canvas id="lineChart" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card-content">
          <p>Prasarana Air Bersih</p>
          <div class="card-dashboard">
            <canvas id="barChart" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="card-content">
          <p>Jumlah Penduduk Tiap Dusun</p>
          <div class="card-dashboard">
            <canvas id="doughChartOne" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-content">
          <p>Jumlah Penduduk Tiap Dusun</p>
          <div class="card-dashboard">
            <canvas id="radarChart" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-content">
          <p>Jumlah KK Tiap Dusun</p>
          <div class="card-dashboard">
            <canvas id="doughChartTwo" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="card-content">
          <p>Jumlah Prasarana Umum</p>
          <div class="card-dashboard">
            <canvas id="doughChartThree" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-content">
          <p>Jumlah Penduduk Berdasarkan Gender 2022</p>
          <div class="card-dashboard">
            <canvas id="barChartDouble" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "DashHome",
  methods: {
    createLineChart() {
      var ctx = document.getElementById("lineChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
          datasets: [
            {
              label: "Line Chart",
              data: [-80, -30, 90, 60, -10, 20, -100],
              borderColor: "#2161D5",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    },

    createBarChart() {
      var ctx = document.getElementById("barChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
          datasets: [
            {
              label: "Bar Chart",
              data: [170, 105, 50, 70, 140, 250, 200],
              backgroundColor: "#2161D5",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    },

    createDoughnutChartOne() {
      var ctx = document.getElementById("doughChartOne").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Dusun 1", "Dusun 2", "Dusun 3", "Dusun 4"],
          datasets: [
            {
              label: "Doughnut Chart",
              data: [40, 20, 80, 60],
              backgroundColor: ["#898BE7", "#97ACD1", "#2161D5", "#89AFE7"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },

    createRadarChart() {
      var ctx = document.getElementById("radarChart").getContext("2d");
      new Chart(ctx, {
        type: "radar",
        data: {
          labels: [
            "Dusun 1",
            "Dusun 2",
            "Dusun 3",
            "Dusun 4",
            "Dusun 5",
            "Dusun 6",
            "Dusun 7",
          ],
          datasets: [
            {
              label: "Radar Chart",
              data: [50, 40, 35, 70, 65, 10, 100],
              backgroundColor: "#8697A8",
              borderColor: "#2161D5",
              borderWidth: 2,
              pointBackgroundColor: "#2161D5",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },

    createDoughnutChartTwo() {
      var ctx = document.getElementById("doughChartTwo").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Dusun 1", "Dusun 2", "Dusun 3", "Dusun 4"],
          datasets: [
            {
              label: "Doughnut Chart",
              data: [40, 20, 80, 60],
              backgroundColor: ["#898BE7", "#97ACD1", "#2161D5", "#89AFE7"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },

    createDoughnutChartThree() {
      var ctx = document.getElementById("doughChartThree").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Balai Pertemuan", "Sumur Desa", "Olahraga", "Pasar Desa"],
          datasets: [
            {
              label: "Doughnut Chart",
              data: [20, 150, 150, 50],
              backgroundColor: ["#97ACD1", "#2161D5", "#898BE7", "#89AFE7"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },

    createBarChartDouble() {
      var ctx = document.getElementById("barChartDouble").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Dusun 1",
            "Dusun 2",
            "Dusun 3",
            "Dusun 4",
            "Dusun 5",
            "Dusun 6",
          ],
          datasets: [
            {
              label: "Laki-laki",
              data: [970, 1250, 325, 1300, 450, 970],
              backgroundColor: "#2161D5",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 0,
            },
            {
              label: "Perempuan",
              data: [1470, 450, 1250, 1500, 500, 650],
              backgroundColor: "#97ACD1",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    },
  },
  mounted() {
    this.createLineChart();
    this.createBarChart();
    this.createDoughnutChartOne();
    this.createRadarChart();
    this.createDoughnutChartTwo();
    this.createDoughnutChartThree();
    this.createBarChartDouble();
  },
};
</script>
