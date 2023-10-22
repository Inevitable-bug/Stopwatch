let start = document.querySelector('.start');
let reset = document.querySelector('.reset');
let time = document.querySelector('.time');
let minsec= 0;
let second = 0;
let minute = 0;
let hour = 0;
//leading zeros
leadingminsec=0;
leadingsec=0;
leadingmin=0;
leadinghour=0;

function fun() {
  minsec++;
  if (minsec===100){
    minsec=0
    second++;
  }
  if (second===60){
    second=0;
    minute++;
  }
  if (minute===60){
    minute=0;
    hour++;
  }
  if (minsec<10){
    leadingminsec="0"+minsec.toString()
  }else{
    leadingminsec=minsec;
  }
  if (second < 10) {
    leadingsec = "0" + second.toString()
  } else {
    leadingsec = second;
  }
  if (minute < 10) {
    leadingmin = "0" + minute.toString()
  } else {
    leadingmin = minute;
  }
  if (hour < 10) {
    leadinghour = "0" + hour.toString()
  } else {
    leadinghour = hour;
  }
  time.innerHTML=leadinghour+ ":" +leadingmin + ":"+leadingsec+ ":" + leadingminsec ;
};
timerstatus="stopped";
timerinterval=null;
  function seti(){
  if (timerstatus==="stopped"){
    timerinterval=window.setInterval(fun,10);
    timerstatus="started";
    start.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/></svg>'
  }
  else{
    window.clearInterval(timerinterval);
    timerstatus="stopped"
    start.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5.14v14l11-7l-11-7Z"/></svg>'
  }
  };
  reset.addEventListener('click', function(){
    window.clearInterval(timerinterval);
    minsec=0;
    second=0;
    minute=0;
    hour=0;
   time.innerHTML='00:00:00:00';
   timerstatus="stopped";
   start.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5.14v14l11-7l-11-7Z"/></svg>';
  });
  start.addEventListener('click',seti);