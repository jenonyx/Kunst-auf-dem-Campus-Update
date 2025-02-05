// Select all cards with the 'visualizations-card' class
const cards = document.querySelectorAll(".visualizations-card");

// Loop through each card and add click listeners
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Toggle the 'fullscreen' class
    card.classList.add("fullscreen");

    // Add a close button dynamically
    if (!card.querySelector(".close-btn")) {
      const closeButton = document.createElement("button");
      closeButton.textContent = "✖";
      closeButton.classList.add("close-btn", "text-light"); // Add classes for styling
      card.appendChild(closeButton);

      // Close the card when the button is clicked
      closeButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the card click again
        card.classList.remove("fullscreen");
        closeButton.remove(); // Remove the button
      });
    }
  });
});

// Close fullscreen on Escape key alternatively
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".fullscreen").forEach((card) => {
      card.classList.remove("fullscreen");
      const closeButton = card.querySelector(".close-btn");
      if (closeButton) closeButton.remove();
    });
  }
});

// function to handle Flourish embed errors
function handleFlourishError(embedId, fallbackImageId) {
  // Hide the Flourish embed if an error occurs
  const flourishEmbed = document.getElementById(embedId);
  if (flourishEmbed) {
    flourishEmbed.style.display = "none";
  }

  // Show the fallback image instead
  const fallbackImage = document.getElementById(fallbackImageId);
  if (fallbackImage) {
    fallbackImage.style.display = "block";
  }
}
