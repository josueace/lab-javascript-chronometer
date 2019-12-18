var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
   setInterval(function(){
printMinutes();
printSeconds();
   },1000)
}

function printMinutes() {
    var time=document.getElementsByClassName('number');
    
    var minutes=chronometer.getMinutes();
    var twoDigitMin=chronometer.twoDigitsNumber(minutes);

    time[0].innerHTML=twoDigitMin[0];
    time[1].innerHTML=twoDigitMin[1];
}

function printSeconds() {
    var time=document.getElementsByClassName('number');
    var seconds=chronometer.getSeconds();
   
    var twoDigitSec=chronometer.twoDigitsNumber(seconds);

    time[2].innerHTML=twoDigitSec[0];
    time[3].innerHTML=twoDigitSec[1];
}

function printMilliseconds() {

}

function printSplit() {
var list=document.getElementById('splits');

var liTag=document.createElement('li');
var minText=document.createTextNode(`${chronometer.twoDigitsNumber(chronometer.getMinutes())}`);
var colon=document.createTextNode(':');
var secText=document.createTextNode(`${chronometer.twoDigitsNumber(chronometer.getSeconds())}`);

liTag.appendChild(minText);
liTag.appendChild(colon);
liTag.appendChild(secText);

list.appendChild(liTag);
}

function clearSplits() {
    var list=document.getElementById('splits');
    list.innerHTML="";
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {
    chronometer.resetClick();
    clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
      
    if(chronometer.intervalId ==null){
    e.currentTarget.innerHTML="STOP";
    e.currentTarget.setAttribute("class","btn stop");
    e.currentTarget.nextElementSibling.innerHTML="SPLIT";
    e.currentTarget.nextElementSibling.setAttribute("class","btn split")
    chronometer.startClick();
    printTime();
}
     else{
        e.currentTarget.innerHTML="START";
        e.currentTarget.setAttribute("class","btn start");
        e.currentTarget.nextElementSibling.innerHTML="RESET";
        e.currentTarget.nextElementSibling.setAttribute("class","btn reset")
        chronometer.stopClick();
        chronometer.intervalId=null;
        
    } 
});

// Reset/Split Button
btnRight.addEventListener('click', function (e) {
    if(chronometer.intervalId !==null){
        printSplit();
    }else{
        setResetBtn();
    }

});
