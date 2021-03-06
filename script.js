$(document).ready(function () {
  var calender = $(".container");
  var currentDay = $("#currentDay");

  var today = moment().format("MMMM, Do YYYY");
  currentDay.text(today);

  var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
  var sessionStorage = JSON.parse(localStorage.getItem("workTODO")) || [];

  // Needed to use work. Loop through an
  workHours.forEach(function (hours) {
    console.log(hours);
    var row = $("<div>");
    var hourBlock = $("<div>");
    var todoBlock = $("<textarea>");
    var saveBtn = $("<button>");
    var saveIcon = $("<span>");
    var slotHour;

    // Generating items "hard coded"
    row.addClass("row");
    //======= This needs to be ahead so hourBlock can read the value correctly=============
    if (hours <= 11) {
      slotHour = hours + "AM";
    } else if (hours == 12) {
      slotHour = hours + "PM";
    } else {
      slotHour = hours - 12 + "PM";
    }
    //=====================================================================================
    hourBlock.text(slotHour);
    hourBlock.addClass("col-2 time-block hour");
    todoBlock.attr("placeholder", "Enter what you plan to do here");
    todoBlock.addClass("col-9 row text-column description");
    saveBtn.attr("type", "submit");
    saveBtn.attr("value", hours);
    saveBtn.addClass("saveBtn col-1");
    saveIcon.addClass("fas fa-save");
    //======== End of "hard coded" items ==================================================

    //======== Start of Conditionals and Functions to be called on ========================

    // Sets the class
    if (hours < moment().hour()) {
      todoBlock.addClass("past");
    } else if (hours == moment().hour()) {
      todoBlock.addClass("present");
    } else {
      todoBlock.addClass("future");
    }

    // Setting variables to call into the function below
    var sessionStorageCheck = sessionStorage.filter(
      (todo) => todo.time === slotHour
    );
    if (sessionStorageCheck.length > 0) {
        todoBlock.val(sessionStorageCheck[0].task);
    }

    // Takes data and pushes it into sessionStorage and localStorage
    saveBtn.on("click", function () {
      var getTODO = {
        time: $(this).siblings("div").text(),
        todo: $(this).siblings("textarea").val(),
      };
      console.log(getTODO);
      if (se)
      sessionStorage.push(getTODO);
      localStorage.setItem("workTODO", JSON.stringify(sessionStorage));
    });

    //======= Appending Items to the div with the container class =========================
    calender.append(row);
    row.append(hourBlock);
    row.append(todoBlock);
    row.append(saveBtn);
    saveBtn.append(saveIcon);
  });
});
