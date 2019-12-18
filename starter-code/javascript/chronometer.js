class Chronometer {
  constructor() {
    this.currentTime=0;
    
  }
   startClick() {
     var that=this;
     this.intervalId=setInterval(function(){
       that.currentTime += 1; 
     },1000);

   }
   getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
   }
   getSeconds() {
     var seconds= this.currentTime-this.getMinutes()*60;
     return seconds;
   }
   twoDigitsNumber(digit) {
    return (digit < 10 ? '0' : '') + digit;
   }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime=0;
  }
  // splitClick() {}
}
