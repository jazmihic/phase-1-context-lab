/* Your Code Here */
function createEmployeeRecord(employee) {
  let record = {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };

  return record;
}

function createEmployeeRecords(employeeList) {
  return employeeList.map(createEmployeeRecord);
}

function createTimeInEvent(date) {
  let timeInEvent = {
    type: "TimeIn",
    hour: Number(date.slice(-4)),
    date: date.slice(0, 10),
  };

  this.timeInEvents.push(timeInEvent);

  return this;
}

function createTimeOutEvent(date) {
  let timeOutEvent = {
    type: "TimeOut",
    hour: Number(date.slice(-4)),
    date: date.slice(0, 10),
  };

  this.timeOutEvents.push(timeOutEvent);

  return this;
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find((elm) => elm.date === date);
  let timeOut = this.timeOutEvents.find((elm) => elm.date === date);

  let hoursWorked = (timeOut.hour - timeIn.hour) / 100;

  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  return this.payPerHour * hoursWorkedOnDate.call(this, date);
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((e) => e.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((a, b) => allWagesFor.call(b) + a, 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
