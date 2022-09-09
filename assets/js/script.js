// javascript goes here
// Need current day to display at top of calendar
// Colorcoded Timeblocks
    // past
    // present
    // future
// Enter an event
// save button saves to local storage
// saved events persist

var todayDate = moment().format('dddd, MMMM Do');
$("#currentDay").html(todayDate);