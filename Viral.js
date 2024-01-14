//                         INITIALING VALUE OF ALL ELEMENT

let audioElement = new Audio('./music/music2.mp3');
const progressBar = document.querySelector('#progressBar');
const play_pause = document.querySelectorAll('.playPause');
let input = document.getElementsByTagName('input')[0];
let playback = document.querySelector('.played');
let duration = document.querySelector('.duration');
const bar = document.querySelector('.bar-progress');
let fullDuration;
let currentTime;
let progress = null;
let list = false;
let root = './Music';
const allMusics = document.querySelector('.items');
let newaudio = new Audio();
//                                  SONGS OBJECT

let editAudio = [
  {
    title: 'Hati - Hati Di Jalan',
    url: `${root}/TULUS - Hati-Hati di Jalan.mp3`,
    singer: 'Tulus',
    type: 'Pop',
    cover: 'UT6.jpg'
  }, {
    title: 'Your Heroes Are Bullshit',
    url: `${root}/RedHook_-_Your_Heroes_Are_Bullshit.mp3`,
    singer: `RedHook`,
    cover: 'IMG_20240113_233250_085.jpg',
    type: `Alternative-Indie`
  }, {
    title: 'Kita Kesana',
    url: `${root}/Hindia_-_Kita_ke_Sana__Official_Lyric_Video_(128k).mp3`,
    singer: `Hindia`,
    type: 'Alternative-Indie',
    cover: 'UT5.jpg'
  },
  {
    title: 'Nabi Palsu',
    url: `${root}/Hindia_-_Nabi_Palsu__Official_Lyric_Video_(128k).mp3`,
    singer: 'Hindia',
    type: 'Pop',
    cover: 'UT5.jpg'
  },
  {
    title: 'cincin',
    url: `${root}/Hindia_-_Cincin__Official_Lyric_Video_(128k).mp3`,
    singer: `Hindia`,
    cover: 'UT5.jpg',
    type: `Alternative-Indie`
  }
];

// Assuming audioElement is declared as: let audioElement = new Audio();

editAudio.forEach(function (elem, index) {
  // Create a new Audio element for each iteration
  let newaudio = new Audio(elem.url);

  // Add an event listener to the new Audio element
  newaudio.addEventListener('loadedmetadata', function (e) {
    // This event listener will be executed for each new audio element
    list = true;

    allMusics.innerHTML += `
      <li class="item">
        <img src=${elem.cover} alt="cover" />
        <h1 class="title">${elem.title}</h1>
        <p class="company">${elem.singer}</p>
        <p class="helo">
          <span class="duration">${intialTime(newaudio)}</span>
          <i class="fa-solid fa-play playPause event" id=${index} title="play" style="margin-left: 12px; outline: 1px solid rgb(250, 247, 247); border-radius: 50%; outline-offset: 5px; padding: 0px 3px;"></i>
        </p>
      </li>
    `;

    const events = document.querySelectorAll('.event');
    events.forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        console.log(editAudio[elem.id]);
        audioElement.src = editAudio[elem.id].url;
        input.value = 0;
        document.getElementById('thumnail').src = editAudio[elem.id].cover;
        playPause();
      });
    });
  });

  // Set the src after adding the event listener
  newaudio.src = elem.url;
});


//                          JALDI WAHA SE HATO
function playPause() {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    console.log('clicked on play');
    play_pause.forEach(function (elem) {
      console.log(play_pause);
      elem.classList.replace('fa-play', 'fa-pause');
      elem.title = 'pause';
    });

  } else {
    audioElement.pause();
    console.log('clicked on pause')
    play_pause.forEach(function (elem) {

      elem.classList.replace('fa-pause', 'fa-play');
      elem.title = 'play';
    });
  };
}

function intialTime(target) {
  console.log(target.duration);
  let durMin = Math.floor(target.duration / 60);
  durMin = durMin > 9 ? durMin : `0${durMin}`;

  let durSec = Math.floor(target.duration % 60);

  durSec = durSec > 9 ? durSec : `0${durSec}`;

  fullDuration = `${durMin}:${durSec}`;
  if (list) {

    // target.textContent = `${fullDuration}`;
    return fullDuration;
  } else {

    target.textContent = `00:00/${fullDuration}`;
  }
}

!function () {

  //            LOADED META DATA EVENT - DURATION SET TO MUSICS
  audioElement.addEventListener('loadeddata', function (e) {
    intialTime(playback);
    listDuration(duration);
  });

  //                   PLAY PAUSE STATE CHANGE WITH  

  play_pause.forEach(function (elem) {
    elem.addEventListener('click', playPause);
  });

  //                   PLAY PAUSE FUNCTION


  //                    AUDIO TIME CHANGE EVENT LISTENER

  audioElement.addEventListener('timeupdate', function () {

    //     UPDATING PROGRESS BAR/SEEK BAR
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
    bar.style.width = `${progress}%`;

    //            PLAY BACK DURATION UPDATING
    playBackUpdate();
    //   console.log(audioElement.duration - audioElement.currentTime);

    // duration.textContent = durationLeft(audioElement);
  });

  //                     MANUAL SONG'S TIME CHANGE WITH SEEK BAR

  progressBar.addEventListener('change', function (x) {
    audioElement.currentTime = ((progressBar.value / 100) * audioElement.duration);
    audioElement.play();
    console.log(x);
  });

  //                        WHEN AUDIO FINISHED PLAYING

  audioElement.onended = function () {
    console.log('Song Ended');
  }



  function playBackUpdate() {
    let minute = Math.floor(audioElement.currentTime / 60);

    minute = minute > 9 ? minute : `0${minute}`;

    let second = Math.floor(audioElement.currentTime % 60);
    second = second > 9 ? second : `0${second}`;

    let durMin = Math.floor(audioElement.duration / 60);
    durMin = durMin > 9 ? durMin : `0${durMin}`;

    let durSec = Math.floor(audioElement.duration % 60);

    durSec = durSec > 9 ? durSec : `0${durSec}`;



    currentTime = `${minute}:${second}`;
    fullDuration = `${durMin}:${durSec}`;
    playback.textContent = `${currentTime}/${fullDuration}`;
  };


  function listDuration(elem) {
    list = true;
    intialTime(elem);
    list = false;
  }

  document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
      playPause();
    }
  });

  function durationLeft(elem) {
    let timeLeft = elem.duration - elem.currentTime;
    let leftMin = Math.floor((timeLeft / 60)).toFixed();

    leftMin = leftMin > 9 ? leftMin : `0${leftMin}`;

    let leftSec = Math.floor(timeLeft % 60).toFixed();
    leftSec = leftSec > 9 ? leftSec : `0${leftSec}`;

    return `${leftMin}:${leftSec}`;
  };

}();