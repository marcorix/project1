const trafficNav = document.querySelector(".traffic-nav");

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

// Nav event listner

trafficNav.addEventListener("click", (e) => {
  const element = e.target;
  const liArray = trafficNav.children;

  if (element.tagName === "LI") {
    for (let i = 0; i < liArray.length; i++) {
      liArray[i].classList.remove("active");
    }

    element.classList.add("active");

    switch (element.textContent) {
      case "Hourly":
        trafficHourly();
        break;
      case "Daily":
        trafficDaily();
        break;
      case "Weekly":
        trafficWeekly();
        break;
      case "Monthly":
        trafficMonthly();
    }
  }
});

function trafficHourly() {
  var trafficData = {
    labels: ["00", "2", "4", "6", "8", "10", "12"],
    datasets: [
      {
        data: [2, 4, 6, 7, 13, 18, 25],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
      },
    ],
  };

  var trafficChart = new Chart(trafficCanvas, {
    type: "line",
    data: trafficData,
    options: trafficOptions,
  });
}

function trafficDaily() {
  var trafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
      },
    ],
  };

  var trafficChart = new Chart(trafficCanvas, {
    type: "line",
    data: trafficData,
    options: trafficOptions,
  });
}

function trafficWeekly() {
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

  var trafficChart = new Chart(trafficCanvas, {
    type: "line",
    data: trafficData,
    options: trafficOptions,
  });
}

function trafficMonthly() {
  var trafficData = {
    labels: ["G", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    datasets: [
      {
        data: [
          10000,
          15000,
          8000,
          16000,
          12000,
          18000,
          22000,
          30000,
          25000,
          15000,
          11000,
          20000,
        ],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
      },
    ],
  };

  var trafficChart = new Chart(trafficCanvas, {
    type: "line",
    data: trafficData,
    options: trafficOptions,
  });
}
