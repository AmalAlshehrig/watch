let button1=document.getElementById("button1")
let button2=document.getElementById("button2")
let button3=document.getElementById("button3")
let button4=document.getElementById("button4")
let button5=document.getElementById("button5")
let changeImg=document.getElementById("change-img")

button1.addEventListener("click" , function fun1(){
    changeImg.style.backgroundImage = `url(PTgQlim.png)`;
})
button2.addEventListener("click" , function fun1(){
    changeImg.style.backgroundImage = `url(black.png)`;
})
button3.addEventListener("click" , function fun1(){
    changeImg.style.backgroundImage = `url(babypink.png)`;
})
button4.addEventListener("click" , function fun1(){
    changeImg.style.backgroundImage = `url(pink.png)`;
})
button5.addEventListener("click" , function fun1(){
    changeImg.style.backgroundImage = `url(pruple.png)`;
})

var datetime = new Date().toLocaleTimeString();
console.log(datetime); 
document.getElementById('time').textContent = datetime; 