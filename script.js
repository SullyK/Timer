
let running = false;
let pause = false;
let startTime;
let updatedTime;
let difference;
let countdownTime = 310 + 1;
let interval;
let minutes =  Math.floor((countdownTime- 1) / 60);
let seconds = Math.floor((countdownTime- 1))- minutes * 60;
let saveSeconds;
let elapsedPauseTime = 0;
let pauseStart;
let pauseEnd;
let toggle = false;

document.getElementById("a").innerText = minutes.toString() + ":" + seconds.toString();


//TODO: FIX THE GLITCH WHEN PAUSING AND STARTING

function countdownStart(){
    if(running == false){
    startTime = new Date().getTime();
    running = true;
    pause = false;
    interval = setInterval(showTime, 1000);
    }
}

function resume(){
    if(running == false){
    startTime = new Date().getTime();
    running = true;
    interval = setInterval(showTime, 1000);
    }
}

function endShowTime(){
    clearInterval(interval);
}

function pauseTime(){

    if(running == true && pause == false){
        clearInterval(interval);
        running = false;
        pause = true;
        pauseStart = new Date().getTime();
    }
    else if(running == false && pause == true){
        
        running = true;
        pause = false;
        pauseEnd = new Date().getTime();
        elapsedPauseTime += ((pauseEnd - pauseStart )/ 1000)
        interval = setInterval(showTime, 1000);
    }

}

function showTime(){
    updatedTime = new Date().getTime();
    saveSeconds = ((updatedTime - startTime) / 1000);
    console.log("countdown Time= " + countdownTime);
    console.log("saveSeconds Time= " + saveSeconds);
    console.log("elapsedPauseTime Time= " + elapsedPauseTime);
    difference = (countdownTime - (saveSeconds - elapsedPauseTime));
    if(Number.isInteger(difference)){
        difference = difference - 0.001;
    }
    console.log("ShowTime:" + difference)

    minutes = Math.floor(difference / 60);
    seconds = (Math.floor(difference)- minutes * 60);
    // console.log(minutes.toString());
    // console.log(seconds.toString());
    if(seconds>9){
        document.getElementById("a").innerText =  minutes.toString() + ":" + seconds.toString();
    }
    else{
        document.getElementById("a").innerText =  minutes.toString() + ":0" + seconds.toString();
    }
    console.log(seconds)
    if(difference <= 1){
        document.getElementById("a").innerText = 0;
        document.getElementById("b").innerText = 0;
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


document.getElementById("startButton").addEventListener("click", countdownStart);
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



