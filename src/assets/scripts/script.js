// this is the typing effect javascript
const typing = ()=>{
    const text = document.querySelector(".text-second");

const textload = () => {
  setTimeout(() => {
    text.textContent = "Technical Events";
  }, 0);
  setTimeout(() => {
    text.textContent = "Cultural Events";
  }, 2000);
  setTimeout(() => {
    text.textContent = "Sports Events";
  }, 4000);
};
textload();
setInterval(textload, 6000);
}

var t1 = gsap.timeline();

t1.to(".circle",{
    delay : 2,
    translateX : "-50em",
    rotate : "360deg",
    duration : 0.7
})
t1.to(".sec",{
    opacity : 0,
    duration : 0
})
t1.to(".strip",{
    rotate : "360deg" ,
    translateX : "28em" ,
    translateY: "18px",
    border : "none",
    duration : 0.5
})





typing();