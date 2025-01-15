import { getTextOrImage } from './app.js';

// Select all buttons in the accordion
const accordionButtons = document.querySelectorAll("#accordion .btn-link");
// Function to initialize specific open cards (first and fourth)
const initializeSpecificOpenCards = async () => {
  // Array of specific card numbers that are open by default
  const openCardNumbers = [1, 4];

  for (const itemNum of openCardNumbers) {
    const textBoxSelected = document.querySelector(
      `.p-data-visualizations-text[data-visualizations-id="${itemNum}"]`
    );

    if (textBoxSelected) {
      try {
        const description = await getTextOrImage(`data-visualization-text-${itemNum}`, 'data_visualizations');
        textBoxSelected.textContent = description;
        textBoxSelected.classList.add("custom-bg-grey");
      } catch (error) {
        console.error(`Error fetching data visualization text for card ${itemNum}:`, error);
      }
    }
  }
};
// Add click event listener to each button
accordionButtons.forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();

    // Get the associated collapsible content
    const targetId = button.getAttribute("data-target");
    const content = document.querySelector(targetId);

    // Toggle the 'show' class for the clicked element
    const isNowVisible = content.classList.toggle("show");

    // Find the card number
    const itemNum = content.getAttribute("data-card-number");

    // Select the corresponding text box
    const textBoxSelected = document.querySelector(
      `.p-data-visualizations-text[data-visualizations-id="${itemNum}"]`
    );

    // Clear all text boxes before showing the text for the currently opened card
    const allTextBoxes = document.querySelectorAll('.p-data-visualizations-text');
    allTextBoxes.forEach((textBox) => {
      textBox.textContent = ''; // Clear text
      textBox.classList.remove("custom-bg-grey"); // Remove background styling
    });

    if (!textBoxSelected) {
      console.warn(`No text box found for visualization ID ${itemNum}`);
      return;
    }

    // Select all middle-row cards
    const middleRowCards = document.querySelectorAll(".middle-row .col-lg-8");

    // Handle the clicked card
    const parentCol = content.closest(".col-lg-8");

    if (isNowVisible) {
      // Fetch and display the text when the card body is shown
      const textKey = `data-visualization-text-${itemNum}`;
      try {
        const description = await getTextOrImage(textKey, 'data_visualizations');
        textBoxSelected.textContent = description;
        textBoxSelected.classList.add("custom-bg-grey");

        // Remove offset only from the clicked card
        parentCol?.classList.remove("offset-lg-2");
      } catch (error) {
        console.error("Error fetching data visualization text:", error);
      }
    } else {
      // Clear the text when the card body is collapsed
      textBoxSelected.textContent = '';
      textBoxSelected.classList.remove("custom-bg-grey");
    }

    // Ensure all other collapsible elements are closed and reset offsets
    document.querySelectorAll("#accordion .collapse").forEach((item) => {
      if (item !== content && item.classList.contains("show")) {
        item.classList.remove("show");
      }
    });

    // Reset offset-lg-2 for all middle-row cards
    middleRowCards.forEach((card) => {
      if (!card.querySelector(".collapse.show")) {
        card.classList.add("offset-lg-2");
      }
    });

    // Handle the 'last-row' specific logic
    const lastRow = content.closest(".last-row");
    if (lastRow) {
      const firstColumn = lastRow.querySelector(".first-item");
      const secondColumn = lastRow.querySelector(".second-item");

      if (isNowVisible) {
        // Swap the columns when the card is opened
        firstColumn.classList.add("order-lg-2");
        secondColumn.classList.add("order-lg-1");
      } else {
        // Reset the column order when the card is collapsed
        firstColumn.classList.remove("order-lg-2");
        secondColumn.classList.remove("order-lg-1");
      }
    }
  });
});

// Run initialization logic after the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initializeSpecificOpenCards);
