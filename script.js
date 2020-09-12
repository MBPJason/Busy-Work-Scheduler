$(document).ready(function () {
  var calender = $(".container");
  var currentDay = $("#currentDay");

  var today = moment().format("MMMM, Do YYYY");
  currentDay.text(today);

  var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// Need to use work
  workHours.forEach(function (hours) {
      console.log(hours);
    var row = $("<div>");
    var hourBlock = $("<div>");
    var todoBlock = $("<textarea>");
    var saveBtn = $("<button>");
    var slotHour

 // Generating items "hard coded" 
    row.addClass("row");
//======= This needs to be ahead so hourBlock can read the value correctly=============
    if (hours <= 11) {
        slotHour = hours + "AM";
    } else if (hours == 12) {
        slotHour = hours + "PM";
    } else {
        slotHour = (hours - 12) + "PM";
    }
//=====================================================================================
    hourBlock.text(slotHour);
    hourBlock.addClass("col-2 time-block hour");
    todoBlock.text("Enter what you plan to do here");
    todoBlock.addClass("col-9 row text-column description");
    saveBtn.attr("type", "submit");
    saveBtn.attr("value", hours);
    saveBtn.addClass("saveBtn col-1");
//======== End of "hard coded" items ==================================================



//======== Start of Conditionals and Functions to be called on ========================
    if (hours < moment().hour()) {
        todoBlock.addClass("past");
    } else if (hours == moment().hour()) {
        todoBlock.addClass("present");
    } else {
        todoBlock.addClass("future");
    }



//======= Appending Items to the div with the container class =========================
    calender.append(row);
    row.append(hourBlock);
    row.append(todoBlock);
    row.append(saveBtn);


    
  });
});
