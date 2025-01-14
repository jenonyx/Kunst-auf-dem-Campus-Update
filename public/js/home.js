import { getTextOrImage } from './app.js';
        // Select all clickable cards
  const cards = document.querySelectorAll('.card.clickable');

  // Description display div
  const descriptionDisplay = document.getElementById('description-display');
  const titleText = document.getElementById('title-text');
  const descriptionText = document.getElementById('description-text');
  const carouselImage = document.getElementById('carouselImage');

// Add click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', async () => {
    const cardId = card.dataset.cardId; // Get the clicked card's ID
    const isVisible = !descriptionDisplay.classList.contains('hidden');

    // If the clicked card's content is already displayed, hide it
    if (isVisible && descriptionDisplay.dataset.activeCard === cardId) {
      descriptionDisplay.classList.add('hidden'); // Hide the description display
      descriptionDisplay.dataset.activeCard = ""; // Clear active card reference
    } else {
      // Fetch the title and description dynamically using the cardId
      const titleKey = `carousel-card${cardId}-header`;
      const textKey = `carousel-card${cardId}-text`;
      const imageKey = `carousel-card${cardId}-image`;

      const title = await getTextOrImage(titleKey, 'carousel');
      const description = await getTextOrImage(textKey, 'carousel');
      const imageUrl = await getTextOrImage(imageKey, 'carousel');

      // Update the display with the fetched data
      titleText.textContent = title;
      descriptionText.textContent = description;
      carouselImage.src = imageUrl;

      descriptionDisplay.classList.remove('hidden'); // Show the description display
      descriptionDisplay.dataset.activeCard = card.dataset.cardId; // Set active card reference
          // On card click, scroll to the center of the description display
          descriptionDisplay.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    });