
let running = false;
let pause = false;
let startTime;
let updatedTime;
let difference;
let countdownTime = 55 + 1;
let interval;
let minutes =  Math.floor((countdownTime- 1) / 60);
let seconds = Math.floor((countdownTime- 1))- minutes * 60;
let saveSeconds;
let elapsedPauseTime = 0;
let pauseStart;
let pauseEnd;
let toggle = false;
let previousDifference = 0;
let two;
let savedTime;
let newTime;
let lastTimer;

if(seconds>9){
    document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
}
else{
    document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
}


//TODO: Countdown goes two seconds down- rounding - when paused
//TODO: Fix the audio issue.

function countdownStart(){
    
    if(running == false && pause == false){
    startTime = dayjs()
    running = true;
    pause = false;
    interval = setInterval(showTime, 1000); // every second
    // tahir
    // setInterval(showTime2, 100);
    }
}

function resume(){
    let savedTime =  (two.diff(startTime,"seconds"));
    
    if(running == false){
    startTime = (two.diff(startTime,"seconds"));
    running = true;
    interval = setInterval(showTime, 1000);
    }
}

function endShowTime(){
    clearInterval(interval);
    running = false;
    pause = false;
    minutes =  Math.floor((countdownTime- 1) / 60);
    seconds = Math.floor((countdownTime- 1))- minutes * 60;

    console.log("mins " + minutes);
    console.log("secs " + seconds);

    if(seconds>9){
        document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
    }
    else{
        document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
    }


}

function pauseTime(){

    if(running == true && pause == false){
        
        savedTime = (two.diff(startTime,"seconds"));
        console.log("saved time" + savedTime);
    
        clearInterval(interval);
        running = false;
        pause = true;
    }
    else if(running == false && pause == true){
        
        running = true;
        pause = false;
        newTime = dayjs();
        interval = setInterval(resumeTimer, 10);
    }

}


function resumeTimer(){
    two = dayjs();
    lastTimer = dayjs();
    difference = countdownTime - savedTime -  (lastTimer.diff(newTime,"seconds"))
    console.log("difference : " + difference)
    

    if(seconds>9){
        document.getElementById("a").innerText =  minutes.toString() + ":" + difference.toString();
    }
    else{
        document.getElementById("a").innerText =  minutes.toString() + ":0" + difference.toString();
    }
    if(difference <= 1){
        document.getElementById("a").innerText = 0;
        endShowTime();
    }
}



function showTime(){
    two = dayjs();
    difference = countdownTime - (two.diff(startTime,"seconds"))
    console.log(difference);
    

    if(seconds>9){
        document.getElementById("a").innerText =  minutes.toString() + ":" + difference.toString();
    }
    else{
        document.getElementById("a").innerText =  minutes.toString() + ":0" + difference.toString();
    }
    if(difference <= 1){
        document.getElementById("a").innerText = 0;
        endShowTime();
    }
}

let changeButtonText = () =>{
    let text = document.getElementById("pauseButton");
    if(toggle == false && running == true){
    text.innerText = "Resume";
    toggle = true;
    }
    else if(toggle == true){
        text.innerText = "Pause";
        toggle = false;
    }
}

// const audio = new Audio("mixkit-happy-bells-notification-937.wav");

// function playAudio(){
//   audio.play().then(() => { 
//     audio.pause();
//   });
//   checkEnded();
// };


// function checkEnded() {
//     if(difference <= 1){
//         return onend();
//     }
//     setTimeout(checkEnded, 1000);
//   }
  
  
//   function onend() {
//     setTimeout(function () {  
//         audio.load();    
//    audio.play();
// }, 150);
    

//     // startButton.disabled = false;
//   }


document.getElementById("startButton").addEventListener("click", countdownStart);
// document.getElementById("startButton").addEventListener("click", playAudio);

document.getElementById("pauseButton").addEventListener("click", changeButtonText);
document.getElementById("pauseButton").addEventListener("click", pauseTime);



// var bar = new ProgressBar.Line(container, {
//     strokeWidth: 2,
//     easing: 'easeOut',
//     duration: 0,
//     color: 'orange',
//     trailColor: '#eee',
//     trailWidth: 1,
//     svgStyle: {width: '100%', height: '100%'}
//   });
  
//   bar.animate(1);  // Number from 0.0 to 1.0



