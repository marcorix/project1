const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert: </strong>You have  <strong> 6 </strong>  overdue tasks to complete</p>
<p class="alert-banner-close">x</p>
</div>
`;

alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
  console.log("clara");
});

// WIDGETS

//TRAFFIC

var trafficCanvas = document.getElementById("traffic-chart");
var trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
};

var trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0,
  },
  elements: {
    line: {
      tension: 0,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

var trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
  options: trafficOptions,
});

//DAILY

var dailyCanvas = document.getElementById("daily-chart");
var dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
};

var dailyOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

var dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

//MOBILE
var mobileCanvas = document.getElementById("mobile-chart");
var mobileData = {
  labels: ["Desktop", "Tablet", "Phone"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 500, 500],
      borderWidth: 0,
      backgroundColor: ["#7477bf", "#78CF82", "#51b6cb"],
    },
  ],
};

var mobileOptions = {
  legend: {
    position: "right",
    labels: {
      boxWidth: 20,
      fontStyle: "bold",
    },
  },
};

var mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});
