const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
    labels: ["fastfood", "italian food"],
  },
  {
    customerName: "Richi",
    total: 60,
    delivered: true,
    labels: ["japanse food", "italian food"],
  },
  {
    customerName: "Roberto",
    total: 60,
    delivered: false,
    labels: ["fastfood", "mexican food"],
  },
  {
    customerName: "Karen",
    total: 60,
    delivered: false,
    labels: ["france food", "italian food"],
  },
  {
    customerName: "Alfredito",
    total: 60,
    delivered: true,
    labels: ["fastfood"],
  },
];

const countLabels = orders
  .flatMap((order) => order.labels)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    return obj;
  }, {});

//console.log(countLabels);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 2, 19),
      endDate: new Date(2021, 1, 2, 20, 30),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 19),
      endDate: new Date(2021, 1, 1, 19, 30),
      title: "Cita dentista",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2022, 1, 2, 19),
      endDate: new Date(2021, 1, 2, 20, 30),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2022, 1, 1, 19),
      endDate: new Date(2022, 1, 1, 19, 30),
      title: "Cita dentista",
    },
  ],
};

const startDates = Object.values(calendars).flatMap((dates) => {
   return dates.map((date) => {
     return date.startDate;
  });
});

console.log(startDates);
