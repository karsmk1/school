function startSong() {
    const screen = document.querySelector(".blackscreen");
    const song = document.querySelector(".song");
    const letter = document.querySelector(".text_box");

    song.play();

    screen.classList.add("fadeout");

    setTimeout(() => {
        screen.style.display = "none";
        letter.classList.add("show");
    }, 2000);
}