
/* config */
// seconds to countdown from
var countdownSeconds = 7;


// countdown
function Counter(options) {
    var timer;
    var instance = this;
    var seconds = options.seconds || 10;
    var onUpdateStatus = options.onUpdateStatus || function() {};
    var onCounterEnd = options.onCounterEnd || function() {};
    var onCounterStart = options.onCounterStart || function() {};

    

    function decrementCounter() {
        onUpdateStatus(seconds);
        if (seconds === 0) {
            stopCounter();
            onCounterEnd();
            return;
        }
        seconds--;
    };

    function startCounter() {
        onCounterStart();
        clearInterval(timer);
        timer = 0;
        decrementCounter();
        timer = setInterval(decrementCounter, 1000);
    };

    function stopCounter() {
        clearInterval(timer);
    };

    return {
        start : function() {
            startCounter();
        },
        stop : function() {
            stopCounter();
        }
    }
};


var countdown = new Counter({
    // number of seconds to count down
    seconds: countdownSeconds,

    onCounterStart: function () { 
        // show pop up with a message 
    },

    // callback function for each second
    onUpdateStatus: function(second) {
        // change the UI that displays the seconds remaining in the timeout  
        //console.log('time remaining:' + second);
        $('#countdown-timer').text(second);
        if (second < 20) {
            $('#countdown-timer').css('color', 'red');
        }

        if (second < 1) {
            modal.open({content: $("<p>Time is up!</p>"), width: "500px", height: "350px"});

            KeyboardInputManager.prototype.restart = function (event) {
                event.preventDefault();
                this.emit("restart");
            };
        }
    },

    // callback function for final action after countdown
    onCounterEnd: function() {
        // show message that session is over, perhaps redirect or log out 
        console.log("time is up, game over!"); 
    }
});

//countdown.start();

