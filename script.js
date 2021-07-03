//TODO: Countdown goes two seconds down- rounding - when paused
//TODO: Fix the audio issue.

let running = false;
let pause = false;
let startTime, difference;
let workTime = 10;
let breakTime = 5;
let time = 0;
let interval;
let minutes =  Math.floor((workTime- 1) / 60);
let seconds = Math.floor((workTime))- minutes * 60;
let toggle = false;
let two, savedTime, newTime, lastTimer;
let studyMode = true; // Study mode = true, break mode = false;
let str = 0;
let s = 0;
let s2 = 0;




if(seconds>9){
    document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
}
else{
    document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
}

console.log(seconds.toString());



function countdownStart(){

    if(s != 0){
        workTime = s;
    }

    if(s2 != 0){
        breakTime = s2;
    }
    
    if(seconds>9){
        document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
    }
    else{
        document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
    }
    if(running == false && pause == false){
    startTime = dayjs()
    running = true;
    pause = false;
    interval = setInterval(showTime, 60); // every second
    // setInterval(showTime2, 100);
    }
}

// function resume(){
//      savedTime =  (two.diff(startTime,"seconds"));
    
//     if(running == false){
//     startTime = (two.diff(startTime,"seconds"));
//     running = true;
//     interval = setInterval(showTime, 10);
//     }
// }

function endShowTime(){
    clearInterval(interval);
    running = false;
    pause = false;
    if(studyMode == true){
        minutes = Math.floor(breakTime % 3600 / 60);
        seconds =  Math.floor(breakTime % 3600 % 60);
    }

    if(studyMode == false){
        minutes = Math.floor(workTime % 3600 / 60);
        seconds =  Math.floor(workTime % 3600 % 60);
    }
   

    console.log("mins " + minutes);
    console.log("secs " + seconds);

    if(studyMode == true){
        studyMode = false; // turn on break mode
        if(seconds>9){
            document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
            document.body.style.backgroundColor = "#92D293";

        }
        else{
            document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
            document.body.style.backgroundColor = "#92D293";

        }
    }
    else if(studyMode == false){
        studyMode = true; // turn on study Mode
        if(seconds>9){
            document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
            document.body.style.backgroundColor = "#ef594a";

        }
        else{
            document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
            document.body.style.backgroundColor = "#ef594a";

        }
    }

}

// function pauseTime(){

//     if(running == true && pause == false){
        
//         savedTime = (two.diff(startTime,"seconds"));
//         console.log("saved time" + savedTime);
    
//         clearInterval(interval);
//         running = false;
//         pause = true;
//     }
//     else if(running == false && pause == true){
        
//         running = true;
//         pause = false;
//         newTime = dayjs();
//         interval = setInterval(resumeTimer, 60);
//     }

// }


// function resumeTimer(){
//     two = dayjs();
//     lastTimer = dayjs();
//     difference = countdownTime - savedTime -  (lastTimer.diff(newTime,"seconds"))
//     console.log("difference : " + difference)
    

//     if(seconds>9){
//         document.getElementById("a").innerText =  minutes.toString() + ":" + difference.toString();
//     }
//     else{
//         document.getElementById("a").innerText =  minutes.toString() + ":0" + difference.toString();
//     }
//     if(difference <= 0){
//         document.getElementById("a").innerText = 0;
//         endShowTime();
//     }
// }



function showTime(){
    two = dayjs();

    if(studyMode == false){
    time = breakTime;
    }
    else if(studyMode == true){
    time = workTime;
    }

    difference = time - (two.diff(startTime,"seconds"));
   

    console.log("difference: " + difference);
    console.log(time);
    minutes = Math.floor(difference % 3600 / 60);
    seconds =  Math.floor(difference % 3600 % 60);
    // console.log("minutes  =" + Math.floor(difference % 3600 / 60));
    // console.log("seconds =" +  Math.floor(difference % 3600 % 60));


    if(seconds>9){
        document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
    }
    else{
        console.log("triggered;")
        document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
    }

    if(difference <= 0){
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
function changeStudyTimer() {
    str = prompt("Enter your time"); 
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    console.log(s);

    workTime = s;

    minutes = Math.floor(workTime % 3600 / 60);
    seconds =  Math.floor(workTime % 3600 % 60);

    
    if(seconds>9){
        document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
    }
    else{
        document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
    }

}

function changeBreakTimer() {
    str = prompt("Enter your time"); 
    var p = str.split(':'), m = 1;
    s2 = 0;
    while (p.length > 0) {
        s2 += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    console.log(s2);

    breakTime = s2;

    minutes = Math.floor(breakTime % 3600 / 60);
    seconds =  Math.floor(breakTime % 3600 % 60);

    
    
    if(seconds>9){
        document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
    }
    else{
        document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
    }

}

// let changeStudyTimer = () =>{
//     let input = prompt("Enter your time in minutes(30)");
//     let conversion = Math.floor(parseInt(input) % 3600 % 60);
//     console.log("conversion: " + conversion);
//     workTime = conversion;
// }

document.getElementById("startButton").addEventListener("click", countdownStart);
document.getElementById("studyButton").addEventListener("click", changeStudyTimer);
document.getElementById("breakButton").addEventListener("click", changeBreakTimer);

// document.getElementById("startButton").addEventListener("click", playAudio);

// document.getElementById("pauseButton").addEventListener("click", changeButtonText);
// document.getElementById("pauseButton").addEventListener("click", pauseTime);




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



