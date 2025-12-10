const searchInput = document.querySelector(".search-input input");
const videoCards = document.querySelectorAll(".video-card");

searchInput.addEventListener("keyup", () => {
    let text = searchInput.value.toLowerCase();

    videoCards.forEach(card => {
        let title = card.querySelector("h4").innerText.toLowerCase();
        let channel = card.querySelector(".video-info p").innerText.toLowerCase();

        if (title.includes(text) || channel.includes(text)) {
            card.style.display = "block";   // show card
        } else {
            card.style.display = "none";    // hide card
        }
    });
});
