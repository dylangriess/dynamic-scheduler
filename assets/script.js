//Display current date in Jumbotron
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);

//format hour "H" to identify past, present, future hour block
var hourBlock = $(".hour");
// console.log(hourBlock);

var timeNow = parseInt(moment().format("HH"));
// console.log(timeNow);

//define each hour as past, present, future --> add class
$.each(hourBlock, function (i, hour) {
  var hourId = parseInt($(this).attr("id"));
  //   console.log(i, hour);
  //   console.log(hourId);
  if (hourId === timeNow) {
    $(this).next().addClass("present");
  } else if (hourId < timeNow) {
    $(this).next().addClass("past");
  } else if (hourId > timeNow) {
    $(this).next().addClass("future");
  }
});

//store data into localStorage
var calEntry = $(".description");
var saveBtn = $(".saveBtn");

function handleCalendar() {
  var hourData = [
    localStorage.getItem("8amSave"),
    localStorage.getItem("9amSave"),
    localStorage.getItem("10amSave"),
    localStorage.getItem("11amSave"),
    localStorage.getItem("12pmSave"),
    localStorage.getItem("1pmSave"),
    localStorage.getItem("2pmSave"),
    localStorage.getItem("3pmSave"),
    localStorage.getItem("4pmSave"),
    localStorage.getItem("5pmSave"),
  ];
  console.log(hourData);

  for (var i = 0; i < hourData.length; i++) {
    if (hourData[i] !== null) {
      calEntry[i].value = hourData[i];
    }
  }
}
handleCalendar();

//add event handler to save button, push data to localStorage
saveBtn.on("click", function (event) {
  event.preventDefault();
  console.log("Save button clicked!");
  var btnClick = event.target;
  var entryInput = btnClick.parentElement.previousElementSibling.children[0];
  console.log(entryInput);
  return localStorage.setItem(btnClick.id, entryInput.value);
});
