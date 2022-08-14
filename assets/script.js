//Display current date in Jumbotron
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);

//format hour "H" to identify past, present, future hour block
var hourBlock = $(".hour");
// console.log(hourBlock);
var timeNow = parseInt(moment().format("H"));
// console.log(timeNow);

//define each hour as past, present, future --> add class
$.each(hourBlock, function (i, hour) {
  var hourId = parseInt($(this).attr("id"));
  console.log(i, hour);
  console.log(hourId);
  if (hourId === timeNow) {
    $(this).next().addClass("present");
  } else if (hourId < timeNow) {
    $(this).next().addClass("past");
  } else if (hourId > timeNow) {
    $(this).next().addClass("future");
  }
});
