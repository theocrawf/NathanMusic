// mp3 player section
// coversong play and pause
const homePlay = document.querySelector('#homePlay');
const homePause = document.querySelector('#homePause');
const audioHome = document.querySelector('#audioHome');
// wont get done song play and pause
const wontPlay = document.querySelector('#wontPlay');
const wontPause = document.querySelector('#wontPause');
const audioWont = document.querySelector('#audioWont');
// Hawaii song play and pause
const hawaiiPlay = document.querySelector('#hawaiiPlay');
const hawaiiPause = document.querySelector('#hawaiiPause');
const audioHawaii = document.querySelector('#audioHawaii');

// removing the pause buttons for all songs
const removePause = homePause.style.display = "none";
const removeWontPause = wontPause.style.display = "none";
const removeHawaiiPause = hawaiiPause.style.display = "none";


// home play and pause function
function play(){
  const audio = document.getElementById('audioHome');
  if(audio.paused){
    audio.play();
    homePlay.style.display = "none";
    homePause.style.display = "block";
  } else{
    audio.pause();
    homePlay.style.display = "block";
    homePause.style.display = "none";
  }
}
// wont get done play
function playWont(){
  const audio = document.getElementById('audioWont');
  if(audio.paused){
    audio.play();
    wontPlay.style.display = "none";
    wontPause.style.display = "block";
  } else{
    audio.pause();
    wontPlay.style.display = "block";
    wontPause.style.display = "none";
  }
}
// hawaii play
function playHawaii(){
  const audio = document.getElementById('audioHawaii');
  if(audio.paused){
    audio.play();
    hawaiiPlay.style.display = "none";
    hawaiiPause.style.display = "block";
  } else{
    audio.pause();
    hawaiiPlay.style.display = "block";
    hawaiiPause.style.display = "none";
  }
}



// gallery section
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});