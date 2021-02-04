//TRAFFIC

var ctx = document.getElementById("traffic-chart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [500, 100, 1500, 2000, 2500, 1500, 700, 500, 800, 1000, 900, 500],
      },
    ],
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    },
  },
});

//DAILY

var ctx = document.getElementById("daily-chart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [50, 150, 100, 200, 250, 200, 50],
      },
    ],
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    },
  },
});

//MOBILE
var ctx = document.getElementById("mobile-chart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "doughnut",

  // The data for our dataset
  data: {
    labels: ["Phone", "Tablet", "Desktop"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [60, 10, 30],
      },
    ],
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    },
  },
});
