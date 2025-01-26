import { getTextOrImage } from './app.js';

const allTextBoxes = document.querySelectorAll('.p-data-visualizations-text');

(async () => {
  for (let currNum = 1; currNum <= allTextBoxes.length; currNum++) {
    try {
      let textKey = `data-visualization-text-${currNum}`;
      console.log(textKey);
      const description = await getTextOrImage(textKey, 'data_visualizations');
      allTextBoxes[currNum - 1].textContent = description;
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  }
})();


// Select all cards with the 'visualizations-card' class
const cards = document.querySelectorAll('.visualizations-card');

// Loop through each card and add click listeners
cards.forEach((card) => {
  card.addEventListener('click', () => {
    // Toggle the 'fullscreen' class
    card.classList.add('fullscreen');

    // Add a close button dynamically
    if (!card.querySelector('.close-btn')) {
      const closeButton = document.createElement('button');
      closeButton.textContent = '✖';
      closeButton.classList.add('close-btn', 'text-light');
      card.appendChild(closeButton);

      // Close the card when the button is clicked
      closeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the card click again
        card.classList.remove('fullscreen');
        closeButton.remove(); // Remove the button
      });
    }
  });
});


// Close fullscreen on Escape key alternatively
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.fullscreen').forEach((card) => {
      card.classList.remove('fullscreen');
      const closeButton = card.querySelector('.close-btn');
      if (closeButton) closeButton.remove();
    });
  }
});