document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playlist = document.getElementById("playlist");
    const songs = playlist.getElementsByTagName("li");
    const albumCover = document.getElementById("album-cover");
    const playPauseButton = document.getElementById("play-pause-button");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    let currentSongIndex = 0;

    // Menyimpan gambar album untuk setiap lagu
    const albumCovers = {
        "Bring Me The Horizon - Happy Song Lyrics [HQ].mp3": "ut3.jpg",
        "Bring Me The Horizon – Drown _ Lirik Lagu Terjemahan.mp3": "ut3.jpg",
        "Bring Me The Horizon - Avalanche (Official Video).mp3": "ut3.jpg",
        "Bring Me The Horizon - Throne.mp3": "ut3.jpg",
        "Bring Me The Horizon - True Friends (Official Lyric Video) (1).mp3": "ut3.jpg",
    };

    for (let i = 0; i < songs.length; i++) {
        songs[i].addEventListener("click", function () {
            currentSongIndex = i;
            playSong(this);
        });
    }

    function playSong(songElement) {
        const src = songElement.getAttribute("data-src");
        const cover = albumCovers[src];

        audio.src = src;
        albumCover.src = cover;
        audio.play();
    }

    

    prevButton.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong(songs[currentSongIndex]);
    });

    nextButton.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(songs[currentSongIndex]);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("play-pause-button");

    audio.play();

    playPauseButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = "&#10074;&#10074;"; // Pause icon
        } else {
            audio.pause();
            playPauseButton.innerHTML = "&#9658;"; // Play icon
        }
    });
});
