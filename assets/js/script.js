
// Colorcoded Timeblocks
// past
// present
// future
// Enter an event
// save button saves to local storage
// saved events persist

// Moment displays date near top of page
var todayDate = moment().format('dddd, MMMM Do');
$("#currentDay").html(todayDate);

function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var timeNow = parseInt($(this).attr("id"));
        if (timeNow > hour) {
            $(this).addClass("future");
        } else if (timeNow === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
timeBlockColor();