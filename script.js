
function playSound(event){
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
}
function removeClass(event){
    event.target.classList.remove("playing");}

const keys = document.querySelectorAll(".key");
keys.forEach((key)=> {
    key.addEventListener("transitionend", removeClass)
    
});

console.log(keys)
window.addEventListener("keydown", playSound);