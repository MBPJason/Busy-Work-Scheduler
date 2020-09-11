$(document).ready(function () {
  var calender = $(".container");
  var currentDay = $("#currentDay");

  var today = moment().format("MMMM, Do YYYY");
  currentDay.text(today);

  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // Need to use work
  workHours.forEach(function (workHours) {
    var row = $("<div>");
    var hourBlock = $("<div>");
    var todoBlock = $("<textarea>");
    var saveBtn = $("<button>");
    var slotHour = "";

    row.addClass("row");
    hourBlock.text("9PM");
    hourBlock.addClass("col-2 time-block hour");
    todoBlock.text("Enter what you plan to do here");
    todoBlock.addClass("col-9 row text-column description");
    saveBtn.attr("type", "submit");
    saveBtn.attr("value", workHours);
    saveBtn.addClass("saveBtn col-1");

    calender.append(row);
    row.append(hourBlock);
    row.append(todoBlock);
    row.append(saveBtn);
  });
});
