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
    seconds: 5,

    onCounterStart: function () { 
        // show pop up with a message 
    },

    // callback function for each second
    onUpdateStatus: function(second) {
        // change the UI that displays the seconds remaining in the timeout  
    },

    // callback function for final action after countdown
    onCounterEnd: function() {
        // show message that session is over, perhaps redirect or log out 
        alert("time is up, game over!"); 
    }
});
countdown.start();
