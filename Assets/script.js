var past = $(".past");
var present = $(".present");
var future = $(".future");
var description = $(".description");
var currentDay = $("#currentDay");
var saveButton = $(".saveBtn");

// code wrapped in Jquery function so the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  // Added listener for click events on the save button.
  function saveButtonClick(event) {
    var text = $(this).siblings(".description").val();
    var dataHour = $(this).parent().attr("id");
    var allHours = JSON.parse(localStorage.getItem("Hours")) || {};
    allHours[dataHour] = text;
    localStorage.setItem("Hours", JSON.stringify(allHours));
  }

  function onRefresh() {
    var allHours = JSON.parse(localStorage.getItem("Hours")) || {};
    for (i = 9; i <= 17; i++) {
      $("#hour-" + i)
        .children("textarea")
        .val(allHours["hour-" + i]);
    }
  }
  //Call functions
  onRefresh();
  saveButton.on("click", saveButtonClick);

  //Formatting classes for past present and future time-blocks
  function figureOutTime() {
    var currentTime = dayjs().format("H");
    console.log(currentTime);
    for (i = 9; i <= 17; i++) {
      if (i < currentTime) {
        $("#hour-" + i)
          .children()
          .addClass("past");
        //past
      }
      if (i == currentTime) {
        $("#hour-" + i)
          .children()
          .addClass("present");
        //present
      }
      if (i > currentTime) {
        $("#hour-" + i)
          .children()
          .addClass("future");
        //future
      }
    }
  }
  figureOutTime();

  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});
