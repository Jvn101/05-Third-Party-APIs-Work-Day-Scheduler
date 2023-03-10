
var past = $('.past');
var present = $('.present');
var future = $('.future');
var description = $('.description');
var currentDay = $('#currentDay');
var saveButton = $('.saveBtn');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  function saveButtonClick (event) {
  
  var text = $(this).siblings(".description").val();
 var dataHour = $(this).parent().attr("id");

  var allHours = JSON.parse(localStorage.getItem("Hours")) || {}
  allHours[dataHour] = text;
  localStorage.setItem("Hours", JSON.stringify(allHours));

  }
  
function onRefresh() {

  var allHours = JSON.parse(localStorage.getItem("Hours")) || {}
  for (i=9; i<=17; i++) {
  $("#hour-"+ i).children("textarea").val(allHours["hour-"+ i]);
  
}
}
onRefresh();
  saveButton.on("click",saveButtonClick);

function figureOutTime() {
var currentTime = dayjs().format('H')
console.log(currentTime);
for (i=9; i<=17; i++) {
  if (i<currentTime) {
    $("#hour-"+ i).children().addClass("past");
    //past
  }
  if (i==currentTime) {
    $("#hour-"+ i).children().addClass("present");
    //present
  }
  if (i>currentTime) {
    $("#hour-"+ i).children().addClass("future");
    //future
  }
}

}
figureOutTime();

$('#currentDay').text(dayjs().format('dddd, MMMM D'));
});




  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? 
  

//var rootEl = $('#root');


//var hourID = rootEL.children('div').children().eq(target.id);

//event.target

//hourID = 
  //How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id

  //if (id hour === today) {
   // section.style.backgroundColor = 'green';
    //OR idhour.addClass(present);

  //} else if (id hour> today) {
   // section.style.backgroundColor = 'grey';

  //} else (id hour < today) {
   // section.style.backgroundColor = 'red';
  //}


  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  //var saveEvent = function (event) {
   // event.preventDefault();
   // description = description.val();
   // localStorage.setItem("tasks", description);
   // localStorage.getItem("tasks");
    
    //console.log("localstorage")
  //}

  // TODO: Add code to display the current date in the header of the page.

