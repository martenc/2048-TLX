
/* config */
// seconds to countdown from
var countdownSeconds = 120;


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

    function restartCounter() {
        seconds = countdownSeconds;
        onCounterStart();
        clearInterval(timer);
        timer = 0;
        decrementCounter();
        timer = setInterval(decrementCounter, 1000);
    };

    return {
        start : function() {
            startCounter();
        },
        stop : function() {
            stopCounter();
        },
        restart : function() {
            restartCounter();
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
    onUpdateStatus: function (second) {
        // change the UI that displays the seconds remaining in the timeout  
        //console.log('time remaining:' + second);
        $('#countdown-timer').text(second);
        if (second < 20) {
            $('#countdown-timer').css('color', 'red');
        }
        else {
            $('#countdown-timer').css('color', 'white');   
        }

        if (second < 1) {
            $.get('gameover.html', function(data){
                modal.open({content: data});

            });
            countdown.restart();
            countdown.stop();
        }
    },

    // callback function for final action after countdown
    onCounterEnd: function() {
        // show message that session is over, perhaps redirect or log out 
        console.log("time is up, game over!"); 
    }
});

//countdown.start();

