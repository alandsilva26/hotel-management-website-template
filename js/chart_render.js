function renderBooking() {
  var ctx = document.getElementById("booking-chart");
  // console.log(rawData);
  // Remove this later
  var booked = 10;
  var unbooked = 5;
  // rawData.forEach((room) => {
  //   if (room["room_booked"] == "1") {
  //     //   console.log("room_booked");
  //     booked++;
  //   }
  //   unbooked++;
  // });
  data = {
    datasets: [
      {
        data: [booked, unbooked],
        backgroundColor: [
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Booked Rooms", "Unbooked Rooms"],
  };
  var myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
    // options: options
  });
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function roomTypes() {
  var ctx = document.getElementById("room-types");
  ctx.style.backgroundColor = "rgb(255,255,255)";
  let rawData = [
    {
      room_id: "1",
      room_number: "101",
      room_name: "Daimond Suite",
      room_type: "Daimond",
      room_featured: "1",
      room_price: "538.220",
      room_booked: "1",
      check_in_date: "2020-12-18",
      check_out_date: "2021-01-11",
      room_image: "3.jpg",
      room_floor: "2",
      room_view: "Beach",
      room_beds: "2",
      bed_type: "Double deluxe",
      room_capacity: "4",
      room_amenities: "breakfast, lunch, dinner, wifi",
    },
    {
      room_id: "2",
      room_number: "101",
      room_name: "Daimond Suite",
      room_type: "Silver",
      room_featured: "1",
      room_price: "538.220",
      room_booked: "1",
      check_in_date: "0000-00-00",
      check_out_date: "0000-00-00",
      room_image: "4.jpg",
      room_floor: "5",
      room_view: "Beach",
      room_beds: "2",
      bed_type: "Double deluxe",
      room_capacity: "4",
      room_amenities: "breakfast, lunch, dinner, wifi",
    },
    {
      room_id: "4",
      room_number: "303",
      room_name: "Premiun",
      room_type: "Premium",
      room_featured: "1",
      room_price: "674.000",
      room_booked: "1",
      check_in_date: "2020-12-23",
      check_out_date: "2021-01-28",
      room_image: "6.jpg",
      room_floor: "3",
      room_view: "Ocean",
      room_beds: "2",
      bed_type: "Queen Bed",
      room_capacity: "3",
      room_amenities: "Ocean View, Wifi, Double bathroom, hairdryer",
    },
    {
      room_id: "6",
      room_number: "202",
      room_name: "Ocean View Suite",
      room_type: "Silver",
      room_featured: "0",
      room_price: "200.000",
      room_booked: "1",
      check_in_date: "2020-12-23",
      check_out_date: "2020-12-17",
      room_image: "1.jpg",
      room_floor: "2",
      room_view: "Ocean",
      room_beds: "3",
      bed_type: "Single Bed",
      room_capacity: "7",
      room_amenities: "Ocean View, Wifi, Double bathroom",
    },
    {
      room_id: "7",
      room_number: "202",
      room_name: "Ocean View Suite",
      room_type: "Gold",
      room_featured: "1",
      room_price: "369.000",
      room_booked: "1",
      check_in_date: "2020-12-09",
      check_out_date: "2021-01-19",
      room_image: "7.jpg",
      room_floor: "2",
      room_view: "Ocean",
      room_beds: "3",
      bed_type: "Double Bed",
      room_capacity: "7",
      room_amenities: "Ocean View, Wifi, Double bathroom",
    },
    {
      room_id: "8",
      room_number: "202",
      room_name: "Ocean View Suite",
      room_type: "Silver",
      room_featured: "1",
      room_price: "788.000",
      room_booked: "0",
      check_in_date: null,
      check_out_date: null,
      room_image: "1.jpg",
      room_floor: "2",
      room_view: "Ocean",
      room_beds: "3",
      bed_type: "Delux Bed",
      room_capacity: "7",
      room_amenities: "Ocean View, Wifi, Double bathroom",
    },
    {
      room_id: "9",
      room_number: "202",
      room_name: "Beach View Suite",
      room_type: "Gold",
      room_featured: "0",
      room_price: "556.000",
      room_booked: "0",
      check_in_date: null,
      check_out_date: null,
      room_image: "1.jpg",
      room_floor: "3",
      room_view: "Beach",
      room_beds: "3",
      bed_type: "Queen Bed",
      room_capacity: "2",
      room_amenities: "Beach View, Wifi, Double bathroom",
    },
    {
      room_id: "10",
      room_number: "202",
      room_name: "Beach view",
      room_type: "premium",
      room_featured: "1",
      room_price: "1231.000",
      room_booked: "0",
      check_in_date: null,
      check_out_date: null,
      room_image: "7.jpg",
      room_floor: "2",
      room_view: "Ocean",
      room_beds: "3",
      bed_type: "Single Bed",
      room_capacity: "3",
      room_amenities: "Ocean View, Wifi, Double bathroom",
    },
  ];
  // Classify by types
  var dataList = {};
  rawData.forEach((room) => {
    var type = room["room_type"].capitalize();
    // console.log(type);
    if (dataList.hasOwnProperty(type)) {
      dataList[type]++;
      // console.log(dataList[type]);
    } else {
      dataList[type] = 1;
    }
  });

  data = [];
  labels = [];

  // dataList.sort();

  for (const [key, value] of Object.entries(dataList)) {
    labels.push(key);
    data.push(value);
  }

  console.log(labels);

  // data = {
  //     datasets: [{
  //         data: data,
  //         backgroundColor: ["#fd8c04","rgb(236, 88, 88)"],
  //     }],

  //     // These labels appear in the legend and in the tooltips when hovering different arcs
  //     // labels: labels
  // };

  var typeChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Type of Rooms",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
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
}
