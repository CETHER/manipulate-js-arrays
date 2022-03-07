const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");
/* const numbers = [1, 2, 3, 4];

const isPair = numbers.some((element) => element % 2 === 0);
console.log(isPair);
 */
const dates = [
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
];

const newAppointment = {
  startDate: new Date(2021, 1, 3, 19),
  endDate: new Date(2021, 1, 3, 20, 30),
  title: "Cita negocios",
};

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      {
        start: date.startDate,
        end: date.endDate,
      },
      {
        start: newDate.startDate,
        end: newDate.endDate,
      }
    );
  });
};

if (!isOverlap(newAppointment)) {
  dates.push(newAppointment);
  console.log("The current date has been added in your calendar");
  console.log(dates);
} else {
  console.log("The current date is overlapping");
}
