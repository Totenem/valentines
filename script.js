document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector("button:first-of-type");
    const noButton = document.querySelector("button:last-of-type");
    const img = document.querySelector("img");
    const h1 = document.querySelector("h1");

    let noClickCount = 0;

    // Create audio element
    const audio = new Audio("glue.mp3"); // Replace with your actual MP3 file
    audio.loop = true; // Makes the song loop continuously

    // Create play button
    const playButton = document.createElement("button");
    playButton.textContent = "▶ Play Music";
    playButton.style.position = "fixed";
    playButton.style.bottom = "20px";
    playButton.style.left = "50%";
    playButton.style.transform = "translateX(-50%)";
    playButton.style.padding = "10px 20px";
    playButton.style.fontSize = "18px";
    playButton.style.backgroundColor = "#ff4d79";
    playButton.style.color = "white";
    playButton.style.border = "none";
    playButton.style.cursor = "pointer";
    document.body.appendChild(playButton);

    // Try autoplay on page load
    audio.play().catch(() => {
        console.log("Autoplay blocked, user must click play button.");
    });

    // Play music when the play button is clicked
    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none"; // Hide play button after playing
    });

    noButton.addEventListener("click", function () {
        noClickCount++;

        if (noClickCount === 1) {
            img.src = "cat-cry.jpg";
            h1.textContent = "WHY?!?!?!?!?";
        } else if (noClickCount === 2) {
            img.src = "cat-gun.jpg";
            h1.textContent = "ANSWER CORRECTLY!!!!";
        } else {
            // Enlarge the YES button by 5% each time NO is clicked after stage 2
            let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = currentSize * 1.05 + "px";
        }
    });

    yesButton.addEventListener("click", function () {
        img.src = "YES.gif";
        h1.textContent = "YEHEYYYY I LOVE YOUUU <3";

        // Hide the buttons
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });
});
