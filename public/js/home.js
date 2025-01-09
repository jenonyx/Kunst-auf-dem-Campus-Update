// Select all clickable cards
//HOME - Page
// Select all clickable cards from the image carousel
const cards = document.querySelectorAll(".card.clickable");

// Select the description display element and its children
const descriptionDisplay = document.getElementById("description-display");
const titleText = document.getElementById("description-display-title");
const descriptionText = document.getElementById("description-display-text");
const descriptionImage = document.getElementById("description-display-image");

// Add click event listener to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Check if the div is already visible
    const isVisible = !descriptionDisplay.classList.contains("hidden");
    // If the clicked card's content is already displayed, hide it
    if (
      isVisible &&
      descriptionDisplay.dataset.activeCard === card.dataset.cardId
    ) {
      descriptionDisplay.classList.add("hidden"); // Hide the description display
      descriptionDisplay.dataset.activeCard = ""; // Clear active card reference
    } else {
      // Set the title, description and image of the clicked card
    //TODO: change static title, description and image to one for each card ID corresponding to the same id in JSON file
      const title = "Fotodruck";
      const description =
        "Dieser Fotodruck befindet sich neben den Treppen, die vom Forumsplatz hoch zum Eingang der Universitätsbibliothek führen. Er zeigt die Galaxie NGC 2336 und wurde von der Fakultät für Physik und Astronomie angebracht.";
      const image = "/Bilderkarussell/galaxie.jpeg";
      descriptionText.textContent = description;
      titleText.textContent = title;
      descriptionImage.src = image;
      descriptionDisplay.classList.remove("hidden"); // Show the description display
      descriptionDisplay.dataset.activeCard = card.dataset.cardId; // Set active card reference
      // On card click, scroll to the center of the description display
      descriptionDisplay.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
});
