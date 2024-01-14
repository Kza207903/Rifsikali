const searchInput = document.getElementById("search-input");
const albums = document.querySelectorAll(".wadah"); // Assuming albums are within .wadah classes
const albumTitles = document.querySelectorAll(".wadah > p");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    albums.forEach((album) => {
        const albumTitle = album.querySelector("p").textContent.toLowerCase();
        if (albumTitle.includes(searchTerm)) {
            album.style.display = "block";
        } else {
            album.style.display = "none";
        }
    });

    albumTitles.forEach((title) => {
        const titleText = title.textContent.toLowerCase();
        if (titleText.includes(searchTerm)) {
            title.style.fontWeight = "normal";
        } else {
            title.style.fontWeight = "normal";
        }
    });
});