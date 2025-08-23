let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (controlIcon.classList.contains("fa-circle-pause")) {
        song.pause();
        controlIcon.classList.remove("fa-circle-pause");
        controlIcon.classList.add("fa-circle-play");
    } else {
        song.play();
        controlIcon.classList.add("fa-circle-pause");
        controlIcon.classList.remove("fa-circle-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.add("fa-circle-pause");
    controlIcon.classList.remove("fa-circle-play");
}

controlIcon.addEventListener("click", playPause);
