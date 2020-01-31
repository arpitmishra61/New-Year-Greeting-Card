let newYearContent=document.querySelector(".newYear");
let newYear=new Date().getFullYear()+1
const currentYear=new Date().getFullYear();
const newYearDate=new Date("01-01-"+newYear)

let countDownContents=document.querySelector(".countDownBanner").querySelectorAll("h2");


newYearContent.innerHTML=currentYear + 1;

setInterval(()=>{
let currentDate= new Date();   

    let countdown={
    days:Math.floor((newYearDate-currentDate)/8.64e7),
   
    hrs:24-currentDate.getHours(),
    mins:60-currentDate.getMinutes(),
    secs:60-currentDate.getSeconds()
    
}



countDownContents.forEach((countDownContent,index)=>{
   
    countDownContent.innerHTML=Object.values(countdown)[index]})
    

},
    1000)


let music=document.querySelector("#myAudio");
music.play()
music.volume=0.02