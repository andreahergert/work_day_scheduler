
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

// Tracks time from moment making the display description background change color based on time
    function timeTracker() {
        //get current number of hours.
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("time-block").split("hour")[1]);

            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }