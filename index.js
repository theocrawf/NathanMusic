// mp3 player section
// coversong play and pause
// const homePlay = document.querySelector('#homePlay');
// const homePause = document.querySelector('#homePause');
// const audioHome = document.querySelector('#audioHome');
// wont get done song play and pause
// const wontPlay = document.querySelector('#wontPlay');
// const wontPause = document.querySelector('#wontPause');
// const audioWont = document.querySelector('#audioWont');
// Hawaii song play and pause
// const hawaiiPlay = document.querySelector('#hawaiiPlay');
// const hawaiiPause = document.querySelector('#hawaiiPause');
// const audioHawaii = document.querySelector('#audioHawaii');

// removing the pause buttons for all songs
// const removePause = homePause.style.display = "none";
// const removeWontPause = wontPause.style.display = "none";
// const removeHawaiiPause = hawaiiPause.style.display = "none";
//progress bar for coversong
// const progress = document.querySelector('.progress');
// const mobileProgress = document.querySelector('.mobilepro');
//progress bar for wont get done song
// const progressWont = document.querySelector('.progressWont');
// const mobileProgressWont = document.querySelector('.mobileProgressWont');
// progress bar for hawaii song
// const progressHawaii = document.querySelector('.progressHawaii');
// const mobileProgressHawaii = document.querySelector('.mobileProgressHawaii');

// Progress bar showing duration of song
// function updateProgress(e) {
//   const {duration, currentTime} = event.target;
//   const progressPercent = (currentTime / duration) * 100;
//   progress.style.width = `${progressPercent}%`;
//   progress.style.backgroundColor = "#952525";
// }
// function updateProgressWont(e) {
//   const {duration, currentTime} = event.target;
//   const progressPercent = (currentTime / duration) * 100;
//   progressWont.style.width = `${progressPercent}%`;
//   progressWont.style.backgroundColor = "#952525";
// }
// function updateProgressHawaii(e) {
//   const {duration, currentTime} = event.target;
//   const progressPercent = (currentTime / duration) * 100;
//   progressHawaii.style.width = `${progressPercent}%`;
//   progressHawaii.style.backgroundColor = "#952525";
// }
// to click on the progress bar and move the song
// function setProgress(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audioHome.duration;

//   audioHome.currentTime = (clickX / width) * duration;
// }
// function setProgressWont(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audioWont.duration;

//   audioWont.currentTime = (clickX / width) * duration;
// }
// function setProgressHawaii(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audioHawaii.duration;

//   audioHawaii.currentTime = (clickX / width) * duration;
// }


// home play and pause function
// function play(){
//   if(audioHome.paused){
//     audioHome.play();
//     homePlay.style.display = "none";
//     homePause.style.display = "block";
//     audioWont.pause();
//     audioWont.currentTime = 0;
//     wontPause.style.display = "none";
//     wontPlay.style.display = "block";
//     audioHawaii.pause();
//     audioHawaii.currentTime = 0;
//     hawaiiPause.style.display = "none";
//     hawaiiPlay.style.display = "block";
//   } else{
//     audioHome.pause();
//     homePlay.style.display = "block";
//     homePause.style.display = "none";
//   }
// }
// wont get done play
// function playWont(){
//   if(audioWont.paused){
//     audioWont.play();
//     wontPlay.style.display = "none";
//     wontPause.style.display = "block";
//     audioHome.pause();
//     audioHome.currentTime = 0;
//     homePause.style.display = "none";
//     homePlay.style.display = "block";
//     audioHawaii.pause();
//     audioHawaii.currentTime = 0;
//     hawaiiPause.style.display = "none";
//     hawaiiPlay.style.display = "block";
//   } else{
//     audioWont.pause();
//     wontPlay.style.display = "block";
//     wontPause.style.display = "none";
//   }
// }
// hawaii play
// function playHawaii(){
//   if(audioHawaii.paused){
//     audioHawaii.play();
//     hawaiiPlay.style.display = "none";
//     hawaiiPause.style.display = "block";
//     audioWont.pause();
//     audioWont.currentTime = 0;
//     wontPause.style.display = "none";
//     wontPlay.style.display = "block";
//     audioHome.pause();
//     audioHome.currentTime = 0;
//     homePause.style.display = "none";
//     homePlay.style.display = "block";
//   } else{
//     audioHawaii.pause();
//     hawaiiPlay.style.display = "block";
//     hawaiiPause.style.display = "none";
//   }
// }
// will go back to beginning and ready to play again
// function startOver () {
//   if (audioHome.currentTime === audioHome.duration){
//     audioHome.currentTime = 0;
//     homePlay.style.display = "block";
//     homePause.style.display = "none";
//   } else{
//   }
// }
// function startOverWont () {
//   if (audioWont.currentTime === audioWont.duration){
//     audioWont.currentTime = 0;
//     wontPlay.style.display = "block";
//     wontPause.style.display = "none";
//   } else{
//   }
// }
// function startOverHawaii () {
//   if (audioHawaii.currentTime === audioHawaii.duration){
//     audioHawaii.currentTime = 0;
//     hawaiiPlay.style.display = "block";
//     hawaiiPause.style.display = "none";
//   } else{
//   }
// }



// audioHome.addEventListener('timeupdate', updateProgress);
// audioWont.addEventListener('timeupdate', updateProgressWont);
// audioHawaii.addEventListener('timeupdate', updateProgressHawaii);
// Click on progress bar
// mobileProgress.addEventListener('click', setProgress);
// mobileProgressWont.addEventListener('click', setProgressWont);
// mobileProgressHawaii.addEventListener('click', setProgressHawaii);
// starting over the song
// audioHome.addEventListener('timeupdate', startOver);
// audioWont.addEventListener('timeupdate', startOverWont);
// audioHawaii.addEventListener('timeupdate', startOverHawaii);

//different approach to probelm
const music = ['home', 'wont', 'hawaii'];
const homeMusic = music[0];

const homeSounds = () => {
  const homeBtn = document.createElement('button');
  homeBtn.classList.add('btn');
  homeBtn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })
  document.getElementById('homeButtons').appendChild(btn)
}


music.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })
  document.getElementById('buttons').appendChild(btn)
})

const stopSongs = () => {
  music.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
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